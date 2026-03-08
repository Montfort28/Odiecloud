import { HiBriefcase, HiServer, HiShoppingCart, HiLightningBolt, HiTrendingUp, HiStar, HiCash, HiGlobeAlt } from 'react-icons/hi'

const ProfitCentres = () => {
  const profitCentres = [
    {
      tags: ["Governance", "Structure"],
      title: "ODIEBOARD",
      icon: HiBriefcase,
      problem: "Businesses fail to scale because communication, governance, accountability, and structure are fragmented.",
      items: [
        "Defines organizational architecture",
        "Establishes lines of communication",
        "Creates governance discipline for scale",
        "Supports subsidiaries, affiliates, and partners"
      ]
    },
    {
      tags: ["Infrastructure", "Systems"],
      title: "Federated Core",
      icon: HiServer,
      problem: "Many organizations lack sovereign-grade digital infrastructure to coordinate operations, communication, and data control.",
      items: [
        "Provides cloud and collaboration backbone",
        "Supports operational systems and workflow discipline",
        "Strengthens data and platform sovereignty",
        "Creates infrastructure readiness for growth"
      ]
    },
    {
      tags: ["Trade", "Commerce"],
      title: "ODIEXA",
      icon: HiShoppingCart,
      problem: "Trade relationships are often unstructured, fragmented, and disconnected from governed execution.",
      items: [
        "Frames ecosystem trade pathways",
        "Supports structured commercial exchange",
        "Improves visibility around trade participation",
        "Strengthens public-facing trade opportunity positioning"
      ]
    },
    {
      tags: ["Technology", "Innovation"],
      title: "Oπ / Tech Hub",
      icon: HiLightningBolt,
      problem: "Businesses and ecosystems struggle to connect product building, development capacity, and digital execution.",
      items: [
        "Supports technology development communities",
        "Creates partnership paths for builders and innovators",
        "Aligns technology with ecosystem growth needs",
        "Connects membership to practical build capacity"
      ]
    },
    {
      tags: ["Distribution", "Growth"],
      title: "Channel Partner Network",
      icon: HiTrendingUp,
      problem: "Businesses need scalable sales and relationship channels but often rely on informal, unmanaged networks.",
      items: [
        "Repositions affiliate/advisor logic into a stronger partner model",
        "Supports ecosystem-wide distribution and introductions",
        "Creates a governed route for market expansion",
        "Strengthens growth with visibility and standards"
      ]
    },
    {
      tags: ["Recognition", "Participation"],
      title: "Aureon9",
      icon: HiStar,
      problem: "Many ecosystems fail to retain participation because contribution is not structured or recognized.",
      items: [
        "Creates tiered achievement and participation logic",
        "Supports public-facing advancement pathways",
        "Aligns contribution with community progression",
        "Improves long-term member engagement"
      ]
    },
    {
      tags: ["Capital", "Integrity"],
      title: "Capital Command",
      icon: HiCash,
      problem: "Growth without financial discipline creates instability, leakage, and weak institutional confidence.",
      items: [
        "Signals monetary and reserve discipline",
        "Supports ecosystem credibility with serious participants",
        "Frames public confidence around structured scale",
        "Strengthens investment-readiness narratives"
      ]
    },
    {
      tags: ["Tourism", "Gateway"],
      title: "Experience-Led Market Entry",
      icon: HiGlobeAlt,
      problem: "Many opportunities stay abstract because people never enter the ecosystem through practical, experiential pathways.",
      items: [
        "Supports ecosystem discovery through travel and business exposure",
        "Opens conversations around trade and investment",
        "Builds trust through curated engagement experiences",
        "Creates a softer entry path into ecosystem participation"
      ]
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-white" id="profit-centres">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
            Profit centres positioned as solutions
          </h2>
          <p className="m-0 text-slate-700 text-base md:text-lg font-medium">
            Each profit centre must be presented to the public not as internal jargon, but as a solution to an identifiable business or market problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
          {profitCentres.map((centre, index) => {
            const Icon = centre.icon
            return (
              <div key={index} className="profit-card h-full group">
                <div className="card-body flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="flex gap-2 flex-wrap flex-1">
                      {centre.tags.map((tag, i) => (
                        <span key={i} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="profit-icon-wrapper">
                      <Icon className="profit-icon" />
                    </div>
                  </div>
                  <h3 className="profit-title">{centre.title}</h3>
                  <p className="profit-problem">
                    <strong className="text-slate-900">Problem solved:</strong> {centre.problem}
                  </p>
                  <ul className="mt-3.5 pl-4.5 space-y-2">
                    {centre.items.map((item, i) => (
                      <li key={i} className="profit-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProfitCentres
