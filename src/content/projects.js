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
    title: "This Website",
    description: "This website was created using Next.js, a React framework. The source code is available on GitHub.",
    link: "marcowang.me",
    github: "https://github.com/marcowang01",
    date: "Winter, 2022",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
  }),
];

export default projects;

