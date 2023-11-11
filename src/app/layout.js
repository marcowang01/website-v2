import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar/sidebar'
import styles from './page.module.css'

const inter = Inter({ 
  weight: ['400', '600', '300', '700', '500'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Marco Wang',
  description: 'Marco Wang is a software engineer studying at Northwestern University.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={styles.paddingContainer}>
        <main className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
            {children}
          </div>
        </main>
        </div>
        
      </body>
    </html>
  )
}
