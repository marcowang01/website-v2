import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        About
      </div>
      <div className={styles.paragraph}>
        Hello! My name is Marco, welcome to my website!
      </div>
      <div className={styles.paragraph}>
        I study CS and Physics at Northwestern University.
      </div>
    </main>
  )
}
