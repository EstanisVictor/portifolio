import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
    const [itemsApi, setItemsApi] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let abortController = new AbortController()
    
        async function getGitHubAPI() {
          try {
              const res = await fetch('https://api.github.com/users/EstanisVictor/repos', {
                  signal: abortController.signal
              })
              if (!res.ok) {
                throw new Error(res.status)
              }
              let data = await res.json()
              data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              setItemsApi(data)
          } catch(e) {
              if (e.name !== 'AbortError') console.error(e)
          } finally {
              setLoading(false)
          }
        }
    
        getGitHubAPI()
    
        return () => abortController.abort()
      }, [])

    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <h1 className={styles.pageTitle}>Meus Projetos</h1>
                {loading ? (
                    <div className={styles.loading}>Carregando projetos...</div>
                ) : (
                    <div className={styles.grid}>
                        {itemsApi.map(item => (
                          <article className={styles.card} key={item.id}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.titleProject}>{item.name.replace(/-/g, ' ')}</h2>
                                {item.language && <span className={styles.language}>{item.language}</span>}
                            </div>
                            <p className={styles.description}>
                                {item.description || 'Sem descrição definida.'}
                            </p>
                            <div className={styles.cardFooter}>
                                <span className={styles.dateCreate}>
                                    {Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'short' }).format(new Date(item.created_at))}
                                </span>
                                <a href={item.html_url} target="_blank" rel="noreferrer" className={styles.link}>
                                    <FaGithub /> Repo
                                </a>
                            </div>
                          </article>  
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}