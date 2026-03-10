'use client'

import { useState } from 'react'
import type { Product } from '@/types/product'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductModal from '@/components/ProductModal/ProductModal'
import styles from './ProductGrid.module.css'

const CATEGORIES = ['sillones', 'mesas', 'sillas', 'otros']

interface ProductGridProps {
    products: Product[]
}

export default function ProductGrid({ products: allProducts }: ProductGridProps) {
    const [activeCategory, setActiveCategory] = useState<string>('todos')
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
                    categories={CATEGORIES}
                    active={activeCategory}
                    onChange={setActiveCategory}
                />

                {/* Grid */}
                <div className={styles.grid}>
                    {filtered.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onOpenModal={setSelectedProduct}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
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
