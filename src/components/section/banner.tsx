import { companyTextHeading, companyTextSubHeading } from "@/constant"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

export default function Banner() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="banner" id="home">
      <div className="banner-container">
        <div className="banner-wrapper">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {companyTextHeading}
          </motion.h1>
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {companyTextSubHeading}
          </motion.p>

          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="polygon"></div>
    </section>
  )
}
