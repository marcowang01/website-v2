import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
export default function NameItem() {
  const name = 'Marco Wang'

  return (
    <div className={`${styles.navbarItems} ${styles.semiBold} ${styles.button}`}>
        <Image
          src={'/images/dot.svg'}
          width={6}
          height={6}
          alt="dot"
          unoptimized
        />
      <Link href="/">
        {name.toUpperCase()}
      </Link>
    </div>
  )
}
