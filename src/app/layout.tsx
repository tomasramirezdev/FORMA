import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500'],
    variable: '--font-display',
    display: 'swap',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-body',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'FORMA — Mueblería Moderna',
    description:
        'Piezas únicas para espacios que inspiran. Calidad artesanal con diseño contemporáneo. Muebles de autor en Buenos Aires.',
    keywords: ['muebles', 'diseño', 'decoración', 'hogar', 'Buenos Aires', 'FORMA'],
    openGraph: {
        title: 'FORMA — Mueblería Moderna',
        description:
            'Piezas únicas para espacios que inspiran. Calidad artesanal con diseño contemporáneo.',
        type: 'website',
        locale: 'es_AR',
        siteName: 'FORMA',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="es"
            className={`${outfit.variable} ${dmSans.variable}`}
        >
            <body>{children}</body>
        </html>
    )
}
