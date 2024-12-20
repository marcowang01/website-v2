class Experience {
  constructor({
    company,
    position,
    bulletpoints,
    date,
    location,
    skills,
    url,
  }) {
    this.company = company
    this.position = position
    this.bulletpoints = bulletpoints
    this.date = date
    this.location = location
    this.skills = skills
    this.url = url
  }
}

const expericences = {
  education: [
    new Experience({
      company: 'Northwestern University',
      position: 'B.A. in Physics, M.S. in Computer Science',
      bulletpoints: [
        // "GPA: 3.97/4.00",
        // "Relevant Coursework: Data Structures, Algorithms, Computer Systems, Machine Learning, Computer Vision, Quantum Mechanics, Electromagnetism, Statistical Mechanics, Linear Algebra, Differential Equations, Multivariable Calculus",
      ],
      date: '2020-2024',
      location: 'Evanston, IL',
      skills: [],
      url: 'https://www.northwestern.edu/',
    }),
  ],
  work: [
    new Experience({
      company: 'rabbit, inc.',
      position: 'Software Engineer',
      bulletpoints: [],
      date: 'Feb. 2024 - Present',
      location: 'Los Angeles, CA',
      skills: [],
      url: 'https://www.rabbit.tech/',
    }),
    new Experience({
      company: 'The Boring Company',
      position: 'Software Engineer Intern',
      bulletpoints: [
        'Led the development of a simulator for the Vegas Tunnel Loop to validate software systems and architectural designs',
        'Centralized maintenance for the vehicle fleet by building an issue tracker using ReactJS/PostgresSQL',
        'Built a physics engine and an automated testing pipeline for simulating vehicles and passengers with ≥ 90% accuracy',
      ],
      date: 'Jun. 2023 - Aug. 2023',
      location: 'Las Vegas, NV',
      skills: ['Go', 'C#', 'ReactJS', 'PostgresSQL', 'NodeJS', 'Bazel'],
      url: 'https://www.boringcompany.com/',
    }),
    new Experience({
      company: 'Workiva',
      position: 'Software Engineer Intern',
      bulletpoints: [
        'Contributed to backend services for font management and file I/O in an online document editor using Java and Go',
        'Automated a weekly font upload task using a browser-based client with PHP and Bash, reducing time spent by 90%',
        'Improved color accuracy on PDF export for charts, fonts, and images',
        'Designed and built a smoke testing suite using Puppeteer',
      ],
      date: 'Jun. 2022 - Aug. 2022',
      location: 'Chicago, IL',
      skills: ['Java', 'Go', 'PHP', 'Bash', 'Puppeteer'],
      url: 'https://www.workiva.com/',
    }),
    new Experience({
      company: 'Northwestern Tiilt Lab',
      position: 'Research Intern',
      bulletpoints: [
        'Collaborated on building an audio processing server for real-time learning analytics for a data-capture device',
        'Engineered a real-time speaker diarization service using PyTorch, boosting accuracy by 25%',
        'Implemented a multi-threaded audio buffer, enhancing diarization runtime performance by 50%',
        'Reverse-engineered legacy code to integrate advanced speech recognition models, improving accuracy by 50%',
      ],
      date: 'Sep. 2021 - May. 2022',
      location: 'Evanston, IL',
      skills: [
        'PyTorch',
        'Javascript',
        'Audio Processing',
        'Speech Recognition',
      ],
      url: 'https://tiilt.northwestern.edu/projects/blinc/index.html',
    }),
  ],
}

export default expericences
