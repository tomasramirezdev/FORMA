import Papa from 'papaparse'
import type { Product } from '@/types/product'

const GOOGLE_SHEET_CSV_URL = process.env.GOOGLE_SHEET_CSV_URL || ''

function formatImageUrl(url: string): string {
    if (!url) return ''
    // Convert Google Drive share link to direct link
    if (url.includes('drive.google.com')) {
        const id = url.split('/d/')[1]?.split('/')[0] || url.split('id=')[1]?.split('&')[0]
        if (id) return `https://lh3.googleusercontent.com/u/0/d/${id}`
    }
    return url
}

export async function getProductsFromSheet(): Promise<Product[]> {
    if (!GOOGLE_SHEET_CSV_URL) {
        console.warn('GOOGLE_SHEET_CSV_URL is not defined in environment variables')
        return []
    }

    try {
        const cacheBuster = `&cb=${Date.now()}`
        const response = await fetch(GOOGLE_SHEET_CSV_URL + cacheBuster, {
            cache: 'no-store',
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`)
        }

        const csvData = await response.text()
        const results = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
        })

        const products: Product[] = results.data.map((row: any) => ({
            id: row.id,
            name: row.name,
            category: row.category as Product['category'],
            price: Number(row.price),
            description: row.description,
            shortDescription: row.shortDescription,
            imageUrl: formatImageUrl(row.imageUrl),
            imageAlt: row.imageAlt,
            whatsappMessage: row.whatsappMessage,
            inStock: String(row.inStock).toLowerCase() === 'true',
            featured: String(row.featured).toLowerCase() === 'true',
        }))

        return products
    } catch (error) {
        console.error('Error fetching products from Google Sheets:', error)
        return []
    }
}
