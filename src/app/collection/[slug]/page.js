import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'

async function getProjectFromParams(slug) {
  const project = allProjects.find((project) => project.slugAsParams === slug)

  // console.log('slug ' + slug)
  // allProjects.map((project) => console.log('param slug ' + project.slugAsParams))

  if (!project) {
    notFound
  }

  return project
}


export default async function Page({params}) {

  const slug = params.slug
  const project = await getProjectFromParams(slug)

  return (
    <div>
      <Mdx code={project.body.code} />
    </div>
  )
}
