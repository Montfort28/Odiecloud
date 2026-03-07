const CommunitiesSection = () => {
  const communities = [
    {
      title: "Subsidiaries",
      description: "Wholly or majority controlled ecosystem operating entities aligned to ODIEBOARD and ecosystem standards."
    },
    {
      title: "Equity Affiliates",
      description: "Aligned businesses with equity relationship and ecosystem integration logic."
    },
    {
      title: "Equity Partners",
      description: "Partnerships structured around shared participation, strategic growth, and coordinated value creation."
    },
    {
      title: "Strategic Partnerships",
      description: "External institutions, firms, and entities connected to the ecosystem for defined strategic collaboration."
    },
    {
      title: "Technology Partnerships (Tech Hub)",
      description: "Builders, developers, and technology organizations connected through Oπ and the broader innovation framework."
    },
    {
      title: "Channel Partner Network",
      description: "The renamed affiliate/advisor network built around distribution, introductions, and ecosystem commercial activation."
    },
    {
      title: "Internship Networks",
      description: "Structured entry pathways for students, trainees, and emerging talent aligned to the ecosystem pipeline."
    }
  ]

  return (
    <section className="py-8.5 px-2" id="communities">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            Membership and community types
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            The website must clearly present ODIECLOUD²π not as one generic membership, but as a set of relationship and participation classes inside the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {communities.map((community, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-blue-50 border border-line rounded-3xl p-4.5 shadow-custom min-h-56 flex flex-col"
            >
              <h3 className="text-base font-black mb-2.5 leading-normal text-text">
                {community.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed m-0">
                {community.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunitiesSection
