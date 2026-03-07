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
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white text-sm overflow-hidden border-b border-transparent hover:border-b-white/10 transition-colors duration-300">
      <div className="container flex items-center gap-4 min-h-[42px]">
        <div className="flex-shrink-0 font-black text-xs uppercase tracking-wider p-1.5 rounded-full bg-white/15 border border-white/20 backdrop-filter backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-md">
          ODIECLOUD²π Access Signals
        </div>
        <div className="flex-1 relative h-6 overflow-hidden">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center whitespace-nowrap font-semibold transition-all duration-700 ease-in-out ${
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
