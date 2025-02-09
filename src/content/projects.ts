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
  github?: string
  date: string
  skills: string[]
  collaborators?: Collaborators
  image: ProjectImage
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
    links: ['https://www.project-scribe.com/'],
    // github: "https://github.com/marcowang01/notetaker",
    date: 'Fall, 2023',
    skills: ['Typescript', 'Next.js', 'Supabase'],
    collaborators: {
      label: 'UI designed by',
      items: [{ name: 'Shaobo Z.', link: 'https://shaobo.co/' }],
    },
    category: 'AI Notes App',
    showInSpotlight: true,
    image: {
      src: '/images/projects/scribe.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23d9d8d8'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23eeeeee'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23dfdcdc'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23efefef'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%23e1e1e1'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23efefef'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23e1e1e1'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23efefef'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23e3e3e3'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23f3f3f3'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'Tomo',
    description:
      'A physical AI toy that engages children in real-time conversation and adaptive storytelling, ' +
      'helping them learn through interactive dialogue. ' +
      'Featured at Ars Electronica Festival 2023.',
    tagline: "Bringing story-driven dialogue to children's learning",
    links: [
      'https://tomo-git-mw-new-controls-yulilith.vercel.app/?demo',
      'https://www.flickr.com/photos/arselectronica/53076841259/in/photostream/?ars-electronica',
    ],
    github: '',
    date: 'Summer, 2023',
    skills: ['Python', 'Typescript', 'Next.js'],
    collaborators: {
      label: 'UI designed by',
      items: [{ name: 'Lilith Y.', link: 'https://lilithyu.com/' }],
    },
    category: 'AI Powered Toy',
    showInSpotlight: true,
    image: {
      src: '/images/projects/tomo.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%238c8483'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%2397776c'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23a4725a'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23aa8c7d'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23ada09a'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23b2afb0'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23b9c3cc'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23b6bfca'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%238e8783'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%239b9896'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23a39997'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%239e847c'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23a35649'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23c64c32'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23c0b1b0'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23b7c6d3'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%239b9ca5'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23a2a2a6'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23a9a8a9'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23a7b0b5'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23b57c72'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23d95131'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23bbb7b9'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23b6c2cd'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%239fa4af'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23acb3bd'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23b2b4bd'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23aab2bd'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23c3866d'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23dc6e3e'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23b6bfca'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23b2b9c5'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23a4a4ae'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23afb0b8'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23b3b3b9'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23b8b7bb'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23c5bfc5'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23c7c4c6'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23c2c8cc'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23b2b7c2'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'Realm',
    description:
      'An LLM pipeline that leverages vector stores to improve accuracy and reduce costs for Q&A tasks over domain-specific knowledge bases.',
    tagline: 'Retrieval augmented generation pipeline for question answering',
    links: ['/files/realm.pdf'],
    github: 'https://github.com/marcowang01/realm',
    date: 'Spring, 2023',
    skills: ['Python', 'Modal', 'Langchain', 'ChromaDB'],
    collaborators: {
      label: 'Collaborated with',
      items: [{ name: 'Shaobo Z.' }],
    },
    category: 'LLM Pipeline',
    showInSpotlight: false,
    image: {
      src: '/images/projects/realm.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23fefefe'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23ededed'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23f3f3f3'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='white'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23fdfdfd'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='white'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23fefefe'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23f3f3f3'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23ececec'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23ececec'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='white'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='white'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23f6f6f6'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23eeeeee'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23f1f1f1'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23ededed'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='white'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23fdfdfd'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23e8e8e8'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23eeeeee'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23f1f1f1'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='white'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='white'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23fefefe'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23f2f2f2'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23f5f5f4'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23fbfbfb'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'PlatzUI',
    description:
      'A Next.js template for creating infinite canvas-based interfaces. ' +
      'Streamlines the design-to-implementation process for personal websites.',
    tagline: 'Open-source personal website template for creatives',
    links: ['https://platz.ooo/'],
    github: 'https://github.com/szgbo/platz',
    date: 'Winter, 2023',
    skills: ['Typescript', 'Next.js', 'Framer Motion'],
    collaborators: {
      label: 'Designed with',
      items: [
        { name: 'Shaobo Z.', link: 'https://shaobo.co/' },
        { name: 'Dalu L.', link: 'https://www.daluliu.com/' },
        {
          name: 'Marco Y.',
          link: 'https://www.linkedin.com/in/marco-yu-ba21661ab/',
        },
      ],
    },
    category: 'UI Library',
    showInSpotlight: false,
    image: {
      src: '/images/projects/platz.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23f5f5f5'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23f6f6f6'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23f8f8f9'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23f6f6f6'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23f6f6f6'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23eeeeee'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23ebebeb'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23f4f4f4'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23f9f9f9'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23dadada'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23d7d7d7'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23f6f6f6'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23f3f3f3'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23fafafa'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23eeeeee'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23d8d8d8'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23d7d7d7'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23d6d6d6'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23d7d7d7'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23f9f9f9'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23fdfdfd'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23d7d7d7'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23929292'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23969696'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23959595'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23979797'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23e7e7e7'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23fbfbfb'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'Conway',
    description:
      "A parallel implementation of Conway's Game of Life. " +
      'Achieved 1000x speedup through shared memory and bit-level optimization.',
    tagline: "CUDA-Accelerated Conway's Game of Life",
    links: ['/files/conway.pdf'],
    github: 'https://github.com/marcowang01/conway-gpu',
    date: 'Spring, 2023',
    skills: ['C++', 'CUDA'],
    collaborators: {
      label: 'Designed with',
      items: [{ name: 'Shaobo Z.', link: 'https://shaobo.co/' }],
    },
    category: 'GPU Programming',
    showInSpotlight: false,
    image: {
      src: '/images/projects/conway.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23fbfbfa'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23e6e4df'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23eeede9'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23ededed'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23f0efed'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23f4f2ed'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23eeedea'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23f9f9f9'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23f6f7fa'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23c1cbe3'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23cad1e2'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23e2e2e0'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23d3d6de'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23bdc7e0'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23d6dbe7'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23fdfcfc'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%23f0f3fa'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%2399aee5'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23b1c0e7'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23e8e6e2'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23c9d0e2'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%2394aae3'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23cad4ee'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='white'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23f9f9fa'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23e1e0dd'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23e4e2de'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23dededf'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23e5e5e3'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23ebe9e3'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23e4e3e2'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23f6f6f8'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23f0f3f9'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23cfd4df'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23e2e1e0'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23dfdfe0'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23e1e1e2'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23e0e0df'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23d7dbe4'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23f2f5fd'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'Igloo',
    description:
      'A social platform that organizes interactions into context-aware spaces, ' +
      'allowing users to communicate naturally across channels. ' +
      'Pilot tested with 20+ users.',
    tagline: 'Connecting people through context-aware digital spaces',
    links: ['https://www.igloo.place/'],
    github: 'https://github.com/marcowang01/Igloo',
    date: 'Summer, 2022',
    skills: ['PHP', 'Javascript', 'Laravel', 'React Native'],
    collaborators: {
      label: 'Designed with',
      items: [
        { name: 'Shaobo Z.', link: 'https://shaobo.co/' },
        { name: 'Sherry X.', link: 'https://sherryx.com/' },
      ],
    },
    category: 'cross-platform App',
    showInSpotlight: true,
    image: {
      src: '/images/projects/igloo.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23e6e6e5'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23e6e6e5'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23e6e5e4'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23e2e3e3'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23d6dbe0'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23d7dbdf'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23e1e2e3'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23e6e5e4'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23e5e5e4'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%23e5e6e6'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23e5e6e6'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23e1e3e4'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23d8dadd'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23d7dadc'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23e1e2e4'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23e5e6e6'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23e5e6e6'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23e1e6eb'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23e0e6ea'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23e0e6ea'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23e3e8ec'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23e1e7ea'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23e0e5e9'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23e1e6eb'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23dfe4e8'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23dce5ee'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23dce5ee'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23dde6ef'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23dbe4ed'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23d9e2eb'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23dae3eb'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23dde7ef'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23dbe4ed'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'Formula Telemetry',
    description:
      'A real-time dashboard that collects and visualizes sensor data from the NU Formula Racing car. ' +
      'Monitored performance metrics for race day.',
    tagline: 'Real-time telemetry insights for racing performance',
    links: [],
    github: 'https://github.com/marcowang01/telemetry-remote-23',
    date: 'Winter, 2022',
    collaborators: {
      label: 'Collaborated with',
      items: [
        {
          name: 'Zihan Y.',
          link: 'https://www.linkedin.com/in/billyin2002/',
        },
      ],
    },
    skills: ['Next.js', 'Node.js', 'Socket.io', 'DynamoDB'],
    category: 'Data Dashboard',
    showInSpotlight: false,
    image: {
      src: '/images/projects/formula.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23333c52'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%2329324a'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23283149'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23293149'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%2329324a'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23293149'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23242d42'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23242c3f'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%233d4a68'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%233c4967'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%233c4967'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%233c4967'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%233b4966'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%233e4765'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23343955'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23283045'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%233b4763'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23384561'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23384561'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23384461'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23384562'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23384360'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%232e3750'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23292f45'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%233e4965'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23394663'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23384462'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23384562'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23394663'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%233b4464'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23333854'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23252d41'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%2337425e'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%2336425e'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%2335415e'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%2335405e'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%2333405c'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23363e5c'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23343552'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23262d41'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'Bounce Knight',
    description:
      'A 2D fighting game featuring custom-animated characters and three unique stages.',
    tagline: 'Dynamic 2D fighter with animated characters',
    links: [],
    github: 'https://github.com/marcowang01/Bounce-Knight-Unity2D/tree/master',
    date: 'Winter, 2021',
    skills: ['C#', 'Unity'],
    category: 'unity game',
    showInSpotlight: false,
    image: {
      src: '/images/projects/bounce.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23353d22'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23273523'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%2313232c'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23122429'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%230d1d27'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%230f3d25'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%230a4c1e'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%230a4321'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23162523'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23132527'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23101c1e'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23222e30'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%236d7873'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23102c28'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23132c25'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%230b2524'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%233f3b27'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23111b1c'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%231f5355'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%235faea6'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%239db4a4'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23162e2c'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23102128'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23202623'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23202720'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%232e3438'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%2375d6d5'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%234a8284'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23495e5a'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23152f31'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%230d2027'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23142125'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%231f2d1f'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23383129'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%2374857c'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%2332433b'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%2313271f'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23203028'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23192822'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%231e2c22'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'News Classifier',
    description:
      'A machine learning web app that analyzes news articles for political bias. ' +
      'Trained on a dataset of 1,300 labeled articles.',
    tagline: 'Detection and classification of political bias in news articles',
    links: ['https://www.youtube.com/watch?v=2kNVx36dPOM&t=1s'],
    github: 'https://github.com/marcowang01/Article-Analyzer-Web/tree/master',
    date: 'Winter, 2021',
    skills: ['Python', 'Scikit-Learn', 'Flask'],
    category: 'Machine Learning',
    showInSpotlight: false,
    image: {
      src: '/images/projects/news.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23f2aea9'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='%23e3f1f2'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%23e7e5e5'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23e4e4e4'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23e7e7e7'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%23e4e4e4'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23e7e7e7'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23fdfdfd'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23f7ada7'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='%23f6f6f6'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23f8f6f5'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23f8f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%23f7f7f7'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23f8f8f8'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23fdfdfd'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%23f8aea8'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='%23f7fafb'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%23fcfafa'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='white'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='white'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='white'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='white'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='white'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23efaaa4'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23e6eff0'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23eeecec'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23efefef'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%23f0f0f0'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23cf9490'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23cdd6d7'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23cccaca'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%23cccccc'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23cccccc'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23cbcbcb'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%23cccccc'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%23cccccc'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
  {
    title: 'CPP Tetris',
    description: '',
    tagline: 'A simple implementation of the classic game Tetris',
    links: [],
    github: 'https://github.com/marcowang01/Tetris_in_C',
    date: 'Fall, 2021',
    skills: ['C', 'C++'],
    category: 'C++ Porgramming',
    showInSpotlight: false,
    image: {
      src: '/images/projects/tetris.png',
      placeholder:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='181'%3e%3cg transform='translate(-2.000%2c -4.500)'%3e%3crect width='76' height='76' x='-38' y='-38' fill='%23111111'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='-38' fill='black'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='-38' fill='%236b6b6e'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='-38' fill='%23d5d2c6'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='-38' fill='%23d6d3c7'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='-38' fill='%236f7072'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='-38' fill='%23030303'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='-38' fill='%23101010'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='38' fill='%23111111'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='38' fill='black'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='38' fill='%23696a6f'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='38' fill='%23d3cfb8'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='38' fill='%23d3cfb9'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='38' fill='%236e6f73'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='38' fill='%23040303'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='38' fill='%23101010'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='76' fill='%23111111'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='76' fill='black'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='76' fill='%236d6d6a'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='76' fill='%23d5d2d7'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='76' fill='%23dad7db'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='76' fill='%23747171'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='76' fill='%23020303'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='76' fill='%23101010'%3e%3c/rect%3e%3crect width='76' height='38' x='-38' y='114' fill='%23101011'%3e%3c/rect%3e%3crect width='38' height='38' x='38' y='114' fill='%23040501'%3e%3c/rect%3e%3crect width='38' height='38' x='76' y='114' fill='%23524c68'%3e%3c/rect%3e%3crect width='38' height='38' x='114' y='114' fill='%239786c8'%3e%3c/rect%3e%3crect width='38' height='38' x='152' y='114' fill='%23a5a9c9'%3e%3c/rect%3e%3crect width='38' height='38' x='190' y='114' fill='%23566865'%3e%3c/rect%3e%3crect width='38' height='38' x='228' y='114' fill='%23080505'%3e%3c/rect%3e%3crect width='76' height='38' x='266' y='114' fill='%230f1010'%3e%3c/rect%3e%3crect width='76' height='76' x='-38' y='152' fill='%23101010'%3e%3c/rect%3e%3crect width='38' height='76' x='38' y='152' fill='%23060302'%3e%3c/rect%3e%3crect width='38' height='76' x='76' y='152' fill='%23435057'%3e%3c/rect%3e%3crect width='38' height='76' x='114' y='152' fill='%237e848e'%3e%3c/rect%3e%3crect width='38' height='76' x='152' y='152' fill='%23715d5e'%3e%3c/rect%3e%3crect width='38' height='76' x='190' y='152' fill='%23185327'%3e%3c/rect%3e%3crect width='38' height='76' x='228' y='152' fill='%230c0709'%3e%3c/rect%3e%3crect width='76' height='76' x='266' y='152' fill='%230f0f0f'%3e%3c/rect%3e%3c/g%3e%3c/svg%3e",
    },
  },
]
