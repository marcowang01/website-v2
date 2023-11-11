import styles from './sidebar.module.css'
import Link from 'next/link'

export default function Sidebar() {

  const buttonList = [
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


  return (
    <div className={styles.container}>
      {buttonList.map((button, index) => {
        // Determine if the link is an external link
        const isExternalLink = button.link.includes('http');
        // Set up common props for the Link component
        const linkProps = isExternalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <Link 
            href={button.link} 
            {...linkProps} 
            key={`button_${index}`}
            className={styles.sidebarButtonContainer}
          >
            <div>
              {button.name}
            </div>
            <div className={styles.sidebarKey}>
              {button.name.charAt(0)}
            </div>
          </Link>
        );
      })}
    </div>
  )
}
