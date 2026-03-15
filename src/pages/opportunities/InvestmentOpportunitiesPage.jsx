import { HiCurrencyDollar, HiTrendingUp, HiShieldCheck, HiThumbUp, HiUsers, HiChartBar } from 'react-icons/hi'

const InvestmentOpportunitiesPage = () => {
  const opportunities = [
    {
      icon: HiCurrencyDollar,
      title: 'Equity Investments',
      description: 'Invest in high-growth businesses across multiple sectors within the ecosystem.'
    },
    {
      icon: HiTrendingUp,
      title: 'Growth Stage Funding',
      description: 'Fund expansion of businesses showing strong market validation.'
    },
    {
      icon: HiShieldCheck,
      title: 'Risk-Managed Portfolios',
      description: 'Diversified investment portfolios with comprehensive risk management.'
    },
    {
      icon: HiThumbUp,
      title: 'Sector-Specific Investments',
      description: 'Targeted investment in technology, commerce, manufacturing, and services.'
    },
    {
      icon: HiUsers,
      title: 'Syndicated Deals',
      description: 'Participate in larger investment opportunities with other investors.'
    },
    {
      icon: HiChartBar,
      title: 'Returns Tracking',
      description: 'Real-time dashboards to monitor portfolio performance and returns.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-emerald-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Investment Opportunities
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Invest in emerging businesses with high growth potential across Africa and the diaspora.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Invest in Africa's Economic Future
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              Access curated investment opportunities in high-growth businesses with strong fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon
              return (
                <div
                  key={idx}
                  className="card group border-2 border-emerald-200/60 hover:border-emerald-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
                >
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-emerald-500/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="m-0 mb-2 text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
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
              Start Your Investment Journey
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Connect with our investment team to explore portfolio options.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Learn About Investment Opportunities
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

export default InvestmentOpportunitiesPage
