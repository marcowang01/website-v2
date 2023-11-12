'use client'
import styles from './projectCard.module.css'
import LinkIcon from './linkIcon'
import Link from 'next/link'

export default function ProjectCard(project) {
  const {title, description, link, github, date, skills} = project

  const priorityLink = link || github

  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log(priorityLink)
  //   window.open(priorityLink, '_blank', 'noopener,noreferrer');
  // }

  return (
    <div className={styles.container}>
      <div>
        <section className={styles.headerContainer}>
          <Link href={priorityLink} target="_blank" rel="noopener noreferrer" className={styles.title}>
            {title}
          </Link>
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
            <LinkIcon iconName={'github'} link={github}/>
          </div>}
          {link && link.length > 0 &&  <div className={styles.link}>
            <LinkIcon iconName={'browser'} link={link}/>
          </div>}
        </div>
      </section>
    </div>
  )
}
