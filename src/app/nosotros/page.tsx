import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { getConfigFromSheet } from '@/lib/google-sheets'
import styles from './nosotros.module.css'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
    const config = await getConfigFromSheet()
    const nombre = config.nombre || 'FORMA'
    return {
        title: `Nosotros — ${nombre}`,
        description: config.nosotros_descripcion || `Conocé la historia de ${nombre}.`,
    }
}

export default async function NosotrosPage() {
    const config = await getConfigFromSheet()
    const nombre = config.nombre || 'FORMA'
    const accentColor = config.color || '#B8956A'
    const titulo = config.nosotros_titulo || 'Nuestra historia'
    const descripcion = config.nosotros_descripcion || ''

    return (
        <div style={{ '--color-accent': accentColor } as React.CSSProperties}>
            <Navbar nombre={nombre} logo={config.logo} />
            <main className={styles.main}>

                {/* Hero section */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <p className={styles.label}>{titulo}</p>
                        <h1 className={styles.headline}>
                            {descripcion || `Diseño, calidad y atención personalizada`}
                        </h1>
                    </div>
                </section>

                {/* Values section */}
                <section className={styles.values}>
                    <div className={styles.valuesInner}>
                        <p className={styles.labelSmall}>Lo que nos define</p>
                        <h2 className={styles.valuesTitle}>Nuestros pilares</h2>
                        <div className={styles.pillars}>
                            {[
                                {
                                    number: '01',
                                    title: 'Materiales nobles',
                                    desc: 'Trabajamos con los mejores materiales disponibles. Sin atajos, sin compromisos en la calidad.',
                                },
                                {
                                    number: '02',
                                    title: 'Fabricación local',
                                    desc: 'Todo se produce localmente. Apoyamos el trabajo de nuestra comunidad y mantenemos control total del proceso.',
                                },
                                {
                                    number: '03',
                                    title: 'Diseño atemporal',
                                    desc: 'Creamos piezas de diseño sobrio y equilibrado, pensadas para durar décadas sin perder vigencia.',
                                },
                                {
                                    number: '04',
                                    title: 'Atención personalizada',
                                    desc: 'Cada cliente es único. Te acompañamos en todo el proceso, sin intermediarios.',
                                },
                            ].map((p) => (
                                <div key={p.number} className={styles.pillar}>
                                    <span className={styles.pillarNumber}>{p.number}</span>
                                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                                    <p className={styles.pillarDesc}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer config={config} />
        </div>
    )
}
