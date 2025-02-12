import Link from 'next/link'
import styles from './page.module.css'
import ArrowIcon from '@/svg/arrow'

function ContactLink({
  name,
  link,
  text,
}: {
  name: string
  link: string
  text: string
}) {
  const Content = () => (
    <>
      <div className={styles['link']}>
        {name}
        {link && <ArrowIcon className={styles['arrow']} />}
      </div>
      <div className={styles['link-text']}>{text}</div>
    </>
  )

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['link-container']} ${styles['link-hover']}`}
      >
        <Content />
      </Link>
    )
  }

  return (
    <div className={styles['link-container']}>
      <Content />
    </div>
  )
}

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
      <ContactLink name="Email" link="" text="marcowang0101 at gmail dot com" />
    </main>
  )
}
