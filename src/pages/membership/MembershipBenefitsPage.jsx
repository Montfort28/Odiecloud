import { HiCheckCircle, HiUsers, HiGlobeAlt, HiChartBar, HiStar, HiCog, HiMail, HiShieldCheck } from 'react-icons/hi'

const MembershipBenefitsPage = () => {
  const benefits = [
    {
      icon: HiCheckCircle,
      title: 'Ecosystem Access',
      description: 'Full access to ODIECLOUD²π ecosystem networks, opportunities, and resources.'
    },
    {
      icon: HiUsers,
      title: 'Community Engagement',
      description: 'Active participation in community events, forums, and networking sessions.'
    },
    {
      icon: HiGlobeAlt,
      title: 'Market Access',
      description: 'Participate in the unified marketplace connecting multiple industries.'
    },
    {
      icon: HiChartBar,
      title: 'Business Intelligence',
      description: 'Access to market insights, data analytics, and business intelligence tools.'
    },
    {
      icon: HiStar,
      title: 'Priority Support',
      description: 'Dedicated support team and priority access to new features and opportunities.'
    },
    {
      icon: HiCog,
      title: 'Technical Resources',
      description: 'Cloud infrastructure, APIs, and developer tools to accelerate your growth.'
    },
    {
      icon: HiMail,
      title: 'Exclusive Communications',
      description: 'First access to announcements, opportunities, and partnership proposals.'
    },
    {
      icon: HiShieldCheck,
      title: 'Brand Association',
      description: 'Recognition as an ODIECLOUD²π member with verified credentials.'
    }
  ]

  return (
    <>
      <section className="py-8.5 px-2 bg-gradient-to-r from-green-900 via-blue-800 to-cyan-500 rounded-b-3xl overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-6 text-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <h1 className="text-white m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black">
              Membership Benefits
            </h1>
            <p className="text-white/92 m-0 text-lg leading-relaxed max-w-2xl mx-auto">
              Unlock exclusive benefits designed to accelerate your success within ODIECLOUD²π.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="m-0 mb-3 text-3xl md:text-4xl font-black text-slate-900">
              Member Advantages
            </h2>
            <p className="m-0 text-lg text-slate-600 leading-relaxed">
              ODIECLOUD²π members gain access to comprehensive benefits that fuel success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="card group border-2 border-green-200/60 hover:border-green-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`}}
                >
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-green-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-green-500/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="m-0 mb-2 text-lg font-black text-slate-900 group-hover:text-green-700 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="m-0 text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8.5 px-2 bg-gradient-to-b from-sky-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="m-0 mb-3 text-2xl md:text-3xl font-black text-slate-900">
              Join Thousands of Successful Members
            </h2>
            <p className="m-0 text-slate-600 leading-relaxed">
              Become part of Africa's leading digital ecosystem today.
            </p>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="btn btn-primary px-6 py-3">
              Apply for Membership Now
            </a>
            <a href="/membership" className="btn btn-secondary px-6 py-3">
              View Membership Types
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default MembershipBenefitsPage
