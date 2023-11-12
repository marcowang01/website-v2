class Project {
  constructor({title, description, link, github, date, skills}) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.github = github;
    this.date = date;
    this.skills = skills;
  }
}

const projects = [
  new Project({
    title: "NV",
    description: "NV is a LLM-powered app that can create lecture notes and study guides from live lectures",
    link: "https://notetaker-git-master-marcowang01.vercel.app/",
    github: "https://github.com/marcowang01/notetaker",
    date: "Fall, 2023",
    skills: ["Typescript", "Next.js", "Supabase"]
  }),
  new Project({
    title: "Tomo",
    description: "Tomo is a real-time audio chatbot aimed at enhancing children’s learning through story‑driven dialogues. It is powered by OpenAI and elevenlabs.",
    link: "https://tomo-xi.vercel.app/",
    github: "",
    date: "Summer, 2023",
    skills: ["Python", "Typescript", "Next.js"]
  }),
  new Project({
    title: "PlatzUI",
    description: "An open-source personal website template for creatives built on Next.js. The component library is built for designers to streamline the design-to-implementation process.",
    link: "https://platz.ooo/",
    github: "https://github.com/szgbo/platz",
    date: "Winter, 2023",
    skills: ["Typescript", "Next.js"]
  }),
  new Project({
    title: "Igloo",
    description: "Igloo is a reimagination of a social tool driven by organic interpersonal relationships. Currently, a prototype tested within a small community of 20+ users.",
    link: "https://www.igloo.place/",
    github: "https://github.com/marcowang01/Igloo",
    date: "Summer, 2022",
    skills: ["PHP", "Javascript", "Laravel", "React Native"]
  }),
  new Project({
    title: "Dash",
    description: "Dash is a full-stack telemetry dashboard built for the NU Formula Racing team to visualize, persist and analyze data from the car's sensors in real-time.",
    link: "",
    github: "https://github.com/NU-Formula-Racing/telemetry-remote-23",
    date: "Winter, 2022",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
  }),
];

export default projects;

