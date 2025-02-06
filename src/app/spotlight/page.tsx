import styles from './page.module.css'
import { ProjectCard } from '@/components/projectCard/projectCard'
import { projects } from '@/content/projects'

export default function Page() {
  // only show starred projects
  return (
    <main className={styles['main']}>
      {projects
        .filter((project) => project.showInSpotlight)
        .map((project, index) => (
          <ProjectCard project={project} key={`${project.title}-${index}`} />
        ))}
    </main>
  )
}
