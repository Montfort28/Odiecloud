const MembershipCTA = () => {
  return (
    <section className="py-8.5 px-2 bg-gradient-to-br from-sky-600 to-blue-700">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="m-0 mb-4 text-4xl md:text-4xl lg:text-4xl leading-tight -tracking-wider font-black">
            Become Part of the Ecosystem
          </h2>
          <p className="m-0 mb-8 text-base md:text-base lg:text-base leading-relaxed opacity-95">
            Membership provides access to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="text-left">
              <p className="m-0 text-base flex items-start gap-3">
                <span className="text-white font-bold">•</span>
                <span>Business opportunities</span>
              </p>
            </div>
            <div className="text-left">
              <p className="m-0 text-base flex items-start gap-3">
                <span className="text-white font-bold">•</span>
                <span>Technology collaborations</span>
              </p>
            </div>
            <div className="text-left">
              <p className="m-0 text-base flex items-start gap-3">
                <span className="text-white font-bold">•</span>
                <span>Marketplace participation</span>
              </p>
            </div>
            <div className="text-left">
              <p className="m-0 text-base flex items-start gap-3">
                <span className="text-white font-bold">•</span>
                <span>Investment introductions</span>
              </p>
            </div>
            <div className="text-left md:col-span-2 lg:col-span-2">
              <p className="m-0 text-base flex items-start gap-3">
                <span className="text-white font-bold">•</span>
                <span>Strategic partnerships</span>
              </p>
            </div>
          </div>

          <a href="/membership" className="btn btn-white px-8 py-3 inline-block rounded-full font-black text-sky-700 hover:bg-white/90 transition-all">
            Request Access
          </a>
        </div>
      </div>
    </section>
  )
}

export default MembershipCTA
