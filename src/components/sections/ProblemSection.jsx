import { HiExclamationCircle, HiCurrencyDollar, HiLightningBolt, HiCode } from 'react-icons/hi'

const ProblemSection = () => {
  const problems = [
    {
      icon: HiExclamationCircle,
      title: "Businesses Operate Independently",
      description: "Without integrated systems, scaling across markets becomes inefficient and expensive.",
      image: 'Generate Images in PicLumen.jpg'
    },
    {
      icon: HiCurrencyDollar,
      title: "Investors Struggle to Access Opportunities",
      description: "Capital remains disconnected from real business opportunities due to information asymmetry.",
      image: '🚀 Transform Your Financial Management with AVCiT! 📈🔒.jpg'
    },
    {
      icon: HiLightningBolt,
      title: "Entrepreneurs Lack Scalable Infrastructure",
      description: "Building infrastructure individually drains resources that should focus on growth.",
      image: 'image 14.jpg'
    },
    {
      icon: HiCode,
      title: "Technology Talent Remains Disconnected",
      description: "Innovation hubs lack connection to capital markets and commercial opportunities.",
      image: 'HOME.jpg'
    }
  ]

  return (
    <section className="py-8.5 px-2 bg-linear-to-b from-sky-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="m-0 mb-2.5 text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-slate-900" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '-0.025em'}}>
            The Problem We Solve
          </h2>
          <p className="m-0 text-sm md:text-base text-slate-600 leading-relaxed mb-6" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
            Africa and its diaspora represent one of the most powerful economic opportunities of the 21st century. Yet the continent's potential is constrained by fragmentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div 
                key={index}
                className="p-5 rounded-xl border border-sky-100/50 bg-gradient-to-br from-white/80 to-sky-50/30 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="w-full h-28 mb-3.5 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/${problem.image}`}
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="inline-block px-3 py-1.5 rounded-full bg-sky-100/70 text-sky-700 text-xs font-bold mb-2.5 group-hover:bg-sky-200 transition-colors" style={{fontFamily: '"Inter", sans-serif', fontWeight: 700}}>
                  Challenge
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors m-0" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>{problem.title}</h3>
                <p className="m-0 text-slate-600 text-sm leading-relaxed" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
