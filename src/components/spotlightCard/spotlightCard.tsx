'use client'
import LinkIcon from './linkIcon'
import { Project } from '@/content/projects'
import { cn } from '@/lib/util'
import ArrowIcon from '@/svg/arrow'
import Image from 'next/image'
import Link from 'next/link'

export function SpotlightCard({ project }: { project: Project }) {
  const { title, description, links, date, skills, image } = project

  const priorityLink = links[0]

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(priorityLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={cn(
        'group flex flex-col-reverse items-start justify-start gap-4 md:flex-row',
        'md:min-h-[220px] md:w-[87%] md:p-10',
        'rounded-[20px] bg-project-gray-150',
        'cursor-pointer text-project-gray-400',
        'origin-center',
        'transition-all duration-200 ease-in-out',
        'md:hover:scale-[1.01]',
        'md:active:scale-100',
        'min-h-[110px] w-full px-5 py-6',
        'hover:transform-none hover:bg-project-gray-100'
      )}
      onClick={handleOnClick}
    >
      <Image
        src={image.src}
        alt={'project image'}
        width={250}
        height={150}
        quality={100}
        placeholder={image.placeholder}
        style={{ objectFit: 'cover' }}
        className="aspect-5/3 w-full shrink-0 rounded-md lg:h-[140px] lg:w-auto"
      />
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
          <section className="w-full text-base leading-[1.2] tracking-[-0.02em] md:w-[90%]">
            {description}
          </section>
        </div>
        <section className="flex w-full flex-row items-center justify-end pt-5 md:justify-between">
          <div className="hidden flex-row items-center justify-start gap-5 text-[13px] tracking-[-0.02em] text-project-gray-300 md:flex">
            {skills.map((skill, index) => (
              <div key={`${skill}-${index}`}>{skill}</div>
            ))}
          </div>
          <div className="relative z-10 flex flex-row-reverse items-center justify-end gap-3">
            {links.map((link, index) => (
              <div key={`${link}-${index}`}>
                <LinkIcon
                  link={link}
                  className="text-project-gray-300 transition-colors duration-150 ease-in-out md:hover:text-project-gray-400"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
