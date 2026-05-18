const MembersValueMost = () => {
  const values = [
    {
      number: "1",
      title: "Unified Access",
      description: "One integrated platform connecting all ecosystem services, opportunities, and networks without fragmentation."
    },
    {
      number: "2",
      title: "Structured Opportunity",
      description: "Clear pathways to capital, partnerships, markets, and growth through organized profit-centre solutions."
    },
    {
      number: "3",
      title: "Governance & Trust",
      description: "Enterprise-grade governance framework ensuring compliance, security, and institutional credibility."
    },
    {
      number: "4",
      title: "Scalable Infrastructure",
      description: "Access to technology, systems, and operational frameworks that enable rapid business growth."
    },
    {
      number: "5",
      title: "Strategic Networks",
      description: "Connection to vetted partners, investors, and collaborators aligned with business objectives."
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-slate-900" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '-0.025em'}}>
            What Ecosystem Members Value Most
          </h2>
          <p className="m-0 text-sm md:text-base text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
            ODIECLOUD²π members benefit from integrated solutions designed to accelerate growth and create sustainable competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{animation: `slideUp 0.6s ease-out ${index * 0.1}s both`}}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-linear-to-t from-blue-700/5 to-transparent"></div>
              
              {/* Border with glow effect */}
              <div className="absolute inset-0 border-1.5 border-transparent group-hover:border-blue-700/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              
              {/* Subtle animated glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(12,127,199,0.1)]"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-700 to-cyan-400 text-white font-black text-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-700/30">
                  {value.number}
                </div>
                <h3 className="text-base font-black uppercase tracking-wider mb-2 text-slate-900 group-hover:text-blue-800 transition-colors duration-300" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
                  {value.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed m-0 group-hover:text-slate-900 transition-colors duration-300" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
                  {value.description}
                </p>
              </div>

              {/* Smooth box shadow and border effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,252,255,0.9))',
                border: '1.5px solid rgba(12, 127, 199, 0.2)',
                boxShadow: '0 20px 50px rgba(12, 127, 199, 0.12)',
              }}></div>
              
              {/* Shiny overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none rounded-3xl from-white via-transparent to-white" style={{background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MembersValueMost
