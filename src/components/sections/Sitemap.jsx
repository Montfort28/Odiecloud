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
    <section className="py-8.5 px-2  bg-white">
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
            <div key={index} className="card">
              <div className="card-body">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SitemapSection
