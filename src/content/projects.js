class Project {
  constructor({title, description, tagline, link, github, date, skills, starred}) {
    this.title = title;
    this.description = description;
    this.tagline = tagline;
    this.link = link;
    this.github = github;
    this.date = date;
    this.skills = skills;
    this.starred = starred;
  }
}

const projects = [
  new Project({
    title: "Scribe",
    description: "Scribe is an AI-powered wep app that can create lecture notes and study guides in real-time from live lectures.",
    tagline: "AI-powered lecture notes",
    link: "https://notetaker-git-master-marcowang01.vercel.app/",
    github: "https://github.com/marcowang01/notetaker",
    date: "Fall, 2023",
    skills: ["Typescript", "Next.js", "Supabase"],
    starred: true
  }),
  new Project({
    title: "Tomo",
    description: "Tomo is a real-time audio-based chatbot aimed at enhancing children’s learning through story‑driven dialogues.",
    tagline: "Real-time audio-based chatbot",
    link: "https://tomo-git-mw-new-controls-yulilith.vercel.app/",
    github: "",
    date: "Summer, 2023",
    skills: ["Python", "Typescript", "Next.js"],
    starred: true
  }),
  new Project({
    title: "Realm",
    description: "Realm (Retrieval Augmented Language Model) is an LLM pipeline that leverages vector databases to improve performance and reduce costs for question answering tasks.",
    tagline: "LLM pipeline",
    link: "https://www.boboland.xyz/llm",
    github: "https://github.com/marcowang01/realm",
    date: "Spring, 2023",
    skills: ["Python", "Modal", "Langchain", "ChromaDB"],
    starred: false
  }),
  new Project({
    title: "PlatzUI",
    description: "Platz is an open-source personal website template for creatives, with a focus on streamlining the design-to-implementation process.",
    tagline: "Open-source personal website template",
    link: "https://platz.ooo/",
    github: "https://github.com/szgbo/platz",
    date: "Winter, 2023",
    skills: ["Typescript", "Next.js"],
    starred: true
  }),
  new Project({
    title: "Igloo",
    description: "Igloo is a reimagination of social tools, driven by organic interpersonal relationships. Currently, a prototype tested within a small community of 20+ users.",
    tagline: "Social tools for small communities",
    link: "https://www.igloo.place/",
    github: "https://github.com/marcowang01/Igloo",
    date: "Summer, 2022",
    skills: ["PHP", "Javascript", "Laravel", "React Native"],
    starred: true
  }),
  new Project({
    title: "Dash",
    description: "Dash is a full-stack telemetry dashboard built for the NU Formula Racing team to visualize, persist and analyze data from the car's sensors in real-time.",
    tagline: "Full-stack telemetry dashboard",
    link: "",
    github: "https://github.com/NU-Formula-Racing/telemetry-remote-23",
    date: "Winter, 2022",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
    starred: false
  }),
];

export default projects;

