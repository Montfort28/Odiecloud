const MembershipBenefits = () => {
  const benefits = [
    {
      icon: '📊',
      title: 'Ecosystem Opportunities',
      description: 'Access to vetted business, investment, and partnership opportunities'
    },
    {
      icon: '🛒',
      title: 'Marketplace Participation',
      description: 'Sell products, services, and access global buyer networks'
    },
    {
      icon: '🤝',
      title: 'Strategic Partnerships',
      description: 'Connect with complementary businesses and collaboration partners'
    },
    {
      icon: '💻',
      title: 'Technology Infrastructure',
      description: 'Cloud systems, tools, and development platforms included'
    },
    {
      icon: '🎓',
      title: 'Community & Mentorship',
      description: 'Learn from ecosystem members and access industry expertise'
    },
    {
      icon: '🌍',
      title: 'Global Expansion',
      description: 'Scale internationally through ecosystem partner networks'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white" id="benefits">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-8 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl leading-tight -tracking-wider font-black text-slate-900">
            Member Benefits
          </h2>
          <p className="m-0 text-lg text-slate-600 leading-relaxed">
            All members gain access to core ecosystem benefits designed to accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg border border-sky-100 bg-white hover:shadow-lg hover:border-sky-300 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-base font-black text-slate-900 mb-2 m-0">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 m-0">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MembershipBenefits
