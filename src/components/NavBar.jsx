import { useState, useEffect } from 'react'

const SPRING = 'cubic-bezier(0.34, 1.2, 0.64, 1)'
const DURATION = '600ms'

const spacerStyle = (grow, minWidth = 0) => ({
  flexGrow: grow,
  flexShrink: 1,
  flexBasis: 0,
  minWidth,
  transition: `flex-grow ${DURATION} ${SPRING}, min-width ${DURATION} ${SPRING}`,
  overflow: 'hidden',
})

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full h-20 z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm flex items-center px-margin-desktop">

      {/* Espaciador exterior izquierdo: crece al centrar */}
      <div style={spacerStyle(scrolled ? 1 : 0)} />

      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-md">hub</span>
        </div>
        <span className="font-headline-md text-headline-sm font-bold text-primary">Nexia Tech Chile</span>
      </div>

      {/* Espaciador interior izquierdo: encoge al centrar */}
      <div style={spacerStyle(scrolled ? 0 : 1, scrolled ? 24 : 0)} />

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-md shrink-0">
        <a className="font-body-md text-body-sm text-primary font-bold border-b-2 border-primary pb-1" href="#">Home</a>
        <a className="font-body-md text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#services">Servicios</a>
        <a className="font-body-md text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#expertise">Expertise</a>
        <a className="font-body-md text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#team">Equipo</a>
        <a className="font-body-md text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contacto</a>
      </div>

      {/* Espaciador interior derecho: encoge al centrar */}
      <div style={spacerStyle(scrolled ? 0 : 1, scrolled ? 24 : 0)} />

      {/* Soporte button */}
      <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-bold scale-95 active:scale-90 transition-all hover:bg-primary-container shrink-0">
        Soporte
      </button>

      {/* Espaciador exterior derecho: crece al centrar */}
      <div style={spacerStyle(scrolled ? 1 : 0)} />

    </nav>
  )
}
