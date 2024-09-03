import { motion } from "framer-motion"
import { useRef } from "react"

export default function JourneyStep({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType
  title: string
  description: string
  index: number
}) {
  const ref = useRef(null)

  return (
    <motion.li
      ref={ref}
      className="mb-6 ml-6 sm:mb-8 sm:ml-8 md:mb-10 md:ml-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      key={index}
    >
      <span className="sm:ring-6 absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:-left-4 sm:h-8 sm:w-8 md:-left-5 md:h-10 md:w-10 md:ring-8">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </span>
      <h3 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white sm:text-lg md:text-xl">
        {title}
      </h3>
      <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400 sm:mb-3 sm:text-base md:mb-4 md:text-lg">
        {description}
      </p>
    </motion.li>
  )
}
