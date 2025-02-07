'use client'

import Link from 'next/link'
import ArrowIcon from '@/svg/arrow'

interface ProjectLinkProps {
  href: string
  label: string
}

export function ProjectLink({ href, label }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      className="transition-color flex flex-row items-baseline justify-start gap-1 duration-300 ease-in-out hover:text-[color:rgb(var(--project-card-text-rgb))]"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        window.open(href, '_blank', 'noopener,noreferrer')
      }}
    >
      <div className="min-w-content text-xs leading-[1.2] tracking-[-0.02em]">
        {label}
      </div>
      <ArrowIcon className="h-[9px] w-[9px]" />
    </Link>
  )
}
