import { HiUsers, HiTrendingUp, HiBriefcase, HiGlobeAlt, HiStar, HiChartBar } from 'react-icons/hi'

const MembershipTypesPage = () => {
  const types = [
    {
      icon: HiUsers,
      title: 'Individual Contributor',
      description: 'Perfect for freelancers, professionals, and emerging entrepreneurs seeking ecosystem access.'
    },
    {
      icon: HiBriefcase,
      title: 'Standard Business',
      description: 'Designed for established businesses looking to expand market reach.'
    },
    {
      icon: HiTrendingUp,
      title: 'Growth Enterprise',
      description: 'For businesses in growth phase seeking capital and strategic partnerships.'
    },
    {
      icon: HiGlobeAlt,
      title: 'Strategic Partner',
      description: 'Large organizations and institutions collaborating across sectors.'
    },
    {
      icon: HiStar,
      title: 'Premium Plus',
      description: 'Exclusive access with dedicated support and priority opportunities.'
    },
    {
      icon: HiChartBar,
      title: 'Investor Member',
      description: 'Investment-focused membership with curated investment opportunities.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Membership Types
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Find the right membership level for your role in the ODIECLOUD²π ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Choose Your Membership Path
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              Each membership type is tailored to provide maximum value for your role and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, idx) => {
              const Icon = type.icon
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
                      {type.title}
                    </h3>
                    <p className="m-0 text-xs text-slate-600 leading-relaxed">
                      {type.description}
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
              Ready to Join?
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Apply for membership and start accessing ecosystem benefits today.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Apply for Membership
            </a>
            <a href="/membership" className="btn btn-secondary px-6 py-3">
              View Member Benefits
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default MembershipTypesPage
