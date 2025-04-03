'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { CaretDownIcon } from '@/svg/caret'
import { cn, trackEvent } from '@/lib/util'

const URLs = {
  rabbit: 'https://www.rabbit.tech/',
  r1: 'https://www.rabbit.tech/rabbit-r1',
  betaRabbit: 'https://www.youtube.com/watch?v=aun7pGATm7Q&t=45s',
  lamPlayground:
    'https://www.rabbit.tech/research/a-peek-into-rabbit-s-progress-with-LAM-playground',
  genUI: 'https://www.rabbit.tech/support/article/gen-ui-rabbit-r1',
}

const linkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export function AiAgentsDropdown({
  prefix,
  suffix,
}: {
  prefix: React.ReactNode
  suffix: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  const toggleDropdown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsOpen((prev) => !prev)

    trackEvent('about-toggle', {
      isOpen: isOpen ? 'true' : 'false',
    })
  }

  return (
    <>
      <span className="relative inline-block">
        {prefix}
        <span
          onClick={toggleDropdown}
          className="inline-flex cursor-pointer select-none items-center"
        >
          <span
            className={cn(
              'flex items-center underline opacity-70 transition-[color,opacity] duration-150 ease-in-out hover:opacity-100',
              isOpen && 'opacity-100',
            )}
          >
            AI agents
            <CaretDownIcon
              className={`-ml-[2px] transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
              width={20}
              height={20}
            />
          </span>
        </span>
      </span>
      {suffix}
      <div
        style={{ height: isOpen ? `${contentHeight}px` : '0px' }}
        className="overflow-hidden transition-all duration-300"
      >
        <div ref={contentRef} className="text-md w-full pt-2">
          Some projects I shipped at rabbit:
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
    </>
  )
}
