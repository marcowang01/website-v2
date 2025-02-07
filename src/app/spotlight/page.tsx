import { ProjectCard } from '@/components/projectCard/projectCard'
import { projects } from '@/content/projects'

export default function Page() {
  // only show starred projects
  return (
    <main className="mb-10 flex flex-col items-start justify-start gap-5 pt-[calc(11px+1rem)] md:pt-0">
      {projects
        .filter((project) => project.showInSpotlight)
        .map((project, index) => (
          <ProjectCard project={project} key={`${project.title}-${index}`} />
        ))}
    </main>
  )
}
