import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeftContainer}>
          <div className={styles.navbarItems}>
            Marco Wang
          </div>
          <div className={styles.navbarItems}>
            Breadcrumbs
          </div>
        </div>
        <div className={styles.navbarRightContainer}>
          <div className={styles.navbarItems}>
            12:00 PM
          </div>
          <div className={styles.navbarItems}>
            Listening to: Hans Zimmer
          </div>
        </div>
      </div>
    </div>
  )
}
