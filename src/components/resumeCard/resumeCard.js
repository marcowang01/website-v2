import styles from './resumeCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ResumeCard(experience) {
  const { company, position, bulletpoints, date, location, skills, url } = experience

  return (
    <div className={styles.container}>
      <section className={styles.topHeader}>
          <div className={styles.company}>
            {url ? (
              <Link href={url} className={styles.companyLink} target="_blank" rel="noopener noreferrer">
                {company}
              </Link>
            ) : (
              company
            )}
          </div>
        <div className={styles.location}>
          {location}
        </div>
      </section>
      <section className={styles.bottomHeader}>
        <div className={styles.position}>
          {position}
        </div>
        <div className={styles.date}>
          {date}
        </div>
      </section>
      {bulletpoints && bulletpoints.length > 0 && <section className={styles.bulletpoints}>
        {bulletpoints.map((bulletpoint, index) => (
          <div className={styles.bulletpoint} key={`${bulletpoint}-${index}`}>
            <span className={styles.dot}>•</span>{bulletpoint}
          </div>
        ))}
        <div className={`${styles.bulletpoint} ${styles.skills}`}>
          <span className={styles.dot}>•</span>{`Skills: ${skills.join(', ')}`}
        </div>
      </section>}
    </div>
  )
}