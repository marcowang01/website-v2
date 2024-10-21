import styles from './sidebar.module.css'
import Link from 'next/link'
import SidebarButton from './sidebarButton'

export const buttonList = [
  {
    name: 'About',
    link: '/about',
    shortcut: 'A',
  },
  {
    name: 'Spotlight',
    link: '/spotlight',
    shortcut: 'S',
  },
  {
    name: 'Collection',
    link: '/collection',
    shortcut: 'C',
  },
  {
    name: 'Resume',
    link: '/resume',
    shortcut: 'R',
  },
  {
    name: 'Github',
    link: 'https://github.com/marcowang01',
    shortcut: 'G',
  },
  {
    name: 'Email',
    link: 'mailto:marcowang0101@gmail.com',
    shortcut: 'E',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marco-01/',
    shortcut: 'L',
  },
  {
    name: 'Random',
    link: '/random',
    shortcut: 'D',
  },
]

export default function Sidebar() {
  return (
    <div className={styles.container}>
      {buttonList.map((button, index) => (
        <SidebarButton 
          name={button.name}
          link={button.link}
          shortcut={button.shortcut}
          key={`button_${index}`}
        />
      ))}
    </div>
  )
}
