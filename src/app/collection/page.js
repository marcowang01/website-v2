import styles from './page.module.css'
import ProjectRecord from '@/components/projectRecord/projectRecord'
import projects from '@/content/projects'

export default function Page() {
  return (
    <main className={styles.main}>
      {projects.map((showcase, index) => (
        <ProjectRecord {...showcase} key={`${showcase.title}-${index}`} />
      ))}
    </main>
  )
}
