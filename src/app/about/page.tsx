'use client'

import Link from 'next/link'
import styles from './page.module.css'
import RandomGreeter from '@/components/randomGreeter/greeter'
import { AiAgentsDropdown } from '@/components/aiAgentsDropdown/aiAgentsDropdown'
import { trackEvent } from '@/lib/util'

// Define URLs as constants
const URLs = {
  BoringCompany: 'https://www.boringcompany.com/',
  Workiva: 'https://www.workiva.com/',
  TiiltLab: 'https://tiilt.northwestern.edu/',
  exa: 'https://exa.ai/',
}

const linkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default function About() {
  return (
    <main className={styles['main']}>
      <div className={styles['title']}>
        <RandomGreeter />
      </div>
      <div className={styles['paragraph']}>
        I&apos;m Marco. I hope to build tools for people to create, learn, and
        connect.
      </div>
      <div className="mb-5 w-full text-base font-normal leading-[1.2] tracking-[-0.005em] md:w-[60%]">
        Currently, I am building software for at{` `}
        <span className={`${styles['paragraph']}`}>
          <Link href={URLs.exa} {...linkProps}>
            Exa
          </Link>
        </span>
        .
      </div>
      <div className="mb-5 w-full text-base font-normal leading-[1.2] tracking-[-0.005em] md:w-[60%]">
        Previously, I worked on <AiAgentsDropdown />
      </div>

      <div className={styles['paragraph']}>
        {`Previously, I worked at `}
        <Link
          href={URLs.BoringCompany}
          {...linkProps}
          onClick={() => {
            trackEvent('about-link-click', {
              link: URLs.BoringCompany,
            })
          }}
        >
          The Boring Company
        </Link>
        {`, `}
        <Link
          href={URLs.Workiva}
          {...linkProps}
          onClick={() => {
            trackEvent('about-link-click', {
              link: URLs.Workiva,
            })
          }}
        >
          Workiva
        </Link>
        {`, and `}
        <Link
          href={URLs.TiiltLab}
          {...linkProps}
          onClick={() => {
            trackEvent('about-link-click', {
              link: URLs.TiiltLab,
            })
          }}
        >
          NU Tiilt Lab
        </Link>
        .
      </div>
      <div className={styles['easter']}>
        <Link href="/random">👋</Link>
      </div>
    </main>
  )
}
