import { HiExclamationCircle, HiCurrencyDollar, HiLightningBolt, HiCode } from 'react-icons/hi'

const ProblemSection = () => {
  const problems = [
    {
      icon: HiExclamationCircle,
      title: "Businesses Operate Independently",
      description: "Disconnected tools force manual rework, errors, and costly custom integrations. Expanding to new markets multiplies this friction. Open, shared systems make cross-market growth smooth, cheap, and fast.",
      image: 'floriane-vita-FyD3OWBuXnY-unsplash.jpg'
    },
    {
      icon: HiCurrencyDollar,
      title: "Investors Struggle to Access Opportunities",
      description: "Investors can't find vetted, ready-to-scale businesses, while founders can't reach funders. This information gap leaves capital idle or misdirected. Transparent data and standardized deal flow would align money with genuine opportunities.",
      image: 'compressed-image.jpg'
    },
    {
      icon: HiLightningBolt,
      title: "Entrepreneurs Lack Scalable Infrastructure",
      description: "Every entrepreneur reinventing logistics, payments, or support systems wastes capital on non-differentiating work. That money and talent should instead fuel product innovation and customer acquisition. Shared infrastructure frees founders to scale faster without burning resources on the basics.",
      image: 'microsoft-365-oUbzU87d1Gc-unsplash.jpg'
    },
    {
      icon: HiCode,
      title: "Technology Talent Remains Disconnected",
      description: "Great ideas and skilled engineers stall when no bridge exists to investors or buyers. Without that link, hubs produce prototypes, not profitable companies. Connecting talent directly to capital and commercial partners turns innovation into real economic growth.",
      image: 'anne-nygard-x07ELaNFt34-unsplash.jpg'
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-white via-sky-50/30 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          <h2 className="m-0 mb-3 text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-slate-900" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 900, letterSpacing: '-0.025em'}}>
            The Problem We Solve
          </h2>
          <p className="m-0 text-sm md:text-base text-slate-600 leading-relaxed" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400}}>
            Africa and its diaspora represent one of the most powerful economic opportunities of the 21st century. Yet the continent's potential is constrained by fragmentation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            const isEven = index % 2 === 0
            return (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image - alternates left/right */}
                <div className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <img 
                    src={`/images/${problem.image}`}
                    alt={problem.title}
                    className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content - alternates right/left */}
                <div className={`space-y-5 md:space-y-7 ${isEven ? 'md:order-1' : 'md:order-2'}`}><h3 className="m-0 mb-3 md:mb-5 text-xl md:text-2xl font-black text-slate-900" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 900, lineHeight: 1.2}}>
                    {problem.title}
                  </h3>

                  <p className="m-0 text-slate-600 text-sm md:text-base leading-relaxed" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400}}>
                    {problem.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
