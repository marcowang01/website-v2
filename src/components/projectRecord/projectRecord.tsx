'use client'

import Link from 'next/link'
import { Project } from '@/content/projects'

export function ProjectRecord({ project }: { project: Project }) {
  const { title, tagline, link, date, category } = project

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between items-start w-[87%] p-3 rounded-lg text-[color:rgb(var(--project-card-text-rgb))] cursor-pointer transition-all duration-250 origin-center hover:bg-[color:rgb(var(--project-card-hover-bg-rgb))] active:scale-99 md:min-w-[unset]"
    >
      <section className="flex flex-row justify-between items-center gap-2.5 w-full">
        <div className="flex flex-row items-center gap-2 font-medium text-base tracking-tight transition-all duration-200">
          {title}
        </div>
        <div className="font-light text-xs tracking-tight uppercase text-[color:rgb(var(--project-card-light-text-rgb))]">
          {date}
        </div>
      </section>
      <div className="text-red-400">
        <p>hello</p>
      </div>
      <section className="flex flex-row justify-between items-center w-full md:justify-start">
        <div className="w-fit text-sm tracking-tight leading-tight">
          {tagline}
        </div>
        <div className="w-fit text-sm tracking-tight uppercase text-[color:rgb(var(--project-card-light-text-rgb))] md:hidden">
          {category}
        </div>
      </section>
    </Link>
  )
}
