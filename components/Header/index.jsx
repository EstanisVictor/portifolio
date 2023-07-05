import styles from './styles.module.scss'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {
    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''
    }

    const showSidebar = () => setSidebar(!sidebar)

    const handleClick = () => {
        setSidebar(!sidebar);
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
                <div className={styles.menu}>
                    <FaBars onClick={showSidebar} />
                </div>
                <nav className={styles.navLinks}>
                    <div className={styles.closeSideBar}>
                        <FaTimes onClick={showSidebar} />
                    </div>
                    <Link className={styles.link} href="/" passHref>
                        <div className={activeLink('') ? styles.active : styles.ancora} onClick={showSidebar}>
                            Home
                        </div>
                    </Link>
                    <Link className={styles.link} href="projects" passHref>
                        <div className={activeLink('projects') ? styles.active : styles.ancora} onClick={showSidebar}>
                            Projetos
                        </div>
                    </Link>
                    <Link className={styles.link} href="contact" passHref>
                        <div className={activeLink('contact') ? styles.active : styles.ancora} onClick={showSidebar}>
                            Contatos
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}