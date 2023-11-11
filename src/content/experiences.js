class Experience {
    constructor({company, position, bulletpoints, date, location, skills}) {
        this.company = company;
        this.position = position;
        this.bulletpoints = bulletpoints;
        this.date = date;
        this.location = location;
        this.skills = skills;
    }
}

const expericences = {
  education : [
    new Experience({
      company: "Northwetsern University",
      position: "MS in Computer Science, BA in Physics",
      bulletpoints: [
        // "GPA: 3.97/4.00",
        // "Relevant Coursework: Data Structures, Algorithms, Computer Systems, Machine Learning, Computer Vision, Quantum Mechanics, Electromagnetism, Statistical Mechanics, Linear Algebra, Differential Equations, Multivariable Calculus",
      ],
      date: "2020-2024",
      location: "Evanston, IL",
      skills: []
    }),
  ],
  work: [
    new Experience({
      company: "Google",
      position: "Software Engineering Intern",
      bulletpoints: [
        "Worked on the Google Cloud Platform (GCP) Console, a web-based UI for GCP customers to manage their cloud resources.",
        "Implemented a new feature that allows users to view and manage their Cloud Storage buckets and objects.",
        "Used TypeScript, Angular, and Google Cloud APIs.",
      ],
      date: "Summer, 2021",
      location: "Mountain View, CA",
      skills: ["TypeScript", "Angular", "JavaScript", "HTML", "CSS"]
    }),
  ]
}


export default expericences;