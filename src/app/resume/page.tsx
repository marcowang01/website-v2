import styles from './page.module.css'
import expericences from '@/content/experiences'
import ResumeCard from '@/components/resumeCard/resumeCard'
import Link from 'next/link'
import DownlaodIcon from '@/svg/download'
import { trackEvent } from '@/lib/util'

export default function Resume() {
  return (
    <main className={styles['main']}>
      <Link
        className={styles['title']}
        href="/files/marco_wang_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent('resume-download-click')
        }}
      >
        Resume
        <DownlaodIcon className={styles['icon']} />
      </Link>
      <div className={styles['section']}>
        <div className={styles['sectionTitle']}>work experience</div>
        <div className={styles['experiencesContainer']}>
          {expericences.work.map((experience, index) => (
            <ResumeCard
              {...experience}
              key={`${experience.company}-${index}`}
            />
          ))}
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['sectionTitle']}>education</div>
        <div className={styles['experiencesContainer']}>
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
