const EcosystemComponents = () => {
  const components = [
    {
      title: 'ODIEBOARD',
      description: 'Governance Architecture',
      details: 'Enterprise governance framework enabling scalability and compliance across all ecosystem operations.'
    },
    {
      title: 'ODIEXA',
      description: 'Unified Marketplace',
      details: 'Centralized commerce platform connecting businesses, investors, and service providers globally.'
    },
    {
      title: 'Oπ',
      description: 'Intelligence & Systems Command',
      details: 'Advanced analytics and coordination system for ecosystem growth and optimization.'
    },
    {
      title: 'AUREX',
      description: 'Economic Infrastructure',
      details: 'Financial and economic systems supporting sustainable business growth.'
    },
    {
      title: 'Aureon9',
      description: 'Achievement System',
      details: 'Member recognition and milestone tracking system for ecosystem contributors.'
    },
    {
      title: 'Affiliate Life',
      description: 'Distribution Network',
      details: 'Channel partner and affiliate network enabling ecosystem expansion.'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white" id="components">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-8 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
            Ecosystem Components
          </h2>
          <p className="m-0 text-lg text-slate-600 leading-relaxed">
            The ODIECLOUD²π ecosystem is built on six integrated systems that work together to create a unified economic platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {components.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-sky-100/50 bg-gradient-to-br from-white/80 to-sky-50/30 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
            >
              <div className="inline-block px-3 py-1.5 rounded-full bg-sky-100/70 text-sky-700 text-xs font-bold mb-2.5 group-hover:bg-sky-200 transition-colors">
                {comp.description}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors">
                {comp.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                {comp.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EcosystemComponents
