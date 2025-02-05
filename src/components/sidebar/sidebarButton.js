'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import Link from 'next/link'
import ArrowIcon from '@/svg/arrow'

export default function SidebarButton({ name, link, shortcut }) {
  const router = useRouter()
  const pathname = usePathname()
  const isExternalLink = link.includes('http') || link.includes('mailto')
  const [isSelected, setIsSelected] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (pathname && link) {
      if (pathname.toLowerCase() === link.toLowerCase()) {
        setIsSelected(true)
      } else {
        setIsSelected(false)
      }
    }
  }, [pathname, link])

  const simulateActiveState = () => {
    if (buttonRef.current) {
      buttonRef.current.style.scale = '0.97'
      buttonRef.current.querySelector(`.${styles.sidebarKey}`).style.scale =
        '0.97'
      buttonRef.current.style.color = 'rgba(var(--light-btn-text-rgb), 0.9)'
      buttonRef.current.querySelector(
        `.${styles.sidebarKey}`
      ).style.background = 'rgba(var(--light-key-pressed-bg-rgba))'

      // Reset after transition duration
      setTimeout(() => {
        buttonRef.current.style.scale = ''
        buttonRef.current.querySelector(`.${styles.sidebarKey}`).style.scale =
          ''
        buttonRef.current.style.color = ''
        buttonRef.current.querySelector(
          `.${styles.sidebarKey}`
        ).style.background = ''
      }, 150) // Match your --short-transition duration
    }
  }

  const handleKeyPress = (event) => {
    if (event.key.toLowerCase() === shortcut.toLowerCase()) {
      simulateActiveState()

      if (isExternalLink) {
        window.open(link, '_blank', 'noopener,noreferrer')
      } else {
        router.push(link)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  const linkProps = isExternalLink
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  let containerClass = styles.sidebarButtonContainer
  if (isSelected) {
    containerClass += ` ${styles.selected}`
  }

  let keyClass = styles.sidebarKey

  return (
    <Link href={link} {...linkProps} className={containerClass} ref={buttonRef}>
      <div>
        {name} {isExternalLink && <ArrowIcon />}
      </div>
      <div className={keyClass}>{shortcut}</div>
    </Link>
  )
}
