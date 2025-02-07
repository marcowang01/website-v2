'use client'
import LinkIcon from './linkIcon'
import { Project } from '@/content/projects'
import { cn } from '@/lib/util'
import ArrowIcon from '@/svg/arrow'

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, link, github, date, skills } = project

  const priorityLink = link || github

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(priorityLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={cn(
        'group flex flex-col items-start justify-between',
        'md:min-h-[220px] md:w-[87%] md:p-10',
        'bg-project-gray-150 rounded-[20px]',
        'text-project-gray-400 cursor-pointer',
        'origin-center',
        'transition-all duration-200 ease-in-out',
        'md:hover:bg-project-gray-100 md:hover:scale-[1.01]',
        'md:active:scale-100',
        'min-h-[110px] w-full px-5 py-6',
        'hover:transform-none hover:bg-transparent'
      )}
      onClick={handleOnClick}
    >
      <div>
        <section className="mb-4 flex w-full flex-row items-center justify-between gap-[10px]">
          <div className="flex flex-row items-center justify-start gap-1 text-xl font-medium tracking-[-0.005em]">
            {title}
            <ArrowIcon className="h-[14px] w-[14px] opacity-0 transition-opacity duration-200 ease-in-out md:group-hover:opacity-100" />
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
        <div className="text-project-gray-300 hidden flex-row items-center justify-start gap-5 text-[13px] tracking-[-0.02em] md:flex">
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
                className="text-project-gray-300 md:hover:text-project-gray-400 transition-colors duration-150 ease-in-out"
              />
            </div>
          )}
          {link && link.length > 0 && (
            <div className="relative z-10">
              <LinkIcon
                iconName="browser"
                link={link}
                className="text-project-gray-300 md:hover:text-project-gray-400 transition-colors duration-150 ease-in-out"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
