const Hero = () => {
  return (
    <section className="py-10.5 md:py-16 px-2" id="overview">
      <div className="container">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-400 rounded-4xl overflow-hidden border border-white/15 shadow-2xl relative group hover:shadow-glow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-7 items-center p-8 md:p-16 relative z-10">
            {/* Left Content */}
            <div style={{animation: 'fadeIn 0.5s ease-out'}}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/12 border border-white/22 text-white text-xs font-black uppercase tracking-wider mb-5 hover:bg-white/18 transition-colors duration-300 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-white/80" style={{animation: 'pulse 2s ease-in-out infinite'}}></span>
                Member of ODIECLOUD²π Ecosystem
              </div>

              <h1 className="text-white m-0 mb-4 text-4xl md:text-5xl lg:text-6xl leading-[0.98] -tracking-wider font-black max-w-5xl hover:drop-shadow-lg transition-all duration-300">
                Join the ecosystem built to structure growth, trade, capital, technology, and market access.
              </h1>

              <p className="text-white/92 m-0 mb-6 text-lg md:text-xl leading-relaxed max-w-2xl">
                ODIECLOUD²π gives founders, operators, partners, investors, manufacturers, technologists, and institutions a governed pathway into business growth, cross-border execution, partnership frameworks, digital infrastructure, and coordinated opportunity.
              </p>

              <div className="flex gap-3 flex-wrap mb-7" style={{animation: 'slideUp 0.6s ease-out'}}>
                <a href="#access" className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200">
                  Request Membership Access
                </a>
                <a href="#questions" className="btn btn-secondary transform hover:scale-105 active:scale-95 transition-transform duration-200">
                  See the Questions We Answer
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                {[
                  { value: '7', label: 'Membership Community Types' },
                  { value: '8+', label: 'Core Profit-Centre Solution Areas' },
                  { value: '4', label: 'Opportunity Corridors' },
                  { value: '1', label: 'Unified Ecosystem Access Form' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 border border-white/18 rounded-3xl px-4 py-4.5 text-white backdrop-blur-sm hover:bg-white/15 hover:shadow-glow transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-3xl font-black leading-none mb-1.5 group-hover:drop-shadow-lg transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs leading-snug group-hover:text-white/100 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center items-center min-h-80 md:min-h-96 relative" style={{animation: 'float 3s ease-in-out infinite'}}>
              <div className="w-full max-w-sm aspect-square rounded-full bg-gradient-to-br from-white/40 via-white/10 to-white/5 relative shadow-2xl border border-white/26 flex items-center justify-center group hover:shadow-glow-lg transition-all duration-300">
                <div className="absolute inset-0 rounded-full border-[22px] border-white/28 border-t-white/85 border-r-white/55 rotate-[34deg] group-hover:rotate-[44deg] transition-transform duration-500">
                  <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-white/94 to-white/24 shadow-md -right-7 top-1/3 group-hover:shadow-glow transition-all duration-300 hover:scale-110"></div>
                  <div className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-white/94 to-white/24 shadow-md left-2 -top-5 group-hover:shadow-glow transition-all duration-300 hover:scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
