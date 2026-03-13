const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#0d2438] to-[#081827] text-blue-100 mt-10.5 pt-12 pb-4.5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr] gap-4 mb-6">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img 
                src="/images/cloud 2.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-20 h-auto object-contain"
              />
              <div>
                <h4 className="m-0 text-lg font-black text-white">ODIECLOUD²π</h4>
                <p className="m-0 text-sm text-blue-100/78 font-medium">Governed Digital Infrastructure</p>
              </div>
            </div>
            <p className="text-blue-100/78 text-sm mb-2">
              Governance-engineered ecosystem access for growth, partnerships, technology, trade, capital, and coordinated participation.
            </p>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Ecosystem</h4>
            <a href="/#opportunities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Opportunities</a>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Technology Partnerships (Tech Hub)</a>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Channel Partner Network</a>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Internship Networks</a>
            <a href="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Request Access</a>
          </div>

          {/* Communities Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Communities</h4>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Subsidiaries</a>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Equity Affiliates</a>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Equity Partners</a>
            <a href="/#communities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Strategic Partnerships</a>            
            <a href="#about" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">About</a>
            <a href="/contact" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Contact</a>
            <a href="/questions" className="block text-blue-100/78 text-sm mb-4 hover:text-white transition-colors">Questions and Answers</a>
          </div>

          {/* Networks Links */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Legal</h4>
            <a href="#legal" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#legal" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Terms of Service</a>
            <a href="#legal" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Compliance</a>
          </div>

          {/* Help and Action Links Combined */}
          <div>
            <h4 className="m-0 mb-3 text-base font-black text-white">Action</h4>
            <a href="/contact" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Become a Member</a>
            <a href="/#opportunities" className="block text-blue-100/78 text-sm mb-2 hover:text-white transition-colors">Explore Opportunities</a>
            <a href="/#profit-centres" className="block text-blue-100/78 text-sm hover:text-white transition-colors">View Solutions</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-100/78 text-sm">
            <div>
              <p className="text-blue-100/78 text-sm m-0 mb-3">
                Member of ODIECLOUD²π Ecosystem.
              </p>
              <p className="text-blue-100/78 text-sm m-0 mb-4 leading-relaxed">
                ODIECLOUD²π, ODIEBOARD, Oπ, ODIEXA, and AUREX are Registered Trademark and Service Marks of Oderson Holdings Ltd.
              </p>
              <p className="text-blue-100/78 text-sm m-0">
                © Copyright ODERSON Holdings Ltd. All Rights Reserved.
              </p>
            </div>
            <div className="text-blue-100/78 text-sm m-0 flex items-center justify-end">
              <p className="m-0">Powered By <strong className="text-white">ODIEBOARD</strong></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
