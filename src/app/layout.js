import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marco Wang',
  description: 'Marco Wang is a software engineer studying at Northwestern University.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
