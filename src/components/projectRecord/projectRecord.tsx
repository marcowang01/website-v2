'use client'

import Link from 'next/link'
import { Project } from '@/content/projects'
import { useState, useRef, useEffect } from 'react'
import { CaretDownIcon } from '@/svg/caret'
import { cn } from '@/lib/util'
import Image from 'next/image'
import ArrowIcon from '@/svg/arrow'

export function ProjectRecord({
  project,
  isExpanded,
  onClick,
}: {
  project: Project
  isExpanded: boolean
  onClick: () => void
}) {
  const { title, tagline, link, date, category, github } = project
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
  // TODO: fix this for mobile
  // TODO: get rid of scroll bar entirely everywhere
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
      <div className="flex flex-col items-start justify-between">
        <section className="flex w-full flex-row items-center justify-between gap-[10px]">
          <div className="flex flex-row items-baseline gap-3 text-base font-medium leading-[1.25] tracking-[-0.005em]">
            {title}
            <div className="hidden w-fit text-[13px] font-normal uppercase tracking-[-0.02em] text-[color:rgb(var(--project-card-light-text-rgb))] md:block">
              {category}
            </div>
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

        <section className="flex w-full flex-row items-center justify-start md:justify-between">
          <div className="w-fit text-sm leading-[1.2] tracking-[-0.02em]">
            {tagline}
          </div>
          <div className="text-xs font-light uppercase tracking-[-0.02em] text-[color:rgb(var(--project-card-light-text-rgb))]">
            {date}
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
          <div className="flex flex-row justify-between gap-[10px] pt-4">
            <div className="flex w-[50%] flex-col gap-5">
              <p className="text-sm leading-[1.2]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore recusandae odit quo quas corrupti facilis animi ut, et
                laborum iste provident non accusantium optio fuga repellat amet,
                velit dolores asperiores. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Tempore recusandae odit quo quas
                corrupti facilis animi ut, et laborum iste provident non
                accusantium optio fuga repellat amet, velit dolores asperiores.
              </p>
              <div className="flex flex-row items-baseline justify-start gap-4 text-[color:rgb(var(--project-card-light-text-rgb))]">
                <div className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]">
                  <Link
                    href={link}
                    className="min-w-content text-xs leading-[1.2] tracking-[-0.02em]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.endsWith('.pdf') ? 'PAPER' : 'WEBSITE'}
                  </Link>
                  <ArrowIcon className="h-[9px] w-[9px]" />
                </div>
                {github && (
                  <div className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]">
                    <Link
                      href={github}
                      className="min-w-content text-xs leading-[1.2] tracking-[-0.02em]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </Link>
                    <ArrowIcon className="h-[9px] w-[9px]" />
                  </div>
                )}
              </div>
            </div>
            <Image
              src={'https://placehold.co/200x100.png'}
              alt={'project iamge'}
              width={200}
              height={100}
              className="shrink-0 rounded-md object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
