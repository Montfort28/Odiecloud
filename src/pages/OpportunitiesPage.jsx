import OpportunitiesCards from '../components/sections/OpportunitiesCards'

const OpportunitiesPage = () => {
  return (
    <>
      <section className="py-8.5 px-2 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-400 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
              Unlimited Opportunities Await
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
              ODIECLOUD²π connects members with vetted business, investment, manufacturing, and trade opportunities. Access partnerships that align with your growth strategy.
            </p>
          </div>
        </div>
      </section>

      <OpportunitiesCards />

      <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-white border border-sky-200 mb-6">
              <h2 className="text-2xl font-black text-slate-900 m-0 mb-3">
                How Opportunities Work
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 m-0">
                <li><strong>Become a Member</strong> - Join as an entrepreneur, investor, business owner, or strategic partner</li>
                <li><strong>Explore Opportunities</strong> - Browse curated opportunities aligned with your interests</li>
                <li><strong>Connect & Collaborate</strong> - Meet vetted partners through ecosystem introductions</li>
                <li><strong>Scale & Grow</strong> - Access support systems and resources to succeed</li>
              </ol>
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <a href="/contact" className="btn btn-primary px-6 py-3">
                Start Exploring Opportunities
              </a>
              <a href="/membership" className="btn btn-secondary px-6 py-3">
                View Membership Options
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OpportunitiesPage
