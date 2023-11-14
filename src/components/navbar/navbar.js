import Breadcrumbs from './breadcrumbs'
import NameItem from './nameItem'
import TimeItem from './timeItem'
import MusicItem from './musicItem'
import MenuItem from './menuItem'
import styles from './navbar.module.css'


export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeftContainer}>
          <NameItem />
          <Breadcrumbs />
        </div>
        <div className={styles.navbarRightContainer}>
          {/* <TimeItem /> */}
          <MusicItem />
          <MenuItem />
        </div>
      </div>
    </div>
  )
}
