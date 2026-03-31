import { WHATSAPP_NUMBER } from '@/lib/products'
import type { SiteConfig } from '@/types/product'
import styles from './Footer.module.css'

interface FooterProps {
    config?: SiteConfig
}

export default function Footer({ config }: FooterProps) {
    const currentYear = new Date().getFullYear()
    const telefono = config?.telefono || WHATSAPP_NUMBER
    const waUrl = `https://wa.me/${telefono.replace(/[\s+\-()]/g, '')}`
    const rawInstagram = config?.instagram || ''
    const instagramUrl = rawInstagram
        ? rawInstagram.startsWith('http') ? rawInstagram : `https://${rawInstagram}`
        : 'https://instagram.com'
    const direccion = config?.direccion || 'Buenos Aires, Argentina'
    const email = config?.email || ''

    return (
        <footer className={styles.footer} id="contacto">
            <div className={styles.container}>
                {/* Columns */}
                <div className={styles.columns}>
                    {/* Column 1 — Brand */}
                    <div className={styles.column}>
                        <p className={styles.logo}>
                            {config?.nombre || 'FORMA'}
                        </p>
                        <p className={styles.tagline}>
                            Diseño que transforma tu hogar.
                        </p>
                    </div>

                    {/* Column 2 — Contact */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Contacto</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>{direccion}</li>
                            {email && <li className={styles.contactItem}>{email}</li>}
                        </ul>
                    </div>

                    {/* Column 3 — Social */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Seguinos</h3>
                        <ul className={styles.socialList}>
                            <li>
                                <a
                                    href={instagramUrl}
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
                        © {currentYear} {config?.nombre || 'FORMA'}. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
