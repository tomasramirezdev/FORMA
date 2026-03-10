import Image from 'next/image'
import type { Product } from '@/types/product'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    product: Product
    onOpenModal: (product: Product) => void
}

const CATEGORY_LABELS: Record<string, string> = {
    sillones: 'Sillones',
    mesas: 'Mesas',
    sillas: 'Sillas',
    otros: 'Otros',
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0,
    }).format(product.price)

    return (
        <article
            className={styles.card}
            onClick={() => onOpenModal(product)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenModal(product)}
            aria-label={`Ver detalles de ${product.name}`}
        >
            {/* Image area */}
            <div className={styles.imageWrapper}>
                <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />

                {/* Badge */}
                {product.featured && (
                    <span className={styles.badge}>Nuevo</span>
                )}
                {!product.inStock && (
                    <span className={`${styles.badge} ${styles.badgeSoldOut}`}>Sin stock</span>
                )}
            </div>

            {/* Body */}
            <div className={styles.body}>
                <p className={styles.collection}>
                    Colección {CATEGORY_LABELS[product.category] ?? product.category}
                </p>
                <h3 className={styles.name}>{product.name}</h3>

                {/* Price row */}
                <div className={styles.priceRow}>
                    <span className={styles.price}>{formattedPrice}</span>
                    <span className={styles.currency}>ARS</span>
                    <span className={styles.arrow}>→</span>
                </div>
            </div>
        </article>
    )
}
