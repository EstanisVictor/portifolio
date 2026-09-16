import React from 'react'
import styles from './styles.module.scss'

export default function ItemContact({ IconFa, label, LinkContact }) {
    return(
        <a href={LinkContact} target="_blank" rel="noreferrer" className={styles.item}>
            <div className={styles.icon}>
                <IconFa />
            </div>
            <div className={styles.text}>
                <span className={styles.label}>{label}</span>
                <span className={styles.linkText}>{LinkContact.replace(/(^\w+:|^)\/\//, '')}</span>
            </div>
        </a>
    )
}