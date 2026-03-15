import { useState, useEffect } from 'react'

const Topbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const messages = [
    "ODIECLOUD²π is now onboarding founding members across Africa, the Caribbean, and the global diaspora.",
    "Apply for ecosystem membership to access business, technology, trade, and investment opportunities.",
    "Developers, entrepreneurs, and strategic partners are invited to join the ODIECLOUD²π Tech Hub.",
    "Explore the Unified Marketplace connecting businesses, investors, and innovators."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="bg-linear-to-r from-[#0d2438] to-[#081827] text-white text-sm overflow-hidden border-b border-transparent hover:border-b-white/10 transition-colors duration-300">
      <div className="container flex items-center justify-center min-h-10.5">
        <div className="flex-1 relative h-6 overflow-hidden text-center">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap font-semibold transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full pointer-events-none'
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topbar
