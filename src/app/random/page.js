import styles from './page.module.css'

export default function Random() {
  const sections = [
    {
      title: 'Reads/Reading/Read',
      items: [
        'Vagabond',
        '神鵰俠侶 (Return of the Condor Heroes)',
        'Alice in Borderland',
        'The Three Body Problem: Dark Forest',
        'Character of Physical Law',
        'Almost Buddhist',
      ],
    },
    {
      title: 'Watches/Watching/Watched',
      items: [
        'Ping Pong The Animation',
        'Vinland Saga',
        'Cowboy Bebop',
        'Frieren: Beyond Journey\'s End',
        'The Three Idiots',
        'Interstellar',
        'The God of Gamblers II',
        'The Boy and the Heron',
      ],
    },
    {
      title: 'Plays/Playing/Played',
      items: [
        'Badminton',
        'Squash',
        'Ski',
        'Golf',
        'It Takes Two',
        'Overcooked 2',
        'Teamfight Tactics',
        'Hearthstone',
        '掼蛋 (Guandan)',
        '拖拉机 (Tractor Upgrades)',
      ],
    },
  ]

  return (
    <main className={styles.main}>
      {sections.map((section, index) => (
        <section key={index} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <ul className={styles.list}>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
