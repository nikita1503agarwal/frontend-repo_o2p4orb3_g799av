import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offerings from './components/Offerings'
import HowItWorks from './components/HowItWorks'
import WhyItMatters from './components/WhyItMatters'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FDF7FB] to-[#F3FAFF] text-gray-900" id="top">
      <Navbar />
      <Hero />
      <Offerings />
      <HowItWorks />
      <WhyItMatters />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
