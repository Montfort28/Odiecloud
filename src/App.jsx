import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import EcosystemPage from './pages/EcosystemPage'
import MembershipPage from './pages/MembershipPage'
import QuestionsPage from './pages/QuestionsPage'
import ContactPage from './pages/ContactPage'
// Ecosystem Pages
import ComponentsPage from './pages/ecosystem/ComponentsPage'
import ParticipationPage from './pages/ecosystem/ParticipationPage'
import ProfitCentresPage from './pages/ecosystem/ProfitCentresPage'
import OverviewPage from './pages/ecosystem/OverviewPage'
import UnderstandingPage from './pages/ecosystem/UnderstandingPage'
// Solution Pages
import TechnologyCloudPage from './pages/solutions/TechnologyCloudPage'
import BusinessDevelopmentPage from './pages/solutions/BusinessDevelopmentPage'
import InvestmentCapitalPage from './pages/solutions/InvestmentCapitalPage'
import MarketplaceTradePage from './pages/solutions/MarketplaceTradePage'
// Opportunity Pages
import BusinessOpportunitiesPage from './pages/opportunities/BusinessOpportunitiesPage'
import InvestmentOpportunitiesPage from './pages/opportunities/InvestmentOpportunitiesPage'
import ManufacturingOpportunitiesPage from './pages/opportunities/ManufacturingOpportunitiesPage'
import TradeOpportunitiesPage from './pages/opportunities/TradeOpportunitiesPage'
// Membership Pages
import MembershipTypesPage from './pages/membership/MembershipTypesPage'
import MembershipBenefitsPage from './pages/membership/MembershipBenefitsPage'

function App() {
  return (
    <Router>
      <div className="bg-bg min-h-screen">
        <Topbar />
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/ecosystem/components" element={<ComponentsPage />} />
            <Route path="/ecosystem/participation" element={<ParticipationPage />} />
            <Route path="/ecosystem/profit-centres" element={<ProfitCentresPage />} />
            <Route path="/ecosystem/overview" element={<OverviewPage />} />
            <Route path="/ecosystem/understanding" element={<UnderstandingPage />} />
            <Route path="/solutions/technology-cloud" element={<TechnologyCloudPage />} />
            <Route path="/solutions/business-development" element={<BusinessDevelopmentPage />} />
            <Route path="/solutions/investment-capital" element={<InvestmentCapitalPage />} />
            <Route path="/solutions/marketplace-trade" element={<MarketplaceTradePage />} />
            <Route path="/opportunities/business" element={<BusinessOpportunitiesPage />} />
            <Route path="/opportunities/investment" element={<InvestmentOpportunitiesPage />} />
            <Route path="/opportunities/manufacturing" element={<ManufacturingOpportunitiesPage />} />
            <Route path="/opportunities/trade" element={<TradeOpportunitiesPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/membership/types" element={<MembershipTypesPage />} />
            <Route path="/membership/benefits" element={<MembershipBenefitsPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
