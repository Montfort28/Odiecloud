const SolutionCards = () => {
  const solutions = [
    {
      id: 'tech',
      title: 'Technology & Cloud Infrastructure',
      description: 'Enterprise-grade digital infrastructure designed to support business growth.',
      services: [
        'Cloud collaboration systems',
        'Enterprise file management',
        'CRM and ERP integration',
        'AI development platforms',
        'Cybersecurity infrastructure'
      ],
      benefits: [
        'Secure digital operations',
        'Scalable enterprise technology',
        'Cross-border collaboration',
        'Operational efficiency'
      ],
      icon: '☁️'
    },
    {
      id: 'business',
      title: 'Business Development',
      description: 'Helping entrepreneurs and companies launch and scale ventures.',
      services: [
        'Business structuring',
        'Strategic planning',
        'Market expansion strategies',
        'Partnership development'
      ],
      benefits: [
        'Accelerated growth',
        'Access to strategic partners',
        'Improved operational structure'
      ],
      icon: '📈'
    },
    {
      id: 'investment',
      title: 'Investment & Capital',
      description: 'Facilitating connections between businesses and investors.',
      services: [
        'Investment opportunity discovery',
        'Strategic capital introductions',
        'Corporate structuring support',
        'Investment advisory networks'
      ],
      benefits: [
        'Capital access',
        'Investor visibility',
        'Strategic financial growth'
      ],
      icon: '💰'
    },
    {
      id: 'marketplace',
      title: 'Marketplace & Trade',
      description: 'Connecting companies across industries through unified commerce.',
      services: [
        'Product and service exchanges',
        'Trade facilitation',
        'Supplier and distributor networks',
        'International business matchmaking'
      ],
      benefits: [
        'Market expansion',
        'New revenue channels',
        'Global business partnerships'
      ],
      icon: '🌐'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="p-6 rounded-xl border border-sky-100/50 bg-gradient-to-br from-white/90 to-sky-50/40 hover:shadow-2xl hover:border-sky-400 transition-all duration-300 group text-center"
              id={solution.id}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="text-4xl mb-3">{solution.icon}</div>
                <h3 className="text-xl font-black text-slate-900 m-0 mb-1 group-hover:text-sky-700 transition-colors">
                  {solution.title}
                </h3>
                <p className="m-0 text-xs text-slate-600">
                  {solution.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-black text-slate-900 m-0 mb-2.5 uppercase tracking-wider text-blue-700">Services</h4>
                  <ul className="m-0 p-0 list-none space-y-1.5">
                    {solution.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-sky-600 font-bold mt-0.5">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 m-0 mb-2.5 uppercase tracking-wider text-blue-700">Benefits</h4>
                  <ul className="m-0 p-0 list-none space-y-1.5">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-sky-600 font-bold mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionCards
