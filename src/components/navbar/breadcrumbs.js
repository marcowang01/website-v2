'use client'
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css'

export default function Breadcrumbs() {
  const pathname = usePathname()

  return (
    <div className={`${styles.navbarItems} ${styles.hideOnMobile} ${styles.semiBold} ${styles.tight}`}>
      {pathname.toUpperCase()}
    </div>
  )
}