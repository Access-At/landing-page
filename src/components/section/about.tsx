import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="w-full py-28 md:py-44" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              About
            </h2>
            <p className="max-w-[900px] text-sm text-gray-500 dark:text-gray-400 sm:text-base md:text-lg lg:text-xl">
              Access Dev Tech is a leader in digital innovation, providing
              solutions that empower businesses and individuals to adapt and
              thrive in a dynamic digital era. We focus on developing advanced
              technologies that support digital transformation through creative
              and collaborative approaches.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
