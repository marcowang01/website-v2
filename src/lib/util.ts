import umami from '@/analytics/umami'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackEvent(
  eventName: string,
  eventData: Record<string, unknown> = {}
) {
  if (
    process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' &&
    typeof window !== 'undefined'
  ) {
    const gtag = (window as any).gtag || function () {}
    const umami = (window as any).umami || function () {}

    if (gtag) gtag('event', eventName, eventData)
    if (umami) umami.track(eventName, eventData)
  }
}
