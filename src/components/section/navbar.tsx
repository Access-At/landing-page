import { useEffect, useState } from "react";
import { companyName, navMenu } from "@/constant";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50; // Adjust this value to change when the navbar changes

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // FIXME: Link Active masih error
  const isActive = (href: string) => {
    return window.location.hash === href;
  };

  return (
    <nav className={`w-full fixed top-0 transition-all duration-300 z-50 ${isScrolled ? "bg-foreground shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white transition-colors duration-300">
          {companyName}
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={cn(
            "md:flex md:space-x-6 text-white md:static md:bg-transparent md:shadow-none",
            isMenuOpen ? "block absolute top-full left-0 w-full bg-foreground shadow-lg" : "hidden"
          )}
        >
          {navMenu.map((item, index) => (
            <li key={index} className="relative group py-2">
              <a
                href={item.href}
                className={cn(
                  "block transition-colors duration-300 hover:bg-background hover:text-black hover:font-semibold md:hover:bg-transparent md:hover:font-normal md:hover:text-gray-300 px-4 py-2 md:p-0",
                  isActive(item.href) ? "font-semibold hover:text-black md:hover:text-white bg-white text-black md:text-white md:bg-transparent" : ""
                )}
              >
                {item.title}
              </a>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 hidden md:block",
                  isActive(item.href) ? "scale-x-100" : ""
                )}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
