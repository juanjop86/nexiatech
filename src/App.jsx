import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import WhyNexia from './components/WhyNexia'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import './index.css'

export default function App() {
  useReveal()

  return (
    <div>
      <div id="scroll-sentinel" className="h-px" />
      <NavBar />
      <Hero />
      <Stats />
      <Services />
      <WhyNexia />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
