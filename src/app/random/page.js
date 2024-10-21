import styles from './page.module.css'

export default function Random() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Reads/Reading/Read
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Vagabond</li>
          <li className={styles.listItem}>神鵰俠侶 (Return of the Condor Heroes)</li>
          <li className={styles.listItem}>Alice in Borderland</li>
          <li className={styles.listItem}>The Three Body Problem: Dark Forest</li>
          <li className={styles.listItem}>Chainsaw Man</li>
          <li className={styles.listItem}>Character of Physical Law</li>
          <li className={styles.listItem}>Almost Buddhist</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Watches/Watching/Watched
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Ping Pong The Animation</li>
          <li className={styles.listItem}>Vinland Saga</li>
          <li className={styles.listItem}>Cowboy Bebop</li>
          <li className={styles.listItem}>The Three Idiots</li>
          <li className={styles.listItem}>Interstellar</li>
          <li className={styles.listItem}>The God of Gamblers II</li>
          <li className={styles.listItem}>The Boy and the Heron</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Plays/Playing/Played
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Badminton</li>
          <li className={styles.listItem}>Squash</li>
          <li className={styles.listItem}>Golf</li>
          <li className={styles.listItem}>It Takes Two</li>
          <li className={styles.listItem}>Overcooked 2</li>
          <li className={styles.listItem}>Teamfight Tactics</li>
          <li className={styles.listItem}>Hearthstone</li>
          <li className={styles.listItem}>掼蛋 (Guandan)</li>
          <li className={styles.listItem}>拖拉机 (Tractor Upgrades)</li>
        </ul>
      </section>
    </main>
  )
}
