import styles from './projectCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard(project) {
  const {title, description, link, github, date, skills} = project

  return (
    <div className={styles.container}>
      <section className={styles.headerContainer}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.date}>
          {date}
        </div>
      </section>
      <section className={styles.description}>
        {description}
      </section>
      
      <section className={styles.footerContainer}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div className={styles.skill} key={`${skill}-${index}`}>
              {skill}
            </div>
          ))}
        </div>
        <div className={styles.links}>
          {github && <div className={styles.github}>
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Image src="images/github.svg" alt="GitHub" width={16} height={16} />
            </Link>
          </div>}
          {link && <div className={styles.link}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image src="images/browser.svg" alt="Link" width={16} height={16} />
            </Link>
          </div>}
        </div>
      </section>
    </div>
  )


}
