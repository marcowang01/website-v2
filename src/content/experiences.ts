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
      company: 'rabbit, inc.',
      position: 'Software Engineer',
      bulletpoints: [
        'Spearheaded development of LAM Playground (Large Action Model), processing 10K+ monthly interactions, launching one of the first consumer facing computer-use AI assistants with 85% accuracy',
        'Led redesign of core AI agent architecture implementing hierarchical planning system handling 50+ action types, reducing task failures by 30%',
        'Pioneered LLM-based generative UI system enabling real-time interface customization, resulting in 60% of users creating personalized layouts and increasing daily user retention',
        'Built the user web portal (rabbithole) from 0-to-1, iteratively refined through 2 major UX revisions, supporting 80K+ users and reducing onboarding-related support tickets by 70%',
        'Developed internet search and memory retrieval system handling 50K+ daily queries, enabling assistant to process complex multi-turn requests, improving response accuracy',
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
        'Developed a full-stack fleet maintenance tracking platform using React/TypeScript, PostgreSQL, reducing vehicle downtime and consolidating 100+ monthly maintenance tickets with 30+ hour monthly time savings',
        'Architected and deployed a simulator for the Vegas Tunnel Loop, enabling validation of collision safety systems and future station designs',
        'Built a physics engine that simulated vehicle dynamics and passenger flow with ≥ 90% accuracy, enabling high-fidelity capacity planning',
        'Implemented a cache-based path-finding algorithm for the simulator, reducing average compute time from 3 minutes to 10 seconds',
        'Created a regulatory compliance dashboard monitoring 200+ processes, improving completion rates by 25% through automated alerts and reducing compliance audit preparation times',
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
        'Improved document processing efficiency and reliability for an online document editor using Java and Go, focusing on fonts and file I/O',
        'Automated a critical weekly font upload process by building a browser-based client using PHP and Bash, reducing time spent by 90%',
        'Improved document color fidelity by 20% on PDF export for charts, fonts, and images by integrating API endpoints with open-source software',
        'Designed and built a smoke testing suite using Puppeteer, improving code coverage and efficiency of detecting breaking changes',
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
        'Collaborated on building an audio processing server for real-time learning analytics for a data-capture device',
        'Engineered a real-time speaker diarization service using PyTorch, boosting accuracy by 25%',
        'Implemented a multi-threaded audio buffer, enhancing diarization runtime performance by 50%',
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
