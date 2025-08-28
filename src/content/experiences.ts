export interface Experience {
  company: string
  position: string
  bulletpoints: string[]
  date: string
  location: string
  skills: string[]
  url: string
}

const expericences = {
  work: [
    {
      company: 'Sierra',
      position: 'Agent Engineer',
      bulletpoints: ['Building conversational AI agents'],
      date: 'Jun. 2025 - Present',
      location: 'San Francisco, CA',
      skills: [],
      url: 'https://sierra.ai/',
    },
    {
      company: 'Exa',
      position: 'Software Engineer',
      bulletpoints: [
        "Worked on websets, an agentic research tool powered by Exa's search engine",
      ],
      date: 'Apr. 2025 - Jun. 2025',
      location: 'San Francisco, CA',
      skills: ['Node.js', 'NestJS', 'Next.js', 'ClickHouse'],
      url: 'https://www.exa.ai/',
    },
    {
      company: 'rabbit inc.',
      position: 'Software Engineer',
      bulletpoints: [
        'Designed and built a browser-using conversation AI assistant for the r1 device',
        'Built a generative UI system enabling real-time on-deviceinterface customization',
        'Built the rabbit user portal from scratch, supporting 80K+ users for onboarding and device management',
      ],
      date: 'Feb. 2024 - Mar. 2025',
      location: 'Los Angeles, CA',
      skills: ['Node.js', 'Next.js', 'MongoDB'],
      url: 'https://www.rabbit.tech/',
    },
    {
      company: 'The Boring Company',
      position: 'Software Engineer Intern',
      bulletpoints: [
        'Created a simulator for the Vegas Loop using a game engine, used for capacity planning and testing tunnel software',
        'Developed a full-stack maintenance issue tracking app for the entire vehicle fleet',
        'Built a physics engine that simulated vehicle dynamics and passenger flow with ≥ 90% accuracy',
      ],
      date: 'Jun. 2023 - Aug. 2023',
      location: 'Las Vegas, NV',
      skills: ['Go', 'C#', 'ReactJS', 'PostgresSQL', 'Node.js', 'Bazel'],
      url: 'https://www.boringcompany.com/',
    },
    {
      company: 'Workiva',
      position: 'Software Engineer Intern',
      bulletpoints: [
        'Improved document processing efficiency and reliability for an online document editor, focusing on fonts and file I/O',
      ],
      date: 'Jun. 2022 - Aug. 2022',
      location: 'Chicago, IL',
      skills: ['Java', 'Go', 'PHP', 'Bash', 'Puppeteer'],
      url: 'https://www.workiva.com/',
    },
    {
      company: 'Blinc, NU Tiilt Lab',
      position: 'Research Intern',
      bulletpoints: [
        'Worked on audio processing for a recording device that provided real-time learning analytics in the classroom',
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
    },
  ],
  education: [
    {
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
    },
  ],
}

export default expericences
