import { HiLightningBolt } from 'react-icons/hi'

const EcosystemFlywheel = () => {
  const steps = [
    { 
      title: 'Technology', 
      subtitle: 'enables innovation',
      description: 'Enterprise-grade cloud infrastructure, AI platforms, and development tools that power ecosystem operations and member innovation.'
    },
    { 
      title: 'Marketplace', 
      subtitle: 'enables commerce',
      description: 'Unified commerce platform connecting buyers, sellers, and service providers across Africa, Caribbean, and global diaspora.'
    },
    { 
      title: 'Networks', 
      subtitle: 'enable distribution',
      description: 'Strategic partner networks, channel partners, and distribution channels that expand market reach and operational capacity.'
    },
    { 
      title: 'Governance', 
      subtitle: 'ensures stability',
      description: 'Institutional framework and compliance systems that ensure ecosystem integrity, member protection, and sustainable growth.'
    },
    { 
      title: 'Capital', 
      subtitle: 'enables growth',
      description: 'Investment opportunities, funding mechanisms, and financial infrastructure supporting member business expansion.'
    }
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

          {/* Information Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-blue-200/60 bg-gradient-to-br from-white/90 to-sky-50/40 hover:shadow-xl hover:border-blue-400 transition-all duration-300 group text-center"
                style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300 mx-auto mb-4">
                  <div className="text-center text-white">
                    <p className="m-0 font-black text-base leading-tight">{step.title}</p>
                  </div>
                </div>
                <p className="m-0 mb-3 text-xs text-slate-600 font-medium">
                  {step.subtitle}
                </p>
                <p className="m-0 text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Connection Text */}
          <div className="mt-10 p-6 rounded-xl border border-blue-200/60 bg-gradient-to-br from-blue-50 to-cyan-50 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <p className="m-0 text-sm font-black text-blue-700 uppercase tracking-wider">Self-Reinforcing Ecosystem</p>
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            </div>
            <p className="m-0 text-slate-700 leading-relaxed text-sm">
              Each element reinforces the others in a continuous cycle of growth. Technology enables innovation that drives marketplace commerce. Networks distribute products and services. Governance ensures stability. Capital fuels expansion. Together, they create a self-sustaining economic engine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemFlywheel
