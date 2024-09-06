import { companyName, navMenu } from "@/constant"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import MenuList from "../custom/menuList"
import { Button } from "../ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

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
    (id: string) => {
      const element = document.getElementById(id)
      return element && activeSection === `#${id}`
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
          className="text-xl font-bold text-white transition-colors duration-300 md:text-2xl"
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
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
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
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={cn("flex flex-col md:flex-row md:gap-x-4")}
            >
              {navMenu.map((item, index) =>
                isMenuOpen ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <MenuList
                      id={item.id}
                      title={item.title}
                      isActive={isActive(item.id)}
                    />
                  </motion.div>
                ) : (
                  <MenuList
                    id={item.id}
                    title={item.title}
                    isActive={isActive(item.id)}
                  />
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </ul>
      </div>
    </nav>
  )
}
