import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from './nosotros.module.css'

export const metadata: Metadata = {
    title: 'Nosotros — FORMA Mueblería',
    description:
        'Más de 30 años diseñando y fabricando muebles de calidad artesanal en Buenos Aires. Conocé la historia de FORMA.',
}

export default function NosotrosPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>

                {/* Hero section */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <p className={styles.label}>Nuestra historia</p>
                        <h1 className={styles.headline}>
                            Tres décadas creando espacios que inspiran
                        </h1>
                    </div>
                </section>

                {/* Story section */}
                <section className={styles.story}>
                    <div className={styles.storyGrid}>

                        {/* Image wrapper */}
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/about/workshop.jpg"
                                alt="Nuestro taller en Buenos Aires — ebanistas trabajando"
                                width={600}
                                height={450}
                                className={styles.image}
                            />
                        </div>

                        {/* Text */}
                        <div className={styles.storyText}>
                            <p className={styles.labelSmall}>Quiénes somos</p>
                            <h2 className={styles.storyTitle}>
                                Artesanía, diseño y pasión por el detalle
                            </h2>
                            <p className={styles.paragraph}>
                                FORMA nació en 1993 en el corazón de Buenos Aires, cuando un
                                grupo de ebanistas y diseñadores industriales decidió unir su
                                experiencia para crear una propuesta distinta: muebles que
                                combinan la solidez de la fabricación artesanal con la
                                sensibilidad del diseño contemporáneo.
                            </p>
                            <p className={styles.paragraph}>
                                A lo largo de más de treinta años, hemos mantenido el mismo
                                compromiso que nos define desde el primer día: seleccionar los
                                mejores materiales, respetar los tiempos del oficio y entregar
                                piezas que acompañen a nuestros clientes durante generaciones.
                            </p>
                            <p className={styles.paragraph}>
                                Cada mueble que fabricamos pasa por manos expertas antes de
                                llegar al tuyo. Nuestro taller en Villa Devoto es donde el
                                roble, el fresno y el acero toman forma bajo la mirada de
                                maestros con décadas de oficio acumulado.
                            </p>
                        </div>
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
                                    desc: 'Trabajamos con maderas macizas, cueros naturales y metales de primera calidad. Sin atajos, sin materiales sintéticos donde no corresponde.',
                                },
                                {
                                    number: '02',
                                    title: 'Fabricación local',
                                    desc: 'Todo se produce en nuestro taller de Buenos Aires. Apoyamos el trabajo argentino y mantenemos el control total de cada etapa del proceso.',
                                },
                                {
                                    number: '03',
                                    title: 'Diseño atemporal',
                                    desc: 'No seguimos tendencias efímeras. Creamos piezas de diseño sobrio y equilibrado, pensadas para durar décadas sin perder vigencia.',
                                },
                                {
                                    number: '04',
                                    title: 'Atención personalizada',
                                    desc: 'Cada cliente es único. Trabajamos con vos desde la elección del material hasta la entrega, sin intermediarios ni procesos automatizados.',
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

                {/* Second image placeholder */}
                <section className={styles.imageSection}>
                    <div className={styles.imageSectionInner}>
                        <div className={styles.imageLarge} aria-hidden="true">
                            <p className={styles.imagePlaceholderText}>
                                [ Foto del equipo / showroom ]
                            </p>
                        </div>
                        <div className={styles.imageStat}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>+30</span>
                                <span className={styles.statLabel}>Años de experiencia</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>+2000</span>
                                <span className={styles.statLabel}>Piezas fabricadas</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Producción local</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
