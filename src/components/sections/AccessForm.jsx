import { useState } from 'react'

const AccessFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    org: '',
    role: '',
    community: 'Select one',
    opportunity: 'Select one',
    problem: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to a backend service
    alert('Thank you for your submission! We will review your request and get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      org: '',
      role: '',
      community: 'Select one',
      opportunity: 'Select one',
      problem: '',
      notes: ''
    })
  }

  return (
    <section className="py-8.5 px-2" id="access">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            Request membership access
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            Every founder, business, investor, institution, technologist, channel partner, manufacturer, or intern seeking entry into the ecosystem should complete this form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4.5">
          {/* Info Panel - Enhanced with animations */}
          <div className="group relative overflow-hidden rounded-4xl p-7 transition-all duration-500 hover:-translate-y-2 animate-slide-in-left"
            style={{animation: 'slideInLeft 0.6s ease-out'}}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/3 to-transparent"></div>
            
            {/* Border with glow animation */}
            <div className="absolute inset-0 rounded-4xl border-1.5 border-blue-700/15 group-hover:border-blue-700/30 transition-all duration-500 pointer-events-none"></div>
            
            {/* Shadow glow effect */}
            <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(12,127,199,0.1)]"></div>
            
            {/* Shiny overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-4xl" style={{background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)'}}></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mt-0 font-black text-2xl mb-6 text-text group-hover:text-blue-800 transition-colors duration-300">What happens after submission</h3>
              <ul className="text-muted space-y-3 pl-5 group-hover:text-text-light transition-colors duration-300">
                <li className="hover:translate-x-1 transition-transform duration-200">Your request is reviewed against the ecosystem participation model.</li>
                <li className="hover:translate-x-1 transition-transform duration-200">You are aligned to the most appropriate community type and opportunity pathway.</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Serious applicants can be invited into membership, briefing, or next-step conversations.</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Public interest is converted into a structured ecosystem onboarding pathway.</li>
              </ul>

              <h3 className="font-black text-xl mb-4 mt-6 text-text group-hover:text-blue-800 transition-colors duration-300">Benefits of becoming a member</h3>
              <ul className="text-muted space-y-2 pl-5 group-hover:text-text-light transition-colors duration-300">
                <li className="hover:translate-x-1 transition-transform duration-200">Structured access to ecosystem solutions</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Visibility into relevant opportunity corridors</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Potential alignment with partnerships and market pathways</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Governance-backed participation context</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Entry into a defined ecosystem, not an informal network</li>
              </ul>
            </div>
          </div>

          {/* Form Panel - Enhanced with animations */}
          <div className="group relative overflow-hidden rounded-4xl p-7 transition-all duration-500 hover:-translate-y-2 animate-slide-in-right"
            style={{animation: 'slideInRight 0.6s ease-out'}}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/3 to-transparent"></div>
            
            {/* Border with glow animation */}
            <div className="absolute inset-0 rounded-4xl border-1.5 border-blue-700/15 group-hover:border-blue-700/30 transition-all duration-500 pointer-events-none"></div>
            
            {/* Shadow glow effect */}
            <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(12,127,199,0.1)]"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
                    <label htmlFor="name" className="text-xs font-bold text-[#28435f]">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[50px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.15s'}}>
                    <label htmlFor="email" className="text-xs font-bold text-[#28435f]">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[50px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <label htmlFor="phone" className="text-xs font-bold text-[#28435f]">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="+250 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[50px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.25s'}}>
                    <label htmlFor="country" className="text-xs font-bold text-[#28435f]">Country</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Country of operation"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[50px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
                    <label htmlFor="org" className="text-xs font-bold text-[#28435f]">Organization / Business</label>
                    <input
                      id="org"
                      type="text"
                      placeholder="Company, institution, or initiative name"
                      value={formData.org}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[50px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.35s'}}>
                    <label htmlFor="role" className="text-xs font-bold text-[#28435f]">Your Role</label>
                    <input
                      id="role"
                      type="text"
                      placeholder="Founder, investor, operator, partner, etc."
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[50px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <label htmlFor="community" className="text-xs font-bold text-[#28435f]">Membership / Community Type of Interest</label>
                    <select
                      id="community"
                      value={formData.community}
                      onChange={handleChange}
                      required
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    >
                      <option>Select one</option>
                      <option>Subsidiaries</option>
                      <option>Equity Affiliates</option>
                      <option>Equity Partners</option>
                      <option>Strategic Partnerships</option>
                      <option>Technology Partnerships (Tech Hub)</option>
                      <option>Channel Partner Network</option>
                      <option>Internship Networks</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.45s'}}>
                    <label htmlFor="opportunity" className="text-xs font-bold text-[#28435f]">Primary Opportunity Interest</label>
                    <select
                      id="opportunity"
                      value={formData.opportunity}
                      onChange={handleChange}
                      required
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    >
                      <option>Select one</option>
                      <option>Business Opportunities</option>
                      <option>Investment Opportunities</option>
                      <option>Manufacturing Opportunities</option>
                      <option>Trade Opportunities</option>
                      <option>Technology / Build Opportunities</option>
                      <option>General Ecosystem Membership</option>
                    </select>
                  </div>

                  <div className="col-span-2 flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <label htmlFor="problem" className="text-xs font-bold text-[#28435f]">What problem are you trying to solve?</label>
                    <textarea
                      id="problem"
                      placeholder="Describe the business, market, governance, trade, investment, manufacturing, or technology problem you want ODIECLOUD²π to help solve."
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[140px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 py-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 resize-none hover:border-blue-700/30"
                    />
                  </div>

                  <div className="col-span-2 flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.55s'}}>
                    <label htmlFor="notes" className="text-xs font-bold text-[#28435f]">Why do you want access to ODIECLOUD²π?</label>
                    <textarea
                      id="notes"
                      placeholder="Explain your intent, opportunity area, and why your participation should be considered."
                      value={formData.notes}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[140px] rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 py-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 resize-none hover:border-blue-700/30"
                    />
                  </div>
                </div>

                <div className="mt-4.5 flex gap-3 flex-wrap items-center">
                  <button type="submit" className="btn btn-primary">
                    Request Membership Access
                  </button>
                  <span className="text-xs text-muted">
                    Submission routes the applicant into a controlled ecosystem qualification process.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccessFormSection
