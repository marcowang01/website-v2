'use client'

import { Project } from '@/content/projects'
import Image from 'next/image'
import { ProjectLink } from './projectLink'
import { ProjectInfoList } from './projectInfoList'

export function ProjectDetails({
  project,
  onImageLoad,
}: {
  project: Project
  onImageLoad: () => void
}) {
  const { title, image, link, github, collaborators, skills } = project

  return (
    <div className="flex w-full flex-col justify-between gap-[10px] pt-4 md:flex-row">
      <Image
        src={image || ''}
        alt={'project image'}
        width={200}
        height={150}
        quality={100}
        placeholder="empty"
        style={{ objectFit: 'cover' }}
        className="hidden h-[150px] shrink-0 rounded-md md:block md:w-auto"
        onLoad={onImageLoad}
      />
      <div className="flex w-full flex-col justify-end gap-8 md:w-[60%]">
        <div className="flex flex-row items-baseline justify-start gap-4 font-normal text-[color:rgb(var(--project-card-light-text-rgb))]">
          {link && (
            <ProjectLink
              href={link}
              label={link.endsWith('.pdf') ? 'PAPER' : 'WEBSITE'}
            />
          )}
          {github && <ProjectLink href={github} label="GITHUB" />}
        </div>
        <div className="hidden flex-col md:flex">
          <ProjectInfoList
            label="Collaborated with"
            items={collaborators || []}
            title={title}
          />
          <ProjectInfoList
            label="Built using"
            items={skills || []}
            title={title}
          />
        </div>
      </div>
    </div>
  )
}
