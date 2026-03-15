import { HiOfficeBuilding, HiCog, HiBriefcase, HiUsers, HiChartBar, HiTrendingUp } from 'react-icons/hi'

const ManufacturingOpportunitiesPage = () => {
  const opportunities = [
    {
      icon: HiOfficeBuilding,
      title: 'Manufacturing Partnerships',
      description: 'Collaborate with established manufacturers on production and expansion.'
    },
    {
      icon: HiCog,
      title: 'Supply Chain Integration',
      description: 'Integrate into efficient supply chains across the ODIECLOUD²π ecosystem.'
    },
    {
      icon: HiBriefcase,
      title: 'Contract Manufacturing',
      description: 'Access contract manufacturing services for product production.'
    },
    {
      icon: HiUsers,
      title: 'Technology Transfer',
      description: 'Gain access to advanced manufacturing technologies and expertise.'
    },
    {
      icon: HiChartBar,
      title: 'Production Optimization',
      description: 'Improve efficiency through economies of scale within the ecosystem.'
    },
    {
      icon: HiTrendingUp,
      title: 'Market Expansion',
      description: 'Scale production with access to multi-market distribution networks.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-orange-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Manufacturing Opportunities
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Scale manufacturing operations through ecosystem partnerships and resources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Advanced Manufacturing Solutions
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              Access modern manufacturing capabilities and partnerships to scale production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon
              return (
                <div
                  key={idx}
                  className="card group border-2 border-orange-200/60 hover:border-orange-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
                >
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-orange-500/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="m-0 mb-2 text-lg font-black text-slate-900 group-hover:text-orange-700 transition-colors">
                    {opp.title}
                  </h3>
                  <p className="m-0 text-sm text-slate-600 leading-relaxed">
                    {opp.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="m-0 mb-3 text-2xl md:text-3xl font-black text-slate-900">
              Scale Your Manufacturing Operations
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Connect with manufacturing partners to grow your production capacity.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Explore Manufacturing Partnerships
            </a>
            <a href="/opportunities" className="btn btn-secondary px-6 py-3">
              View All Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ManufacturingOpportunitiesPage
