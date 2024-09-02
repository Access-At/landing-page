import { ArrowRight } from "lucide-react"
import { Card } from "../ui/card"

// FIXME: title, description, card content services mau di isi apa?
export default function Services() {
  return (
    <section className="px-4 py-28 md:px-8" id="services">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-6">
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
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="space-y-4 bg-transparent p-4">
                <service.icon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </Card>
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
    title: "Marketing strategy and Data Solutions",
    description:
      "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more.",
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
    title: "Data Analytics and Solutions",
    description:
      "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more.",
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
    title: "Website Design and Development",
    description:
      "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more.",
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
    title: "Business Strategy And Solution",
    description:
      "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more.",
  },
]
