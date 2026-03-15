const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#0d2438] to-[#081827] text-blue-100 mt-10.5 pt-12 pb-4.5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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
                <p className="m-0 text-xs text-blue-100/78 font-medium">Governed Digital Infrastructure</p>
              </div>
            </div>
            <p className="text-blue-100/78 text-sm m-0 leading-relaxed">
              An integrated economic ecosystem connecting businesses, entrepreneurs, investors, and innovators across Africa and the global diaspora.
            </p>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Ecosystem</h4>
            <div className="space-y-2">
              <a href="/ecosystem" className="block text-blue-100/78 text-sm hover:text-white transition-colors font-medium">Ecosystem Overview</a>
              <a href="/opportunities#business" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Business Opportunities</a>
              <a href="/opportunities#investment" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Career Opportunities</a>
              <a href="/solutions#tech" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Technology Partnerships (Tech Hub)</a>
              <a href="/opportunities#manufacturing" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Freelance Technology Projects</a>
              <a href="/solutions#marketplace" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Unified Marketplace</a>
              <a href="/membership" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Channel Partner Network</a>
              <a href="/membership#types" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Internship Networks</a>
              <a href="/#profit-centres" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Entrepreneurship</a>
              <a href="/solutions" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Strategic Partnerships</a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Core Services</h4>
            <div className="space-y-2 text-sm">
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Group Travel & Tours (Worldwide)</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Real Estate Developers / Investors</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Technology & Cloud Services</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Engineering Technology Services</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Health & Wellness</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Business Development</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Business Brokering</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Business Start Up / Restructuring</p>
              <p className="text-blue-100/78 m-0 hover:text-white transition-colors cursor-pointer">Investment Banking</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Legal & Info</h4>
            <div className="space-y-2">
              <a href="#legal" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#legal" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#legal" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Disclaimer</a>
              <a href="#legal" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Compliance</a>
              <a href="#about" className="block text-blue-100/78 text-sm hover:text-white transition-colors">About</a>
              <a href="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Contact</a>
              <a href="/questions" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Questions and Answers</a>
            </div>
          </div>

          {/* Action Links */}
          <div>
            <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Quick Actions</h4>
            <div className="space-y-2">
              <a href="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors font-medium">Become a Member</a>
              <a href="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Become a Tech Freelancer</a>
              <a href="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Become a Marketer</a>
              <a href="/opportunities" className="block text-blue-100/78 text-sm hover:text-white transition-colors font-medium">Explore Opportunities</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-100/78 text-sm m-0 mb-3 font-semibold">
                Member of the ODIECLOUD²π Ecosystem.
              </p>
              <p className="text-blue-100/78 text-xs m-0 mb-4 leading-relaxed">
                ODIECLOUD²π is a Registered Trademark and Service Mark of Oderson Holdings Ltd.
              </p>
              <p className="text-blue-100/78 text-xs m-0">
                © Copyright ODERSON Holdings Ltd. All Rights Reserved.
              </p>
            </div>
            <div className="text-blue-100/78 text-xs md:text-right flex flex-col justify-center">
              <p className="m-0 mb-1">
                <strong className="text-white">ODIECLOUD²π</strong> • Digital Governed Infrastructure
              </p>
              <p className="m-0">
                Powered By <strong className="text-white">ODIEBOARD</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
