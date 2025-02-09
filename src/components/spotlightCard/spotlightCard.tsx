'use client'
import LinkIcon from './linkIcon'
import { Project } from '@/content/projects'
import { cn } from '@/lib/util'
import ArrowIcon from '@/svg/arrow'

export function SpotlightCard({ project }: { project: Project }) {
  const { title, description, links, github, date, skills } = project

  const priorityLink = links[0] || github

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(priorityLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={cn(
        'group',
        'md:min-h-[220px] md:w-[87%] md:p-10',
        'rounded-[20px] bg-project-gray-150',
        'cursor-pointer text-project-gray-400',
        'origin-center',
        'transition-all duration-200 ease-in-out',
        'md:hover:scale-[1.01] md:hover:bg-project-gray-100',
        'md:active:scale-100',
        'min-h-[110px] w-full px-5 py-6',
        'hover:transform-none hover:bg-transparent'
      )}
      onClick={handleOnClick}
    >
      <div className="flex flex-col items-start justify-between">
        <div>
          <section className="mb-4 flex w-full flex-row items-center justify-between gap-[10px]">
            <div className="flex flex-row items-baseline justify-start gap-1 text-xl font-medium tracking-[-0.005em]">
              {title}
              <ArrowIcon className="h-[13px] w-[13px] opacity-0 transition-opacity duration-200 ease-in-out md:group-hover:opacity-100" />
            </div>
            <div className="text-xs font-light uppercase tracking-[-0.02em]">
              {date}
            </div>
          </section>
          <section className="w-full text-base leading-[1.2] tracking-[-0.02em] md:w-4/5">
            {description}
          </section>
        </div>
        <section className="flex w-full flex-row items-center justify-end pt-5 md:justify-between">
          <div className="hidden flex-row items-center justify-start gap-5 text-[13px] tracking-[-0.02em] text-project-gray-300 md:flex">
            {skills.map((skill, index) => (
              <div key={`${skill}-${index}`}>{skill}</div>
            ))}
          </div>
          <div className="relative z-10 flex flex-row items-center justify-end gap-3">
            {github && github.length > 0 && (
              <div className="relative z-10">
                <LinkIcon
                  iconName="github"
                  link={github}
                  className="text-project-gray-300 transition-colors duration-150 ease-in-out md:hover:text-project-gray-400"
                />
              </div>
            )}
            {priorityLink && priorityLink.length > 0 && (
              <div className="relative z-10">
                <LinkIcon
                  iconName="browser"
                  link={priorityLink}
                  className="text-project-gray-300 transition-colors duration-150 ease-in-out md:hover:text-project-gray-400"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
