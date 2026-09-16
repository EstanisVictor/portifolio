import ItemContact from '@/components/itemContact'
import styles from './styles.module.scss'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"
import { FiMail } from 'react-icons/fi'

export default function Contact() {
    return(
        <main className={styles.container}>
            <section className={styles.content}>
                <div className={styles.headerInfo}>
                    <h1 className={styles.title}>Vamos Conversar?</h1>
                    <p className={styles.subtitle}>
                        Sinta-se livre para entrar em contato comigo através das minhas redes sociais ou email. 
                        Estou sempre aberto a novas oportunidades e colaborações.
                    </p>
                </div>

                <div className={styles.grid}>
                    <ItemContact 
                        IconFa={FaLinkedin}
                        label="LinkedIn"
                        LinkContact={"https://www.linkedin.com/in/estanisvictor"}
                    />
                    <ItemContact 
                        IconFa={FaInstagram}
                        label="Instagram"
                        LinkContact={"https://www.instagram.com/estanisvictor"}
                    />
                    <ItemContact 
                        IconFa={FaXTwitter}
                        label="X (Twitter)"
                        LinkContact={"https://twitter.com/estanisvictor"}
                    />
                    <ItemContact
                        IconFa={FaFacebook}
                        label="Facebook"
                        LinkContact={"https://www.facebook.com/victorestanislau.estanislau"}
                    />
                    <ItemContact
                        IconFa={FiMail}
                        label="Email"
                        LinkContact={"mailto:victor.estanislau1@gmail.com"}
                    />
                </div>
            </section>
        </main>
    )
}