const Hero = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden relative flex flex-col" id="overview">
      {/* Background Image - Clearer with better contrast */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/nasa-Q1p7bh3SHj8-unsplash.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-105" 
        />
      </div>
      
      {/* Subtle Blue Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/45 via-blue-800/35 to-cyan-900/40"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-8 min-h-[calc(100vh-120px)]">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/12 border border-white/25 text-white text-xs uppercase tracking-wider backdrop-blur-sm hover:bg-white/18 transition-colors duration-300" style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}>
                <span className="w-2 h-2 rounded-full bg-white/80" style={{animation: 'pulse 2s ease-in-out infinite'}}></span>
                Unified Governance • Marketplace • Infrastructure
              </div>

              {/* Main Heading - H2 style from specifications */}
              <h1 
                className="text-white font-black leading-tight m-0"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.04,
                  letterSpacing: '-0.04em'
                }}
              >
                Digitizing Global Africa Into A Unified Economic Ecosystem
              </h1>

              {/* Description - Section description style from specifications */}
              <p 
                className="text-white/90 m-0 max-w-2xl"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                ODIECLOUD²π is a governance-engineered digital and commercial infrastructure designed to connect businesses, entrepreneurs, investors, and innovators across Africa and the global diaspora into one structured marketplace.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-base"
                >
                  Request Access
                </a>
                <a 
                  href="/membership" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg border border-white/40 transition-all duration-200 transform hover:scale-105 active:scale-95 text-base"
                >
                  Become a Member
                </a>
              </div>
            </div>

            {/* Right Visual - Animated circles */}
            <div className="hidden lg:flex justify-center items-center relative h-96">
              <div className="relative w-full max-w-xs aspect-square">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-white/60 border-r-white/30 animate-spin" style={{animationDuration: '8s'}}></div>
                  
                  {/* Floating Elements */}
                  <div 
                    className="absolute w-14 h-14 rounded-full bg-white/20 border border-white/40 shadow-lg"
                    style={{
                      right: '-24px',
                      top: '20%',
                      animation: 'float 4s ease-in-out infinite'
                    }}
                  ></div>
                  
                  <div 
                    className="absolute w-10 h-10 rounded-full bg-white/25 border border-white/50 shadow-lg"
                    style={{
                      left: '8px',
                      top: '-20px',
                      animation: 'float 5s ease-in-out infinite 0.5s'
                    }}
                  ></div>

                  <div 
                    className="absolute w-6 h-6 rounded-full bg-white/30 border border-white/60 shadow-lg"
                    style={{
                      right: '12px',
                      bottom: '8%',
                      animation: 'float 6s ease-in-out infinite 1s'
                    }}
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

