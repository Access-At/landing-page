import { BookOpen, Briefcase, Code, Rocket, Trophy, Users } from "lucide-react"
import { navMenuType, teamsType } from "./types"

import bayu from "@/assets/images/bayu.jpeg"
import farhan from "@/assets/images/farhan.jpg"
import rizsyad from "@/assets/images/rizsyad.jpeg"

// FIXME: images for team
export const teams: teamsType[] = [
  {
    name: "Bayu Priyambada, S.Kom",
    position: "CEO, Project Manager, Mentor",
    image: bayu,
  },
  {
    name: "Rizsyad Abiyandra Riadi",
    position: "CTO, Engineer",
    image: rizsyad,
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

export const navMenu: navMenuType[] = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Services", id: "services" },
  { title: "Products", id: "products" },
  { title: "Portofolio", id: "portofolio" },
  { title: "Teams", id: "teams" },
]

// FIXME: content Products

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

export const companyName = "Access Dev Tech"
export const companyTextHeading = `Welcome to ${companyName}`
export const companyTextSubHeading =
  "Provider of Application Services, Digital Innovation, and IT Curriculum for Education."
