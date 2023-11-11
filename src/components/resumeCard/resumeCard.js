import styles from './resumeCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ResumeCard(experience) {
  const { company, position, bulletpoints, date, location, skills } = experience

  return (
    <div className={styles.container}>
      <section className={styles.topHeader}>
        <div className={styles.company}>
          {company}
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
      {bulletpoints && <section className={styles.bulletpoints}>
        {bulletpoints.map((bulletpoint, index) => (
          <div className={styles.bulletpoint} key={`${bulletpoint}-${index}`}>
            • {bulletpoint}
          </div>
        ))}
      </section>}
    </div>
  )
}