const MembershipTypes = () => {
  const types = [
    {
      name: 'Subsidiaries',
      description: 'Wholly owned companies operating within the ecosystem.',
      benefits: ['Full governance integration', 'Complete resource access', 'Priority opportunities']
    },
    {
      name: 'Equity Affiliates',
      description: 'Independent companies integrated into ecosystem governance.',
      benefits: ['Strategic alignment', 'Growth partnerships', 'Market expansion']
    },
    {
      name: 'Equity Partners',
      description: 'Strategic partners holding shared equity in ecosystem ventures.',
      benefits: ['Shared ownership', 'Revenue participation', 'Strategic voting rights']
    },
    {
      name: 'Strategic Partnerships',
      description: 'Organizations collaborating on specific initiatives.',
      benefits: ['Project-based collaboration', 'Co-marketing opportunities', 'Joint ventures']
    },
    {
      name: 'Technology Partnerships',
      description: 'Developers and technology companies participating in the Tech Hub.',
      benefits: ['Tech community access', 'Innovation collaboration', 'Developer resources']
    },
    {
      name: 'Channel Partner Network',
      description: 'Sales, marketing, and distribution partners supporting ecosystem expansion.',
      benefits: ['Commission structure', 'Marketing support', 'Territory rights']
    },
    {
      name: 'Internship Networks',
      description: 'Students and emerging professionals gaining experience through ecosystem initiatives.',
      benefits: ['Career development', 'Mentorship programs', 'Skill building']
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white" id="types">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-8 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
            Membership Types
          </h2>
          <p className="m-0 text-lg text-slate-600 leading-relaxed">
            Choose the membership model that aligns with your organization's goals and participation level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {types.map((type, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-sky-100/50 bg-gradient-to-br from-white/80 to-sky-50/30 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100/70 text-sky-700 font-black group-hover:bg-sky-200 transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors">
                {type.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0 mb-3">
                {type.description}
              </p>
              <ul className="mt-auto space-y-1.5">
                {type.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-sky-600 font-bold mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MembershipTypes
