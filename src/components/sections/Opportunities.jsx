const OpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Business Opportunities",
      description: "For founders, operators, and organizations seeking systems, structure, partner access, market growth, and ecosystem integration."
    },
    {
      title: "Investment Opportunities",
      description: "For qualified participants seeking briefings, structured entry points, governance-backed contexts, and ecosystem-aligned visibility."
    },
    {
      title: "Manufacturing Opportunities",
      description: "For producers, industrial operators, sourcing networks, and builders seeking routes into coordinated production and market access."
    },
    {
      title: "Trade Opportunities",
      description: "For entities looking to move goods, relationships, and commercial pathways through more disciplined cross-border structure."
    }
  ]

  return (
    <section className="py-8.5 px-2" id="opportunities">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            Opportunity corridors the site must promote
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            These pathways should be visible, attractive, and disciplined. The message is not random access. It is structured participation through ecosystem membership.
          </p>
        </div>

        <div className="bg-linear-to-r from-[#0a3558] to-blue-700 rounded-4xl text-white shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                className={`p-7 md:p-6 min-h-full flex flex-col justify-between ${
                  index < opportunities.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-white/12'
                    : ''
                }`}
              >
                <div>
                  <h3 className="text-xl font-black mb-3 text-white">
                    {opp.title}
                  </h3>
                  <p className="text-white/88 text-sm leading-relaxed m-0">
                    {opp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpportunitiesSection
