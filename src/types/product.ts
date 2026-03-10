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
