'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import RandomGreeter from '@/components/randomGreeter/greeter'
import { CaretDownIcon } from '@/svg/caret'
import { trackEvent } from '@/lib/util'

// Define URLs as constants
const URLs = {
  rabbit: 'https://www.rabbit.tech/',
  r1: 'https://www.rabbit.tech/rabbit-r1',
  BoringCompany: 'https://www.boringcompany.com/',
  Workiva: 'https://www.workiva.com/',
  TiiltLab: 'https://tiilt.northwestern.edu/',
  betaRabbit: 'https://www.youtube.com/watch?v=aun7pGATm7Q&t=45s',
  lamPlayground:
    'https://www.rabbit.tech/research/a-peek-into-rabbit-s-progress-with-LAM-playground',
  genUI: 'https://www.rabbit.tech/support/article/gen-ui-rabbit-r1',
  magicCam: 'https://www.rabbit.tech/support/article/rabbit-r1-magic-camera',
  magicVoice: 'https://www.rabbit.tech/newsroom/elevenlabs-magic-voice',
}

const linkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default function About() {
  const [isRabbitOpen, setIsRabbitOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  // Update the height of the dropdown content when toggled
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isRabbitOpen])

  const toggleRabbit = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRabbitOpen((prev) => !prev)

    trackEvent('about-toggle', {
      isOpen: isRabbitOpen ? 'true' : 'false',
    })
  }

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
        Currently, I am building {` `}
        <span className="relative inline-block">
          <span
            onClick={toggleRabbit}
            className="inline-flex cursor-pointer select-none items-center"
          >
            <span className="flex items-center underline opacity-70 transition-[color,opacity] duration-150 ease-in-out hover:opacity-100">
              software
              <CaretDownIcon
                className={`-ml-[2px] transition-transform duration-300 ${
                  isRabbitOpen ? 'rotate-180' : ''
                }`}
                width={20}
                height={20}
              />
            </span>
          </span>
        </span>
        for AI agents at{' '}
        <span className={`${styles['paragraph']}`}>
          <Link href={URLs.rabbit} {...linkProps}>
            rabbit
          </Link>
        </span>
        .
        <div
          style={{ height: isRabbitOpen ? `${contentHeight}px` : '0px' }}
          className="overflow-hidden transition-all duration-300"
        >
          <div ref={contentRef} className={`text-md w-full pt-2`}>
            Some projects I shipped:
            <ul className="mt-2 list-disc pl-6">
              <li>
                {`A redesign of the `}
                <Link
                  href={URLs.betaRabbit}
                  {...linkProps}
                  className="about-link"
                  onClick={() => {
                    trackEvent('about-link-click', {
                      link: URLs.betaRabbit,
                    })
                  }}
                >
                  core AI assistant
                </Link>
              </li>
              <li>
                {`A general-purpose `}
                <Link
                  href={URLs.lamPlayground}
                  {...linkProps}
                  className="about-link"
                  onClick={() => {
                    trackEvent('about-link-click', {
                      link: URLs.lamPlayground,
                    })
                  }}
                >
                  computer-using agent
                </Link>
              </li>
              <li>
                {`Dynamic `}
                <Link
                  href={URLs.genUI}
                  {...linkProps}
                  className="about-link"
                  onClick={() => {
                    trackEvent('about-link-click', {
                      link: URLs.genUI,
                    })
                  }}
                >
                  generative UI
                </Link>
                {` for the `}
                <Link
                  href={URLs.r1}
                  {...linkProps}
                  className="about-link"
                  onClick={() => {
                    trackEvent('about-link-click', {
                      link: URLs.r1,
                    })
                  }}
                >
                  r1 device
                </Link>
              </li>
            </ul>
          </div>
        </div>
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
