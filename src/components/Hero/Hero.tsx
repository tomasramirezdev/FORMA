import Image from 'next/image'
import type { SiteConfig } from '@/types/product'
import styles from './Hero.module.css'

interface HeroProps {
    config?: SiteConfig
}

export default function Hero({ config }: HeroProps) {
    const titulo = config?.hero_titulo || 'Diseño que transforma tu hogar'
    const subtitulo = config?.hero_subtitulo || 'Piezas únicas para espacios que inspiran. Calidad artesanal con diseño contemporáneo.'

    return (
        <section className={styles.hero} aria-label="Sección principal">
            <div className={styles.container}>
                {/* Left column — text */}
                <div className={styles.content}>
                    <p className={styles.label}>Bienvenidos</p>
                    <h1 className={styles.headline}>{titulo}</h1>
                    <p className={styles.subtitle}>{subtitulo}</p>
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
                            alt={titulo}
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
