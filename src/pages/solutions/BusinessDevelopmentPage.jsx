import { HiTrendingUp, HiBriefcase, HiUsers, HiChartBar, HiGlobeAlt } from 'react-icons/hi'

const BusinessDevelopmentPage = () => {
  const services = [
    {
      icon: HiTrendingUp,
      title: 'Growth Strategy',
      description: 'Strategic planning and execution for sustainable business expansion.'
    },
    {
      icon: HiBriefcase,
      title: 'Market Entry',
      description: 'Navigate new markets with confidence and expert guidance.'
    },
    {
      icon: HiUsers,
      title: 'Partnership Development',
      description: 'Build strategic partnerships that multiply your business impact.'
    },
    {
      icon: HiChartBar,
      title: 'Business Analytics',
      description: 'Data-driven insights to optimize your business operations.'
    },
    {
      icon: HiChartBar,
      title: 'Revenue Optimization',
      description: 'Strategies to maximize profitability and market share.'
    },
    {
      icon: HiGlobeAlt,
      title: 'International Expansion',
      description: 'Go global with support across Africa, Caribbean, and diaspora.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Business Development Solutions
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Accelerate your business growth through strategic development and market expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Strategic Growth Through Partnership
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              Our business development experts help you identify and capitalize on growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
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
                      {service.title}
                    </h3>
                    <p className="m-0 text-xs text-slate-600 leading-relaxed">
                      {service.description}
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
              Grow Your Business With Purpose
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Our business development consultants are ready to help you achieve your growth targets.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Start Your Growth Journey
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

export default BusinessDevelopmentPage
