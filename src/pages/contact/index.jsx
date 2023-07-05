import ItemContact from '@/components/itemContact'
import styles from './styles.module.scss'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <ItemContact 
                    IconFa={FaLinkedin}
                    LinkContact={"https://www.linkedin.com/in/estanisvictor"}
                />
                <ItemContact 
                    IconFa={FaInstagram}
                    LinkContact={"https://www.instagram.com/estanisvictor"}
                />
                <ItemContact 
                    IconFa={FaTwitter}
                    LinkContact={"https://twitter.com/estanisvictor"}
                />
                <ItemContact
                    IconFa={FaFacebook}
                    LinkContact={"https://www.facebook.com/victorestanislau.estanislau"}
                />
        </div>
    </div>
    )
}