'use client'

import Link from 'next/link'
import { Project } from '@/content/projects'
import { useState, useRef, useEffect } from 'react'
import { CaretDownIcon } from '@/svg/caret'
import { cn } from '@/lib/util'

export function ProjectRecord({
  project,
  isExpanded,
  onClick,
}: {
  project: Project
  isExpanded: boolean
  onClick: () => void
}) {
  const { title, tagline, link, date, category } = project
  const expandedContentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (expandedContentRef.current) {
      // scrollHeight accounts for non-visible content
      // including height, padding, and border (but not margin)
      setContentHeight(expandedContentRef.current.scrollHeight)
    }
  }, [setContentHeight])

  return (
    <div
      className={cn(
        'flex flex-col justify-between items-start',
        'min-w-[calc(100vw-22px-2rem)] mr-[calc(11px+1rem)]',
        'px-[10px] py-[8px]',
        'rounded-[10px]',
        'text-[color:rgb(var(--project-card-text-rgb))]',
        'cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'origin-center',
        'group',
        'md:w-[87%] md:min-w-0 md:mr-0',
        'md:px-[12px] md:py-[10px]',
        'md:hover:bg-[color:rgb(var(--project-card-hover-bg-rgb))]'
      )}
      onClick={onClick}
    >
      <section className="flex flex-row justify-between items-center gap-[10px] w-full">
        <div className="flex flex-row items-center gap-[7px] font-medium text-base tracking-[-0.005em] leading-[1.25]">
          {title}
        </div>
        <div className="font-light text-xs tracking-[-0.02em] uppercase text-[color:rgb(var(--project-card-light-text-rgb))]">
          {date}
        </div>
      </section>

      <section className="flex flex-row justify-start md:justify-between items-center w-full">
        <div className="w-fit text-sm tracking-[-0.02em] leading-[1.2]">
          {tagline}
        </div>
        <div className="w-fit text-[13px] tracking-[-0.02em] uppercase text-[color:rgb(var(--project-card-light-text-rgb))] hidden md:block">
          {category}
        </div>
      </section>

      <CaretDownIcon
        className={cn(
          'transform transition-transform duration-300 ease-in-out',
          {
            'rotate-180': isExpanded,
          }
        )}
      />
      <section
        ref={expandedContentRef}
        style={{
          height: isExpanded ? `${contentHeight}px` : '0px',
        }}
        className={cn(
          'transition-all duration-300 ease-in-out overflow-hidden',
          {
            'opacity-100': isExpanded,
            'opacity-0': !isExpanded,
          }
        )}
      >
        <div className="py-4">expandable content</div>
      </section>
    </div>
  )
}
