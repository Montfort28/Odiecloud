import { useFormSecurity } from '../../hooks/useFormSecurity'
import { membershipAPI } from '../../utils/api'
import { useState } from 'react'

const AccessFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  
  const initialFormData = {
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
  }

  const {
    formData,
    errors,
    honeypot,
    handleChange,
    handleHoneypotChange,
    validateAndSanitize,
    resetForm
  } = useFormSecurity(initialFormData)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    
    const result = validateAndSanitize()
    
    if (!result.isValid) {
      const firstError = Object.values(result.errors)[0]
      alert(`Validation Error: ${firstError}`)
      return
    }

    setIsSubmitting(true)

    try {
      // Send to backend API
      const response = await membershipAPI.submitApplication(result.data)
      
      alert('Thank you for your submission! We will review your request and get back to you soon.')
      resetForm()
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(error.message || 'Failed to submit application. Please try again.')
      alert(`Error: ${error.message || 'Failed to submit application. Please try again.'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-8.5 px-2 bg-white" id="access">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center animate-slide-up">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
            Request membership access
          </h2>
          <p className="m-0 text-slate-700 text-base md:text-lg font-medium">
            Every founder, business, investor, institution, technologist, channel partner, manufacturer, or intern seeking entry into the ecosystem should complete this form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4.5">
          {/* Info Panel - Enhanced with card styling and animations */}
          <div className="group relative overflow-hidden rounded-4xl p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer animate-slide-in-left"
            style={{animation: 'slideInLeft 0.6s ease-out'}}
          >
            {/* Solid background card styling */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-cyan-50 to-sky-100 transition-all duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-200/60 rounded-4xl group-hover:border-blue-100/80 transition-all duration-500 pointer-events-none"></div>
            
            {/* Animated linear overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-200/30 to-sky-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>
            
            {/* Radial glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" style={{background: 'radial-linear(circle at 50% 0%, rgba(14, 165, 233, 0.2), transparent 70%)'}}></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mt-0 font-black text-2xl mb-6 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">What happens after submission</h3>
              <ul className="text-slate-700 space-y-3 pl-5 group-hover:text-slate-900 transition-colors duration-300">
                <li className="hover:translate-x-1 transition-transform duration-200">Your request is reviewed against the ecosystem participation model.</li>
                <li className="hover:translate-x-1 transition-transform duration-200">You are aligned to the most appropriate community type and opportunity pathway.</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Serious applicants can be invited into membership, briefing, or next-step conversations.</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Public interest is converted into a structured ecosystem onboarding pathway.</li>
              </ul>

              <h3 className="font-black text-xl mb-4 mt-6 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">Benefits of becoming a member</h3>
              <ul className="text-slate-700 space-y-2 pl-5 group-hover:text-slate-900 transition-colors duration-300">
                <li className="hover:translate-x-1 transition-transform duration-200">Structured access to ecosystem solutions</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Visibility into relevant opportunity corridors</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Potential alignment with partnerships and market pathways</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Governance-backed participation context</li>
                <li className="hover:translate-x-1 transition-transform duration-200">Entry into a defined ecosystem, not an informal network</li>
              </ul>
            </div>
          </div>

          {/* Form Panel - Enhanced with card styling and animations */}
          <div className="group relative overflow-hidden rounded-4xl p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer animate-slide-in-right"
            style={{animation: 'slideInRight 0.6s ease-out'}}
          >
            {/* Solid background card styling */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-cyan-50 to-sky-100 transition-all duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-200/60 rounded-4xl group-hover:border-blue-100/80 transition-all duration-500 pointer-events-none"></div>
            
            {/* Animated linear overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-200/30 to-sky-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>
            
            {/* Radial glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" style={{background: 'radial-linear(circle at 50% 0%, rgba(14, 165, 233, 0.2), transparent 70%)'}}></div>
            
            {/* Content */}
            <div className="relative z-10">
              <form onSubmit={handleSubmit}>
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="website_url"
                  value={honeypot}
                  onChange={handleHoneypotChange}
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Show form-level errors */}
                {errors.form && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
                    {errors.form}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
                    <label htmlFor="name" className="text-sm font-bold text-[#28435f]">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength="100"
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                    {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.15s'}}>
                    <label htmlFor="email" className="text-sm font-bold text-[#28435f]">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength="255"
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                    {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <label htmlFor="phone" className="text-sm font-bold text-[#28435f]">Phone/WhatsApp</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="+250 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength="50"
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                    {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.25s'}}>
                    <label htmlFor="country" className="text-sm font-bold text-[#28435f]">Country</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Country of operation"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      maxLength="100"
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                    {errors.country && <span className="text-xs text-red-600">{errors.country}</span>}
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
                    <label htmlFor="org" className="text-sm font-bold text-[#28435f]">Organization / Business</label>
                    <input
                      id="org"
                      type="text"
                      placeholder="Company, institution, or initiative name"
                      value={formData.org}
                      onChange={handleChange}
                      required
                      maxLength="200"
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                    {errors.org && <span className="text-xs text-red-600">{errors.org}</span>}
                  </div>

                  <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.35s'}}>
                    <label htmlFor="role" className="text-sm font-bold text-[#28435f]">Your Role</label>
                    <input
                      id="role"
                      type="text"
                      placeholder="Founder, investor, operator, partner, etc."
                      value={formData.role}
                      onChange={handleChange}
                      required
                      maxLength="100"
                      className="w-full min-h-12.5 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 hover:border-blue-700/30"
                    />
                    {errors.role && <span className="text-xs text-red-600">{errors.role}</span>}
                  </div>

                  <div className="col-span-2 grid grid-cols-2 gap-3.5 items-end">
                    <div className="flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.4s'}}>
                      <label htmlFor="community" className="text-sm font-bold text-[#28435f]">Membership / Community Type of Interest</label>
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
                      <label htmlFor="opportunity" className="text-sm font-bold text-[#28435f]">Primary Opportunity Interest</label>
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
                  </div>

                  <div className="col-span-2 flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <label htmlFor="problem" className="text-sm font-bold text-[#28435f]">What problem are you trying to solve?</label>
                    <textarea
                      id="problem"
                      placeholder="Describe the business, market, governance, trade, investment, manufacturing, or technology problem you want ODIECLOUD²π to help solve."
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      maxLength="2000"
                      className="w-full min-h-35 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 py-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 resize-none hover:border-blue-700/30"
                    />
                    {errors.problem && <span className="text-xs text-red-600">{errors.problem}</span>}
                  </div>

                  <div className="col-span-2 flex flex-col gap-2 animate-slide-up" style={{animationDelay: '0.55s'}}>
                    <label htmlFor="notes" className="text-sm font-bold text-[#28435f]">Why do you want access to ODIECLOUD²π?</label>
                    <textarea
                      id="notes"
                      placeholder="Explain your intent, opportunity area, and why your participation should be considered."
                      value={formData.notes}
                      onChange={handleChange}
                      required
                      maxLength="2000"
                      className="w-full min-h-35 rounded-3xl border border-blue-700/20 bg-white/80 px-3.5 py-3.5 font-inherit text-text outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/20 transition-all duration-300 resize-none hover:border-blue-700/30"
                    />
                    {errors.notes && <span className="text-xs text-red-600">{errors.notes}</span>}
                  </div>
                </div>

                <div className="mt-4.5 flex gap-3 flex-wrap items-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Membership Access'}
                  </button>
                  <span className="text-xs text-muted">
                    Submission routes the applicant into a controlled ecosystem qualification process.
                  </span>
                </div>
                
                {submitError && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccessFormSection
