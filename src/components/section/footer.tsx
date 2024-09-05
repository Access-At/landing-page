import { buttonVariants } from "@/components/ui/button"
import { companyName, companyTextSubHeading, navMenu } from "@/constant"
import { settings } from "@/db/settings"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="mb-4 text-2xl font-bold">{companyName}</h2>
            {/* FIXME: description */}
            <p className="text-sm">{companyTextSubHeading}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            {/* FIXME: add address */}
            <p className="text-sm">Address: {settings.address}</p>
            <p className="text-sm">Email: {settings.email}</p>
            <p className="text-sm">Phone: {settings.phone}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dev.access/"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                )}
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* FIXME: add linkedin url */}
              {/* <a
                href="https://www.instagram.com/dev.access/"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                aria-label="Instagram"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-primary-foreground/10 pt-8 text-center"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
