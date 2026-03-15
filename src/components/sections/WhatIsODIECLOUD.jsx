// No imports needed

const WhatIsODIECLOUD = () => {
  const components = [
    'Enterprise governance architecture',
    'Cloud and digital infrastructure',
    'Global trade and marketplace systems',
    'Human capital networks',
    'Technology development platforms',
    'Investment and partnership frameworks'
  ]

  return (
    <section className="py-8.5 px-2 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="m-0 mb-4 text-4xl md:text-4xl lg:text-4xl leading-tight -tracking-wider font-black text-slate-900">
            What Is ODIECLOUD²π
          </h2>
          <p className="m-0 mb-6 text-base md:text-base lg:text-base text-slate-600 leading-relaxed">
            ODIECLOUD²π is an integrated economic ecosystem that connects multiple industries, technologies, and markets through a unified governance and infrastructure framework.
          </p>
          
          <p className="m-0 mb-4 font-bold text-slate-900">The ecosystem integrates:</p>
          <ul className="m-0 p-0 list-none space-y-3 mb-6">
            {components.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 justify-center">
                <span className="text-sky-600 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="card inline-block max-w-xl" style={{background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(56, 189, 248, 0.1))', borderColor: 'rgba(14, 165, 233, 0.3)'}}>
            <p className="m-0 text-slate-900 font-bold mb-1">The Result</p>
            <p className="m-0 text-slate-700">
              Through this integrated model, ODIECLOUD²π transforms fragmented opportunity into structured enterprise growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsODIECLOUD
