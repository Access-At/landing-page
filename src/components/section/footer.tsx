import { Instagram } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { companyName, navMenu } from "@/constant";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
            {/* FIXME: description */}
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            {/* FIXME: add address */}
            {/* <p className="text-sm">123 Main St, Anytown, USA 12345</p> */}
            <p className="text-sm">Email: accessdevtech@gmail.com</p>
            <p className="text-sm">Phone: +62 812-9300-5471</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dev.access/"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
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
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
