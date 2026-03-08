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
          <div className="card">
            <div className="card-body">
              <h3>Clarify the ecosystem</h3>
              <p>Translate ODIECLOUD²π into practical public-facing benefits: structure, trust, execution, market access, and governed growth.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3>Convert interest into membership</h3>
              <p>Every serious prospect is directed into a controlled access request form instead of passive browsing with no next step.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3>Present opportunity responsibly</h3>
              <p>Show business, investment, manufacturing, and trade pathways inside a disciplined ecosystem entry framework.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWebsite
