import { Card, CardContent } from "@/components/ui/card"

import { project } from "@/db/portfolio"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

export default function Portofolio() {
  return (
    <section
      className="w-full bg-foreground/5 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      id="portofolio"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-tighter sm:text-4xl md:text-5xl">
          Portofolio
        </h2>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {project.slice(0, 8).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative cursor-pointer overflow-hidden bg-card">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={item.image}
                    alt={`Project ${item.title}`}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-card-foreground bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <div className="flex flex-col space-y-2 p-2 text-center">
                      <h2 className="text-lg font-semibold text-card sm:text-xl md:text-2xl">
                        {item.title}
                      </h2>
                      <span className="text-xs font-medium text-card sm:text-sm">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FIXME: jika project lebih dari 8, tampilkan button view all project mau gitu kah ? atau gimana ? */}
        {project.length > 8 && (
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Projects
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
