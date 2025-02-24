'use client'

import Link from 'next/link'
import ArrowIcon from '@/svg/arrow'
import { cn, trackEvent } from '@/lib/util'

interface ProjectLinkProps {
  href: string
  label: string
  className?: string
}

export function ProjectLink({ href, label, className }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'transition-color flex flex-row flex-nowrap items-baseline justify-start gap-1 text-project-gray-300 duration-300 ease-in-out hover:text-project-gray-400',
        className
      )}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        window.open(href, '_blank', 'noopener,noreferrer')
        trackEvent('project-link-click', {
          label,
        })
      }}
    >
      <div className="min-w-content text-xs font-medium leading-[1.2] tracking-[-0.02em]">
        {label}
      </div>
      <ArrowIcon className="h-[9px] w-[9px]" />
    </Link>
  )
}
