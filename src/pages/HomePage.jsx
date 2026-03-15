import Hero from '../components/sections/Hero'
import ProblemSection from '../components/sections/ProblemSection'
import WhatIsODIECLOUD from '../components/sections/WhatIsODIECLOUD'
import EcosystemAdvantage from '../components/sections/EcosystemAdvantage'
import WhoEcosystemServes from '../components/sections/WhoEcosystemServes'
import EcosystemFlywheel from '../components/sections/EcosystemFlywheel'
import MembershipCTA from '../components/sections/MembershipCTA'

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <WhatIsODIECLOUD />
      <EcosystemAdvantage />
      <WhoEcosystemServes />
      <EcosystemFlywheel />
      <MembershipCTA />
    </>
  )
}

export default HomePage
