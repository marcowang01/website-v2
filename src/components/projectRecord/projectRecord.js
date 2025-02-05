'use client'
import ArrowIcon from '@/svg/arrow'
import styles from './projectRecord.module.css'
import Link from 'next/link'

export default function ProjectRecord(project) {
  const { title, tagline, link, github, date, category, starred } = project

  const priorityLink = link || github

  return (
    <Link
      href={priorityLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <section className={styles.headerContainer}>
        <div className={styles.title}>
          {title}
          {/* <ArrowIcon /> */}
        </div>
        <div className={styles.date}>{date}</div>
      </section>
      <section className={styles.footerContainer}>
        <div className={styles.tagline}>{tagline}</div>
        <div className={styles.category}>{category}</div>
      </section>
    </Link>
  )
}
