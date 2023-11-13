import styles from './page.module.css'
import ProjectCard from '@/components/projectCard/projectCard'
import projects from '@/content/projects'

export default function Page() {
  return (
    <main className={styles.main}>
      {projects.map((showcase, index) => (
        <ProjectCard {...showcase} key={`${showcase.title}-${index}`} />
      ))}
    </main>
  )
}
