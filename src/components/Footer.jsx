import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#0d2438] to-[#081827] text-blue-100 mt-10.5 pt-12 pb-4.5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* About Section - Takes up 4 columns on desktop */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-center gap-4 mb-4">
              <img 
                src="/images/ODIECLOUD_π_Logo.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-48 h-auto object-contain flex-shrink-0"
              />
              <p className="text-blue-100/78 text-sm m-0 leading-relaxed text-center">
                An integrated economic ecosystem connecting businesses, entrepreneurs, investors, and innovators across Africa and the global diaspora.
              </p>
            </div>
          </div>

          {/* Tabs Section - Takes up 8 columns on desktop */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Ecosystem Links */}
              <div>
                <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Ecosystem</h4>
                <div className="space-y-2">
                  <Link to="/ecosystem" className="block text-blue-100/78 text-sm hover:text-white transition-colors font-medium">Ecosystem Overview</Link>
                  <Link to="/opportunities/business" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Business Opportunities</Link>
                  <Link to="/opportunities/investment" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Career Opportunities</Link>
                  <Link to="/solutions/technology-cloud" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Technology Partnerships (Tech Hub)</Link>
                  <Link to="/opportunities/manufacturing" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Freelance Technology Projects</Link>
                  <Link to="/solutions/marketplace-trade" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Unified Marketplace</Link>
                  <Link to="/membership" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Channel Partner Network</Link>
                  <Link to="/membership/types" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Internship Networks</Link>
                  <Link to="/ecosystem/profit-centres" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Entrepreneurship</Link>
                  <Link to="/solutions/business-development" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Strategic Partnerships</Link>
                </div>
              </div>

              {/* Core Services */}
              <div>
                <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Core Services</h4>
                <div className="space-y-2">
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Group Travel & Tours (Worldwide)</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Real Estate Developers / Investors</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Technology & Cloud Services</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Engineering Technology Services</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Health & Wellness</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Business Development</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Business Brokering</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 mb-2 hover:text-white transition-colors cursor-pointer">Business Start Up / Restructuring</p>
                  
                  <p className="text-blue-100/78 text-sm m-0 hover:text-white transition-colors cursor-pointer">Investment Banking</p>
                </div>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Legal & Info</h4>
                <div className="space-y-2">
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Terms of Service</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Disclaimer</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Compliance</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">About</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Contact</Link>
                  <Link to="/questions" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Questions and Answers</Link>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="m-0 mb-3.5 text-base font-black text-white uppercase tracking-wider">Quick Actions</h4>
                <div className="space-y-2">
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors font-medium">Become a Member</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Become a Tech Freelancer</Link>
                  <Link to="/contact" className="block text-blue-100/78 text-sm hover:text-white transition-colors">Become a Marketer</Link>
                  <Link to="/opportunities/business" className="block text-blue-100/78 text-sm hover:text-white transition-colors font-medium">Explore Opportunities</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-100/78 text-sm m-0 mb-4 font-semibold">
                All Oderson Holdings subsidiaries are Members of the ODIECLOUD²π Ecosystem.
              </p>
              <p className="text-blue-100/78 text-xs m-0 mb-4 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                ODIECLOUD²π, ODIEBOARD, ODIEXA, and AUREX are Registered Trademark of Oderson Holdings Ltd.
              </p>
              <p className="text-blue-100/78 text-xs m-0">
                © Copyright ODIECLOUD²π. All Rights Reserved.
              </p>
            </div>
            <div className="text-blue-100/78 lg:text-right flex flex-col justify-center items-center lg:items-end">
              <img
                src="/images/Powered_By_ODIEBOARD.png"
                alt="Powered by ODIEBOARD"
                style={{
                  height: '120px',
                  width: 'auto',
                  marginTop: '0.5rem'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
