import {
  scribePlaceholder,
  tomoPlaceholder,
  realmPlaceholder,
  platzPlaceholder,
  conwayPlaceholder,
  iglooPlaceholder,
  formulaPlaceholder,
  bouncePlaceholder,
  newsPlaceholder,
  tetrisPlaceholder,
  lemmaPlaceholder,
  enginePlaceholder,
} from './placeholders'
import { SHAOBO, LILITH, DALU, MARCO_Y, SHERRY, ZIHAN } from './people'

export interface Item {
  name: string
  link?: string
}

export interface Collaborators {
  label?: string
  items: Item[]
}

export interface ProjectImage {
  src: string
  placeholder?: `data:image/${string}`
}

export interface Project {
  title: string
  description?: string
  tagline: string
  links: string[]
  date: string
  skills: string[]
  collaborators?: Collaborators
  image: ProjectImage
  category: string
  showInSpotlight?: boolean
  wip?: boolean
}

export const projects: Project[] = [
  {
    title: 'Lemma',
    description:
      'An AI-assisted learning tool that scans homework problems and generates interactive step-by-step solutions.',
    tagline: 'Generating interactive learning experiences for students',
    links: ['https://github.com/marcowang01/lemma'],
    date: 'Winter, 2025',
    skills: ['Next.js', 'Langchain', 'Wolfram'],
    collaborators: {
      label: 'UI designed by',
      items: [LILITH],
    },
    category: 'AI Math Solver',
    image: {
      src: '/images/projects/lemma.png',
      placeholder: lemmaPlaceholder,
    },
    wip: true,
  },
  {
    title: 'Engine',
    description:
      'A platform to practice and learn data structures and algorithms more effectively.',
    tagline: 'Building leetcode from scratch',
    links: ['https://github.com/marcowang01/engine'],
    date: 'Fall, 2024',
    skills: ['Go', 'Next.js', 'MongoDB', 'Docker'],
    category: 'Coding Platform',
    image: {
      src: '/images/projects/engine.png',
      placeholder: enginePlaceholder,
    },
    wip: true,
  },
  {
    title: 'Scribe',
    description:
      'A note-taking web app that transcribes lectures and meetings in real-time, ' +
      'with a chat interface to search and query across all your notes.',
    tagline: 'Transforming live lectures and meetings into interactive notes',
    links: ['https://www.project-scribe.com/'],
    // github: "https://github.com/marcowang01/notetaker",
    date: 'Fall, 2023',
    skills: ['Next.js', 'Supabase', 'Azure'],
    collaborators: {
      label: 'UI designed by',
      items: [SHAOBO],
    },
    category: 'AI Note-taking',
    showInSpotlight: true,
    image: {
      src: '/images/projects/scribe.png',
      placeholder: scribePlaceholder,
    },
  },
  {
    title: 'Tomo',
    description:
      'A physical toy that engages children in real-time conversation and adaptive storytelling. ' +
      // 'helping them learn through interactive dialogue. ' +
      'Featured at Ars Electronica Festival 2023.',
    tagline: "Bringing story-driven dialogue to children's learning",
    links: [
      'https://tomo-git-mw-new-controls-yulilith.vercel.app/?live-demo',
      'https://www.flickr.com/photos/arselectronica/53182961043/in/photostream/?ars-electronica',
    ],
    date: 'Summer, 2023',
    skills: ['Socket.io', 'Deepgram', 'ElevenLabs'],
    collaborators: {
      items: [LILITH],
    },
    category: 'AI Powered Toy',
    showInSpotlight: true,
    image: {
      src: '/images/projects/tomo.png',
      placeholder: tomoPlaceholder,
    },
  },
  {
    title: 'Realm',
    description:
      'An LLM pipeline that uses vector stores to improve accuracy and reduce costs for Q&A tasks over domain-specific knowledge bases.',
    tagline: 'Retrieval augmented generation pipeline for question answering',
    links: ['/files/realm.pdf', 'https://github.com/marcowang01/realm'],
    date: 'Spring, 2023',
    skills: ['Python', 'Modal', 'Langchain', 'ChromaDB'],
    collaborators: {
      label: 'Collaborated with',
      items: [SHAOBO],
    },
    category: 'LLM Pipeline',
    image: {
      src: '/images/projects/realm.png',
      placeholder: realmPlaceholder,
    },
  },
  {
    title: 'PlatzUI',
    description:
      'A Next.js template for creating infinite canvas-based interfaces. ' +
      'Streamlines the design-to-implementation for personal websites.',
    tagline: 'Open-source personal website template for creatives',
    links: ['https://platz.ooo/', 'https://github.com/szgbo/platz'],
    date: 'Winter, 2023',
    skills: ['Next.js', 'Framer Motion', 'tldraw'],
    collaborators: {
      items: [SHAOBO, DALU, MARCO_Y],
    },
    category: 'UI Library',
    image: {
      src: '/images/projects/platz.png',
      placeholder: platzPlaceholder,
    },
  },
  {
    title: 'Conway',
    description:
      "A parallel implementation of Conway's Game of Life. " +
      'Achieved 1000x speedup through shared memory and bit-level optimization.',
    tagline: "CUDA-Accelerated Conway's Game of Life",
    links: ['/files/conway.pdf', 'https://github.com/marcowang01/conway-gpu'],
    date: 'Spring, 2023',
    skills: ['C++', 'CUDA'],
    collaborators: {
      items: [SHAOBO],
    },
    category: 'GPU Programming',
    image: {
      src: '/images/projects/conway.png',
      placeholder: conwayPlaceholder,
    },
  },
  {
    title: 'Igloo',
    description:
      'A social platform that organizes interactions into context-aware spaces, ' +
      'allowing users to communicate naturally across channels. ',
    // 'Pilot tested with 20+ users.',
    tagline: 'Connecting people through context-aware digital spaces',
    links: [
      'https://igloo-website.vercel.app/',
      'https://github.com/marcowang01/Igloo',
    ],
    date: 'Summer, 2022',
    skills: ['Laravel', 'React Native'],
    collaborators: {
      label: 'UI designed by',
      items: [SHAOBO, SHERRY],
    },
    category: 'social platform App',
    showInSpotlight: true,
    image: {
      src: '/images/projects/igloo.png',
      placeholder: iglooPlaceholder,
    },
  },
  {
    title: 'Formula',
    description:
      'A real-time dashboard that collects and visualizes sensor data from the NU Formula Racing car. ' +
      'Monitored performance metrics for race day.',
    tagline: 'Real-time telemetry insights for racing performance',
    links: ['https://github.com/marcowang01/telemetry-remote-23'],
    date: 'Winter, 2022',
    collaborators: {
      label: 'Collaborated with',
      items: [ZIHAN],
    },
    skills: ['Next.js', 'Node.js', 'Socket.io', 'DynamoDB'],
    category: 'Race Telemetry',
    image: {
      src: '/images/projects/formula.png',
      placeholder: formulaPlaceholder,
    },
  },
  {
    title: 'Bounce Knight',
    description:
      'A 2D fighting game featuring custom-animated characters and three unique stages.',
    tagline: 'Dynamic 2D fighter with animated characters',
    links: ['https://github.com/marcowang01/Bounce-Knight-Unity2D'],
    date: 'Winter, 2021',
    skills: ['C#', 'Unity'],
    category: 'unity game',
    image: {
      src: '/images/projects/bounce.png',
      placeholder: bouncePlaceholder,
    },
  },
  {
    title: 'News Classifier',
    description:
      'A machine learning web app that analyzes news articles for political bias. ' +
      'Trained on a dataset of 1,300 labeled articles.',
    tagline: 'Detection and classification of political bias in news articles',
    links: [
      'https://www.youtube.com/watch?v=2kNVx36dPOM&t=1s',
      'https://github.com/marcowang01/Article-Analyzer-Web',
    ],
    date: 'Winter, 2021',
    skills: ['Python', 'Scikit-Learn', 'Flask'],
    category: 'Machine Learning',
    image: {
      src: '/images/projects/news.png',
      placeholder: newsPlaceholder,
    },
  },
  {
    title: 'CPP Tetris',
    description: '',
    tagline: 'A simple implementation of the classic game Tetris',
    links: ['https://github.com/marcowang01/Tetris_in_C'],
    date: 'Fall, 2021',
    skills: ['C', 'C++'],
    category: 'C++ Porgramming',
    image: {
      src: '/images/projects/tetris.png',
      placeholder: tetrisPlaceholder,
    },
  },
]
