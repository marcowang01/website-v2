'use client'

import { Project } from '@/content/projects'
import Image from 'next/image'
import { ProjectLink } from './projectLink'
import { ProjectInfoList } from './projectInfoList'
import { cn } from '@/lib/util'

export function ProjectDetails({
  project,
  onImageLoad,
}: {
  project: Project
  onImageLoad: () => void
}) {
  const { title, image, link, github, collaborators, skills, description } =
    project

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
        className="hidden w-full shrink-0 rounded-md md:block md:h-[150px] md:w-auto"
        onLoad={onImageLoad}
      />
      <div
        className={cn('flex w-full flex-col md:w-[60%]', {
          'justify-between gap-0 pt-1': description,
          'justify-end gap-8': !description,
        })}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-baseline justify-start gap-4 font-normal text-[color:rgb(var(--project-card-light-text-rgb))]">
            {link && (
              <ProjectLink
                href={link}
                label={link.endsWith('.pdf') ? 'PDF' : 'WEBSITE'}
              />
            )}
            {github && <ProjectLink href={github} label="GITHUB" />}
          </div>
          {description && (
            <p className="text-project-gray-400 mb-2 text-sm font-light leading-[1.2] tracking-[-0.02em]">
              {description}
            </p>
          )}
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
