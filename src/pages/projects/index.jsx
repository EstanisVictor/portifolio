import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export default function Projects() {
    const [itemsApi, setItemsApi] = useState([])

    useEffect(() => {
        let abortController = new AbortController(); 
    
        function getGitHubAPI() {
          fetch('https://api.github.com/users/EstanisVictor/repos')
          .then(async res => {
            if (!res.ok) {
              throw new Error(res.status)
            }
            var data = await res.json()
            setItemsApi(data)
          })
          .catch(e => console.log(e))
        }
    
        getGitHubAPI()
    
        return () => abortController.abort();  
      }, [])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.colum}>
                    {itemsApi.map(item => (
                      <li className={styles.line} key={item.id}>
                        <strong className={styles.titleProject}>{item.name}</strong>
                        <span className={styles.url}>URL: {item.url}</span>
                        <span className={styles.dataCreate}>
                            Data Criação: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
                        </span>
                      </li>  
                    ))}
                </ul>
            </div>
        </div>
    )
}