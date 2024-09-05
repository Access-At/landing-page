import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card } from "../ui/card"

// FIXME: title, description, card content services mau di isi apa?
export default function Services() {
  return (
    <section className="bg-foreground/5 px-4 py-28 md:px-8" id="services">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
              What Services We Provide
            </div>
            <h2 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              <span className="text-gray-500">Our Services</span>
              <br />
              services aligned
              <br />
              with your goals
            </h2>

            {/* FIXME: mau pake link ini buat apa ? */}
            <a
              href="#"
              className="inline-flex items-center text-sm hover:underline"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="space-y-4 border-primary bg-transparent p-4">
                  <service.icon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
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

const services = [
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
    title: "Custom Application Development",
    description:
      "We create tailored applications to meet specific business needs, enhance productivity, and deliver optimal user experiences. From web applications to mobile solutions, we provide innovative, secure, and seamlessly integrated solutions.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 16V4a2 2 0 0 1 2-2h11" />
        <path d="M5 14H4a2 2 0 1 0 0 4h1" />
        <path d="M22 18H11a2 2 0 1 0 0 4h11" />
        <path d="M11 6h4" />
        <path d="M12 2v8" />
        <path d="M15 22v-4" />
      </svg>
    ),
    title: "Digital Education Services",
    description:
      "We support digital transformation in education by developing modern, technology-based curricula. We help educational institutions prepare students for the future with relevant content and interactive digital learning tools.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    title: "Technology-Based Thesis Development",
    description:
      "We assist Computer Science students in creating innovative academic works using the latest approaches, in-depth research, and cutting-edge technology. Our support helps students develop solutions that meet academic standards while also aligning with industry needs.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Business Digital Transformation",
    description:
      "We collaborate with companies across various sectors to design and implement digital transformation strategies. From integrating new technologies and automating business processes to developing cloud-based solutions, we ensure businesses remain competitive and ready for future challenges.",
  },
]
