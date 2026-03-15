import { HiOfficeBuilding, HiShoppingCart, HiServer, HiUserGroup, HiGlobeAlt } from 'react-icons/hi'

const EcosystemAdvantage = () => {
  const advantages = [
    {
      icon: HiOfficeBuilding,
      title: 'Governance Infrastructure',
      description: 'Businesses integrate into a structured governance framework that enables scalability and compliance.',
      image: 'image 1.jpg'
    },
    {
      icon: HiShoppingCart,
      title: 'Market Access',
      description: 'Members gain access to a unified marketplace connecting multiple industries and regions.',
      image: 'image 2.jpg'
    },
    {
      icon: HiServer,
      title: 'Technology Infrastructure',
      description: 'Enterprises access cloud systems, collaboration tools, and development platforms.',
      image: 'image 3.jpg'
    },
    {
      icon: HiUserGroup,
      title: 'Human Capital Networks',
      description: 'Entrepreneurs, developers, marketers, and advisors collaborate through a structured community.',
      image: 'image 4.jpg'
    },
    {
      icon: HiGlobeAlt,
      title: 'Global Expansion',
      description: 'Businesses can scale internationally through ecosystem partnerships.',
      image: 'image 5.jpg'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-linear-to-b from-sky-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="m-0 mb-4 text-4xl md:text-4xl lg:text-4xl leading-tight -tracking-wider font-black text-slate-900">
            The Ecosystem Advantage
          </h2>
          <p className="m-0 text-base md:text-base lg:text-base text-slate-600 leading-relaxed">
            ODIECLOUD²π delivers benefits that individual companies cannot achieve alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon
            return (
              <div
                key={idx}
                className="card group text-center border-2 border-sky-200/60 hover:border-sky-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/${adv.image}`}
                    alt={adv.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-sky-500/50 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="m-0 mb-2 text-lg font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                  {adv.title}
                </h3>
                <p className="m-0 text-sm text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EcosystemAdvantage
