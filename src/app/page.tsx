import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import Footer from '@/components/Footer/Footer'
import { getProductsFromSheet, getConfigFromSheet } from '@/lib/google-sheets'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
    const [{ products, error }, config] = await Promise.all([
        getProductsFromSheet(),
        getConfigFromSheet(),
    ])

    const accentColor = config.color || '#B8956A'

    return (
        <div style={{ '--color-accent': accentColor } as React.CSSProperties}>
            <Navbar nombre={config.nombre} logo={config.logo} />
            <Hero config={config} />
            <ProductGrid products={products} error={error} />
            <Footer config={config} />
        </div>
    )
}
