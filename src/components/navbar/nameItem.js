import styles from './navbar.module.css'
import DotIcon from '@/svg/dot'
import Link from 'next/link'
export default function NameItem() {
  const name = "Marco Wang"

  return (
    <Link href={'/'} className={`${styles.navbarItems} ${styles.semiBold} ${styles.button}`}>
      <DotIcon width={6} height={6}/>
      {name.toUpperCase()}
    </Link>
  )
}