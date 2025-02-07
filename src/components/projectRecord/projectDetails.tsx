'use client'

import Link from 'next/link'
import { Project } from '@/content/projects'
import Image from 'next/image'
import ArrowIcon from '@/svg/arrow'

export function ProjectDetails({
  project,
  onImageLoad,
}: {
  project: Project
  onImageLoad: () => void
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-[10px] pt-4 md:flex-row">
      <Image
        src={project.image || ''}
        alt={'project iamge'}
        width={200}
        height={100}
        quality={100}
        placeholder="empty"
        className="hidden w-full shrink-0 rounded-md object-cover md:block md:w-auto"
        onLoad={() => {
          onImageLoad()
        }}
      />
      <div className="flex w-full flex-col justify-end gap-8 md:w-[60%]">
        <div className="flex flex-row items-baseline justify-start gap-4 font-normal text-[color:rgb(var(--project-card-light-text-rgb))]">
          {project.link && (
            <Link
              href={project.link}
              className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                window.open(project.link, '_blank', 'noopener,noreferrer')
              }}
            >
              <div className="min-w-content text-xs leading-[1.2] tracking-[-0.02em]">
                {project.link.endsWith('.pdf') ? 'PAPER' : 'WEBSITE'}
              </div>
              <ArrowIcon className="h-[9px] w-[9px]" />
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                window.open(project.github, '_blank', 'noopener,noreferrer')
              }}
            >
              <div className="min-w-content text-xs leading-[1.2] tracking-[-0.02em]">
                GITHUB
              </div>
              <ArrowIcon className="h-[9px] w-[9px]" />
            </Link>
          )}
        </div>
        <div className="hidden flex-col gap-5 md:flex">
          {/* <div className="flex flex-row items-start gap-3 text-sm tracking-[-0.02em]">
        <span className="font-light text-[color:rgb(var(--project-card-light-text-rgb))]">
          {description}
        </span>
      </div> */}
          <div className="flex flex-col gap-0">
            {project.collaborators && (
              <div className="flex flex-row items-center gap-3 text-sm tracking-[-0.02em]">
                <span className="w-[120px] shrink-0 font-normal">
                  Collaborated with
                </span>
                {project.collaborators?.map((collaborator, index) => (
                  <span
                    key={`${collaborator}-${index}-${project.title}`}
                    className="font-light text-[color:rgb(var(--project-card-light-text-rgb))]"
                  >
                    {collaborator}
                  </span>
                ))}
              </div>
            )}
            {project.skills && (
              <div className="flex flex-row items-center gap-3 text-sm tracking-[-0.02em]">
                <span className="w-[120px] shrink-0 font-normal">
                  Built using
                </span>
                {project.skills?.map((skill, index) => (
                  <span
                    key={`${skill}-${index}-${project.title}`}
                    className="text-nowrap font-light text-[color:rgb(var(--project-card-light-text-rgb))]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
