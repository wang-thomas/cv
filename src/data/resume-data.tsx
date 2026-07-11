import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { summary } from "./summary";

export const RESUME_DATA = {
  name: "Thomas Wang",
  initials: "TW",
  location: "New York, NY",
  about: "Software Engineer at Robinhood | CS at Penn",
  summary: summary,
  interests:
    "Outside of tech, I love films, music, F1 racing, soccer (Real Madrid), and the UFC.",
  avatarUrl: "/avatar.jpeg",
  contact: {
    email: "wtpthomas@gmail.com",
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
      degree: "Masters of Science in Computer Science",
      start: "2020",
      end: "2021",
    },
    {
      school: "University of Pennsylvania",
      degree: "Bachelors of Science in Computer Science, Economics",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Perplexity AI",
      link: "https://perplexity.ai",
      badges: [],
      title: "Member of Technical Staff",
      start: "2026",
      end: "Present",
      description: (
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Incoming member of technical staff on the Agent Capabilities team.
          </li>
        </ul>
      ),
      secondDescription: "",
    },
    {
      company: "Robinhood",
      link: "https://robinhood.com",
      badges: [],
      title: "Software Engineer - Full Stack",
      start: "2024",
      end: "2026",
      description: (
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Built Robinhood Banking 0-to-1 as part of the founding 20-engineer
            team.
          </li>
          <li>
            Delivered Banking product verticals end-to-end across Scala backend
            and React Native/TypeScript frontend, including joint and child
            accounts, identity and invitation flows, access controls, account
            conversions, scheduled and recurring transfers, and debit card
            experiences.
          </li>
          <li>
            Shipped premium credit card upgrade and points-reservation systems,
            improving credit unit economics by 35% as a point redemption option
            and extending the float period before reward cost realization.
          </li>
        </ul>
      ),
      secondDescription: "",
    },
    {
      company: "Verkada",
      link: "https://verkada.com",
      badges: [],
      title: "Software Engineer - Full Stack",
      start: "2023",
      end: "2024",
      description: (
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Launched Verkada Store, the company&apos;s first ecommerce app,
            using Next.js and Golang.
          </li>
          <li>
            Enabled customers to browse deals, purchase products, and manage
            orders directly, reducing time to purchase and increasing purchase
            volume and profitability.
          </li>
          <li>
            Built Concierge, a supply-chain management tool for real-time
            monitoring and adjustment of Verkada orders, improving operational
            efficiency and reducing time to ship.
          </li>
        </ul>
      ),
      secondDescription: "",
    },
    {
      company: "Salesforce",
      link: "https://salesforce.com",
      badges: [],
      title: "Software Engineer - Backend",
      start: "2021",
      end: "2023",
      description: (
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Improved reliability and availability across Salesforce&apos;s core
            infrastructure.
          </li>
          <li>
            Built backend features and operational improvements for Hadoop,
            Docker Swarm, Airflow, Postgres, and Jenkins.
          </li>
        </ul>
      ),
      secondDescription: "",
    },
    {
      company: "Microsoft",
      link: "https://microsoft.com/",
      badges: [],
      title: "Program Manager / Software Engineer Intern",
      start: "2021",
      end: "2021",
      description: (
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Designed Azure Storage optimizations to reduce the cost of
            large-scale data migrations.
          </li>
          <li>
            Implemented a latency-based throttling service to reduce noisy
            neighbor issues.
          </li>
        </ul>
      ),
      secondDescription: "",
    },
  ],
  skills: [
    "AWS",
    "React/React Native",
    "Kubernetes",
    "PostgreSQL",
    "Next.js",
    "Airflow",
    "Redis",
    "BigQuery",
  ],
  languages: [
    "Scala",
    "Golang",
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "Bash",
    "SQL",
  ],
} as const;
