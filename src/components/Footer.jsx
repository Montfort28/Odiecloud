const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d2438] to-[#081827] text-blue-100 mt-10.5 pt-12 pb-4.5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5.5 mb-6">
          {/* About Section */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">ODIECLOUD²π</h4>
            <p className="text-blue-100/78 text-sm mb-2">
              Governance-engineered ecosystem access for growth, partnerships, technology, trade, capital, and coordinated participation.
            </p>
            <p className="text-blue-100/78 text-sm mb-2">
              <strong>Member of ODIECLOUD²π Ecosystem.</strong>
            </p>
            <p className="text-blue-100/78 text-sm m-0">
              ODIECLOUD²π is a Registered Trademark and Service Mark of Oderson Holdings Ltd.
            </p>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Ecosystem</h4>
            <a href="#overview" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Overview</a>
            <a href="#questions" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Questions We Answer</a>
            <a href="#profit-centres" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Profit Centres</a>
            <a href="#opportunities" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Opportunities</a>
          </div>

          {/* Communities Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Communities</h4>
            <a href="#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Subsidiaries</a>
            <a href="#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Equity Affiliates</a>
            <a href="#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Equity Partners</a>
            <a href="#communities" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Strategic Partnerships</a>
          </div>

          {/* Networks Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Networks</h4>
            <a href="#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Technology Partnerships (Tech Hub)</a>
            <a href="#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Channel Partner Network</a>
            <a href="#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Internship Networks</a>
            <a href="#access" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Request Access</a>
          </div>

          {/* Action Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Action</h4>
            <a href="#access" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Become a Member</a>
            <a href="#opportunities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Explore Opportunities</a>
            <a href="#profit-centres" className="block text-blue-100/78 text-sm hover:text-white transition-colors">View Solutions</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-4.5 flex justify-between gap-4 flex-wrap">
          <div className="text-blue-100/78 text-sm">
            <strong>Powered by ODIEBOARD</strong>
          </div>
          <div className="text-blue-100/78 text-sm">
            © 2026 Oderson Holdings Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
