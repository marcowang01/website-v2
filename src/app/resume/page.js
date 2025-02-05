import styles from './page.module.css'
import expericences from '@/content/experiences'
import ResumeCard from '@/components/resumeCard/resumeCard'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>work experience</div>
        <div className={styles.experiencesContainer}>
          {expericences.work.map((experience, index) => (
            <ResumeCard
              {...experience}
              key={`${experience.company}-${index}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>education</div>
        <div className={styles.experiencesContainer}>
          {expericences.education.map((experience, index) => (
            <ResumeCard
              {...experience}
              key={`${experience.company}-${index}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
