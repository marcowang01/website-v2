import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from '@/components/projectCard/projectCard'
import projects from '@/content/projects'

export default function Projects() {
  return (
    <main className={styles.main}>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </main>
  )
}
