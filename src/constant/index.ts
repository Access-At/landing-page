import { navMenuType, teamsType } from "./types"

import bayu from "@/assets/images/bayu.jpeg"
import farhan from "@/assets/images/farhan.jpg"
import rizsyad from "@/assets/images/rizsyad.jpeg"

// FIXME: images for team 1 again
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

export const companyName = "Access Dev Tech"
export const companyTextHeading = `Welcome to ${companyName}`
export const companyTextSubHeading =
  "Provider of Application Services, Digital Innovation, and IT Curriculum for Education."
