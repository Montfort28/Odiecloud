import { HiShoppingCart, HiGlobeAlt, HiTrendingUp, HiUsers, HiChartBar, HiSparkles } from 'react-icons/hi'

const MarketplaceTradePage = () => {
  const features = [
    {
      icon: HiShoppingCart,
      title: 'Unified Marketplace',
      description: 'Access a global marketplace connecting buyers, sellers, and service providers.'
    },
    {
      icon: HiGlobeAlt,
      title: 'International Trade',
      description: 'Facilitate cross-border commerce with integrated logistics and compliance.'
    },
    {
      icon: HiTrendingUp,
      title: 'Sales Acceleration',
      description: 'Tools and channels to expand your sales across multiple markets.'
    },
    {
      icon: HiUsers,
      title: 'Supplier Network',
      description: 'Connect with vetted suppliers and distribution partners.'
    },
    {
      icon: HiChartBar,
      title: 'Trade Analytics',
      description: 'Real-time data to optimize your marketplace strategy and pricing.'
    },
    {
      icon: HiSparkles,
      title: 'Innovation Exchange',
      description: 'Collaborate on product innovation with marketplace participants.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Marketplace & Trade Solutions
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Scale your commerce through ODIECLOUD²π's integrated marketplace platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Commerce Without Borders
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              Connect with millions of buyers and sellers across Africa, the Caribbean, and the global diaspora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
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
                      {feature.title}
                    </h3>
                    <p className="m-0 text-xs text-slate-600 leading-relaxed">
                      {feature.description}
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
              Join the Global Marketplace
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Start selling globally and scale your business today.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Get Marketplace Access
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

export default MarketplaceTradePage
