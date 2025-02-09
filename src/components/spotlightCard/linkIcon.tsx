'use client'

import GithubIcon from '@/svg/github'
import BrowserIcon from '@/svg/browser'
import React, { useCallback } from 'react'
import Link from 'next/link'
import { ArsElectronicaIcon } from '@/svg/ars-electronica'
import { ProjectLink } from '../collectionItem/projectLink'

export default function LinkIcon({
  link,
  className,
}: {
  link: string
  className: string
}) {
  const getLinkLabel = useCallback(() => {
    if (link.includes('github')) {
      return 'GITHUB'
    }
    if (link.includes('?')) {
      return link.split('?')[1]?.replace(/-/g, ' ').toUpperCase() || 'WEBSITE'
    }
    return 'WEBSITE'
  }, [link])

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOnClick}
        className={className}
      >
        <div className="z-50">
          <LinkIconSvg
            iconName={getLinkLabel()}
            className={'hidden md:block'}
          />
        </div>
      </Link>
      <ProjectLink
        href={link}
        label={getLinkLabel()}
        className={'flex text-project-gray-300 md:hidden'}
      />
    </>
  )
}

function LinkIconSvg({
  iconName,
  className,
}: {
  iconName: string
  className?: string
}) {
  if (iconName === 'GITHUB') {
    return <GithubIcon className={className} />
  }
  if (iconName === 'ARS ELECTRONICA') {
    return <ArsElectronicaIcon width={18} height={18} className={className} />
  }
  // default to browser icon
  return <BrowserIcon className={className} />
}
