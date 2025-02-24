'use client'

import { Project } from '@/content/projects'
import { useState, useRef, useEffect } from 'react'
import { CaretDownIcon } from '@/svg/caret'
import { cn, trackEvent } from '@/lib/util'
import { ProjectDetails } from './projectDetails'

export function CollectionItem({
  project,
  isExpanded,
  onClick,
}: {
  project: Project
  isExpanded: boolean
  onClick: () => void
}) {
  const { title, tagline, date, category, wip } = project
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

  return (
    <div
      className={cn(
        'flex-start flex items-start gap-[10px]',
        'mr-[calc(11px+1rem)] min-w-[calc(100vw-22px-2rem)]',
        'px-[10px] py-[8px]',
        'rounded-[10px]',
        'text-project-gray-400',
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
      onClick={() => {
        onClick()
        trackEvent('collection-item-click', {
          title,
        })
      }}
    >
      <div className="flex w-full flex-col items-start justify-between">
        <section className="flex w-full flex-row items-start justify-between gap-[10px] md:items-center">
          <div className="flex flex-col items-baseline text-base font-medium leading-[1.25] tracking-[-0.005em] md:flex-row md:gap-3">
            <p className="flex flex-row items-start gap-1">
              {title}
              {wip && (
                <span className="text-xs font-light text-project-gray-300">{`WIP`}</span>
              )}
            </p>
            <div className="w-fit text-xs font-normal uppercase tracking-[-0.025em] text-project-gray-300 md:text-sm">
              {category}
            </div>
          </div>
          <div className="flex flex-col items-end text-xs font-light uppercase tracking-[-0.02em] text-project-gray-300 md:flex-row md:gap-2">
            {date}
            <CaretDownIcon
              className={cn(
                '-mr-1.5 shrink-0 transform transition-transform duration-500 ease-in-out',
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
