import { HiCurrencyDollar, HiTrendingUp, HiShieldCheck, HiThumbUp, HiBriefcase, HiUserGroup } from 'react-icons/hi'

const InvestmentCapitalPage = () => {
  const solutions = [
    {
      icon: HiCurrencyDollar,
      title: 'Capital Raising',
      description: 'Access multiple funding sources tailored to your business stage and needs.'
    },
    {
      icon: HiTrendingUp,
      title: 'Investment Portfolio',
      description: 'Curated investment opportunities in high-growth African businesses.'
    },
    {
      icon: HiShieldCheck,
      title: 'Due Diligence',
      description: 'Comprehensive support with risk assessment and compliance verification.'
    },
    {
      icon: HiThumbUp,
      title: 'Strategic Funding',
      description: 'Match with investors aligned with your business vision.'
    },
    {
      icon: HiBriefcase,
      title: 'Investor Relations',
      description: 'Professional management of investor communications and reporting.'
    },
    {
      icon: HiUserGroup,
      title: 'Advisory Board',
      description: 'Access to experienced advisors and board members for strategic guidance.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Investment & Capital Solutions
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Connect with capital sources and investment opportunities that fuel enterprise growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Finance Your Vision
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              Access capital and investment opportunities to accelerate your enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <div
                  key={idx}
                  className="card group border-2 border-blue-200/60 hover:border-blue-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center"
                  style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="m-0 mb-2 text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="m-0 text-xs text-slate-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
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
              Connect With Capital Today
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Our investment specialists are ready to help you raise capital and connect with investors.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Explore Funding Options
            </a>
            <a href="/solutions" className="btn btn-secondary px-6 py-3">
              Explore Other Solutions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default InvestmentCapitalPage
