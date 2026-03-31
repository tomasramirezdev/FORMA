'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Navbar.module.css'

interface NavbarProps {
    nombre?: string
    logo?: string
}

export default function Navbar({ nombre = 'FORMA', logo }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleScrollTo = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        setMenuOpen(false)

        if (pathname === '/') {
            const section = document.getElementById(sectionId)
            section?.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.location.href = `/#${sectionId}`
        }
    }

    return (
        <>
            <div className={styles.navWrapper} role="navigation" aria-label="Navegación principal">
                <nav className={`${styles.navbar} ${scrolled ? styles.navbarVisible : ''}`}>
                    {/* Logo */}
                    <a href="/" className={styles.logo} aria-label={`${nombre} — inicio`}>
                        {logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={logo}
                                alt={nombre}
                                className={styles.logoImage}
                            />
                        ) : (
                            nombre
                        )}
                    </a>

                    {/* Desktop nav */}
                    <ul className={styles.navLinks}>
                        <li>
                            <a href="/#productos" onClick={handleScrollTo('productos')} className={styles.navLink}>
                                Colección
                            </a>
                        </li>
                        <li>
                            <a href="/nosotros" className={styles.navLink}>
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/#contacto" onClick={handleScrollTo('contacto')} className={styles.navLink}>
                                Contacto
                            </a>
                        </li>
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                    >
                        <span className={styles.hamburgerLine} />
                        <span className={styles.hamburgerLine} />
                        <span className={styles.hamburgerLine} />
                    </button>
                </nav>
            </div>

            {/* Mobile menu — floating panel */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuPanel}>
                    <a href="/#productos" onClick={handleScrollTo('productos')} className={styles.mobileNavLink}>
                        Colección
                    </a>
                    <a href="/nosotros" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
                        Nosotros
                    </a>
                    <a href="/#contacto" onClick={handleScrollTo('contacto')} className={styles.mobileNavLink}>
                        Contacto
                    </a>
                </div>
            </div>
        </>
    )
}
