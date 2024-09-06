import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { products } from "@/constant/db/products"
import { motion } from "framer-motion"

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28" id="products">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Our Products
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[900px] text-sm text-gray-500 dark:text-gray-400 sm:text-base md:text-lg lg:text-xl"
          >
            Discover our innovative tech solutions designed to revolutionize
            your business
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex h-full flex-col items-center border-primary bg-transparent text-center">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <product.icon className="mb-2 h-6 w-6 text-primary sm:h-7 sm:w-7 md:h-8 md:w-8" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
