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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="m-0 mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
              The Ecosystem Flywheel
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The ODIECLOUD²π ecosystem operates through a powerful circular model where each element reinforces the others.
            </p>
          </div>

          {/* Desktop Circular Layout */}
          <div className="hidden md:block relative">
            <div className="relative w-full max-w-2xl mx-auto" style={{height: '600px'}}>
              {/* Circular dashed border */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
                <circle 
                  cx="300" 
                  cy="300" 
                  r="220" 
                  fill="none" 
                  stroke="#7dd3fc" 
                  strokeWidth="2" 
                  strokeDasharray="10,10"
                  opacity="0.4"
                />
              </svg>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer z-10">
                <div className="text-center text-white">
                  <HiLightningBolt className="w-12 h-12 mx-auto mb-2" />
                  <p className="m-0 font-black text-base">Self-</p>
                  <p className="m-0 font-black text-base">Reinforcing</p>
                </div>
              </div>

              {/* Outer Circles - Positioned exactly as in the image */}
              {/* Technology - Top */}
              <div className="absolute" style={{top: '20px', left: '50%', transform: 'translateX(-50%)'}}>
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white px-2">
                    <p className="m-0 font-black text-lg mb-1">{steps[0].title}</p>
                    <p className="m-0 text-sm opacity-90">{steps[0].subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Marketplace - Top Right */}
              <div className="absolute" style={{top: '120px', right: '40px'}}>
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white px-2">
                    <p className="m-0 font-black text-lg mb-1">{steps[1].title}</p>
                    <p className="m-0 text-sm opacity-90">{steps[1].subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Networks - Bottom Right */}
              <div className="absolute" style={{bottom: '120px', right: '60px'}}>
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white px-2">
                    <p className="m-0 font-black text-lg mb-1">{steps[2].title}</p>
                    <p className="m-0 text-sm opacity-90">{steps[2].subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Governance - Bottom Left */}
              <div className="absolute" style={{bottom: '120px', left: '60px'}}>
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white px-2">
                    <p className="m-0 font-black text-lg mb-1">{steps[3].title}</p>
                    <p className="m-0 text-sm opacity-90">{steps[3].subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Capital - Top Left */}
              <div className="absolute" style={{top: '120px', left: '40px'}}>
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white px-2">
                    <p className="m-0 font-black text-lg mb-1">{steps[4].title}</p>
                    <p className="m-0 text-sm opacity-90">{steps[4].subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stack Layout */}
          <div className="md:hidden space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="card group">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center text-white text-xs">
                      <p className="m-0 font-black">{step.title}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="m-0 text-sm text-slate-700 font-medium">{step.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <HiLightningBolt className="w-8 h-8 mx-auto mb-1" />
                  <p className="m-0 font-black text-xs">Self-Reinforcing</p>
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
