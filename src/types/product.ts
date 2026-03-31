export interface Product {
    id: string
    name: string
    category: 'sillones' | 'mesas' | 'sillas' | 'otros'
    price: number
    description: string
    shortDescription: string
    imageUrl: string
    imageAlt: string
    whatsappMessage: string
    inStock: boolean
    featured?: boolean
}

export interface SiteConfig {
    // Identidad
    nombre?: string
    logo?: string
    logo_alto?: number
    color?: string
    // Hero
    hero_titulo?: string
    hero_subtitulo?: string
    // Nosotros
    nosotros_titulo?: string
    nosotros_descripcion?: string
    // Contacto
    telefono?: string
    email?: string
    direccion?: string
    instagram?: string
}
