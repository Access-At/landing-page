import { Card, CardContent } from "../ui/card"

import { teams } from "@/constant"
import { motion } from "framer-motion"

// FIXME: Images
export default function Teams() {
  return (
    <section className="w-full px-4 py-28 md:w-fit md:px-8" id="teams">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Meet Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {teams.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                <Card className="bg-transparent hover:border-primary">
                  <CardContent className="flex flex-col items-center p-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      alt={member.name}
                      className="mb-4 rounded-full"
                      height="100"
                      src={member.image}
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {member.position}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
