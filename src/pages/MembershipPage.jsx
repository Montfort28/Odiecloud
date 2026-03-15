import MembershipTypes from '../components/sections/MembershipTypes'
import MembershipBenefits from '../components/sections/MembershipBenefits'

const MembershipPage = () => {
  return (
    <>
      <section className="py-8.5 px-2 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-400 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>
              Membership Overview
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
              Membership provides structured access to the ODIECLOUD²π ecosystem. Members gain access to opportunities, collaborations, and digital infrastructure designed to accelerate growth.
            </p>
          </div>
        </div>
      </section>

      <MembershipBenefits />
      <MembershipTypes />

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center">
              <h2 className="text-3xl font-black m-0 mb-3">Ready to Become a Member?</h2>
              <p className="m-0 mb-4 text-white/90 text-lg">
                Choose your membership type and join thousands of ecosystem members accessing global opportunities.
              </p>
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
                Request Membership Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MembershipPage
