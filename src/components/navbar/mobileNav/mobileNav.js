import Link from 'next/link';
import styles from './mobileNav.module.css';
import { buttonList } from '@/components/sidebar/sidebar';
import MobileNavButton from './mobileNavButtons';


export default function MobileNav() {
  return (
    <div className={styles.mobileNavContainer}>
      {buttonList.map((button, index) => (
        <div className={styles.buttonContainer} key={`button_${index}`}>
          <MobileNavButton 
            name={button.name}
            link={button.link}
          />
        </div>
      ))}
    </div>
  )
}
