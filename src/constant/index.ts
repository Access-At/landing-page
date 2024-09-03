import farhan from "@/assets/images/Farhan.jpg"
import {
  BarChart,
  BookOpen,
  Briefcase,
  Code,
  Cpu,
  Rocket,
  Shield,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

// FIXME: images for team
export const teams = [
  {
    name: "Bayu Priyambada",
    position: "CEO, Project Manager",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
  },
  {
    name: "Rizsyad Abiyandra Riadi",
    position: "CTO, Engineer",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
  },
  {
    name: "Farhan Reizha Fauzan",
    position: "CTO, Engineer",
    image: farhan,
  },
  {
    name: "Muhamad Arya",
    position: "Fullstack Engineer",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
  },
]

export const navMenu = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Products", href: "#products" },
  { title: "Portofolio", href: "#portofolio" },
  { title: "Teams", href: "#teams" },
]

// FIXME: content Project portofolio
export const project = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=2",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=3",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=5",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=6",
  },
  {
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=7",
  },
  {
    title: "Project 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=8",
  },
  {
    title: "Project 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",

    image: "https://picsum.photos/200/300?random=9",
  },
]

// FIXME: content Products
export const products = [
  {
    icon: Cpu,
    title: "Advanced AI",
    description:
      "Cutting-edge artificial intelligence solutions for your business needs.",
  },
  {
    icon: Shield,
    title: "Robust Security",
    description:
      "State-of-the-art security measures to protect your valuable data.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed, our products ensure swift and efficient operations.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description:
      "Powerful analytics tools to derive meaningful insights from your data.",
  },
]

// FIXME: content About
export const journeySteps = [
  {
    icon: BookOpen,
    title: "Learn the Basics",
    description:
      "Start with fundamental concepts and choose your first programming language.",
  },
  {
    icon: Code,
    title: "Build Projects",
    description:
      "Apply your skills to real-world projects and start building your portfolio.",
  },
  {
    icon: Users,
    title: "Collaborate and Network",
    description:
      "Join coding communities, contribute to open-source, and expand your professional network.",
  },
  {
    icon: Briefcase,
    title: "Land Your First Job",
    description:
      "Secure an internship or entry-level position to gain professional experience.",
  },
  {
    icon: Trophy,
    title: "Advance Your Career",
    description:
      "Take on more challenging projects and grow into senior roles.",
  },
  {
    icon: Rocket,
    title: "Innovate and Lead",
    description:
      "Drive technological advancements and mentor the next generation of programmers.",
  },
]

export const companyName = "Access Tech"
