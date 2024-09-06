import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

interface MenuItem {
  title: string
  id: string
  isActive: boolean | null
}

export default function MenuList({ isActive, title, id }: MenuItem) {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <li className="group relative">
      <Button
        onClick={() => handleScrollToSection(id)}
        variant="ghost"
        className={cn(
          "block w-full rounded-none text-left transition-colors duration-300 hover:bg-background hover:font-semibold hover:text-black md:p-0 md:hover:bg-transparent md:hover:font-medium md:hover:text-gray-300",
          isActive
            ? "bg-white font-semibold text-black hover:text-black md:bg-transparent md:text-white md:hover:font-semibold md:hover:text-white"
            : "",
        )}
      >
        {title}
      </Button>
      <span
        className={cn(
          "absolute bottom-0 left-0 hidden h-0.5 w-full bg-white transition-all duration-300 md:block",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      ></span>
    </li>
  )
}
