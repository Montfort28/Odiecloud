import { HiBriefcase, HiShieldCheck, HiCurrencyDollar, HiSparkles, HiServer, HiSpeakerphone, HiStar } from 'react-icons/hi'

const CommunitiesSection = () => {
  const communities = [
    {
      title: "Subsidiaries",
      description: "Wholly or majority controlled ecosystem operating entities aligned to ODIEBOARD and ecosystem standards.",
      icon: HiBriefcase
    },
    {
      title: "Equity Affiliates",
      description: "Aligned businesses with equity relationship and ecosystem integration logic.",
      icon: HiShieldCheck
    },
    {
      title: "Equity Partners",
      description: "Partnerships structured around shared participation, strategic growth, and coordinated value creation.",
      icon: HiCurrencyDollar
    },
    {
      title: "Strategic Partnerships",
      description: "External institutions, firms, and entities connected to the ecosystem for defined strategic collaboration.",
      icon: HiSparkles
    },
    {
      title: "Technology Partnerships (Tech Hub)",
      description: "Builders, developers, and technology organizations connected through Oπ and the broader innovation framework.",
      icon: HiServer
    },
    {
      title: "Channel Partner Network",
      description: "The renamed affiliate/advisor network built around distribution, introductions, and ecosystem commercial activation.",
      icon: HiSpeakerphone
    },
    {
      title: "Internship Networks",
      description: "Structured entry pathways for students, trainees, and emerging talent aligned to the ecosystem pipeline.",
      icon: HiStar
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white" id="communities">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
            Membership and community types
          </h2>
          <p className="m-0 text-slate-700 text-base md:text-lg font-medium">
            The website must clearly present ODIECLOUD²π not as one generic membership, but as a set of relationship and participation classes inside the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {communities.map((community, index) => {
            const Icon = community.icon
            return (
              <div
                key={index}
                className="community-card"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.08}s both`
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="community-icon-wrapper">
                    <Icon className="community-icon" />
                  </div>
                  
                  <h3 className="community-title">
                    {community.title}
                  </h3>
                  
                  <p className="community-description">
                    {community.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CommunitiesSection
