import { HiServer, HiGlobeAlt, HiShoppingCart, HiUsers, HiCode, HiCurrencyDollar } from 'react-icons/hi'

const WhatIsODIECLOUD = () => {
  const components = [
    {
      title: 'Enterprise governance architecture',
      icon: HiServer,
      description: 'Structured framework ensuring compliance, security, and institutional credibility.'
    },
    {
      title: 'Cloud and digital infrastructure',
      icon: HiCode,
      description: 'Enterprise-grade cloud systems and development platforms for innovation.'
    },
    {
      title: 'Global trade and marketplace systems',
      icon: HiShoppingCart,
      description: 'Unified commerce platform connecting buyers, sellers, and service providers.'
    },
    {
      title: 'Human capital networks',
      icon: HiUsers,
      description: 'Entrepreneurs, developers, and advisors collaborating through structured community.'
    },
    {
      title: 'Technology development platforms',
      icon: HiCode,
      description: 'Tools and frameworks enabling rapid application development and deployment.'
    },
    {
      title: 'Investment and partnership frameworks',
      icon: HiCurrencyDollar,
      description: 'Capital mechanisms and partnership structures for business expansion.'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-slate-900" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '-0.025em'}}>
            What Is ODIECLOUD²π
          </h2>
          <p className="m-0 text-sm md:text-base text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
            ODIECLOUD²π is an integrated economic ecosystem that connects multiple industries, technologies, and markets through a unified governance and infrastructure framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {components.map((component, idx) => {
            const IconComponent = component.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-linear-to-t from-blue-700/5 to-transparent"></div>
                
                {/* Border with glow effect */}
                <div className="absolute inset-0 border-1.5 border-transparent group-hover:border-blue-700/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                
                {/* Subtle animated glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(12,127,199,0.1)]"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-700 to-cyan-400 text-white font-black text-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-700/30">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-wider mb-3 text-slate-900 group-hover:text-blue-800 transition-colors duration-300 m-0" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
                    {component.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed m-0 group-hover:text-slate-900 transition-colors duration-300" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
                    {component.description}
                  </p>
                </div>

                {/* Smooth box shadow and border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,252,255,0.9))',
                  border: '1.5px solid rgba(12, 127, 199, 0.2)',
                  boxShadow: '0 20px 50px rgba(12, 127, 199, 0.12)',
                }}></div>
                
                {/* Shiny overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'}}></div>
              </div>
            )
          })}
        </div>

        {/* Result Text - Below Cards */}
        
      </div>
    </section>
  )
}

export default WhatIsODIECLOUD
