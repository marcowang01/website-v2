'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import Link from 'next/link'
import ArrowIcon from '@/svg/arrow'
import { trackEvent } from '@/lib/util'

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

  const applyActiveStyles = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.style.scale = '0.97'
      buttonRef.current.querySelector(`.${styles.sidebarKey}`).style.scale =
        '0.97'
      buttonRef.current.style.color = 'rgba(var(--light-btn-text-rgb), 0.9)'
    }
  }, [])

  const removeActiveStyles = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.style.scale = ''
      buttonRef.current.querySelector(`.${styles.sidebarKey}`).style.scale = ''
      buttonRef.current.style.color = ''
    }
  }, [])

  const handleKeyDown = useCallback(
    (event) => {
      if (
        event.key.toLowerCase() === shortcut.toLowerCase() &&
        !event.repeat &&
        !event.metaKey
      ) {
        applyActiveStyles()
      }
    },
    [shortcut, applyActiveStyles]
  )

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key.toLowerCase() === shortcut.toLowerCase()) {
        removeActiveStyles()
        if (isExternalLink) {
          window.open(link, '_blank', 'noopener,noreferrer')
        } else {
          router.push(link)
        }
        trackEvent('sidebar-keyboard-shortcut', {
          name,
        })
      }
    },
    [shortcut, isExternalLink, link, router, removeActiveStyles, name]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  const linkProps = isExternalLink
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  let containerClass = styles.sidebarButtonContainer
  if (isSelected) {
    containerClass += ` ${styles.selected}`
  }

  let keyClass = styles.sidebarKey

  return (
    <Link
      href={link}
      {...linkProps}
      className={containerClass}
      ref={buttonRef}
      onClick={() => {
        trackEvent('sidebar-click', {
          name,
        })
      }}
    >
      <div>
        {name} {isExternalLink && <ArrowIcon />}
      </div>
      <div className={keyClass}>{shortcut}</div>
    </Link>
  )
}
