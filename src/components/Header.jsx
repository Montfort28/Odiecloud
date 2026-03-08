import { useState } from 'react'
import { HiMenu, HiX, HiHome, HiQuestionMarkCircle, HiBriefcase, HiTrendingUp, HiUserGroup, HiUserAdd } from 'react-icons/hi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#overview', label: 'Overview', icon: HiHome },
    { href: '#questions', label: 'Questions We Answer', icon: HiQuestionMarkCircle },
    { href: '#profit-centres', label: 'Profit Centres', icon: HiBriefcase },
    { href: '#opportunities', label: 'Opportunities', icon: HiTrendingUp },
    { href: '#communities', label: 'Communities', icon: HiUserGroup },
    { href: '#access', label: 'Request Access', icon: HiUserAdd },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b-2 border-sky-100/40 shadow-lg">
      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden lg:block py-4">
          {/* Top Row: Brand Left + 3 Buttons Right */}
          <div className="flex items-center justify-between gap-6 mb-3">
            {/* Left: Brand */}
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-sky-500 via-blue-500 to-cyan-400 shadow-lg relative overflow-hidden shrink-0">
                <div className="absolute w-5 h-5 rounded-full bg-white/25 top-2 left-2.5 animate-pulse"></div>
                <div className="absolute w-9 h-9 rounded-full bg-white/20 -right-1 -bottom-2"></div>
              </div>
              <div>
                <div className="font-bold text-xl leading-tight text-slate-800" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 700}}>ODIECLOUD²π</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 500}}>Governance-Engineered Ecosystem Access</div>
              </div>
            </div>

            {/* Right: 3 Buttons */}
            <div className="flex gap-2.5 items-center shrink-0">
              <a 
                href="#profit-centres" 
                className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200"
                style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}
              >
                Explore Solutions
              </a>
              <a 
                href="#communities" 
                className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200"
                style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}
              >
                Membership Types
              </a>
              <a 
                href="#access" 
                className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200"
                style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}
              >
                Request Membership Access
              </a>
            </div>
          </div>

          {/* Bottom Row: Centered Links */}
          <nav className="flex gap-1.5 items-center justify-center flex-wrap">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-[15px] font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50/80 transition-all duration-300 whitespace-nowrap"
                  style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}
                >
                  <Icon className="w-5 h-5 text-black transition-all" />
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between gap-4 min-h-17.5 py-3">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-sky-500 via-blue-500 to-cyan-400 shadow-lg relative overflow-hidden">
                <div className="absolute w-5 h-5 rounded-full bg-white/25 top-2 left-2 animate-pulse"></div>
                <div className="absolute w-8 h-8 rounded-full bg-white/20 -right-1 -bottom-1"></div>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight text-slate-800" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 700}}>ODIECLOUD²π</div>
                <div className="text-xs text-slate-600 font-medium" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 500}}>Ecosystem Access</div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl hover:bg-sky-50 transition-colors duration-300"
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6 text-slate-700" /> : <HiMenu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="pb-4 border-t border-sky-100/50">
              <nav className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-[15px] font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50/80 transition-all duration-300 flex items-center gap-2"
                      style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </a>
                  )
                })}
                <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-sky-100/50">
                  <a href="#profit-centres" className="btn btn-primary text-[15px] w-full" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}>
                    Explore Solutions
                  </a>
                  <a href="#communities" className="btn btn-primary text-[15px] w-full" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}>
                    Membership Types
                  </a>
                  <a href="#access" className="btn btn-primary text-[15px] w-full" style={{fontFamily: '"Fredoka", sans-serif', fontWeight: 600}}>
                    Request Membership Access
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
