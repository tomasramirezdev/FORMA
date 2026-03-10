'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { Product } from '@/types/product'
import { getWhatsAppUrl } from '@/lib/products'
import styles from './ProductModal.module.css'

interface ProductModalProps {
    product: Product | null
    onClose: () => void
}

const CATEGORY_LABELS: Record<string, string> = {
    sillones: 'Sillones',
    mesas: 'Mesas',
    sillas: 'Sillas',
    otros: 'Otros',
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    // Disable body scroll when open
    useEffect(() => {
        if (product) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [product])

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [onClose])

    if (!product) return null

    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0,
    }).format(product.price)

    const waUrl = getWhatsAppUrl(product)

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle de ${product.name}`}
        >
            <div
                className={styles.panel}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    ×
                </button>

                {/* Content */}
                <div className={styles.content}>
                    {/* Left — image */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src={product.imageUrl}
                            alt={product.imageAlt}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>

                    {/* Right — details */}
                    <div className={styles.details}>
                        <p className={styles.category}>
                            {CATEGORY_LABELS[product.category] ?? product.category}
                        </p>

                        <h2 className={styles.name}>{product.name}</h2>

                        <p className={styles.price}>{formattedPrice}</p>

                        {!product.inStock && (
                            <span className={styles.outOfStock}>Sin stock</span>
                        )}

                        <p className={styles.description}>{product.description}</p>

                        <div className={styles.ctaArea}>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnWhatsApp}
                                aria-label={`Consultar por WhatsApp sobre ${product.name}`}
                            >
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
