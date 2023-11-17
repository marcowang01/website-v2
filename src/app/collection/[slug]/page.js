import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'
import Link from 'next/link'
import styles from './page.module.css'

async function getProjectFromParams(slug) {
  const project = allProjects.find((project) => project.slugAsParams === slug)

  // console.log('slug ' + slug)
  // allProjects.map((project) => console.log('param slug ' + project.slugAsParams))

  if (!project || !project.body) {
    notFound()
  }

  return project
}


export default async function Page({params}) {

  const slug = params.slug
  const project = await getProjectFromParams(slug)

  const { title, description, date, collaborators, githubUrl, externalUrl } = project

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.date}>{date}</div>
      <Link href={'/collection'} className={styles.back}>back to collection</Link>
      {collaborators && collaborators.names.map((name, index) => (
        <div key={`collaborator-${index}`} className={styles.collaborator}>
          <Link href={collaborators.urls[index]} target="_blank" rel="noopener noreferrer">{name}</Link>
        </div>
      ))}
      <Mdx code={project.body.code} />
    </div>
  )
}
