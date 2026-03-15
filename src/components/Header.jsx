import { useState } from 'react'
import { HiMenu, HiX, HiGlobeAlt, HiMail, HiChevronDown } from 'react-icons/hi'
import { HiSparkles, HiShoppingCart, HiUsers, HiUserGroup, HiViewGrid, HiChartBar, HiCurrencyDollar, HiBriefcase, HiTrendingUp, HiOfficeBuilding, HiTruck, HiStar, HiClipboardCheck, HiHome } from 'react-icons/hi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const navLinks = [
    { 
      label: 'Ecosystem', 
      icon: HiGlobeAlt,
      submenu: [
        { href: '/ecosystem', label: 'Ecosystem Overview', icon: HiHome },
        { href: '/ecosystem/components', label: 'Components', icon: HiViewGrid },
        { href: '/ecosystem/participation', label: 'Participation', icon: HiUserGroup },
        { href: '/ecosystem/profit-centres', label: 'Profit Centres', icon: HiBriefcase },
        { href: '/ecosystem/understanding', label: 'Understanding', icon: HiChartBar },
        { href: '/ecosystem/overview', label: 'Why This Website', icon: HiHome },
      ]
    },
    { 
      label: 'Solutions', 
      icon: HiSparkles,
      submenu: [
        { href: '/solutions/technology-cloud', label: 'Technology & Cloud', icon: HiViewGrid },
        { href: '/solutions/business-development', label: 'Business Development', icon: HiChartBar },
        { href: '/solutions/investment-capital', label: 'Investment & Capital', icon: HiCurrencyDollar },
        { href: '/solutions/marketplace-trade', label: 'Marketplace & Trade', icon: HiShoppingCart },
      ]
    },
    { 
      label: 'Opportunities', 
      icon: HiShoppingCart,
      submenu: [
        { href: '/opportunities/business', label: 'Business Opportunities', icon: HiBriefcase },
        { href: '/opportunities/investment', label: 'Investment Opportunities', icon: HiTrendingUp },
        { href: '/opportunities/manufacturing', label: 'Manufacturing Opportunities', icon: HiOfficeBuilding },
        { href: '/opportunities/trade', label: 'Trade Opportunities', icon: HiTruck },
      ]
    },
    { 
      label: 'Membership', 
      icon: HiUsers,
      submenu: [
        { href: '/membership', label: 'Membership Overview', icon: HiHome },
        { href: '/membership/types', label: 'Membership Types', icon: HiUserGroup },
        { href: '/membership/benefits', label: 'Member Benefits', icon: HiStar },
        { href: '/contact', label: 'Apply for Membership', icon: HiClipboardCheck },
      ]
    },
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
                src="/images/ODIECLOUD_π_Logo.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-18 h-auto object-contain"
              />
              <div>
                <div className="font-bold text-lg leading-tight text-slate-800" style={{fontFamily: '"Inter", sans-serif', fontWeight: 900}}>ODIECLOUD²π</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5" style={{fontFamily: '"Inter", sans-serif', fontWeight: 500}}>Governed Digital Infrastructure</div>
              </div>
            </a>

            {/* Middle: Navigation Links - All on one line */}
            <nav className="flex gap-1 items-center flex-nowrap">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-sky-50/50 group"
                      style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}
                    >
                      <span>{link.label}</span>
                      <HiChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {link.submenu && (
                      <div className="absolute top-full left-0 min-w-72 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-200/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-3 overflow-hidden z-50">
                        <div className="py-3">
                          {link.submenu.map((item, idx) => {
                            const ItemIcon = item.icon
                            return (
                              <div key={item.href}>
                                {idx > 0 && <div className="my-1 mx-2 h-px bg-slate-200/50" />}
                                <a
                                  href={item.href}
                                  className="flex items-center gap-3 px-5 py-3 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 transition-all duration-200 group/item"
                                  style={{fontFamily: '"Inter", sans-serif', fontWeight: 500}}
                                >
                                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-200/50 group-hover/item:bg-slate-300/70 transition-colors">
                                    <ItemIcon className="w-5 h-5 text-slate-700 group-hover/item:text-slate-900 transition-colors" />
                                  </div>
                                  <span className="flex-1">{item.label}</span>
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300/0 group-hover/item:bg-slate-400 transition-all" />
                                </a>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
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
                Join The Ecosystem
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
                src="/images/ODIECLOUD_π_Logo.png" 
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
                {navLinks.map((link) => {
                  const IconComponent = link.icon
                  const isOpen = openDropdown === link.label
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50/80 transition-all duration-300"
                        style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}
                      >
                        <span>{link.label}</span>
                        <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {isOpen && link.submenu && (
                        <div className="bg-gradient-to-r from-sky-50/80 to-blue-50/80 rounded-lg my-1 ml-4 border border-sky-100/50">
                          {link.submenu.map((item) => {
                            const ItemIcon = item.icon
                            return (
                              <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:text-sky-700 hover:bg-sky-100/50 transition-colors"
                                style={{fontFamily: '"Inter", sans-serif', fontWeight: 500}}
                              >
                                <ItemIcon className="w-4.5 h-4.5 text-sky-600" />
                                <span>{item.label}</span>
                              </a>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-sky-100/50">
                  <a href="/contact" className="btn btn-primary text-sm w-full" style={{fontFamily: '"Inter", sans-serif', fontWeight: 600}}>
                    Join Ecosystem
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
