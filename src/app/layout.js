import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar/sidebar'
import styles from './page.module.css'

import GoogleAnalytics from '@/analytics/google'
import ClarityAnalytics from '@/analytics/clarity'

const inter = Inter({ 
  weight: ['400', '600', '300', '700', '500'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Marco Wang',
  description: 'Software Engineer. Creating tools to help people learn, create and connect.',
  og: {
    title: 'Marco Wang',
    description: 'Software Engineer. Creating tools to help people learn, create and connect.',
    image: 'https://marcowang.xyz/images/og.png',
    url: 'https://marcowang.xyz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.hideOnMobile}>
          <Navbar />
        </div>
        <div className={styles.paddingContainer}>
          <main className={styles.container}>
            <div className={styles.hideOnMobile}>
              <Sidebar />
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </main>
        </div>
        <div className={styles.showOnMobile}>
          <Navbar />
        </div>
        {process.env.NODE_ENV === 'production' && (
          <>
            <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS} />
            <ClarityAnalytics />
          </>
        )}
      </body>
    </html>
  )
}
