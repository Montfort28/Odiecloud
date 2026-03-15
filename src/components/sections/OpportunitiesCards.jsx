const OpportunitiesCards = () => {
  const opportunities = [
    {
      id: 'business',
      category: 'Business Opportunities',
      description: 'Connect with vetted business partnerships and growth ventures',
      items: [
        { title: 'Joint Ventures', desc: 'Strategic partnerships for market expansion' },
        { title: 'Trade Partnerships', desc: 'B2B supply chain and distribution relationships' },
        { title: 'Distribution Agreements', desc: 'Access to established distribution networks' },
        { title: 'Business Acquisitions', desc: 'Strategic business purchase opportunities' }
      ],
      icon: '🤝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'investment',
      category: 'Investment Opportunities',
      description: 'Qualified members access curated investment introductions',
      items: [
        { title: 'Startup Investments', desc: 'Early-stage venture capital opportunities' },
        { title: 'Infrastructure Projects', desc: 'Large-scale development partnerships' },
        { title: 'Technology Ventures', desc: 'Digital innovation and tech startup deals' },
        { title: 'Real Estate Developments', desc: 'Property and development investments' }
      ],
      icon: '💼',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'manufacturing',
      category: 'Manufacturing Opportunities',
      description: 'Industrial partnerships and production collaborations',
      items: [
        { title: 'Factory Partnerships', desc: 'Production facility collaborations' },
        { title: 'Production Outsourcing', desc: 'Scalable manufacturing services' },
        { title: 'Export Manufacturing', desc: 'International production networks' },
        { title: 'Supply Chain Collaborations', desc: 'Integrated supply partnerships' }
      ],
      icon: '🏭',
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 'trade',
      category: 'Trade Opportunities',
      description: 'Global commerce and cross-border business partnerships',
      items: [
        { title: 'Agriculture Trade', desc: 'Farm to market supply chains' },
        { title: 'Manufacturing Trade', desc: 'Industrial goods commerce' },
        { title: 'Technology Trade', desc: 'Digital product distribution' },
        { title: 'Infrastructure Trade', desc: 'Major project procurement' }
      ],
      icon: '🌍',
      color: 'from-rose-500 to-rose-600'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className={`p-6 rounded-xl border border-gradient-to-r border-slate-200 bg-gradient-to-br ${opp.color} from-slate-50 to-sky-50/40 hover:shadow-2xl transition-all duration-300 group overflow-hidden text-center`}
              id={opp.id}
            >
              <div className="relative z-10">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-5xl mb-3">{opp.icon}</div>
                  <h3 className="text-xl font-black text-slate-900 m-0 mb-1 group-hover:text-blue-700 transition-colors">
                    {opp.category}
                  </h3>
                  <p className="m-0 text-xs text-slate-600">
                    {opp.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {opp.items.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/80 hover:bg-white transition-colors">
                      <h4 className="text-sm font-bold text-slate-900 m-0 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="m-0 text-xs text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpportunitiesCards
