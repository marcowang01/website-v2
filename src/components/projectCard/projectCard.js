import styles from './projectCard.module.css'
import Link from 'next/link'

import GithubIcon from '@/svg/github'
import BrowserIcon from '@/svg/browser'

export default function ProjectCard(project) {
  const {title, description, link, github, date, skills} = project

  return (
    <div className={styles.container}>
      <div>
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
      </div>
      <section className={styles.footerContainer}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div className={styles.skill} key={`${skill}-${index}`}>
              {skill}
            </div>
          ))}
        </div>
        <div className={styles.links}>
          {github && github.length > 0 && <div className={styles.github}>
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <div className={styles.icon}>
                <GithubIcon  className={styles.icon}/>
              </div>
            </Link>
          </div>}
          {link && link.length > 0 &&  <div className={styles.link}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <div className={styles.icon}>
                <BrowserIcon  fill="#000000" className={styles.icon}/>
              </div>
            </Link>
          </div>}
        </div>
      </section>
    </div>
  )


}
