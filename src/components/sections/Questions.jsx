import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const QuestionsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const questions = [
    {
      q: "How do we structure a business so it can scale across jurisdictions without breaking internally?",
      a: "Through ODIEBOARD and the ecosystem governance layer, ODIECLOUD²π establishes lines of communication, accountability, systems architecture, compliance logic, and scalable execution discipline."
    },
    {
      q: "How do we access markets, partnerships, and distribution without relying on informal networks?",
      a: "Through the Channel Partner Network, strategic partnerships, and ecosystem community structure, ODIECLOUD²π turns relationship-building into a measurable and governed pathway."
    },
    {
      q: "How do we connect technology, operations, and commercial growth inside one framework?",
      a: "Through the Federated Core, Oπ, Tech Hub partnerships, and the broader ecosystem architecture, ODIECLOUD²π aligns digital infrastructure with execution and growth."
    },
    {
      q: "How do we identify serious business, trade, manufacturing, and investment opportunities without chaos?",
      a: "Through governed membership access, curated communities, and profit-centre pathways that separate qualified participation from casual interest."
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-slate-50 relative overflow-hidden" id="questions">
      {/* Background Image - Behind Content */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/images/questions.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center" style={{animation: 'fadeIn 0.8s ease-out'}}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-sky-100 to-cyan-100 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500" style={{animation: 'pulse 2s ease-in-out infinite'}}></span>
            Strategic Questions
          </div>
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]" style={{fontFamily: '"Inter", sans-serif', fontWeight: 700}}>
            Questions the ecosystem is built to answer
          </h2>
          <p className="m-0 text-slate-600 text-lg md:text-xl leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
            ODIECLOUD²π should be presented as the answer to questions businesses, investors, partners, manufacturers, and institutions are already asking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 max-w-4xl mx-auto">
          {questions.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                background: 'linear-linear(135deg, rgba(255,255,255,0.95) 0%, rgba(240, 249, 255, 0.9) 100%)',
                border: '2px solid transparent',
                boxShadow: '0 10px 40px rgba(14, 165, 233, 0.08), 0 0 0 1px rgba(14, 165, 233, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                padding: '32px',
                transform: expandedIndex === index ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              {/* Animated linear overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-linear(135deg, rgba(14, 165, 233, 0.05), rgba(56, 189, 248, 0.08))'}}></div>
              
              {/* Radial glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-linear(circle at 50% 0%, rgba(14, 165, 233, 0.1), transparent 70%)'}}></div>

              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="m-0 text-lg md:text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-sky-700" style={{fontFamily: '"Inter", sans-serif', fontWeight: 600, flex: 1}}>
                  {item.q}
                </h3>
                <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-sky-400 to-cyan-400 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110" style={{boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'}}>
                  <FiChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              
              {expandedIndex === index && (
                <div className="mt-6 pt-6 border-t border-sky-200 relative z-10" style={{animation: 'slideUp 0.4s ease-out'}}>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="m-0 text-slate-700 text-base md:text-lg leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400, flex: 1}}>
                      {item.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuestionsSection
