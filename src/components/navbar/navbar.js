import Breadcrumbs from './breadcrumbs'
import NameItem from './name'
import DateItem from './date'
import MusicItem from './music'
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
          <DateItem />
          <MusicItem />
        </div>
      </div>
    </div>
  )
}
