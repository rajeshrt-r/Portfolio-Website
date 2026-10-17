/**
 * ==============================================================================
 * CENTRALIZED CERTIFICATION DATASET (TypeScript Source)
 * Portfolio: Rajesh R — AI & Data Science Engineer
 * ==============================================================================
 */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: "AI & ML" | "Database" | "Programming" | "Cybersecurity" | "Internship" | "Computer Applications";
  filterCategory: "ai-ml" | "database" | "programming" | "cybersecurity" | "internship" | "applications";
  date?: string;
  credentialId?: string;
  badgeLabel: string;
  badgeColor: string;
  badgeIcon: string;
  description: string;
  technologies: string[];
  verificationUrl?: string;
  image?: string;
  featured?: boolean;
}

export const certificationsData: Certification[] = [
  {
    id: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    issuer: "Cappriciosec University",
    category: "Cybersecurity",
    filterCategory: "cybersecurity",
    date: "18 Jan 2026",
    credentialId: "8b319c5aaa096add1365",
    badgeLabel: "Cybersecurity",
    badgeColor: "#10B981",
    badgeIcon: "fa-shield-halved",
    image: "../../assets/images/cyber-security-and-ethical-hacking-certificate.jpg",
    description: "Completed 42 hours of advanced training in Linux, Go, Python, Wi-Fi hacking, Web/API/Mobile pentesting, Active Directory pentesting, and IoT hacking.",
    technologies: ["Cybersecurity", "Ethical Hacking", "Web/API Pentesting", "Active Directory", "Linux & Python", "IoT & Hardware Hacking"],
    verificationUrl: "https://university.cappriciosec.com/verify/8b319c5aaa096add1365",
    featured: false
  },
  {
    id: "java-fundamentals",
    title: "Java Fundamentals",
    issuer: "Uniq Technologies",
    category: "Programming",
    filterCategory: "programming",
    date: "Jan 2026",
    credentialId: "UQ25-0379",
    badgeLabel: "Programming",
    badgeColor: "#6366F1",
    badgeIcon: "fa-code",
    image: "../../assets/images/java-certificate.jpg",
    description: "Learned core Java concepts including OOP, collections, exception handling and problem solving.",
    technologies: ["Java", "OOP", "Data Structures", "Collections", "Exception Handling"],
    verificationUrl: "https://www.uniqtechnologies.co.in",
    featured: false
  },
  {
    id: "ui-ux-design-internship",
    title: "UI & UX Design Internship",
    issuer: "JCS Infotech",
    category: "Internship",
    filterCategory: "internship",
    date: "03 Jun 2026 – 30 Jun 2026",
    badgeLabel: "Design",
    badgeColor: "#A855F7",
    badgeIcon: "fa-pen-ruler",
    image: "../../assets/images/img-20260808-151740.jpg",
    description: "Completed a UI & UX Design internship at JCS Infotech with an Excellent performance evaluation.",
    technologies: ["UI Design", "UX Design", "Internship"],
    featured: false
  },
  {
    id: "ai-ml-internship",
    title: "AI & ML Internship",
    issuer: "MATT Engineering Solutions",
    category: "Internship",
    filterCategory: "internship",
    date: "12 Jan 2026 – 19 Jan 2026",
    badgeLabel: "Internship",
    badgeColor: "#F59E0B",
    badgeIcon: "fa-briefcase",
    image: "../../assets/images/img-20260808-144310.jpg",
    description: "Completed a practical AI & ML internship at MATT Engineering Solutions, Vadasery, covering applied machine learning, data analysis and problem solving during B.Tech II year at DMI Engineering College.",
    technologies: ["Artificial Intelligence", "Machine Learning", "Data Analysis", "Python", "Internship"],
    featured: false
  },
  {
    id: "diploma-computer-application",
    title: "Diploma in Computer Application",
    issuer: "Metro Soft Computers",
    category: "Computer Applications",
    filterCategory: "applications",
    date: "12 Dec 2020 – 06 Mar 2021",
    credentialId: "Reg. No.: 006312",
    badgeLabel: "Computer Applications",
    badgeColor: "#38BDF8",
    badgeIcon: "fa-laptop-code",
    image: "../../assets/images/img-20260808-144839.jpg",
    description: "Completed Diploma in Computer Application covering MS Office, programming basics, operating systems, and computer applications with Grade 'Excellent'.",
    technologies: ["Computer Applications", "MS Office", "Programming Fundamentals", "Operating Systems", "Grade: Excellent"],
    verificationUrl: "https://metrosoftcomputers.com/verify/006312",
    featured: false
  }
];
