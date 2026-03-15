import { useState, useEffect } from 'react'
import { HiChevronRight } from 'react-icons/hi'

const AnnouncementBar = () => {
  const announcements = [
    "ODIECLOUD²π is now onboarding founding members across Africa, the Caribbean, and the global diaspora.",
    "Apply for ecosystem membership to access business, technology, trade, and investment opportunities.",
    "Developers, entrepreneurs, and strategic partners are invited to join the ODIECLOUD²π Tech Hub.",
    "Explore the Unified Marketplace connecting businesses, investors, and innovators."
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center py-2.5 px-2 sticky top-0 z-40 shadow-md">
      <div className="container flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>
        <p className="m-0 text-sm md:text-base font-medium" style={{fontFamily: '"Inter", sans-serif', fontWeight: 500}}>
          {announcements[currentIndex]}
        </p>
        <a href="/contact" className="flex items-center gap-1 ml-2 hover:text-sky-100 transition-colors text-white font-semibold text-sm md:text-base">
          Learn More
          <HiChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default AnnouncementBar
