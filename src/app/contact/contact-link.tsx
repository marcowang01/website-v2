'use client'

import Link from 'next/link'
import styles from './page.module.css'
import ArrowIcon from '@/svg/arrow'
import { CopyIcon } from '@/svg/copy'
import { cn } from '@/lib/util'
import { useState } from 'react'

export function ContactLink({
  name,
  link,
  text,
  copy,
}: {
  name: string
  link: string
  text: string
  copy?: boolean
}) {
  const [copied, setCopied] = useState(false)

  const Content = () => (
    <div
      className={cn(
        'group flex w-full cursor-pointer items-baseline justify-between',
        'transition-opacity duration-200 md:hover:opacity-70'
      )}
    >
      <div className={styles['link']}>
        {name}
        {link && !copy && (
          <span className="">
            <ArrowIcon height={14} width={14} />
          </span>
        )}
        {link && copy && (
          <span className="">
            {copied ? (
              <span className="text-sm font-light">copied</span>
            ) : (
              <CopyIcon height={19} width={19} />
            )}
          </span>
        )}
      </div>
      <div className={styles['linkText']}>{text}</div>
    </div>
  )

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied((prev) => {
      if (!prev) {
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      }
      return true
    })
  }

  if (copy) {
    return (
      <div className={`${styles['linkHover']} w-full`} onClick={handleCopy}>
        <Content />
      </div>
    )
  }

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['linkHover']} w-full`}
      >
        <Content />
      </Link>
    )
  }

  return <Content />
}
