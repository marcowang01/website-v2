'use client'

import GithubIcon from '@/svg/github'
import BrowserIcon from '@/svg/browser'
import React from 'react';
import styles from './projectRecord.module.css'
import Link from 'next/link'

export default function LinkIcon({iconName, link}) {

  const iconNameToComponent = {
    github: GithubIcon,
    browser: BrowserIcon
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const IconComponent = iconNameToComponent[iconName]

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" onClick={handleOnClick}>
      <div className={styles.icon}>
        <IconComponent className={styles.icon}/>
      </div>
    </Link>
  )
}