import { journeySteps } from "@/constant"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import JourneyStep from "../JourneyStep"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="w-full py-12 sm:py-20 md:py-28" id="about">
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
            {/* FIXME: description */}
            <p className="max-w-[900px] text-sm text-gray-500 dark:text-gray-400 sm:text-base md:text-lg lg:text-xl">
              From curious beginner to accomplished professional, embark on an
              exciting career in technology programming.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto mt-8 max-w-3xl sm:mt-10 md:mt-12">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {journeySteps.map((step, index) => (
              <JourneyStep key={index} {...step} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
