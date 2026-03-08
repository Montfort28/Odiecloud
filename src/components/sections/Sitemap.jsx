const SitemapSection = () => {
  const pages = [
    {
      title: "Home",
      description: "Hero, ecosystem overview, key questions answered, profit-centre summary, opportunity corridors, and access CTA."
    },
    {
      title: "Ecosystem",
      description: "Explains ODIECLOUD²π architecture, governance-first philosophy, operating model, and public-facing logic."
    },
    {
      title: "Solutions",
      description: "Dedicated pages for each profit centre, framed as solutions to practical market and organizational problems."
    },
    {
      title: "Opportunities",
      description: "Business, investment, manufacturing, and trade opportunity pages with controlled positioning and access CTA."
    },
    {
      title: "Membership",
      description: "Explains community types, participation benefits, who should apply, and what happens after submission."
    },
    {
      title: "Request Access",
      description: "The primary conversion page, containing the ecosystem access form and qualification logic."
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-blue-50/90">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            Suggested sitemap blueprint
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            This public site should be built as a high-clarity conversion and qualification website, not just an informational brochure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          {pages.map((page, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer group bg-linear-to-r from-[#0a3558] to-blue-700"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Hover background overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{
                  background: 'linear-gradient(to right, #1a5fa5, #3b9eff)'
                }}
              ></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5), transparent)'
                }}
              ></div>
              
              <div className="relative z-10 p-7">
                <h3 className="m-0 mb-3 text-xl font-black text-white group-hover:text-sky-200 transition-colors duration-300">
                  {page.title}
                </h3>
                <p className="m-0 text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {page.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SitemapSection
