import Hero from '../components/sections/Hero'
import WhyWebsite from '../components/sections/WhyWebsite'
import ProfitCentres from '../components/sections/ProfitCentres'
import EcosystemUnderstanding from '../components/sections/EcosystemUnderstanding'
import OpportunitiesSection from '../components/sections/Opportunities'
import CommunitiesSection from '../components/sections/Communities'
import SitemapSection from '../components/sections/Sitemap'

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyWebsite />
      <ProfitCentres />
      <EcosystemUnderstanding />
      <OpportunitiesSection />
      <CommunitiesSection />
      <SitemapSection />
    </>
  )
}

export default HomePage
