import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        const scrollThreshold = 50 // Adjust this value to change when the navbar changes

        setIsScrolled(scrollPosition > scrollThreshold)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
      <nav className={`w-full fixed top-0 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-br from-indigo-600 to-cyan-400 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white transition-colors duration-300">
            Access Tech
          </a>
          <ul className="hidden md:flex space-x-6 text-white">
            {/*
                TODO: Menunya apa aja yang akan ditampilkan?
            */}
            {['Home', 'Pricing', 'Team', 'Testimonial', 'Contact'].map((item) => (
              <li key={item} className="relative group py-1.5">
                <a href="/" className="py-2 transition-colors duration-300 hover:text-cyan-200">
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
          <div className='hidden md:block w-36'></div>
        </div>
      </nav>
    )
}
