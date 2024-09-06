import { companyName, navMenu } from "@/constant"
import { motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import MenuList from "../custom/menuList"
import { Button } from "../ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("#home")

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    const scrollThreshold = 50
    setIsScrolled(scrollPosition > scrollThreshold)

    const sections = document.querySelectorAll("section")
    let currentSection = "#home"
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        currentSection = "#" + section.id
      }
    })
    setActiveSection(currentSection)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isActive = useCallback(
    (href: string) => {
      return activeSection === href
    },
    [activeSection],
  )

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-foreground shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <a
          href="/"
          className="text-2xl font-bold text-white transition-colors duration-300"
        >
          {companyName}
        </a>
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            size="icon"
            className="cursor-pointer text-white hover:bg-transparent hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                animate={{
                  d: isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </Button>
        </div>
        <ul
          className={cn(
            "text-white md:static md:flex md:space-x-6 md:bg-transparent md:shadow-none",
            isMenuOpen
              ? "absolute left-0 top-full block w-full bg-foreground shadow-lg"
              : "hidden",
          )}
        >
          {navMenu.map((item, index) => (
            <MenuList
              key={index}
              href={item.href}
              title={item.title}
              isActive={isActive(item.href)}
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}
