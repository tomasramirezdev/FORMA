'use client'

import { useState, useEffect } from 'react'
import type { Product } from '@/types/product'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductModal from '@/components/ProductModal/ProductModal'
import { useUI } from '@/context/UIContext'
import styles from './ProductGrid.module.css'

interface ProductGridProps {
    products: Product[]
    error?: boolean
}

export default function ProductGrid({ products: allProducts, error }: ProductGridProps) {
    const [activeCategory, setActiveCategory] = useState<string>('todos')

    const categories = [...new Set(allProducts.map((p) => p.category))]
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const { setIsProductOpen } = useUI()

    // Sync modal state with UIContext
    useEffect(() => {
        setIsProductOpen(!!selectedProduct)
    }, [selectedProduct, setIsProductOpen])

    const filtered =
        activeCategory === 'todos'
            ? allProducts
            : allProducts.filter((p) => p.category === activeCategory)

    return (
        <section id="productos" className={styles.section} aria-label="Nuestra colección">
            <div className={styles.container}>
                {/* Section header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestra Colección</h2>
                    <p className={styles.subtitle}>
                        Cada pieza diseñada para transformar tu espacio.
                    </p>
                </div>

                {/* Category filter */}
                <CategoryFilter
                    categories={categories}
                    active={activeCategory}
                    onChange={setActiveCategory}
                />

                {/* Error state */}
                {error && allProducts.length === 0 && (
                    <div className={styles.empty}>
                        <p>No se pudieron cargar los productos en este momento.</p>
                        <p>Por favor revisá tu conexión o intentá más tarde.</p>
                    </div>
                )}

                {/* Grid */}
                {!error && (
                    <div className={styles.grid}>
                        {filtered.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onOpenModal={setSelectedProduct}
                            />
                        ))}
                    </div>
                )}

                {!error && filtered.length === 0 && (
                    <div className={styles.empty}>
                        <p>No hay productos en esta categoría.</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    )
}
