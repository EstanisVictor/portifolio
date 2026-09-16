import styles from './styles.module.scss'
import React, { useState, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {
    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()

    function activeLink(path) {
        return asPath === `/${path}` ? styles.active : styles.ancora
    }

    const handleClick = () => {
        setSidebar(prev => !prev)
    }
    
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <h1 className={styles.title}>
                        Victor R. Estanislau
                    </h1>
                    <span className={styles.subTitle}>
                        Desenvolvedor
                    </span>
                </div>
                <div className={styles.menu} onClick={handleClick}>
                    {sidebar ? <FaTimes /> : <FaBars />}
                </div>
                <nav className={`${styles.navLinks} ${sidebar ? styles.sideBarActive : ''}`}>
                    <Link href="/" onClick={handleClick} className={activeLink('')}>
                        Home
                    </Link>
                    <Link href="/projects" onClick={handleClick} className={activeLink('projects')}>
                        Projetos
                    </Link>
                    <Link href="/contact" onClick={handleClick} className={activeLink('contact')}>
                        Contatos
                    </Link>
                </nav>
            </div>
        </header>
    )
}