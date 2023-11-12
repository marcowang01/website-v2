import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        About
      </div>
      <div className={styles.paragraph}>
        Hi! I am a software engineer, currently studying CS and Physics at Northwestern University.
        I am interested in building software tools that helpe people create, learn, and connect.
      </div>
      <div className={styles.paragraph}>
        Previously, I worked at The Boring Company, Workiva, and Northwestern Tiilt Lab. 
      </div>
    </main>
  )
}
