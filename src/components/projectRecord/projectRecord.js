import styles from './projectRecord.module.css'
import Link from 'next/link'

export default function ProjectRecord(project) {
  const {title, tagline, link, github, date, category, starred} = project

  const priorityLink = link || github
  const linkProps = priorityLink.includes('http')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link href={priorityLink} {...linkProps} className={styles.container}>
      <section className={styles.headerContainer}>
        <div className={styles.title}>
          {title}
          {/* <ArrowIcon /> */}
        </div>
        <div className={styles.date}>
          {date}
        </div>

      </section>
      <section className={styles.footerContainer}>
        <div className={styles.tagline}>
          {tagline}
        </div>
        <div className={styles.category}>
          {category}
        </div>
      </section>
    </Link>
  )
}
