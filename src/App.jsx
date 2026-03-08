import { useState, useEffect } from 'react'
import './index.css'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import WhyWebsite from './components/sections/WhyWebsite'
import QuestionsSection from './components/sections/Questions'
import ProfitCentres from './components/sections/ProfitCentres'
import EcosystemUnderstanding from './components/sections/EcosystemUnderstanding'
import OpportunitiesSection from './components/sections/Opportunities'
import CommunitiesSection from './components/sections/Communities'
import SitemapSection from './components/sections/Sitemap'
import AccessFormSection from './components/sections/AccessForm'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    // Smooth scroll to sections with header offset
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const id = href.substring(1)
        setActiveSection(id)
        const element = document.getElementById(id)
        if (element) {
          // Get the sticky header height (approximately 100px for header + topbar)
          const headerHeight = 120
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - headerHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleNavClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
    }
  }, [])

  return (
    <div className="bg-bg min-h-screen">
      <Topbar />
      <Header />
      <main className="w-full">
        <Hero />
        <WhyWebsite />
        <QuestionsSection />
        <ProfitCentres />
        <EcosystemUnderstanding />
        <OpportunitiesSection />
        <CommunitiesSection />
        <SitemapSection />
        <AccessFormSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
