const Hero = () => {
  return (
    <section className="py-6 md:py-8 px-2" id="overview">
      <div className="container">
        <div className="bg-linear-to-br from-blue-900 via-blue-800 to-cyan-400 rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative group hover:shadow-glow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 items-center p-5 md:p-8 relative z-10">
            {/* Left Content */}
            <div style={{animation: 'fadeIn 0.5s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/12 border border-white/22 text-white text-xs uppercase tracking-wider mb-3 hover:bg-white/18 transition-colors duration-300 backdrop-blur-sm" style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}>
                <span className="w-2 h-2 rounded-full bg-white/80" style={{animation: 'pulse 2s ease-in-out infinite'}}></span>
                Unified Governance. Unified Marketplace. Unified Infrastructure.
              </div>

              <h1 className="text-white m-0 mb-2 text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-bold max-w-4xl hover:drop-shadow-lg transition-all duration-300" style={{fontFamily: '"Inter", sans-serif', fontWeight: 700, letterSpacing: '-0.02em'}}>
                Digitizing Global Africa into a governed and investable marketplace.
              </h1>

              <p className="text-white/92 m-0 mb-4 text-base md:text-lg leading-relaxed max-w-2xl" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
                This live demo is the front-end master system for the ODIECLOUD²π web estate. It is built to be cloned across the ecosystem root, marketplace, founder, technology, Channel Partner, and company domains with no visual break.
              </p>

              <div className="flex gap-2.5 flex-wrap mb-0" style={{animation: 'slideUp 0.6s ease-out'}}>
                <a href="/contact" className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200 text-sm px-4 py-2">
                  Request Membership Access
                </a>
                <a href="/#profit-centres" className="btn btn-secondary transform hover:scale-105 active:scale-95 transition-transform duration-200 text-sm px-4 py-2">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center items-center min-h-52 md:min-h-64 relative overflow-visible" style={{animation: 'float 3s ease-in-out infinite'}}>
              <div className="w-full max-w-sm aspect-square rounded-full bg-linear-to-br from-white/40 via-white/10 to-white/5 relative shadow-2xl border border-white/26 flex items-center justify-center group hover:shadow-glow-lg transition-all duration-300">
                <div className="absolute inset-0 rounded-full border-22 border-white/28 border-t-white/85 border-r-white/55 rotate-34 group-hover:rotate-44 transition-transform duration-500">
                  <div className="absolute w-12 h-12 rounded-full bg-linear-to-br from-white/94 to-white/24 shadow-md -right-6 top-1/3 group-hover:shadow-glow transition-all duration-300 hover:scale-110"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-linear-to-br from-white/94 to-white/24 shadow-md left-2 -top-4 group-hover:shadow-glow transition-all duration-300 hover:scale-110"></div>
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
