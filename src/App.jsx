import Hero from './components/Hero'
import Offerings from './components/Offerings'
import WhyItMatters from './components/WhyItMatters'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FDF7FB] to-[#F3FAFF] text-gray-900">
      <Hero />
      <Offerings />
      <WhyItMatters />
      <Footer />
    </div>
  )
}

export default App
