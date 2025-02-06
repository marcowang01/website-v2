'use client'
import styles from './projectRecord.module.css'
import Link from 'next/link'
import { Project } from '@/content/projects'

export function ProjectRecord({ project }: { project: Project }) {
  const { title, tagline, link, date, category } = project

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['container']}
    >
      <section className={styles['headerContainer']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['date']}>{date}</div>
      </section>
      <section className={styles['footerContainer']}>
        <div className={styles['tagline']}>{tagline}</div>
        <div className={styles['category']}>{category}</div>
      </section>
    </Link>
  )
}
