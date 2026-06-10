import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="w-full overflow-hidden relative flex flex-col" id="overview" style={{
      height: 'calc(100vh - 64px)',
      marginTop: '0'
    }}>
      {/* Background Image - Cut to fit hero section only */}
      <div className="absolute inset-0 w-full" style={{
        overflow: 'hidden',
        height: 'calc(100vh - 64px)',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }}>
        <img 
          src="/images/kamran-abdullayev-okkwqpKX2qw-unsplash.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-105" 
          style={{
            height: '100%',
            width: '100%',
            objectPosition: 'center top',
            display: 'block'
          }}
        />
      </div>
      
      {/* Subtle Blue Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/45 via-blue-800/35 to-cyan-900/40" style={{
        height: 'calc(100vh - 64px)'
      }}></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4" style={{
        height: '100%',
        minHeight: 'calc(100vh - 64px)',
        paddingTop: '0'
      }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center py-8 lg:py-6 md:py-4" style={{
            height: '100%'
          }}>
            
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 px-4 md:px-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-white/12 border border-white/25 text-white text-xs md:text-sm uppercase tracking-wider backdrop-blur-sm hover:bg-white/18 transition-colors duration-300" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}>
                <span className="w-2 h-2 rounded-full bg-white/80" style={{animation: 'pulse 2s ease-in-out infinite'}}></span>
                <span className="hidden md:inline">Unified Governance • Marketplace • Infrastructure</span>
                <span className="md:hidden">Unified Governance</span>
              </div>

              {/* Main Heading */}
              <h1 
                className="text-white font-black leading-tight m-0"
                style={{
                  fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em'
                }}
              >
                <span className="hidden sm:inline">Digitizing Global Africa Into A Unified Economic Ecosystem</span>
                <span className="sm:hidden">Digitizing Africa Into Unified Economy</span>
              </h1>

              {/* Description */}
              <p 
                className="text-white/90 m-0 max-w-2xl"
                style={{
                  fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.55,
                  fontWeight: 400
                }}
              >
                ODIECLOUD²π is a governance-engineered digital and commercial infrastructure designed to connect businesses, entrepreneurs, investors, and innovators across Africa and the global diaspora into one structured marketplace.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm md:text-base"
                  style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                >
                  Request Access
                </Link>
                <Link 
                  to="/membership" 
                  className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-2xl border border-white/40 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm md:text-base"
                  style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                >
                  <span className="hidden sm:inline">Become a Member</span>
                  <span className="sm:hidden">Become Member</span>
                </Link>
              </div>
            </div>

            {/* Right Visual - Animated circles */}
            {/* Desktop/Laptop (lg+) - Side by side */}
            <div className="hidden lg:flex justify-center items-center relative" style={{height: '100%'}}>
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

            {/* Tablet/iPad (md to lg) - Hidden on iPad when image is cut */}
            <div className="hidden">
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

        /* iPad/Tablet/Nest Hub ONLY - 768px to 1279px (NOT desktop) */
        @media (min-width: 768px) and (max-width: 1279px) {
          section#overview {
            height: auto !important;
            min-height: 720px !important;
          }
          
          /* Background image */
          section#overview > div:nth-child(1) {
            height: 720px !important;
          }
          
          /* Overlay */
          section#overview > div:nth-child(2) {
            height: 720px !important;
          }

          /* Content container */
          section#overview > div:nth-child(3) {
            height: auto !important;
            min-height: auto !important;
            padding-top: 3rem !important;
          }

          /* Grid */
          .grid {
            height: auto !important;
            padding-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
