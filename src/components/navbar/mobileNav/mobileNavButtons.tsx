'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import ArrowIcon from '@/svg/arrow'
import { cn } from '@/lib/util'

export default function MobileNavButton({
  name,
  link,
}: {
  name: string
  link: string
}) {
  const pathname = usePathname()
  const isExternalLink = link.includes('.com')
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (pathname && link) {
      if (pathname.toLowerCase() === link.toLowerCase()) {
        setIsSelected(true)
      } else {
        setIsSelected(false)
      }
    }
  }, [pathname, link])

  const linkProps = isExternalLink
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link href={link} {...linkProps}>
      <div
        className={cn(
          'mr-[calc(1rem+11px)] flex flex-row items-center justify-end gap-0',
          'text-2xl font-semibold leading-[1.2] tracking-[-0.02em]',
          'transition-all duration-200 ease-in-out',
          {
            'text-[#666]': isSelected,
          }
        )}
      >
        {name}
        {isExternalLink && (
          <ArrowIcon className="h-[17px] w-[17px] text-[#666]" />
        )}
      </div>
    </Link>
  )
}
