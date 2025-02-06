'use client'

import Link from 'next/link'
import { Project } from '@/content/projects'
import { useState } from 'react'
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

  return (
    <div
      className={cn(
        'flex flex-col justify-between items-start',
        'min-w-[calc(100vw-22px-2rem)] mr-[calc(11px+1rem)]',
        'px-[10px] py-[8px]',
        'rounded-[10px]',
        'text-[color:rgb(var(--project-card-text-rgb))]',
        'cursor-pointer',
        'transition-[background-color_0.1s_ease-in-out,transform_0.3s_ease-in-out]',
        'origin-center',
        'group',
        'md:w-[87%] md:min-w-0 md:mr-0',
        'md:px-[12px] md:py-[10px]',
        'md:hover:bg-[color:rgb(var(--project-card-hover-bg-rgb))]'
      )}
      onClick={onClick}
    >
      <section className="flex flex-row justify-between items-center gap-[10px] w-full">
        <div className="flex flex-row items-center gap-[7px] font-medium text-base tracking-[-0.005em] leading-[1.25] transition duration-200">
          {title}
          {/*
            If you include an SVG icon here you can apply the following classes
            so that on desktop (md+) the icon translates on container hover:
            className="w-[12px] h-[12px] fill-[color:rgb(var(--project-card-text-rgb))] transition-transform duration-[150ms] ease-in-out md:group-hover:translate-x-[2px] md:group-hover:-translate-y-[2px]"
          */}
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
        className={cn('transform transition-transform duration-300', {
          'rotate-180': isExpanded,
        })}
      />
      <section
        className={cn(`
            transition-[opacity_0.1s_ease-in-out,max-height_0.3s_ease-in-out]
            ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `)}
      >
        expandable content
      </section>
    </div>
  )
}
