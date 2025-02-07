'use client'

import { Project } from '@/content/projects'
import { useState, useRef, useEffect } from 'react'
import { CaretDownIcon } from '@/svg/caret'
import { cn } from '@/lib/util'
import { ProjectDetails } from './projectDetails'

export function ProjectRecord({
  project,
  isExpanded,
  onClick,
}: {
  project: Project
  isExpanded: boolean
  onClick: () => void
}) {
  const { title, tagline, date, category } = project
  const expandedContentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [updateHeight, setUpdateHeight] = useState(false)

  useEffect(() => {
    if (expandedContentRef.current) {
      // scrollHeight accounts for non-visible content
      // including height, padding, and border (but not margin)
      setContentHeight(expandedContentRef.current.scrollHeight)
    }
  }, [setContentHeight, updateHeight])

  // TODO: extract title, paragraph styles into reusable css in global stylesheet
  // TODO: add click image to open modal
  // TODO: support and optimized for gifs
  // TODO: think of a way to add description
  // TODO: add arrow icon on spotlight
  // TODO: fix build error
  // TODO: add empty div behind image for placeholder height

  return (
    <div
      className={cn(
        'flex-start flex items-start gap-[10px]',
        'mr-[calc(11px+1rem)] min-w-[calc(100vw-22px-2rem)]',
        'px-[10px] py-[8px]',
        'rounded-[10px]',
        'text-project-gray-700',
        'cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'origin-center',
        'group',
        'md:mr-0 md:w-[87%] md:min-w-0',
        'md:px-[12px] md:py-[10px]',
        'md:hover:bg-project-gray-150',
        {
          'bg-project-gray-150': isExpanded,
        }
      )}
      onClick={onClick}
    >
      <div className="flex w-full flex-col items-start justify-between">
        <section className="flex w-full flex-row items-center justify-between gap-[10px]">
          <div className="flex flex-row items-baseline gap-3 text-base font-medium leading-[1.25] tracking-[-0.005em]">
            {title}
            <div className="text-project-gray-300 hidden w-fit text-sm font-normal uppercase tracking-[-0.025em] md:block">
              {category}
            </div>
          </div>
          <div className="text-project-gray-300 text-xs font-light uppercase tracking-[-0.02em]">
            {date}
          </div>
        </section>

        <section className="flex w-full flex-row items-center justify-between">
          <div className="w-fit text-sm leading-[1.2] tracking-[-0.02em]">
            {tagline}
          </div>
          <div className="text-project-gray-300">
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
          <ProjectDetails
            project={project}
            onImageLoad={() => setUpdateHeight(!updateHeight)}
          />
        </section>
      </div>
    </div>
  )
}
