import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import QuestionsPage from './pages/QuestionsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="bg-bg min-h-screen">
        <Topbar />
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
