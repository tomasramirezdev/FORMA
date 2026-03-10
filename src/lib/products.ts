import type { Product } from '@/types/product'

// TODO: Replace this static data with a fetch() to Google Sheets API
// Endpoint: GET /api/products (see src/app/api/products/route.ts)
// Google Sheets ID: process.env.GOOGLE_SHEETS_ID

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491112345678'

export function getWhatsAppUrl(product: Product): string {
    const price = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0,
    }).format(product.price)

    let targetNumber = WHATSAPP_NUMBER
    let message = `Hola! Me interesa el producto: ${product.name} (${price}). ¿Podrían darme más información?`

    if (product.whatsappMessage && product.whatsappMessage.trim() !== '') {
        // If it looks like a phone number (only digits, spaces, plus), use it as targetNumber
        const cleanMessage = product.whatsappMessage.replace(/[\s\+]/g, '')
        const isPotentialNumber = /^\d+$/.test(cleanMessage) && cleanMessage.length >= 10

        if (isPotentialNumber) {
            targetNumber = cleanMessage
        } else {
            message = product.whatsappMessage
        }
    }
    
    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`
}

export const products: Product[] = [
    {
        id: 'sillon-oslo',
        name: 'Sillón Oslo',
        category: 'sillones',
        price: 480000,
        description:
            'El Sillón Oslo es una pieza de diseño escandinavo contemporáneo, con estructura de madera maciza de roble y tapizado en lino natural color arena. Sus líneas limpias y proporciones generosas lo convierten en el centro de cualquier living. Fabricado artesanalmente con materiales de primera calidad, garantizando durabilidad y confort excepcional.',
        shortDescription:
            'Sillón de diseño escandinavo con estructura de roble y tapizado en lino natural.',
        imageUrl: '/images/products/sillon-oslo.jpg',
        imageAlt: 'Sillón Oslo — estructura roble, tapizado lino',
        whatsappMessage: 'Hola! Me interesa el Sillón Oslo. ¿Podrían darme más información?',
        inStock: true,
        featured: true,
    },
    {
        id: 'mesa-kyoto',
        name: 'Mesa Kyoto',
        category: 'mesas',
        price: 620000,
        description:
            'Mesa de centro de inspiración japonesa, con tapa de mármol travertino y base de acero negro mate. El contraste entre la calidez del mármol y la frialdad del metal crea una tensión visual única. Disponible en dos alturas: baja para living y alta para comedor. Montaje incluido.',
        shortDescription:
            'Mesa de centro con tapa de mármol travertino y base de acero negro mate.',
        imageUrl: '/images/products/mesa-kyoto.jpg',
        imageAlt: 'Mesa Kyoto — mármol travertino y acero negro',
        whatsappMessage: 'Hola! Me interesa la Mesa Kyoto. ¿Podrían darme más información?',
        inStock: true,
        featured: true,
    },
    {
        id: 'silla-bergen',
        name: 'Silla Bergen',
        category: 'sillas',
        price: 195000,
        description:
            'La Silla Bergen combina ergonomía y estética en una forma perfectamente equilibrada. Con asiento y respaldo tapizados en cuero vegano color camel y patas de madera de haya torneada, es ideal tanto para espacios de trabajo como para comedores modernos. Certificada para uso continuo de 8 horas.',
        shortDescription:
            'Silla ergonómica con tapizado en cuero vegano camel y patas de haya torneada.',
        imageUrl: '/images/products/silla-bergen.jpg',
        imageAlt: 'Silla Bergen — cuero vegano camel, patas de haya',
        whatsappMessage: 'Hola! Me interesa la Silla Bergen. ¿Podrían darme más información?',
        inStock: true,
    },
    {
        id: 'sofá-artico',
        name: 'Sofá Ártico',
        category: 'sillones',
        price: 1250000,
        description:
            'El Sofá Ártico redefine el concepto de confort modular. Con estructura de madera de pino y espuma de alta densidad (35 kg/m³), su tapizado en bouclé gris perla es suave al tacto y fácil de mantener. Diseño modular que admite hasta 5 configuraciones distintas. Cojines incluidos.',
        shortDescription:
            'Sofá modular en bouclé gris perla con espuma de alta densidad, 5 configuraciones.',
        imageUrl: '/images/products/sillon-artico.jpg',
        imageAlt: 'Sofá Ártico — bouclé gris perla, modular',
        whatsappMessage: 'Hola! Me interesa el Sofá Ártico. ¿Podrían darme más información?',
        inStock: true,
        featured: true,
    },
    {
        id: 'mesa-strom',
        name: 'Mesa Strøm',
        category: 'mesas',
        price: 890000,
        description:
            'Mesa de comedor de roble macizo con acabado natural envasado al vacío para mayor resistencia. Disponible en 4, 6 y 8 plazas. El diseño minimalista de las patas troconcocónicas en V aporta carácter sin restar ligereza visual. Fabricación local, entrega en 15 días hábiles.',
        shortDescription:
            'Mesa de comedor de roble macizo, disponible en 4, 6 y 8 plazas.',
        imageUrl: '/images/products/mesa-strom.jpg',
        imageAlt: 'Mesa Strøm — roble macizo, patas en V',
        whatsappMessage: 'Hola! Me interesa la Mesa Strøm. ¿Podrían darme más información?',
        inStock: true,
    },
    {
        id: 'silla-alma',
        name: 'Silla Alma',
        category: 'sillas',
        price: 165000,
        description:
            'La Silla Alma es una interpretación contemporánea de la silla de madera clásica. Fabricada en madera de fresno con curvado al vapor, combina resistencia estructural con una elegancia atemporal. El asiento acojinado desmontable está tapizado en tela texturada terracota. Apilable hasta 6 unidades.',
        shortDescription:
            'Silla de fresno con curvado al vapor y asiento tapizado en tela terracota. Apilable.',
        imageUrl: '/images/products/silla-alma.jpg',
        imageAlt: 'Silla Alma — fresno curvado, tapizado terracota',
        whatsappMessage: 'Hola! Me interesa la Silla Alma. ¿Podrían darme más información?',
        inStock: false,
    },
    {
        id: 'estante-duna',
        name: 'Estante Duna',
        category: 'otros',
        price: 340000,
        description:
            'Sistema de estantería modular con estética brutalista refinada. Estructura de acero carbon rolado pintado en polvo color grafito con repisas de madera de pino nudosa. Tres alturas disponibles: 90, 150 y 210 cm. Ideal para living, estudio o dormitorio. Incluye kit de encastre y niveladores.',
        shortDescription:
            'Estantería modular de acero grafito y pino nudoso. Tres alturas disponibles.',
        imageUrl: '/images/products/estante-duna.jpg',
        imageAlt: 'Estante Duna — acero grafito, pino nudoso',
        whatsappMessage: 'Hola! Me interesa el Estante Duna. ¿Podrían darme más información?',
        inStock: true,
    },
    {
        id: 'espejo-ola',
        name: 'Espejo Ola',
        category: 'otros',
        price: 215000,
        description:
            'Espejo de pared con marco de madera maciza tallada a mano con forma orgánica ondulante, inspirada en las dunas patagónicas. Disponible en acabado natural, negro y blanco. El espejo de 5mm de espesor garantiza una reflexión clara y sin distorsiones. Incluye kit de fijación para pared.',
        shortDescription:
            'Espejo con marco orgánico ondulante en madera tallada a mano. Tres acabados.',
        imageUrl: '/images/products/espejo-ola.jpg',
        imageAlt: 'Espejo Ola — marco ondulante en madera tallada',
        whatsappMessage: 'Hola! Me interesa el Espejo Ola. ¿Podrían darme más información?',
        inStock: true,
    },
]
