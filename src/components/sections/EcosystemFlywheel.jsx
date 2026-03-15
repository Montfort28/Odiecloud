import { HiLightningBolt } from 'react-icons/hi'

const EcosystemFlywheel = () => {
  const steps = [
    { title: 'Technology', subtitle: 'enables innovation' },
    { title: 'Marketplace', subtitle: 'enables commerce' },
    { title: 'Networks', subtitle: 'enable distribution' },
    { title: 'Governance', subtitle: 'ensures stability' },
    { title: 'Capital', subtitle: 'enables growth' }
  ]

  return (
    <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="m-0 mb-4 text-4xl md:text-4xl lg:text-4xl leading-tight -tracking-wider font-black text-slate-900">
              The Ecosystem Flywheel
            </h2>
            <p className="m-0 text-base md:text-base lg:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The ODIECLOUD²π ecosystem operates through a powerful circular model where each element reinforces the others.
            </p>
          </div>

          {/* Desktop Flow Layout */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Grid layout - 3 columns top, 2 columns bottom */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                {/* Top row - 3 items */}
                {steps.slice(0, 3).map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group mb-3">
                      <div className="text-center text-white">
                        <p className="m-0 font-black text-sm">{step.title}</p>
                        <p className="m-0 text-xs opacity-90">{step.subtitle}</p>
                      </div>
                    </div>
                    {/* Connecting line down */}
                    <div className="w-0.5 h-12 bg-gradient-to-b from-sky-400 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Center circle */}
              <div className="flex justify-center mb-12">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <HiLightningBolt className="w-10 h-10 mx-auto mb-1" />
                    <p className="m-0 font-black text-sm">Self-</p>
                    <p className="m-0 font-black text-sm">Reinforcing</p>
                  </div>
                </div>
              </div>

              {/* Bottom row - 2 items */}
              <div className="grid grid-cols-2 gap-12 max-w-sm mx-auto">
                {steps.slice(3, 5).map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-0.5 h-12 bg-gradient-to-t from-sky-400 to-transparent mb-3"></div>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group">
                      <div className="text-center text-white">
                        <p className="m-0 font-black text-sm">{step.title}</p>
                        <p className="m-0 text-xs opacity-90">{step.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connecting lines from corners to bottom items */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: 0, left: 0}}>
                {/* Line from top-left to center-left */}
                <line x1="96" y1="120" x2="96" y2="180" stroke="#0ea5e9" strokeWidth="2" opacity="0.6" />
                {/* Line from top-right to center-right */}
                <line x1="288" y1="120" x2="288" y2="180" stroke="#0ea5e9" strokeWidth="2" opacity="0.6" />
                {/* Line from center outward and back (circular) */}
                <circle cx="192" cy="240" r="160" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" strokeDasharray="10,10" />
              </svg>
            </div>
          </div>

          {/* Mobile Stack Layout */}
          <div className="md:hidden space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <div className="text-center text-white text-xs">
                    <p className="m-0 font-black">{step.title}</p>
                    <p className="m-0 text-xs opacity-90">{step.subtitle}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-center mt-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <div className="text-center text-white text-xs">
                  <HiLightningBolt className="w-6 h-6 mx-auto" />
                  <p className="m-0 font-black text-xs">Reinforcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemFlywheel