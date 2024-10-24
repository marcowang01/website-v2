'use client'
import { usePathname, useRouter } from 'next/navigation'
import styles from './navbar.module.css'

function BreadCrumbItem({ fullPath, crumb, clickable }) {
  const router = useRouter()

  return (
    <div
      className={`${styles.navbarItems} ${styles.hideOnMobile} ${styles.semiBold} ${styles.tight} ${clickable ? styles.button : ''}`}
      onClick={() => {
        router.push(`/${fullPath}`)
      }}
    >
      {crumb}
    </div>
  )
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const crumbs = pathname.split('/').filter((segment) => segment)

  return (
    <>
      {crumbs.map((crumb, index) => (
        <BreadCrumbItem
          key={`${crumb}-${index}`}
          fullPath={crumbs.slice(0, index + 1).join('/')}
          crumb={crumb}
          clickable={index !== crumbs.length - 1}
        />
      ))}
    </>
  )
}
