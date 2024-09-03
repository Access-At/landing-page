import { Button } from "../ui/button"
import { motion } from "framer-motion"

// FIXME: title, description, and button mau ada apa ngga?
export default function Banner() {
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
            Welcome to Our Awesome Site
          </motion.h1>
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Discover amazing features and services that will revolutionize your
            experience.
          </motion.p>

          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-transparent sm:w-auto"
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
