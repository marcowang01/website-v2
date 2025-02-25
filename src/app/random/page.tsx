import styles from './page.module.css'

export default function Random() {
  const sections = [
    {
      title: 'Recently Watched',
      items: [
        'Ping Pong The Animation',
        'Cowboy Bebop',
        'Arcane',
        'The Boy and the Heron',
      ],
    },
    {
      title: 'Enjoys',
      items: [
        'Badminton Doubles',
        'Skiing on fresh powder',
        'Getting three stars in Overcooked 2',
      ],
    },
  ]

  return (
    <main className={styles['main']}>
      {sections.map((section, index) => (
        <section key={index} className={styles['section']}>
          <h3 className={styles['sectionTitle']}>{section.title}</h3>
          <ul className={styles['list']}>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles['listItem']}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
