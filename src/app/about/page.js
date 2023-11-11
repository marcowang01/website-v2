import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        About
      </div>
      <div className={styles.paragraph}>
        Hello! My name is Marco, and I am currently studying computer science and physics at Northwestern University.
      </div>
      <div>
        Here is some cool bean.
      </div>
    </main>
  )
}
