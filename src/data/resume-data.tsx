import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { summary, verkadaFollowup, verkadaSummary } from "./summary";

export const RESUME_DATA = {
  name: "Thomas Wang",
  initials: "TW",
  location: "New York, NY",
  about: "Software Engineer at Robinhood | CS at Penn",
  summary: summary,
  interests:
    "Outside of tech, I love films, music, F1 racing, soccer (Real Madrid), and UFC.",
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
      company: "Robinhood",
      link: "https://robinhood.com",
      badges: [],
      title: "Software Engineer - Full Stack",
      start: "2024.10",
      end: "Present",
      description: "Building the Robinhood Credit Card product.",
      secondDescription: "",
    },
    {
      company: "Verkada",
      link: "https://verkada.com",
      badges: [],
      title: "Software Engineer - Full Stack",
      start: "2023.02",
      end: "2024.10",
      description: verkadaSummary,
      secondDescription: verkadaFollowup,
    },
    {
      company: "Salesforce",
      link: "https://salesforce.com",
      badges: [],
      title: "Software Engineer - Backend",
      start: "2021.12",
      end: "2023.01",
      description:
        "Implemented features to improve reliability and availability of Salesforce's key infrastructure, including Hadoop cluster, Docker Swarm cluster, Airflow, Postgres, and Jenkins.",
      secondDescription: "",
    },
    {
      company: "Microsoft",
      link: "https://microsoft.com/",
      badges: [],
      title: "Program Manager / Software Engineer Intern",
      start: "2021.07",
      end: "2021.09",
      description:
        "Designed optimizations to Azure Storage services to reduce cost of large-scale data and migrations. Implemented a new throttling service based on latency to reduce neighboorhood noise problem.",
      secondDescription: "",
    },
  ],
  skills: [
    "AWS",
    "Kubernetes/Docker",
    "PostgreSQL",
    "React/Next.js",
    "Airflow",
    "Redis",
    "BigQuery",
  ],
  languages: [
    "Python",
    "Scala",
    "Golang",
    "TypeScript",
    "JavaScript",
    "Java",
    "Bash",
    "SQL",
  ],
} as const;
