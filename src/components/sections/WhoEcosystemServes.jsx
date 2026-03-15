import { HiLightningBolt, HiOfficeBuilding, HiCurrencyDollar, HiCode, HiBriefcase, HiUserGroup } from 'react-icons/hi'

const WhoEcosystemServes = () => {
  const participants = [
    {
      icon: HiLightningBolt,
      role: 'Entrepreneurs',
      description: 'Launching new ventures with access to capital, mentorship, and market infrastructure.',
      image: 'image 6.jpg'
    },
    {
      icon: HiOfficeBuilding,
      role: 'Established Companies',
      description: 'Seeking expansion into new markets and strategic partnership opportunities.',
      image: 'image 7.jpg'
    },
    {
      icon: HiCurrencyDollar,
      role: 'Investors',
      description: 'Exploring emerging markets with curated investment opportunities and due diligence support.',
      image: 'image 8.jpg'
    },
    {
      icon: HiCode,
      role: 'Technology Developers',
      description: 'Building digital systems and accessing funding, distribution, and collaboration networks.',
      image: 'image 9.jpg'
    },
    {
      icon: HiBriefcase,
      role: 'Freelancers & Professionals',
      description: 'Offering services and connecting with opportunities across the ecosystem.',
      image: 'image 10.jpg'
    },
    {
      icon: HiUserGroup,
      role: 'Strategic Partners',
      description: 'Collaborating across industries on joint ventures and market expansion.',
      image: 'image 11.jpg'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="m-0 mb-4 text-4xl md:text-4xl lg:text-4xl leading-tight -tracking-wider font-black text-slate-900">
            Who the Ecosystem Serves
          </h2>
          <p className="m-0 text-base md:text-base lg:text-base text-slate-600 leading-relaxed">
            ODIECLOUD²π supports a diverse community of participants united by ambition for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group text-center"
                style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/${item.image}`}
                    alt={item.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-sky-500/50 transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="m-0 mb-2 text-base font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                  {item.role}
                </h3>
                <p className="m-0 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhoEcosystemServes
