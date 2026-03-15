import SolutionCards from '../components/sections/SolutionCards'

const SolutionsPage = () => {
  return (
    <>
      <section className="py-8.5 px-2 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-400 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
              Solutions for Business Growth
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
              ODIECLOUD²π provides integrated solutions for technology, business development, investment, and marketplace access. Each solution is designed to accelerate enterprise growth.
            </p>
          </div>
        </div>
      </section>

      <SolutionCards />

      <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="m-0 mb-3 text-2xl md:text-3xl font-black text-slate-900">
              Comprehensive Support For Every Business Model
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Whether you're a startup, established company, or enterprise seeking new markets, ODIECLOUD²π has solutions tailored to your needs.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Request Solution Consultation
            </a>
            <a href="/#opportunities" className="btn btn-secondary px-6 py-3">
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default SolutionsPage
