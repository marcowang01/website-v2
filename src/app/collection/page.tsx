import styles from './page.module.css'
import { ProjectRecord } from '@/components/projectRecord/projectRecord'
import { projects } from '@/content/projects'

export default function Page() {
  return (
    <main className={styles['main']}>
      {projects.map((project, index) => (
        <ProjectRecord project={project} key={`${project.title}-${index}`} />
      ))}
    </main>
  )
}
