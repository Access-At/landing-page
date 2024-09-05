import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

// Debounce function
const debounce = (func: (...args: unknown[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout
  return (...args: unknown[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait) as unknown as NodeJS.Timeout
  }
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    const debouncedToggleVisibility = debounce(toggleVisibility, 200)
    window.addEventListener("scroll", debouncedToggleVisibility)

    return () => {
      window.removeEventListener("scroll", debouncedToggleVisibility)
    }
  }, [toggleVisibility])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-50 animate-bounce"
        >
          <Button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full p-2 shadow-lg"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
