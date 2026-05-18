import { HiOfficeBuilding, HiShoppingCart, HiServer, HiUserGroup, HiGlobeAlt } from 'react-icons/hi'

const EcosystemAdvantage = () => {
  const advantages = [
    {
      icon: HiOfficeBuilding,
      title: 'Governance Infrastructure',
      description: 'Businesses integrate into a structured governance framework that enables scalability and compliance.',
      image: 'Comprehensive Market Research Services_ Empowering Informed Decision-Making.jpg'
    },
    {
      icon: HiShoppingCart,
      title: 'Market Access',
      description: 'Members gain access to a unified marketplace connecting multiple industries and regions.',
      image: 'image 1.jpg'
    },
    {
      icon: HiServer,
      title: 'Technology Infrastructure',
      description: 'Enterprises access cloud systems, collaboration tools, and development platforms.',
      image: 'Free Photo.jpg'
    },
    {
      icon: HiUserGroup,
      title: 'Human Capital Networks',
      description: 'Entrepreneurs, developers, marketers, and advisors collaborate through a structured community.',
      image: 'How to Build a Blog to Over 1 Million Monthly Visitors.jpg'
    },
    {
      icon: HiGlobeAlt,
      title: 'Global Expansion',
      description: 'Businesses can scale internationally through ecosystem partnerships.',
      image: 'The Role of B2B Digital Marketing Agencies in the USA.jpg'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-linear-to-b from-sky-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="m-0 mb-2.5 text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-slate-900" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '-0.025em'}}>
            The Ecosystem Advantage
          </h2>
          <p className="m-0 text-sm md:text-base text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
            ODIECLOUD²π delivers benefits that individual companies cannot achieve alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-sky-100/50 bg-gradient-to-br from-white/80 to-sky-50/30 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
                style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                <div className="w-full h-28 mb-3.5 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/${adv.image}`}
                    alt={adv.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="inline-block px-3 py-1.5 rounded-full bg-sky-100/70 text-sky-700 text-xs font-bold mb-2.5 group-hover:bg-sky-200 transition-colors" style={{fontFamily: '"Inter", sans-serif', fontWeight: 700}}>
                  Advantage
                </div>
                <h3 className="m-0 mb-1.5 text-base font-black text-slate-900 group-hover:text-sky-700 transition-colors" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
                  {adv.title}
                </h3>
                <p className="m-0 text-sm text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
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
