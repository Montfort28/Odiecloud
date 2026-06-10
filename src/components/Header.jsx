import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    { 
      label: 'Request Access', 
      href: '/contact',
    },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b-2 border-sky-100/40 shadow-lg">
      <div className="container">
        {/* Desktop Layout - XL and above */}
        <div className="hidden xl:block py-1.5">
          <div className="flex items-center justify-between gap-6">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-3.5 shrink-0 hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src="/images/ODIECLOUD_π_Logo.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-18 h-auto object-contain"
              />
              <div>
                <div className="font-bold text-lg leading-tight text-slate-800" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 900}}>ODIECLOUD²π</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500}}>Governed Digital Infrastructure</div>
              </div>
            </Link>

            {/* Middle: Navigation Links */}
            <nav className="flex gap-1 items-center flex-nowrap">
              {navLinks.map((link) => {
                if (link.href && !link.submenu) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-sky-50/50 group"
                      style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                    >
                      <span>{link.label}</span>
                    </Link>
                  )
                }
                const IconComponent = link.icon
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-sky-50/50 group"
                      style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                    >
                      <span>{link.label}</span>
                      <HiChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {link.submenu && (
                      <div className={`absolute top-full left-0 min-w-72 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-200/80 transition-all duration-300 mt-3 overflow-hidden z-50 ${
                        openDropdown === link.label
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                      }`}>
                        <div className="py-3">
                          {link.submenu.map((item, idx) => {
                            const ItemIcon = item.icon
                            return (
                              <div key={item.href}>
                                {idx > 0 && <div className="my-1 mx-2 h-px bg-slate-200/50" />}
                                <Link
                                  to={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="flex items-center gap-3 px-5 py-3 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 transition-all duration-200 group/item"
                                  style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500}}
                                >
                                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-200/50 group-hover/item:bg-slate-300/70 transition-colors">
                                    <ItemIcon className="w-5 h-5 text-slate-700 group-hover/item:text-slate-900 transition-colors" />
                                  </div>
                                  <span className="flex-1">{item.label}</span>
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300/0 group-hover/item:bg-slate-400 transition-all" />
                                </Link>
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

            {/* Right: Button + Icons */}
            <div className="flex gap-3 items-center shrink-0">
              <Link 
                to="/contact" 
                className="btn btn-primary transform hover:scale-105 active:scale-95 transition-transform duration-200 text-sm px-4 py-2"
                style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
              >
                Become A Member
              </Link>
              <button 
                className="p-2.5 rounded-lg hover:bg-sky-100 transition-colors duration-300"
                title="Languages (coming soon)"
              >
                <HiGlobeAlt className="w-5 h-5 text-slate-700 hover:text-sky-700 transition-colors" />
              </button>
              <Link 
                to="/contact"
                className="p-2.5 rounded-lg hover:bg-sky-100 transition-colors duration-300"
                title="Contact Us"
              >
                <HiMail className="w-5 h-5 text-slate-700 hover:text-sky-700 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet/iPad Layout with Hamburger - Below XL */}
        <div className="xl:hidden">
          <div className="flex items-center justify-between gap-3 py-2">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img 
                src="/images/ODIECLOUD_π_Logo.png" 
                alt="ODIECLOUD²π Logo" 
                className="w-10 h-auto object-contain"
              />
              <div>
                <div className="font-bold text-xs leading-tight text-slate-800" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 900}}>ODIECLOUD²π</div>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl hover:bg-sky-50 transition-colors duration-300"
              style={{padding: '10px'}}
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6 text-slate-700" /> : <HiMenu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="pb-4 border-t border-sky-100 space-y-2 pt-3">
              {navLinks.map((link) => {
                if (link.href && !link.submenu) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-sky-50 rounded-lg transition-colors"
                      style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                    >
                      {link.label}
                    </Link>
                  )
                }
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-sky-50 rounded-lg transition-colors"
                      style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                    >
                      <span>{link.label}</span>
                      <HiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {link.submenu && openDropdown === link.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null) }}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-lg transition-colors"
                            style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500}}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <div className="border-t border-sky-100 pt-3 mt-3 space-y-3">
                <Link 
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full btn btn-primary text-center text-sm px-4 py-2"
                  style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600}}
                >
                  Become A Member
                </Link>
                <div className="flex gap-3 justify-center">
                  <button 
                    className="p-2.5 rounded-lg hover:bg-sky-100 transition-colors duration-300"
                    title="Languages (coming soon)"
                  >
                    <HiGlobeAlt className="w-5 h-5 text-slate-600 hover:text-sky-700 transition-colors" />
                  </button>
                  <Link 
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-sky-100 transition-colors duration-300"
                    title="Contact Us"
                  >
                    <HiMail className="w-5 h-5 text-slate-600 hover:text-sky-700 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
