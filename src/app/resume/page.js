import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import expericences from '@/content/experiences'
import ResumeCard from '@/components/resumeCard/resumeCard'

export default function Resume() {
  return (
    <main className={styles.main}>
      <Link className={styles.title} href="/files/marco_wang_resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
        <Image
          src="/images/arrow.svg"
          alt="arrow"
          width={17}
          height={17}
        />
      </Link>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          education
        </div>
        <div className={styles.experiencesContainer}>
          {expericences.education.map((experience, index) => (
            <ResumeCard {...experience} key={`${experience.company}-${index}`} />
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          work experience
        </div>
        <div className={styles.experiencesContainer}>
          {expericences.work.map((experience, index) => (
            <ResumeCard {...experience} key={`${experience.company}-${index}`} />
          ))}
        </div>
      </div>
    </main>
  )
}
