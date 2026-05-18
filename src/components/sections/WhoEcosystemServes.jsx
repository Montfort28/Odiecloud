import { HiLightningBolt, HiOfficeBuilding, HiCurrencyDollar, HiCode, HiBriefcase, HiUserGroup } from 'react-icons/hi'

const WhoEcosystemServes = () => {
  const participants = [
    {
      icon: HiLightningBolt,
      role: 'Entrepreneurs',
      description: 'Launching new ventures with access to capital, mentorship, and market infrastructure.',
      image: 'digital marketing.jpg'
    },
    {
      icon: HiOfficeBuilding,
      role: 'Established Companies',
      description: 'Seeking expansion into new markets and strategic partnership opportunities.',
      image: 'How to Reduce Network Latency - Bleuwire.jpg'
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
      image: 'image 10.jpg'
    },
    {
      icon: HiBriefcase,
      role: 'Freelancers & Professionals',
      description: 'Offering services and connecting with opportunities across the ecosystem.',
      image: 'image 16.jpg'
    },
    {
      icon: HiUserGroup,
      role: 'Strategic Partners',
      description: 'Collaborating across industries on joint ventures and market expansion.',
      image: 'image 6.jpg'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="m-0 mb-2.5 text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-slate-900" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '-0.025em'}}>
            Who the Ecosystem Serves
          </h2>
          <p className="m-0 text-sm md:text-base text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
            ODIECLOUD²π supports a diverse community of participants united by ambition for growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {participants.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-sky-100/50 bg-white hover:shadow-xl transition-all duration-300"
                style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
              >
                {/* Image Background */}
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                  <img 
                    src={`/images/${item.image}`}
                    alt={item.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-4">
                  {/* Icon Badge */}
                  <div className="absolute -top-6 left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="pt-4">
                    <h3 className="m-0 mb-1.5 text-base font-black text-slate-900 group-hover:text-sky-700 transition-colors" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
                      {item.role}
                    </h3>
                    <p className="m-0 text-sm text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhoEcosystemServes
