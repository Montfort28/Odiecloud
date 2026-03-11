const WhyWebsite = () => {
  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            Why this website exists
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            The public-facing ODIECLOUD²π website must do more than describe a brand. It must clearly show how the ecosystem solves real business problems, how membership opens structured pathways, and why serious participants should request access instead of remaining outside the system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          {[
            {
              title: "Clarify the ecosystem",
              description: "Translate ODIECLOUD²π into practical public-facing benefits: structure, trust, execution, market access, and governed growth.",
              video: "video 1.mp4"
            },
            {
              title: "Convert interest into membership",
              description: "Every serious prospect is directed into a controlled access request form instead of passive browsing with no next step.",
              video: "video 4.mp4"
            },
            {
              title: "Present opportunity responsibly",
              description: "Show business, investment, manufacturing, and trade pathways inside a disciplined ecosystem entry framework.",
              video: "video 5.mp4"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer group flex flex-col"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Video Container */}
              <div className="w-full bg-black/20 rounded-t-2xl overflow-hidden shrink-0">
                <video 
                  src={`/Video/${item.video}`}
                  className="w-full h-48 object-cover pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 p-7 bg-linear-to-r from-[#0a3558] to-blue-700 flex-1 flex flex-col justify-between">
                {/* Hover background overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" 
                  style={{
                    background: 'linear-gradient(to right, #1a5fa5, #3b9eff)'
                  }}
                ></div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-b-2xl" 
                  style={{
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5), transparent)'
                  }}
                ></div>
                
                <div className="relative z-10">
                  <h3 className="m-0 mb-3 text-xl font-black text-white group-hover:text-sky-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="m-0 text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWebsite
