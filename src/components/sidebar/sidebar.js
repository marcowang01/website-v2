import styles from './sidebar.module.css'
import Link from 'next/link'
import SidebarButton from './sidebarButton'

export const buttonList = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Resume',
    link: '/resume',
  },
  {
    name: 'Github',
    link: 'https://github.com/marcowang01',
  },
  {
    name: 'Email',
    link: 'mailto:marcowang0101@gmail.com',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marco-01/',
  },
]

export default function Sidebar() {
  return (
    <div className={styles.container}>
      {buttonList.map((button, index) => (
        <SidebarButton 
          name={button.name}
          link={button.link}
          key={`button_${index}`}
        />
      ))}
    </div>
  )
}
