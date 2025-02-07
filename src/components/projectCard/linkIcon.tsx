'use client'

import GithubIcon from '@/svg/github'
import BrowserIcon from '@/svg/browser'
import React from 'react'
import styles from './projectCard.module.css'
import Link from 'next/link'

export type IconName = 'github' | 'browser'

export default function LinkIcon({
  iconName,
  link,
}: {
  iconName: IconName
  link: string
}) {
  const iconNameToComponent: Record<IconName, React.ElementType> = {
    github: GithubIcon,
    browser: BrowserIcon,
  }

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const IconComponent = iconNameToComponent[iconName]

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleOnClick}
    >
      <div className={styles['icon']}>
        <IconComponent className={styles['icon']} />
      </div>
    </Link>
  )
}
