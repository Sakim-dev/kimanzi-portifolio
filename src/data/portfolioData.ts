export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageName: string;
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institutionOrDetail: string;
  description: string;
}

export interface Achievement {
  title: string;
  category: 'certification' | 'challenge' | 'hackathon' | 'personal';
  detail: string;
  date: string;
}

export const projectsData: Project[] = [
  {
    id: 'student-management',
    title: 'Student Management System',
    description: 'A comprehensive management portal for schools to track student enrollments, attendance, grades, and fee payments. Features an administrative dashboard, secure roles, and dynamic report generation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    imageName: 'project-student',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description: 'A premium, modern portfolio showcasing skills and projects. Built using React, TypeScript, and Framer Motion with fluid animations, custom-generated graphics, and full light/dark mode support.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Vanilla CSS'],
    imageName: 'project-portfolio',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 'online-library',
    title: 'Online Library System',
    description: 'An interactive system for searching, borrowing, and managing books. Includes catalog search with filters, reservation management, overdue alerts, and database tracking for library administrators.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    imageName: 'project-library',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 'todo-app',
    title: 'To-Do Application',
    description: 'A minimalist task planner featuring category categorization, due dates, task urgency tagging, and responsive drag-to-reorder functionality with smooth micro-interactions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    imageName: 'project-todo',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 'login-auth',
    title: 'Secure Login & Authentication',
    description: 'A secure registration and authentication portal implementing industry-standard password hashing, session tokens, CSRF protection, and email verification workflows.',
    technologies: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'Sessions'],
    imageName: 'project-auth',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Backend',
    skills: ['PHP']
  },
  {
    title: 'Database',
    skills: ['MySQL']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code']
  }
];

export const learningSkillsData: string[] = ['React', 'Node.js', 'Express.js', 'MongoDB'];

export const educationData: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Bachelor of Science in Computer Science',
    institutionOrDetail: 'University of Computer Science',
    description: 'Focusing on software engineering principles, advanced database systems, algorithms, data structures, and web technologies. Building a strong theoretical and practical foundation for software development.'
  }
];

export const learningJourneyData: TimelineItem[] = [
  {
    year: 'Phase 1',
    title: 'Started Learning HTML & CSS',
    institutionOrDetail: 'Web Basics',
    description: 'Mastered semantic HTML5 markup and modern CSS layout techniques (Flexbox and Grid) to build clean, static layouts.'
  },
  {
    year: 'Phase 2',
    title: 'Learned JavaScript (ES6+)',
    institutionOrDetail: 'Dynamic Interactions',
    description: 'Gained a deep understanding of DOM manipulation, asynchronous programming, APIs, and basic object-oriented concepts.'
  },
  {
    year: 'Phase 3',
    title: 'Built First Responsive Website',
    institutionOrDetail: 'Mobile-First Design',
    description: 'Successfully deployed responsive, mobile-friendly websites applying fluid layouts, media queries, and responsive assets.'
  },
  {
    year: 'Phase 4',
    title: 'Learned MySQL & Database Design',
    institutionOrDetail: 'Data Engineering',
    description: 'Studied relational database modeling, normalization, transaction safety, complex joins, and writing performant SQL queries.'
  },
  {
    year: 'Phase 5',
    title: 'Currently Learning React & Fullstack Development',
    institutionOrDetail: 'Modern Web Stack',
    description: 'Diving into single-page application architecture, state management, component lifecycles, RESTful API design with Node.js, and MongoDB.'
  }
];

export const achievementsData: Achievement[] = [
  {
    title: 'Responsive Web Design Certification',
    category: 'certification',
    detail: 'Completed 300 hours of coursework on responsive styling, web accessibility, and CSS layouts on freeCodeCamp.',
    date: '2024'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    category: 'certification',
    detail: 'Certified in algorithms, basic data structures, OOP, and functional programming methodologies.',
    date: '2024'
  },
  {
    title: 'LeetCode & HackerRank Milestones',
    category: 'challenge',
    detail: 'Solved 150+ coding problems focusing on arrays, strings, dynamic programming, and binary search structures.',
    date: 'Ongoing'
  },
  {
    title: 'Annual Department Hackathon - Team Lead',
    category: 'hackathon',
    detail: 'Led a team of three to build a prototype library tracking system in 48 hours, placing in the top 5 projects.',
    date: '2025'
  },
  {
    title: 'Local Business Portal',
    category: 'personal',
    detail: 'Volunteered and built a clean responsive website and database inventory for a local store in his community.',
    date: '2025'
  }
];
