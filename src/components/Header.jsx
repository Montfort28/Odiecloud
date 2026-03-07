import { Menu, X, Eye, HelpCircle, TrendingUp, Target, Users, LogIn } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#overview', label: 'Overview', icon: Eye },
    { href: '#questions', label: 'Questions We Answer', icon: HelpCircle },
    { href: '#profit-centres', label: 'Profit Centres', icon: TrendingUp },
    { href: '#opportunities', label: 'Opportunities', icon: Target },
    { href: '#communities', label: 'Communities', icon: Users },
    { href: '#access', label: 'Request Access', icon: LogIn },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-t-2 border-b border-transparent hover:border-b-blue-100/20">
      <div className="container">
        {/* Top Row: Brand + Buttons */}
        <div className="flex items-center justify-between gap-4 min-h-[78px] py-2 flex-wrap">
          {/* Brand */}
          <div className="flex items-center gap-3.5 flex-shrink-0 animate-fade-in">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-400 shadow-md relative overflow-hidden flex-shrink-0 hover:shadow-glow transition-all duration-300 hover:scale-110">
              <div className="absolute w-5 h-5 rounded-full bg-white/18 top-1.5 left-2 animate-pulse-glow"></div>
              <div className="absolute w-8.5 h-8.5 rounded-full bg-white/18 -right-1.5 -bottom-2 animate-pulse-glow" style={{animationDelay: '0.3s'}}></div>
            </div>
            <div className="min-w-0">
              <div className="font-black text-lg leading-tight tracking-tight text-text">ODIECLOUD²π</div>
              <div className="text-xs text-muted font-semibold mt-0.5">Governance-Engineered Ecosystem Access</div>
            </div>
          </div>

          {/* Desktop Action Buttons - Modern Designs */}
          <div className="hidden lg:flex gap-3 items-center flex-wrap justify-end animate-fade-in" style={{animationDelay: '0.2s'}}>
            {/* Membership Types - Modern Minimal Design */}
            <a 
              href="#communities" 
              className="px-6 py-2.5 rounded-full font-semibold text-sm text-text-light transition-all duration-300 relative overflow-hidden group border-2 border-blue-700/40 hover:border-blue-700/70 bg-gradient-to-r from-blue-700/5 to-cyan-400/5 hover:from-blue-700/15 hover:to-cyan-400/10 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Membership Types
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
            </a>

            {/* Explore Solutions - Modern Interactive Design */}
            <a 
              href="#profit-centres" 
              className="px-6 py-2.5 rounded-full font-semibold text-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(90deg, #0c7fc7, #53b9f8, #0c7fc7)'}}></div>
              <div className="absolute inset-0.5 bg-white rounded-full group-hover:opacity-0 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 text-blue-700 group-hover:text-white transition-colors">
                <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Explore Solutions
              </span>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-700/0 group-hover:shadow-blue-700/40 transition-all duration-300"></div>
            </a>

            {/* Request Membership Access - Enhanced Blue with Animations */}
            <a 
              href="#access" 
              className="px-6 py-2.5 rounded-full font-semibold text-sm text-white relative overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 bg-gradient-to-r from-blue-800 to-blue-700 shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 hover:from-blue-700 hover:to-blue-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                <LogIn className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Request Membership Access
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)'}}></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex-shrink-0 p-2 rounded-lg hover:bg-blue-100/30 transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-text" />
            ) : (
              <Menu className="w-6 h-6 text-text" />
            )}
          </button>
        </div>

        {/* Bottom Row: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex gap-1 items-center justify-center flex-wrap pb-4 border-t border-blue-100/10 pt-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
          {navLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-2xl text-sm font-semibold text-text-light hover:text-blue-800 hover:bg-blue-50/60 transition-all duration-300 flex items-center gap-2 group animate-slide-up"
                style={{animationDelay: `${0.4 + idx * 0.05}s`}}
              >
                <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-blue-100/10 animate-fade-in">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-text-light hover:text-blue-800 hover:bg-blue-50/60 transition-all duration-300 flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                )
              })}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-blue-100/10">
                <a href="#communities" className="btn btn-ghost text-sm w-full">
                  Membership Types
                </a>
                <a href="#profit-centres" className="btn btn-secondary text-sm w-full">
                  Explore Solutions
                </a>
                <a href="#access" className="btn btn-primary text-sm w-full">
                  Request Access
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
