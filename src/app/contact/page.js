import Link from 'next/link'
import styles from './page.module.css'
import ArrowIcon from '@/svg/arrow'



function ContactLink({name, link, text}) {

  const Content = () => (
    <>
      <div className={styles.link}>
        {name} 
        <ArrowIcon className={styles.arrow} />
      </div>
      <div className={styles.linkText}>
        {text}
      </div>
      </>
  )

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.linkContainer}>
        <Content />
      </Link>
    )
  }

  return (
    <div className={styles.linkContainer}>
    <Content />
    </div>
    
  )
}

export default function Contact() {
  return (
    <main className={styles.main}>
      <ContactLink name="LinkedIn" link="https://www.linkedin.com/in/marco-01/" text="@marco-01" />
      <ContactLink name="Github" link="https://github.com/marcowang01" text="@marcowang01" />
      <ContactLink name="Email" link="" text="<first><last>0101@gmail.com" />
    </main>
  )
}
