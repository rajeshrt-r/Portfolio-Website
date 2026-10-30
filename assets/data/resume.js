/**
 * ==============================================================================
 * CENTRALIZED RESUME & PROFILE DATASET
 * Portfolio: Rajesh R — AI & Data Science Engineer
 * ==============================================================================
 */

/**
 * @typedef {Object} ProfileData
 * @property {string} name
 * @property {string} title
 * @property {string} status
 * @property {string} bio
 * @property {string} location
 * @property {string} dob
 * @property {string} careerGoal
 * @property {string} email
 * @property {string} github
 * @property {string} linkedin
 * @property {string} resumePdfUrl
 */

export const profileData = {
  name: "Rajesh R",
  title: "AI & Data Science Engineer",
  status: "Engineering Student",
  bio: "I'm a passionate and curious learner, currently pursuing my engineering degree. I enjoy solving real-world problems with technology, especially in AI, Data Science and system design.",
  location: "India",
  dob: "16 April 2006",
  careerGoal: "Become a skilled AI/ML Engineer and build impactful solutions.",
  email: "rajeshrt.work@gmail.com",
  github: "https://github.com/rajeshrt-r",
  linkedin: "https://linkedin.com/in/rajesh-r",
  resumePdfUrl: "../resume.pdf"
};

export const educationHistory = [
  {
    title: "B.E. Computer Science & Engineering",
    status: "Pursuing",
    institution: "Engineering Institution",
    expectedGraduation: "2026",
    focus: "AI, Data Science, Algorithms & System Architecture"
  },
  {
    title: "Higher Secondary (12th)",
    status: "Completed",
    institution: "Tamil Nadu State Board",
    year: "2024",
    focus: "Physics, Chemistry, Mathematics"
  },
  {
    title: "Secondary (10th)",
    status: "Completed",
    institution: "Tamil Nadu State Board",
    year: "2022",
    achievement: "2nd Rank"
  }
];

export const groupedSkills = {
  programming: {
    category: "Programming",
    icon: "fa-code",
    skills: ["Python", "Java", "C", "JavaScript"]
  },
  ai_ml: {
    category: "AI & ML",
    icon: "fa-brain",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Data Analysis"]
  },
  web: {
    category: "Web Development",
    icon: "fa-globe",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  databases: {
    category: "Databases",
    icon: "fa-database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  tools: {
    category: "Tools & Others",
    icon: "fa-wrench",
    skills: ["Git & GitHub", "VS Code", "Linux", "Docker"]
  }
};

export const verifiedExperience = [
  {
    role: "AI & ML Intern",
    organization: "MATT Engineering Solutions",
    period: "12 Jan 2026 – 19 Jan 2026",
    responsibilities: [
      "Worked on real-world AI and ML projects.",
      "Gained hands-on experience in model building, data analysis and problem solving.",
      "Used Python and various ML libraries."
    ]
  }
];

export const selectedProjects = [
  {
    name: "AI Health Assistant",
    description: "Machine learning model to predict disease risk from health data and provide personalized recommendations.",
    technologies: ["Python", "ML", "Streamlit", "Scikit-Learn"],
    link: "projects.html"
  },
  {
    name: "Student Performance Analysis",
    description: "Data analysis and visualization pipeline to identify academic performance patterns and factors.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "projects.html"
  },
  {
    name: "Personal Finance Tracker",
    description: "Full-stack web application to log transactions, set budgets, and visualize spending habits.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "projects.html"
  },
  {
    name: "Carbon Footprint Analyzer",
    description: "AI-assisted sustainability tool estimating individual carbon impact and suggesting greener choices.",
    technologies: ["Python", "Machine Learning", "Data"],
    link: "projects.html"
  }
];
