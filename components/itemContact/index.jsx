import React from 'react'
import styles from './styles.module.scss'

export default function ItemContact({ IconFa, LinkContact }) {
    return(
        <div className={styles.item}>
            <div className={styles.icon}>
                <IconFa />
            </div>
            <div className={styles.text}>
                <a href={LinkContact}>{LinkContact}</a>
            </div>
        </div>
    )
}