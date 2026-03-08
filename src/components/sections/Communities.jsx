import { Building2, Handshake, Briefcase, Target, Zap, Globe, GraduationCap } from 'lucide-react'

const CommunitiesSection = () => {
  const communities = [
    {
      title: "Subsidiaries",
      description: "Wholly or majority controlled ecosystem operating entities aligned to ODIEBOARD and ecosystem standards.",
      icon: Building2
    },
    {
      title: "Equity Affiliates",
      description: "Aligned businesses with equity relationship and ecosystem integration logic.",
      icon: Handshake
    },
    {
      title: "Equity Partners",
      description: "Partnerships structured around shared participation, strategic growth, and coordinated value creation.",
      icon: Briefcase
    },
    {
      title: "Strategic Partnerships",
      description: "External institutions, firms, and entities connected to the ecosystem for defined strategic collaboration.",
      icon: Target
    },
    {
      title: "Technology Partnerships (Tech Hub)",
      description: "Builders, developers, and technology organizations connected through Oπ and the broader innovation framework.",
      icon: Zap
    },
    {
      title: "Channel Partner Network",
      description: "The renamed affiliate/advisor network built around distribution, introductions, and ecosystem commercial activation.",
      icon: Globe
    },
    {
      title: "Internship Networks",
      description: "Structured entry pathways for students, trainees, and emerging talent aligned to the ecosystem pipeline.",
      icon: GraduationCap
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {communities.map((community, index) => {
            const Icon = community.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 border-2 border-sky-200/60 hover:border-sky-400/80 hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
                  padding: '28px',
                  minHeight: '240px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-blue-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Radial glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.2), transparent 70%)'}}></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Black Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  
                  <h3 className="text-base font-black mb-3 leading-snug text-slate-800 transition-all duration-300 group-hover:text-sky-700" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 700}}>
                    {community.title}
                  </h3>
                  
                  <p className="text-slate-700 text-sm leading-relaxed m-0 flex-grow transition-colors duration-300 group-hover:text-slate-900" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 400}}>
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
