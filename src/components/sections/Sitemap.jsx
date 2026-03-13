const SitemapSection = () => {
  const testimonials = [
    {
      rating: 5,
      quote: "ODIECLOUD²π provides the governance framework we needed to scale our operations across multiple markets. The ecosystem access is seamless and the support structure is unparalleled.",
      name: "Strategic Partner Director",
      category: "Technology Partnership Member"
    },
    {
      rating: 5,
      quote: "The coordinated participation model has transformed how we approach trade and capital opportunities. The qualification process ensures quality membership and genuine collaboration.",
      name: "Investment Portfolio Manager",
      category: "Equity Partner"
    },
    {
      rating: 5,
      quote: "Being part of the ODIECLOUD²π ecosystem has opened doors to growth opportunities we couldn't access independently. The governance-first approach builds confidence and long-term partnerships.",
      name: "Future-Ready Entrepreneur",
      category: "Subsidiary Leadership Member"
    }
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-amber-400 text-lg">★</span>
        ))}
      </div>
    )
  }

  return (
    <section className="py-12.5 px-2 bg-blue-50/90">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            What ecosystem members value most
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            ODIECLOUD²π creates transformative partnerships through governance-engineered access for growth, technology, trade, and coordinated capital participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl p-7 bg-white border border-blue-100"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <StarRating rating={testimonial.rating} />
              
              <p className="m-0 mb-5 text-base text-gray-700 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="m-0 text-base font-black text-[#0c1f32]">
                  {testimonial.name}
                </p>
                <p className="m-0 text-base text-gray-500 font-medium">
                  {testimonial.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SitemapSection
