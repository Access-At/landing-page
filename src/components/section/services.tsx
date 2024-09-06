import { services } from "@/constant/db/services"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card } from "../ui/card"

export default function Services() {
  return (
    <section
      className="bg-foreground/5 px-4 py-16 sm:py-20 md:px-8 lg:py-28"
      id="services"
    >
      <div className="container mx-auto">
        <div className="grid items-start gap-8 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-white sm:text-sm">
              What Services We Provide
            </div>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-gray-500">Our Services</span>
              <br />
              services aligned
              <br className="hidden sm:block" />
              with your goals
            </h2>

            <a
              href="#"
              className="inline-flex items-center text-xs hover:underline sm:text-sm"
            >
              View All Services
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="space-y-3 border-primary bg-transparent p-3 sm:space-y-4 sm:p-4">
                  <service.icon className="h-8 w-8 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
