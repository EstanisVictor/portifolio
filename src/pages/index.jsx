import { Inter } from 'next/font/google'
import styles from '../../styles/home.module.scss'
import Link from 'next/link'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.infos}>
          <h1 className={styles.name}>
            Olá, sou <span className={styles.highlight}>Victor Estanislau</span>
          </h1>
          
          <div className={styles.badges}>
            <span className={styles.badge}>Desenvolvedor Full Stack</span>
            <span className={styles.badge}>Desenvolvimento Web & APIs</span>
            <span className={styles.badge}>Sistemas de Informação (IFMG)</span>
          </div>

          <div className={styles.intro}>
            <p>
              Atualmente atuo como Desenvolvedor focado em Python (Django) na <strong>Castle</strong>, uma consultoria focada em segurança. Atuo desde o meu estágio no desenvolvimento de um software voltado à gestão corporativa, capaz de gerar métricas, indicadores e fluxos sistêmicos embasados em metodologias de mercado (como NIST, ISO 27000 e CIS Controls v8).
            </p>
            <p>
              Anteriormente, atuei como freelancer na <strong>Sitcom Tecnologia da Informação</strong>, focando em integrações complexas entre plataformas, APIs governamentais e sistemas bancários usando Node.js (Express), enfileiramento de processos e PHP. Possuo base sólida em Back-end e Front-end, contando também com vivência em <strong>React, Next.js, Java Spring e bancos de dados</strong>.
            </p>
          </div>

          <div className={styles.technicalHighlight}>
            <div className={styles.highlightHeader}>
              <span className={styles.icon}>⚡</span> 
              <h3>Case de Sucesso: Escalabilidade & Cache</h3>
            </div>
            <p>
              Em projetos anteriores, resolvi gargalos de performance otimizando massivamente consultas SQL (eliminando redundâncias matemáticas) e modelando uma <strong>arquitetura de cache em camadas inspirada em hardware de processadores (L1, L2, L3)</strong>. Utilizando a memória RAM da instância como cache primário (L1), <strong>Redis</strong> como cache distribuído (L2) e o banco de dados (L3) como último contato, aumentei drasticamente a performance, a resiliência e reduzi significativamente o tempo de resposta da aplicação.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.linkProjects}>
              Ver Projetos
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.logo}>
            <img src="/images/myPhoto.jpeg" alt="Foto de Victor Estanislau" />
          </div>
          <div className={styles.glowEffect}></div>
        </div>
      </section>
    </main>
  )
}
