export interface Project {
  title: string
  description?: string
  tagline: string
  link: string
  github?: string
  date: string
  skills: string[]
  collaborators?: string[]
  image?: string
  category: string
  showInSpotlight: boolean
}

export const projects: Project[] = [
  {
    title: 'Scribe',
    description:
      'An AI note-taking app that transcribes lectures and meetings in real-time, ' +
      'with a chat interface to search and query across all your notes.',
    tagline: 'Transforming live lectures and meetings into interactive notes',
    link: 'https://www.project-scribe.com/',
    // github: "https://github.com/marcowang01/notetaker",
    date: 'Fall, 2023',
    skills: ['Typescript', 'Next.js', 'Supabase'],
    collaborators: ['Shaobo Z.'],
    category: 'AI Notes App',
    showInSpotlight: true,
    image: '/images/projects/scribe.png',
  },
  {
    title: 'Tomo',
    description:
      'A physical AI toy that engages children in real-time conversation and adaptive storytelling, ' +
      'helping them learn through interactive dialogue. ' +
      'Featured at Ars Electronica Festival 2023.',
    tagline: "Bringing story-driven dialogue to children's learning",
    link: 'https://tomo-git-mw-new-controls-yulilith.vercel.app/?demo',
    github: '',
    date: 'Summer, 2023',
    skills: ['Python', 'Typescript', 'Next.js'],
    collaborators: ['Lilith Y.'],
    category: 'AI Powered Toy',
    showInSpotlight: true,
    image: '/images/projects/tomo.png',
  },
  {
    title: 'Realm',
    description:
      'An LLM pipeline that leverages vector stores to improve accuracy and reduce costs for Q&A tasks over domain-specific knowledge bases.',
    tagline: 'Retrieval augmented generation pipeline for question answering',
    link: '/files/realm.pdf',
    github: 'https://github.com/marcowang01/realm',
    date: 'Spring, 2023',
    skills: ['Python', 'Modal', 'Langchain', 'ChromaDB'],
    collaborators: ['Shaobo Z.'],
    category: 'LLM Pipeline',
    showInSpotlight: false,
    image: '/images/projects/realm.png',
  },
  {
    title: 'PlatzUI',
    description:
      'A Next.js template for creating infinite canvas-based interfaces for personal websites, ' +
      'designed to simplify the design-to-implementation process.',
    tagline: 'Open-source personal website template for creatives',
    link: 'https://platz.ooo/',
    github: 'https://github.com/szgbo/platz',
    date: 'Winter, 2023',
    skills: ['Typescript', 'Next.js', 'Framer Motion'],
    collaborators: ['Shaobo Z.', 'Marco Y.', 'Dalu L.'],
    category: 'UI Library',
    showInSpotlight: false,
    image: '/images/projects/platz.png',
  },
  {
    title: 'Conway',
    description:
      "A parallel implementation of Conway's Game of Life using CUDA. " +
      'Achieved 1000x speedup through shared memory and bit-level optimization.',
    tagline: "CUDA-Accelerated Conway's Game of Life",
    link: '/files/conway.pdf',
    github: 'https://github.com/marcowang01/conway-gpu',
    date: 'Spring, 2023',
    skills: ['C++', 'CUDA'],
    collaborators: ['Shaobo Z.'],
    category: 'GPU Programming',
    showInSpotlight: false,
    image: '/images/projects/conway.png',
  },
  {
    title: 'Igloo',
    description:
      'A social platform that organizes interactions into context-aware spaces, ' +
      'allowing users to communicate naturally across channels. ' +
      'Pilot tested with 20+ users.',
    tagline: 'Connecting people through context-aware digital spaces',
    link: 'https://www.igloo.place/',
    github: 'https://github.com/marcowang01/Igloo',
    date: 'Summer, 2022',
    skills: ['PHP', 'Javascript', 'Laravel', 'React Native'],
    collaborators: ['Shaobo Z.', 'Sherry X.'],
    category: 'cross-platform App',
    showInSpotlight: true,
    image: '/images/projects/igloo.png',
  },
  {
    title: 'Formula Telemetry',
    description:
      'A real-time dashboard that collects and visualizes sensor data from the NU Formula Racing car. ' +
      'Monitored performance metrics for race day.',
    tagline: 'Real-time telemetry insights for racing performance',
    link: '',
    github: 'https://github.com/marcowang01/telemetry-remote-23',
    date: 'Winter, 2022',
    collaborators: ['Zihan Y.'],
    skills: ['Next.js', 'Node.js', 'Socket.io', 'DynamoDB'],
    category: 'Data Dashboard',
    showInSpotlight: false,
    image: '/images/projects/formula.png',
  },
  {
    title: 'Bounce Knight',
    description:
      'A 2D fighting game featuring custom-animated characters and three unique stages.',
    tagline: 'Dynamic 2D fighter with animated characters',
    link: '',
    github: 'https://github.com/marcowang01/Bounce-Knight-Unity2D/tree/master',
    date: 'Winter, 2021',
    skills: ['C#', 'Unity'],
    category: 'unity game',
    showInSpotlight: false,
    image: '/images/projects/bounce.png',
  },
  {
    title: 'News Classifier',
    description:
      'A machine learning web app that analyzes news articles for political bias. ' +
      'Trained on a dataset of 1,300 labeled articles.',
    tagline: 'Detection and classification of political bias in news articles',
    link: 'https://www.youtube.com/watch?v=2kNVx36dPOM&t=1s',
    github: 'https://github.com/marcowang01/Article-Analyzer-Web/tree/master',
    date: 'Winter, 2021',
    skills: ['Python', 'Scikit-Learn', 'Flask'],
    category: 'Machine Learning',
    showInSpotlight: false,
    image: '/images/projects/news.png',
  },
  {
    title: 'CPP Tetris',
    description: '',
    tagline: 'A simple implementation of the classic game Tetris',
    link: '',
    github: 'https://github.com/marcowang01/Tetris_in_C',
    date: 'Fall, 2021',
    skills: ['C', 'C++'],
    category: 'C++ Porgramming',
    showInSpotlight: false,
    image: '/images/projects/tetris.png',
  },
]
