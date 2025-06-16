'use client'

import Link from 'next/link'
import styles from './page.module.css'
import RandomGreeter from '@/components/randomGreeter/greeter'
import { AiAgentsDropdown } from '@/components/aiAgentsDropdown/aiAgentsDropdown'
import { trackEvent } from '@/lib/util'
import { ReactNode } from 'react'

// Define URLs as constants
const URLs = {
  BoringCompany: 'https://www.boringcompany.com/',
  Workiva: 'https://www.workiva.com/',
  TiiltLab: 'https://tiilt.northwestern.edu/',
  exa: 'https://exa.ai/',
  websets: 'https://websets.exa.ai/',
  rabbit: 'https://www.rabbit.tech/',
  sierra: 'https://www.sierra.ai/',
}

// Helper component for external links
function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline opacity-70 transition-[color,opacity] duration-150 ease-in-out hover:opacity-100 ${className}`}
      onClick={() => {
        trackEvent('about-link-click', { link: href })
      }}
    >
      {children}
    </Link>
  )
}

export default function About() {
  return (
    <main className={styles['main']}>
      <div className="mb-5 text-2xl font-semibold">
        <RandomGreeter />
      </div>
      <div className={styles['paragraph']}>
        I&apos;m Marco. I hope to build tools for people to create, learn, and
        connect.
      </div>
      <div className="mb-5 w-full text-base font-normal leading-[1.2] tracking-[-0.005em] md:w-[60%]">
        {`Currently, I am building AI agents at `}
        <span className={`${styles['paragraph']}`}>
          <ExternalLink href={URLs.sierra}>Sierra</ExternalLink>
        </span>
        .
      </div>
      <div className="mb-5 w-full text-base font-normal tracking-[-0.005em] md:w-[60%]">
        <AiAgentsDropdown
          prefix={`Previously, I worked on `}
          suffix={
            <>
              {`for the r1 device at `}
              <ExternalLink href={URLs.rabbit}>rabbit</ExternalLink>
              {`. I also had the opportunity to work at `}
              <ExternalLink href={URLs.exa}>Exa</ExternalLink>
              {`, `}
              <ExternalLink href={URLs.BoringCompany}>
                The Boring Company
              </ExternalLink>
              {`, `}
              <ExternalLink href={URLs.Workiva}>Workiva</ExternalLink>
              {`, and `}
              <ExternalLink href={URLs.TiiltLab}>NU Tiilt Lab</ExternalLink>.
            </>
          }
        />
      </div>
      <div className={styles['easter']}>
        <Link href="/random">👋</Link>
      </div>
    </main>
  )
}
