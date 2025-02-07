'use client'

import Link from 'next/link'
import { Project } from '@/content/projects'
import { useState, useRef, useEffect } from 'react'
import { CaretDownIcon } from '@/svg/caret'
import { cn } from '@/lib/util'
import Image from 'next/image'
import ArrowIcon from '@/svg/arrow'
import ProgressiveImage from '../projectCard/progressiveImage'

export function ProjectRecord({
  project,
  isExpanded,
  onClick,
}: {
  project: Project
  isExpanded: boolean
  onClick: () => void
}) {
  const {
    title,
    tagline,
    link,
    date,
    category,
    github,
    collaborators,
    image,
    skills,
    description,
  } = project
  const expandedContentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (expandedContentRef.current) {
      // scrollHeight accounts for non-visible content
      // including height, padding, and border (but not margin)
      setContentHeight(expandedContentRef.current.scrollHeight)
    }
  }, [setContentHeight])

  // TODO: extract title, paragraph styles into reusable css in global stylesheet
  // TODO: potentially add more info to the card on mobile
  // TODO: add click image to open modal
  // TODO: support and optimized for gifs
  // TODO: make color into gray-something
  // TODO: think of a way to add description
  // TODO: add arrow icon on spotlight
  // TODO: add images

  return (
    <div
      className={cn(
        'flex-start flex items-start gap-[10px]',
        'mr-[calc(11px+1rem)] min-w-[calc(100vw-22px-2rem)]',
        'px-[10px] py-[8px]',
        'rounded-[10px]',
        'text-[color:rgb(var(--project-card-text-rgb))]',
        'cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'origin-center',
        'group',
        'md:mr-0 md:w-[87%] md:min-w-0',
        'md:px-[12px] md:py-[10px]',
        'md:hover:bg-[color:rgb(var(--project-card-hover-bg-rgb))]',
        {
          'bg-[color:rgb(var(--project-card-hover-bg-rgb))]': isExpanded,
        }
      )}
      onClick={onClick}
    >
      <div className="flex w-full flex-col items-start justify-between">
        <section className="flex w-full flex-row items-center justify-between gap-[10px]">
          <div className="flex flex-row items-baseline gap-3 text-base font-medium leading-[1.25] tracking-[-0.005em]">
            {title}
            <div className="hidden w-fit text-sm font-normal uppercase tracking-[-0.02em] text-[color:rgb(var(--project-card-light-text-rgb))] md:block">
              {category}
            </div>
          </div>
          <div className="text-xs font-light uppercase tracking-[-0.02em] text-[color:rgb(var(--project-card-light-text-rgb))]">
            {date}
          </div>
        </section>

        <section className="flex w-full flex-row items-center justify-between">
          <div className="w-fit text-sm leading-[1.2] tracking-[-0.02em]">
            {tagline}
          </div>
          <div className="text-[color:rgb(var(--project-card-light-text-rgb))]">
            <CaretDownIcon
              className={cn(
                'shrink-0 transform transition-transform duration-500 ease-in-out',
                {
                  'rotate-180': isExpanded,
                }
              )}
              width={18}
              height={18}
            />
          </div>
        </section>
        <section
          ref={expandedContentRef}
          style={{
            height: isExpanded ? `${contentHeight}px` : '0px',
            scrollbarGutter: 'auto',
          }}
          className={cn(
            'w-full overflow-hidden transition-all duration-300 ease-in-out',
            {
              'opacity-100': isExpanded,
              'opacity-0': !isExpanded,
            }
          )}
        >
          <div className="flex w-full flex-col justify-between gap-[10px] pt-4 md:flex-row">
            <div className="flex w-full flex-col justify-between gap-5 md:w-[60%]">
              <div className="flex flex-row items-baseline justify-start gap-4 font-normal text-[color:rgb(var(--project-card-light-text-rgb))]">
                {link && (
                  <Link
                    href={link}
                    className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]"
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      window.open(link, '_blank', 'noopener,noreferrer')
                    }}
                  >
                    <div className="min-w-content text-xs leading-[1.2] tracking-[-0.02em]">
                      {link.endsWith('.pdf') ? 'PAPER' : 'WEBSITE'}
                    </div>
                    <ArrowIcon className="h-[9px] w-[9px]" />
                  </Link>
                )}
                {github && (
                  <Link
                    href={github}
                    className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]"
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      window.open(github, '_blank', 'noopener,noreferrer')
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
                  {collaborators && (
                    <div className="flex flex-row items-center gap-3 text-sm tracking-[-0.02em]">
                      <span className="w-[120px] shrink-0 font-normal">
                        Collaborated with
                      </span>
                      {collaborators?.map((collaborator, index) => (
                        <span
                          key={`${collaborator}-${index}-${title}`}
                          className="font-light text-[color:rgb(var(--project-card-light-text-rgb))]"
                        >
                          {collaborator}
                        </span>
                      ))}
                    </div>
                  )}
                  {skills && (
                    <div className="flex flex-row items-center gap-3 text-sm tracking-[-0.02em]">
                      <span className="w-[120px] shrink-0 font-normal">
                        Built using
                      </span>
                      {skills?.map((skill, index) => (
                        <span
                          key={`${skill}-${index}-${title}`}
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
            <Image
              src={image || ''}
              alt={'project iamge'}
              width={200}
              height={100}
              quality={100}
              className="w-full shrink-0 rounded-md object-cover md:w-auto"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
