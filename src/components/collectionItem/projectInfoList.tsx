'use client'

import { Item } from '@/content/projects'
import { cn, trackEvent } from '@/lib/util'
import Link from 'next/link'

interface ProjectInfoListProps {
  label?: string
  items?: Item[]
  title: string
  className?: string
}

export function ProjectInfoList({
  label,
  items,
  title,
  className,
}: ProjectInfoListProps) {
  if (!items?.length) return null

  return (
    <div
      className={cn(
        'flex flex-row items-center gap-3 text-[13px] font-light tracking-[-0.02em]',
        className
      )}
    >
      {label && (
        <span className="w-[120px] shrink-0 text-project-gray-400">
          {label}
        </span>
      )}
      {items.map((item, index) => (
        <span
          key={`${item}-${index}-${title}`}
          className="text-nowrap font-light tracking-[-0.02em] text-project-gray-300"
        >
          {item.link ? (
            <Link
              href={item.link}
              className="transition-colors duration-300 ease-in-out hover:text-project-gray-400"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                window.open(item.link, '_blank', 'noopener,noreferrer')
                trackEvent('project-info-list-link-click', {
                  label: item.name,
                })
              }}
            >
              {item.name}
            </Link>
          ) : (
            <>{item.name}</>
          )}
        </span>
      ))}
    </div>
  )
}
