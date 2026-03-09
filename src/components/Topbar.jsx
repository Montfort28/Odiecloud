import { useState, useEffect } from 'react'

const Topbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const messages = [
    "Membership enables structured entry into governance, market access, partnerships, capital-ready systems, and ecosystem solutions.",
    "Business Opportunities: activate growth through ODIEBOARD, Channel Partners, and ecosystem distribution architecture.",
    "Trade Opportunities: enter ODIEXA-aligned trade pathways with disciplined structure, partner access, and cross-border logic.",
    "Manufacturing Opportunities: connect sourcing, production, market access, and governance-backed execution.",
    "Investment Opportunities: request access for ecosystem briefings, structured participation pathways, and vetted engagement channels."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-[#0d2438] to-[#081827] text-white text-sm overflow-hidden border-b border-transparent hover:border-b-white/10 transition-colors duration-300">
      <div className="container flex items-center justify-center min-h-[42px]">
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
