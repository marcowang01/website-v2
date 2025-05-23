import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar/sidebar'
import styles from './page.module.css'
import MarcoPolo from '@/components/marcopolo'

import GoogleAnalytics from '@/analytics/google'
import ClarityAnalytics from '@/analytics/clarity'
import UmamiAnalytics from '@/analytics/umami'

const inter = Inter({
  weight: ['400', '600', '300', '700', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Marco Wang',
  description:
    'Software Engineer. Building AI assistants at rabbit. Creating tools to help people learn, create and connect. Physics/Computer Science at Northwestern University.',
  keywords: ['Marco Wang', 'Software', 'Engineer', 'Personal Website'],
  authors: [{ name: 'Marco Wang' }],
  creator: 'Marco Wang',
  publisher: 'Marco Wang',
  metadataBase: new URL('https://marcowang.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/images/og.png',
    url: 'https://marcowang.me',
    siteName: 'Marco Wang',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles['hideOnMobile']}>
          <Navbar />
        </div>
        <div className={styles['paddingContainer']}>
          <main className={styles['container']}>
            <div className={styles['hideOnMobile']}>
              <Sidebar />
            </div>
            <div className={styles['content']}>{children}</div>
          </main>
        </div>
        <div className={styles['showOnMobile']}>
          <Navbar />
        </div>
        {process.env['VERCEL_ENV'] === 'production' && (
          <>
            <GoogleAnalytics ga_id={process.env['GOOGLE_ANALYTICS']} />
            <ClarityAnalytics />
            <UmamiAnalytics />
          </>
        )}
        <MarcoPolo />
      </body>
    </html>
  )
}
