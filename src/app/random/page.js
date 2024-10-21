import styles from './page.module.css'

export default function Random() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Reads
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Vagabond</li>
          <li className={styles.listItem}>神鵰俠侶</li>
          <li className={styles.listItem}>Alice in Borderland</li>
          <li className={styles.listItem}>The Three Body Problem: Dark Forest</li>
          <li className={styles.listItem}>Chainsaw Man</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Watches
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Ping Pong The Animation</li>
          <li className={styles.listItem}>Vinland Saga</li>
          <li className={styles.listItem}>Cowboy Bebop</li>
          <li className={styles.listItem}>The Three Idiots</li>
          <li className={styles.listItem}>Interstellar</li>
          <li className={styles.listItem}>The God of Gamblers</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Plays
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Badminton</li>
          <li className={styles.listItem}>Squash</li>
          <li className={styles.listItem}>Golf</li>
          <li className={styles.listItem}>Bouldering</li>
          <li className={styles.listItem}>Overcooked 2</li>
          <li className={styles.listItem}>Teamfight Tactics</li>
          <li className={styles.listItem}>Hearthstone</li>
          <li className={styles.listItem}>掼蛋</li>
          <li className={styles.listItem}>拖拉机</li>
        </ul>
      </section>
    </main>
  )
}
