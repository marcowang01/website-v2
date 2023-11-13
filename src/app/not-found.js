import Link from 'next/link'
import styles from './page.module.css'
 
export default function NotFound() {
  return (
    <div>
      <div className={styles.title}>404 Not Found</div>
      <div className={styles.paragraph}>
        <Link href="/about">Click to return Home</Link>
      </div>
    </div>
  )
}