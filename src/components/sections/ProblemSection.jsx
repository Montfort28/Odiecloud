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
          <h2 className="m-0 mb-4 text-4xl md:text-4xl lg:text-4xl leading-tight -tracking-wider font-black text-slate-900">
            The Problem We Solve
          </h2>
          <p className="m-0 text-base md:text-base lg:text-base text-slate-600 leading-relaxed mb-6">
            Africa and its diaspora represent one of the most powerful economic opportunities of the 21st century. Yet the continent's potential is constrained by fragmentation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div 
                key={index}
                className="group text-center"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/${problem.image}`}
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-slate-900 font-black text-lg m-0 mb-2">{problem.title}</h3>
                <p className="m-0 text-slate-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
