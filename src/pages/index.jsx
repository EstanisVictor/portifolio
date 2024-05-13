import { Inter } from 'next/font/google'
import styles from '../../styles/home.module.scss'
import Link from 'next/link'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.infos}>
          <span className={styles.name}>Olá, sou Victor Estanislau</span>
          <span className={styles.function}>Desenvolvedor Full Stack</span>
          <span className={styles.function}>Tecnico de Informática - IFMG Campus Ponte Nova</span>
          <span className={styles.function}>Graduando Sistemas de Informação - IFMG Campus Ouro Branco</span>
          <span className={styles.intro}>
            Tenho expêriencia com: Next.js, React.js, TypeScript, Tailwind, Java Spring e Python. Além disso, expêriencia com bancos de dados relacionais (PostgreSQL e MySQL), não relacionais (Mongo DB) e também breve conhecimento com Docker
          </span>
          <Link className={styles.link} href="projects">
            <button className={styles.linkProjects}>
              Projetos
              <FaArrowAltCircleRight/>
              </button>
          </Link>
        </div>
        <div className={styles.logo}>
          <img src="/images/myPhoto.jpeg" />
        </div>
      </div>
    </div>
  )
}
