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
    <section className="py-8.5 px-2" id="questions">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-7 text-center">
          <h2 className="m-0 mb-2.5 text-3xl md:text-4xl lg:text-5xl leading-tight -tracking-wider font-black text-[#0c1f32]">
            Questions the ecosystem is built to answer
          </h2>
          <p className="m-0 text-muted text-base md:text-lg">
            ODIECLOUD²π should be presented as the answer to questions businesses, investors, partners, manufacturers, and institutions are already asking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4.5">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-blue-50 border border-line rounded-3xl shadow-custom p-7 cursor-pointer transition-all"
              onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="m-0 text-lg md:text-xl font-black text-text">
                  {item.q}
                </h3>
                <FiChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {expandedIndex === index && (
                <div className="mt-4 pt-4 border-t border-line">
                  <p className="m-0 text-muted text-base">
                    <strong>Answer:</strong> {item.a}
                  </p>
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
