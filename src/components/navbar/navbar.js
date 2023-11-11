import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeftContainer}>
          <div>
            Marco Wang
          </div>
          <div>
            Breadcrumbs
          </div>
        </div>
        <div className={styles.navbarRightContainer}>
          <div>
            12:00 PM
          </div>
          <div>
            Listening to: Hans Zimmer
          </div>
        </div>
      </div>
    </div>
  )
}
