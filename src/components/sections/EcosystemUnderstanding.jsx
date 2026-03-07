const EcosystemUnderstanding = () => {
  const steps = [
    {
      number: "1",
      title: "Request access",
      description: "Every serious participant completes the membership access form, creating a controlled first point of entry."
    },
    {
      number: "2",
      title: "Qualified routing",
      description: "Applicants are aligned to the right community type and solution pathway based on profile, intent, and opportunity class."
    },
    {
      number: "3",
      title: "Solution alignment",
      description: "The ecosystem connects each member to the right governance, technology, trade, partner, or manufacturing framework."
    },
    {
      number: "4",
      title: "Coordinated participation",
      description: "Membership becomes active through structured engagement, opportunity participation, and ecosystem contribution."
    }
  ]

  return (
    <section className="py-8.5 px-2">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            How the public should understand the ecosystem
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            ODIECLOUD²π should be explained as an access architecture: people join through membership, enter the right community, connect to the right profit-centre solutions, and move into the right opportunity corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{animation: `slideUp 0.6s ease-out ${index * 0.1}s both`}}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/5 to-transparent"></div>
              
              {/* Border with glow effect */}
              <div className="absolute inset-0 border-1.5 border-transparent group-hover:border-blue-700/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              
              {/* Subtle animated glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(12,127,199,0.1)]"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-cyan-400 text-white font-black text-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-700/30">
                  {step.number}
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider mb-3 text-text group-hover:text-blue-800 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed m-0 group-hover:text-text-light transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Smooth box shadow and border effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,252,255,0.9))',
                border: '1.5px solid rgba(12, 127, 199, 0.2)',
                boxShadow: '0 20px 50px rgba(12, 127, 199, 0.12)',
              }}></div>
              
              {/* Shiny overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none rounded-3xl from-white via-transparent to-white" style={{background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EcosystemUnderstanding
