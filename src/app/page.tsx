import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import Footer from '@/components/Footer/Footer'
import { getProductsFromSheet } from '@/lib/google-sheets'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
    const products = await getProductsFromSheet()

    return (
        <>
            <Navbar />
            <Hero />
            <ProductGrid products={products} />
            <Footer />
        </>
    )
}
