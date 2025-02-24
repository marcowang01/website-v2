import Link from 'next/link'
import styles from './page.module.css'
import { ContactLink } from './contact-link'

export default function Contact() {
  return (
    <main className={styles['main']}>
      <ContactLink
        name="LinkedIn"
        link="https://www.linkedin.com/in/marco-01/"
        text="@marco-01"
      />
      <ContactLink
        name="Github"
        link="https://github.com/marcowang01"
        text="@marcowang01"
      />
      <ContactLink name="Email" text="marcowang0101 at gmail dot com" copy/>
    </main>
  )
}
