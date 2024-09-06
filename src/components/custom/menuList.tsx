import { cn } from "@/lib/utils"

interface MenuItem {
  title: string
  isActive: boolean
  href: string
}

export default function MenuList({ isActive, title, href }: MenuItem) {
  return (
    <li className="group relative py-2">
      <a
        href={href}
        className={cn(
          "block px-4 py-2 transition-colors duration-300 hover:bg-background hover:font-semibold hover:text-black md:p-0 md:hover:bg-transparent md:hover:font-normal md:hover:text-gray-300",
          isActive
            ? "bg-white font-semibold text-black hover:text-black md:bg-transparent md:text-white md:hover:text-white"
            : "",
        )}
      >
        {title}
      </a>
      <span
        className={cn(
          "absolute bottom-0 left-0 hidden h-0.5 w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100 md:block",
          isActive ? "scale-x-100" : "",
        )}
      ></span>
    </li>
  )
}
