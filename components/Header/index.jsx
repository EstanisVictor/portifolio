import styles from './styles.module.scss'
import React, { useState, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {
    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''
    }

    const handleClick = () => {
        setSidebar(prev => !prev)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <div className={styles.title}>
                        Victor Ramalho Estanislau
                    </div>
                    <div className={styles.subTitle}>
                        Portifólio Pessoal
                    </div>
                </div>
                <div className={styles.menu} onClick={handleClick}>
                    {sidebar ? <FaTimes /> : <FaBars />}
                </div>
                <nav className={`${styles.navLinks} ${sidebar && styles.sideBarActive}`}>
                    <Link className={styles.link} href="/" passHref>
                        <div className={activeLink('') ? styles.active : styles.ancora} onClick={handleClick}>
                            Home
                        </div>
                    </Link>
                    <Link className={styles.link} href="projects" passHref>
                        <div className={activeLink('projects') ? styles.active : styles.ancora} onClick={handleClick}>
                            Projetos
                        </div>
                    </Link>
                    <Link className={styles.link} href="contact" passHref>
                        <div className={activeLink('contact') ? styles.active : styles.ancora} onClick={handleClick}>
                            Contatos
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}