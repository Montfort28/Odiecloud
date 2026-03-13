import { useState } from 'react'
import { HiMenu, HiX, HiGlobeAlt, HiMail } from 'react-icons/hi'
import { HiLightBulb, HiShoppingBag, HiUsers, HiAcademicCap } from 'react-icons/hi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Ecosystem', icon: HiGlobeAlt },
    { href: '/#overview', label: 'Solutions', icon: HiLightBulb },
    { href: '/#profit-centres', label: 'Opportunities', icon: HiShoppingBag },
    { href: '/#communities', label: 'Membership', icon: HiUsers },
    { href: '/contact', label: 'Request Access', icon: HiAcademicCap },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b-2 border-sky-100/40 shadow-lg">
      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden lg:block py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Left: Logo - Clickable */}
            <a href="/" className="flex items-center gap-3.5 shrink-0 hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src="/images/cloud 2.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-18 h-auto object-contain"
              />
              <div>
                <div className="font-bold text-lg leading-tight text-slate-800" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>ODIECLOUD²π</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5" style={{fontFamily: '"Inter", sans-serif', fontWeight: 500}}>Governed Digital Infrastructure</div>
              </div>
            </a>

            {/* Middle: Navigation Links - All on one line */}
            <nav className="flex gap-5 items-center flex-nowrap">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors duration-300 whitespace-nowrap hover:scale-105"
                    style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </nav>

            {/* Right: Join Ecosystem Button + Icons */}
            <div className="flex gap-3 items-center shrink-0">
              <a 
                href="/contact" 
                className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200 text-sm px-4 py-2"
                style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}
              >
                Become A Member
              </a>
              <button 
                className="p-2.5 rounded-lg hover:bg-sky-100 transition-colors duration-300"
                title="Languages (coming soon)"
              >
                <HiGlobeAlt className="w-5 h-5 text-slate-700 hover:text-sky-700 transition-colors" />
              </button>
              <a 
                href="/contact"
                className="p-2.5 rounded-lg hover:bg-sky-100 transition-colors duration-300"
                title="Contact Us"
              >
                <HiMail className="w-5 h-5 text-slate-700 hover:text-sky-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between gap-4 min-h-17.5 py-3">
            <a href="/" className="flex items-center gap-2 shrink-0">
              <img 
                src="/images/cloud 2.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-12 h-auto object-contain"
              />
              <div>
                <div className="font-bold text-sm leading-tight text-slate-800" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>ODIECLOUD²π</div>
              </div>
            </a>

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
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50/80 transition-all duration-300"
                    style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-sky-100/50">
                  <a href="/contact" className="btn btn-primary text-sm w-full" style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}>
                    Become A Member
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
