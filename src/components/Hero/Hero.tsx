import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero} aria-label="Sección principal">
            <div className={styles.container}>
                {/* Left column — text */}
                <div className={styles.content}>
                    <p className={styles.label}>Nueva Colección 2025</p>
                    <h1 className={styles.headline}>
                        Diseño que transforma tu hogar
                    </h1>
                    <p className={styles.subtitle}>
                        Piezas únicas para espacios que inspiran. Calidad artesanal con
                        diseño contemporáneo.
                    </p>
                    <div className={styles.ctas}>
                        <a href="#productos" className={styles.btnPrimary}>
                            Ver productos
                        </a>
                        <a href="/nosotros" className={styles.btnGhost}>
                            Conocer más →
                        </a>
                    </div>
                </div>

                {/* Right column — image */}
                <div className={styles.imageSide}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/hero/hero-bookshelf.jpg"
                            alt="Estantería de diseño con objetos decorativos"
                            width={480}
                            height={600}
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
