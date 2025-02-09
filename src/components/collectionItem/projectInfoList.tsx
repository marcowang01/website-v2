'use client'

import { Item } from '@/content/projects'
import Link from 'next/link'

interface ProjectInfoListProps {
  label: string
  items?: Item[]
  title: string
}

export function ProjectInfoList({ label, items, title }: ProjectInfoListProps) {
  if (!items?.length) return null

  return (
    <div className="flex flex-row items-center gap-3 text-sm tracking-[-0.02em]">
      <span className="w-[120px] shrink-0 font-normal text-project-gray-400">
        {label}
      </span>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}-${title}`}
          className="text-nowrap font-light text-project-gray-300"
        >
          {item.link ? (
            <Link
              href={item.link}
              className="transition-colors duration-300 ease-in-out hover:text-project-gray-400"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                window.open(item.link, '_blank', 'noopener,noreferrer')
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
