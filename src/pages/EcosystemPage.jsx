import SitemapSection from '../components/sections/Sitemap'

const EcosystemPage = () => {
  return (
    <>
      <section className="py-8.5 px-2 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-400 rounded-b-3xl overflow-hidden" id="overview">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
              What Is the ODIECLOUD²π Ecosystem
            </h1>
            <p className="text-white/92 m-0 mb-4 text-lg leading-relaxed max-w-2xl mx-auto" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
              ODIECLOUD²π is a multi-layered ecosystem designed to unify commerce, technology, and enterprise governance. The ecosystem connects companies, entrepreneurs, investors, developers, and professionals into a structured platform designed for long-term economic collaboration.
            </p>
            <p className="text-white/92 m-0 text-base leading-relaxed max-w-2xl mx-auto" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
              Participation is organized through multiple network layers that enable cooperation and growth across all sectors.
            </p>
          </div>
        </div>
      </section>

      <SitemapSection />
    </>
  )
}

export default EcosystemPage
