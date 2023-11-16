class Project {
  constructor({title, description, tagline, link, github, date, skills, category, starred}) {
    this.title = title;
    this.description = description;
    this.tagline = tagline;
    this.link = link;
    this.github = github;
    this.date = date;
    this.skills = skills;
    this.category = category;
    this.starred = starred;
  }
}

const projects = [
  new Project({
    title: "Scribe",
    description: "An AI-powered wep app that can create lecture notes and study guides in real-time from live lectures.",
    tagline: "Transforming live lectures into interactive notes and study guides",
    link: "https://notetaker-git-master-marcowang01.vercel.app/",
    github: "https://github.com/marcowang01/notetaker",
    date: "Fall, 2023",
    skills: ["Typescript", "Next.js", "Supabase"],
    category: "AI Web App",
    starred: true
  }),
  new Project({
    title: "Tomo",
    description: "A real-time audio-based companion aimed at enhancing children’s learning through story‑driven dialogues.",
    tagline: "Bringing story-driven dialogues to children's learning",
    link: "https://tomo-git-mw-new-controls-yulilith.vercel.app/",
    github: "",
    date: "Summer, 2023",
    skills: ["Python", "Typescript", "Next.js"],
    category: "AI Web App",
    starred: true
  }),
  new Project({
    title: "Realm",
    description: "Realm (Retrieval Augmented Language Model) is an LLM pipeline that leverages vector databases to improve performance and reduce costs for question answering tasks.",
    tagline: "Improving Q&A performance with vector database integration",
    link: "https://www.boboland.xyz/llm",
    github: "https://github.com/marcowang01/realm",
    date: "Spring, 2023",
    skills: ["Python", "Modal", "Langchain", "ChromaDB"],
    category: "AI Tools",
    starred: false
  }),
  new Project({
    title: "PlatzUI",
    description: "An open-source personal website template for creatives, with a focus on streamlining the design-to-implementation process.",
    tagline: "Open-source personal website template for creatives",
    link: "https://platz.ooo/",
    github: "https://github.com/szgbo/platz",
    date: "Winter, 2023",
    skills: ["Typescript", "Next.js"],
    category: "UI Library",
    starred: false
  }),
  new Project({
    title: "Conway",
    description: "A CUDA-accelerated implementation of Conway's Game of Life, a cellular automaton that simulates the evolution of a grid of cells based on a set of rules.",
    tagline: "CUDA-Accelerated Conway's Game of Life",
    link: "/files/conway.pdf",
    github: "https://github.com/marcowang01/conway-gpu",
    date: "Spring, 2023",
    skills: ["C++", "CUDA"],
    category: "GPU Programming",
    starred: false
  }),
  new Project({
    title: "Igloo",
    description: "A reimagination of social tools, driven by organic interpersonal relationships. Currently, a prototype tested within a small community of 20+ users.",
    tagline: "Reimagination of social connections in the digital age",
    link: "https://www.igloo.place/",
    github: "https://github.com/marcowang01/Igloo",
    date: "Summer, 2022",
    skills: ["PHP", "Javascript", "Laravel", "React Native"],
    category: "X-platform App",
    starred: true
  }),
  new Project({
    title: "Dash",
    description: "A full-stack telemetry dashboard built for the NU Formula Racing team to visualize, persist and analyze data from the car's sensors in real-time.",
    tagline: "Real-time telemtry insights for NU Formula Racing",
    link: "",
    github: "https://github.com/NU-Formula-Racing/telemetry-remote-23",
    date: "Winter, 2022",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
    category: "Data Pipeline",
    starred: false
  }),
  new Project({
    title: "Bounce Knight",
    description: "A 2D fighting game built in Unity. The game features a fully animated characters and 3 unique stages.",
    tagline: "Dynamic 2D fighter with animated characters",
    link: "",
    github: "https://github.com/marcowang01/Bounce-Knight-Unity2D/tree/master",
    date: "Winter, 2021",
    skills: ["C#", "Unity"],
    category: "Game Dev",
    starred: false
  }),
  new Project({
    title: "News Analyzer",
    description: "A web app that uses machine learning to detect bias in news articles. The model is trained on a dataset of 1.3k news articles.",
    tagline: "Detection and classification of bias in news articles",
    link: "https://www.youtube.com/watch?v=2kNVx36dPOM&t=1s",
    github: "https://github.com/marcowang01/Article-Analyzer-Web/tree/master",
    date: "Winter, 2021",
    skills: ["Python", "Scikit-Learn", "Flask"],
    category: "Machine Learning",
    starred: false
  }),
  new Project({
    title: "Tetris",
    description: "An implementation of the classic game Tetris, built in C++.",
    tagline: "Clone of classic Tetris in C++",
    link: "",
    github: "https://github.com/marcowang01/Tetris_in_C",
    date: "Fall, 2021",
    skills: ["C", "C++"],
    category: "C++ Programming",
    starred: false
  }),
];

export default projects;

