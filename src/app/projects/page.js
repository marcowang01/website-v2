import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from '@/components/projectCard/projectCard'
import projects from '@/content/projects'

export default function Projects() {
  return (
    <main className={styles.main}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={`${project.title}-${index}`} />
      ))}
    </main>
  )
}
