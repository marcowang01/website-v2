import { projects } from '@/content/projects'
import { SpotlightCard } from '@/components/spotlightCard/spotlightCard'

export default function Page() {
  // only show starred projects
  return (
    <main className="mb-10 flex flex-col items-start justify-start gap-5 pt-[calc(11px+1rem)] md:pt-0">
      {projects
        .filter((project) => project.showInSpotlight)
        .map((project, index) => (
          <SpotlightCard project={project} key={`${project.title}-${index}`} />
        ))}
    </main>
  )
}
