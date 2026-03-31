import Papa from 'papaparse'
import type { Product, SiteConfig } from '@/types/product'

const PRODUCTS_URL = process.env.GOOGLE_SHEET_CSV_URL || ''
const CONFIG_URL = process.env.GOOGLE_SHEET_CONFIG_URL || ''

// Converts a Google Drive share link to a direct image URL
// Returns empty string for invalid/relative URLs so they get filtered out
function formatImageUrl(url: string): string {
    if (!url) return ''
    if (url.includes('drive.google.com')) {
        const id = url.split('/d/')[1]?.split('/')[0] || url.split('id=')[1]?.split('&')[0]
        if (id) return `https://lh3.googleusercontent.com/u/0/d/${id}`
    }
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('/')) {
        return ''
    }
    return url
}

// Normalizes a string value: trim spaces, lowercase
function normalize(value: unknown): string {
    return String(value ?? '').trim().toLowerCase()
}

// Reads a field supporting both Spanish and English column names
function field(row: any, spanish: string, english: string): string {
    return String(row[spanish] ?? row[english] ?? '').trim()
}

const VALID_CATEGORIES = ['sillones', 'mesas', 'sillas', 'otros'] as const

export async function getProductsFromSheet(): Promise<{ products: Product[]; error: boolean }> {
    if (!PRODUCTS_URL) {
        console.warn('GOOGLE_SHEET_CSV_URL no está definida en las variables de entorno')
        return { products: [], error: true }
    }

    try {
        const response = await fetch(`${PRODUCTS_URL}&cb=${Date.now()}`, { cache: 'no-store' })

        if (!response.ok) {
            throw new Error(`Error al leer el Sheet: ${response.statusText}`)
        }

        const csvData = await response.text()
        const results = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (h) => h.trim().toLowerCase(),
        })

        const products: Product[] = (results.data as any[])
            .map((row, index) => {
                // Support Spanish column names (nombre, categoria...) with English fallback
                // All keys are lowercased by transformHeader
                const name = field(row, 'nombre', 'name')
                const rawCategory = normalize(field(row, 'categoria', 'category'))
                const category = (
                    VALID_CATEGORIES.includes(rawCategory as any) ? rawCategory : 'otros'
                ) as Product['category']
                const price = Number(field(row, 'precio', 'price')) || 0
                const description = field(row, 'descripcion', 'description')
                const shortDescription = field(row, 'descripcioncorta', 'shortdescription')
                const imageUrl = formatImageUrl(field(row, 'imagen', 'imageurl'))
                const imageAlt = field(row, 'imagenalt', 'imagealt') || name
                const whatsappMessage = field(row, 'telefono', 'whatsappmessage')
                const inStock = normalize(field(row, 'disponible', 'instock')) !== 'false'
                const featured = normalize(field(row, 'destacado', 'featured')) === 'true'
                const id = field(row, 'id', 'id') || String(index + 1)

                return { id, name, category, price, description, shortDescription, imageUrl, imageAlt, whatsappMessage, inStock, featured }
            })
            .filter((p) => p.name && p.imageUrl) // skip rows without name or image

        return { products, error: false }
    } catch (error) {
        console.error('Error al obtener productos desde Google Sheets:', error)
        return { products: [], error: true }
    }
}

export async function getConfigFromSheet(): Promise<SiteConfig> {
    if (!CONFIG_URL) return {}

    try {
        const response = await fetch(`${CONFIG_URL}&cb=${Date.now()}`, { cache: 'no-store' })
        if (!response.ok) return {}

        const csvData = await response.text()
        const results = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (h) => h.trim().toLowerCase(),
        })

        // Config sheet: first row contains the values, columns are the keys
        const row = results.data[0] as any
        if (!row) return {}

        const str = (key: string) => String(row[key] ?? '').trim()

        return {
            nombre:               str('nombre'),
            logo:                 formatImageUrl(str('logo')),
            logo_alto:            Number(str('logo_alto')) || undefined,
            color:                str('color'),
            hero_titulo:          str('hero_titulo'),
            hero_subtitulo:       str('hero_subtitulo'),
            nosotros_titulo:      str('nosotros_titulo'),
            nosotros_descripcion: str('nosotros_descripcion'),
            telefono:             str('telefono'),
            email:                str('email'),
            direccion:            str('direccion'),
            instagram:            str('instagram'),
        }
    } catch {
        return {}
    }
}
