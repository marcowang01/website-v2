import Link from 'next/link'
import styles from './page.module.css'
import ArrowIcon from '@/svg/arrow'



function ContactLink({name, link, text}) {
  return (
    <div className={styles.linkContainer}>
    <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {name} 
      <ArrowIcon className={styles.arrow} />
      </Link>
      <div className={styles.linkText}>
        {text}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <main className={styles.main}>
      <ContactLink name="Email" link="mailto:marcowang0101@gmail.com" text="marcowang0101@gmail.com" />
      <ContactLink name="LinkedIn" link="https://www.linkedin.com/in/marco-01/" text="@marco-01" />
      <ContactLink name="Github" link="https://github.com/marcowang01" text="@marcowang01" />
    </main>
  )
}
