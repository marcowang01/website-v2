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
      company: 'rabbit inc.',
      position: 'Software Engineer',
      bulletpoints: [
        'Building personal AI assistants that can interact with the world',
      ],
      date: 'Feb. 2024 - Present',
      location: 'Los Angeles, CA',
      skills: ['Node.js', 'Next.js', 'MongoDB'],
      url: 'https://www.rabbit.tech/',
    },
    {
      company: 'The Boring Company',
      position: 'Software Engineer Intern',
      bulletpoints: [
        'Developed a full-stack fleet maintenance platform, reducing vehicle downtime and consolidating 100+ maintenance tickets',
        'Architected a simulator for the Vegas Tunnel Loop, enabling validation of collision safety systems and future station designs',
        'Built a physics engine that simulated vehicle dynamics and passenger flow with ≥ 90% accuracy',
        'Created a regulatory compliance dashboard with automated alerts to monitor 200+ safety and compliance processes',
      ],
      date: 'Jun. 2023 - Aug. 2023',
      location: 'Las Vegas, NV',
      skills: ['Go', 'C#', 'ReactJS', 'PostgresSQL', 'Node.js', 'Bazel'],
      url: 'https://www.boringcompany.com/',
    },
    {
      company: 'Workiva Inc.',
      position: 'Software Engineer Intern',
      bulletpoints: [
        'Improved document processing efficiency and reliability for an online document editor, focusing on fonts and file I/O',
        'Automated a weekly font upload process by building a browser-based client, reducing time spent by 90%',
        'Improved document color fidelity by 20% on PDF export for charts, fonts, and images',
        'Designed and built a smoke testing suite, improving code coverage and efficiency of detecting breaking changes',
      ],
      date: 'Jun. 2022 - Aug. 2022',
      location: 'Chicago, IL',
      skills: ['Java', 'Go', 'PHP', 'Bash', 'Puppeteer'],
      url: 'https://www.workiva.com/',
    },
    {
      company: 'Northwestern Tiilt Lab',
      position: 'Research Intern',
      bulletpoints: [
        // 'Collaborated on building an audio processing server for real-time learning analytics for a data-capture device',
        // 'Engineered a real-time speaker diarization service, boosting accuracy by 25%',
        // 'Implemented a multi-threaded audio buffer, enhancing diarization runtime performance by 50%',
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
