'use client'

import { Project } from '@/content/projects'
import Image from 'next/image'
import { ProjectLink } from './projectLink'
import { ProjectInfoList } from './projectInfoList'
import { cn } from '@/lib/util'
import { useCallback } from 'react'

export function ProjectDetails({
  project,
  onImageLoad,
}: {
  project: Project
  onImageLoad: () => void
}) {
  const { title, image, links, github, collaborators, skills, description } =
    project

  const skillItems = skills.map((skill) => ({ name: skill }))

  const getLinkLabel = useCallback((link: string) => {
    if (link.endsWith('.pdf')) {
      return 'PDF'
    }
    if (link.includes('demo')) {
      return 'LIVE DEMO'
    }
    if (link.includes('youtube')) {
      return 'VIDEO'
    }
    if (link.includes('?')) {
      return link.split('?')[1]?.replace(/-/g, ' ').toUpperCase() || 'WEBSITE'
    }
    return 'WEBSITE'
  }, [])

  return (
    <>
      {/* <div className="mt-3 h-[1px] w-full bg-project-gray-200" /> */}
      <div className="flex w-full flex-col justify-between gap-[10px] pt-4 lg:flex-row">
        <Image
          src={image.src}
          alt={'project image'}
          width={250}
          height={150}
          quality={100}
          placeholder={image.placeholder}
          style={{ objectFit: 'cover' }}
          className="aspect-5/3 block w-full shrink-0 rounded-md md:w-[60%] lg:h-[150px] lg:w-auto"
          onLoad={onImageLoad}
        />
        <div
          className={cn('flex w-full flex-col md:w-[80%] lg:w-[60%]', {
            'justify-between gap-0 pt-1': description,
            'justify-end gap-8': !description,
          })}
        >
          <div className="flex flex-col gap-4">
            <div className="mt-2 flex flex-row items-baseline justify-start gap-4 font-normal text-project-gray-300 md:mt-0">
              {links.map((link) => (
                <ProjectLink
                  key={link}
                  href={link}
                  label={getLinkLabel(link)}
                />
              ))}
              {github && <ProjectLink href={github} label="GITHUB" />}
            </div>
            {description && (
              <p className="mb-2 text-sm font-light leading-[1.2] tracking-[-0.02em] text-project-gray-400">
                {description}
              </p>
            )}
          </div>

          <div className="hidden flex-col lg:flex">
            <ProjectInfoList
              label={collaborators?.label || 'Collaborated with'}
              items={collaborators?.items || []}
              title={title}
            />
            <ProjectInfoList
              label="Built using"
              items={skillItems}
              title={title}
            />
          </div>
        </div>
      </div>
    </>
  )
}
