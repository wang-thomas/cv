import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Thomas Wang",
  initials: "TW",
  location: "San Francisco, CA",
  about: "Software Engineer at Verkada | CS at Penn",
  summary:
    "As a software engineer with full stack experience, I'm passionate about building impactful products and writing great code. I started my career at Salesforce and have now moved into the startup space. I'm currently working on a new web app that will be the first ecommerce site for my company, Verkada - using Next.js and Golang.\n",
  interests:
    "In my personal time, I love films, music, F1 racing, soccer (Real Madrid), and UFC.",
  avatarUrl: "https://github.com/wang-thomas.png",
  contact: {
    email: "wtpthomas@gmail.com",
    tel: "9143109545",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/wang-thomas",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wtpthomas/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Pennsylvania",
      degree: "Bachelors of Science in Computer Science, Economics",
      start: "2017",
      end: "2021",
    },
    {
      school: "University of Pennsylvania",
      degree: "Masters of Science in Computer Science",
      start: "2020",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Verkada",
      link: "https://verkada.com",
      badges: [],
      title: "Software Engineer - Full Stack",
      start: "2022",
      end: "Present",
      description:
        "Building the first ecommerce site for Verkada, using Next.js and Golang. The web store allows customers to directly browse deals, purchase products, and manage orders. It signinicantly reduces time to purchase (TTP) and increases purchase volume and profitability.",
    },
    {
      company: "Salesforce",
      link: "https://salesforce.com",
      badges: [],
      title: "Software Engineer - Backend",
      start: "2021",
      end: "2022",
      description:
        "Implemented features to improve reliability and availability of Salesforce's key infrastructure, including Hadoop cluster, Docker Swarm cluster, Airflow, Postgres, and Jenkins.",
    },
    {
      company: "Microsoft",
      link: "https://microsoft.com/",
      badges: [],
      title: "Program Manager / Software Engineer Intern",
      start: "2021",
      end: "2021",
      description:
        "Designed optimizations to Azure Storage services to reduce cost of large-scale data and migrations. Implemented a new throttling service based on latency to reduce neighboorhood noise problem.",
    },
  ],
  skills: [
    "AWS",
    "Airflow",
    "React/Next.js",
    "Kubernetes/Docker",
    "PostgreSQL",
    "Redis",
    "BigQuery",
  ],
  languages: [
    "Python",
    "Golang",
    "Java",
    "TypeScript",
    "JavaScript",
    "Bash",
    "SQL",
  ],
} as const;
