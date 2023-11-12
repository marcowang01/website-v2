import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        About
      </div>
      <div className={styles.paragraph}>
        Hello! I am a software engineer, currently studying CS and Physics at Northwestern University.
        I am interested in building software tools that helpe people create, learn, and connect.
      </div>
      <div className={styles.paragraph}>
        {`Previously, I worked at `}
        <Link href={"https://www.boringcompany.com/"}>The Boring Company</Link>{', '} 
        <Link href={"https://www.workiva.com/"}>Workiva</Link>{', and '} 
        <Link href={"https://tiilt.northwestern.edu/"}>Northwestern Tiilt Lab</Link>. 
      </div>
    </main>
  )
}
