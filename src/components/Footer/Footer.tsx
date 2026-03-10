import { WHATSAPP_NUMBER } from '@/lib/products'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}`

    return (
        <footer className={styles.footer} id="contacto">
            <div className={styles.container}>
                {/* Columns */}
                <div className={styles.columns}>
                    {/* Column 1 — Brand */}
                    <div className={styles.column}>
                        <p className={styles.logo}>
                            FOR<span className={styles.logoAccent}>M</span>A
                        </p>
                        <p className={styles.tagline}>
                            Diseño que transforma tu hogar.
                        </p>
                        <p className={styles.muted}>
                            Buenos Aires, Argentina
                        </p>
                    </div>

                    {/* Column 2 — Contact */}
                    <div className={styles.column} id="nosotros">
                        <h3 className={styles.columnTitle}>Contacto</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                Av. del Libertador 1234, Buenos Aires
                            </li>
                            <li className={styles.contactItem}>+54 9 11 1234-5678</li>
                            <li className={styles.contactItem}>hola@forma.ar</li>
                        </ul>
                    </div>

                    {/* Column 3 — Social */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Seguinos</h3>
                        <ul className={styles.socialList}>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Instagram de FORMA"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                                    </svg>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="WhatsApp de FORMA"
                                >
                                    ✦ WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} FORMA Mueblería. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
