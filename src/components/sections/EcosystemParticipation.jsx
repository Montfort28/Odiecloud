const EcosystemParticipation = () => {
  const participationTypes = [
    {
      type: 'Subsidiaries',
      description: 'Wholly owned companies operating within the ecosystem.'
    },
    {
      type: 'Equity Affiliates',
      description: 'Independent companies integrated into ecosystem governance.'
    },
    {
      type: 'Equity Partners',
      description: 'Strategic partners holding shared equity in ecosystem ventures.'
    },
    {
      type: 'Strategic Partnerships',
      description: 'Organizations collaborating on specific initiatives.'
    },
    {
      type: 'Technology Partnerships',
      description: 'Developers and technology companies participating in the Tech Hub.'
    },
    {
      type: 'Channel Partner Networks',
      description: 'Sales, marketing, and distribution partners supporting expansion.'
    },
    {
      type: 'Internship Networks',
      description: 'Students and emerging professionals gaining experience and skills.'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white" id="participation">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-8 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
            Ways to Participate
          </h2>
          <p className="m-0 text-lg text-slate-600 leading-relaxed">
            Multiple participation models designed to accommodate different organizational structures and growth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {participationTypes.map((item, idx) => (
            <div
              key={idx}
              className="p-4.5 rounded-lg border border-sky-100 bg-white hover:shadow-lg hover:border-sky-300 transition-all duration-300"
            >
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {item.type}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center">
          <h3 className="text-2xl font-black m-0 mb-2">Ready to Join?</h3>
          <p className="m-0 text-white/90 mb-4">Choose the participation model that best fits your organization.</p>
          <a href="/contact" className="btn btn-primary text-sm px-6 py-2.5">
            Request Access Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default EcosystemParticipation
