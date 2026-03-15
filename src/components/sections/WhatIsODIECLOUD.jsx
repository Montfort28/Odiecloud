import { HiGlobe, HiCheckCircle } from 'react-icons/hi'

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="m-0 mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-slate-900">
              What Is ODIECLOUD²π
            </h2>
            <p className="m-0 mb-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              ODIECLOUD²π is an integrated economic ecosystem that connects multiple industries, technologies, and markets through a unified governance and infrastructure framework.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Components Card and Visual - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* Left: Components List */}
              <div className="card h-fit">
                <p className="m-0 mb-4 font-bold text-slate-900 text-lg">The ecosystem integrates:</p>
                <ul className="m-0 p-0 list-none space-y-3">
                  {components.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <HiCheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual Circle */}
              <div className="flex justify-center items-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-sky-200 to-blue-300/40 blur-2xl opacity-50 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-sky-300/50 flex items-center justify-center hover:border-sky-400/70 transition-all duration-300 hover:scale-105 cursor-pointer group bg-linear-to-br from-sky-50 to-blue-50">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-2xl group-hover:shadow-sky-500/50 transition-all duration-300">
                        <HiGlobe className="w-14 h-14 text-white" />
                      </div>
                      <p className="text-slate-900 font-black text-lg">Unified Ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Text - Below Cards */}
            <div className="max-w-3xl text-center">
              <p className="m-0 text-slate-900 font-bold text-lg mb-2">The Result</p>
              <p className="m-0 text-slate-700 text-base leading-relaxed">
                Through this integrated model, ODIECLOUD²π transforms fragmented opportunity into structured enterprise growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsODIECLOUD
