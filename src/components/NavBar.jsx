import { useState, useEffect } from 'react'
import { Headset, List, Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from '../hooks/useTheme'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] transition-[border-color] duration-300 border-b ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-margin-desktop flex items-center justify-between h-[74px] gap-md">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 font-display text-[21px] font-semibold tracking-tight text-ink shrink-0">
          <span className="w-8 h-8 grid place-items-center shrink-0">
            <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
              <rect x="1.5" y="1.5" width="27" height="27" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
              <path d="M9 21V9l12 12V9" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Nexia<span className="grad-text">Tech</span></span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-[14.5px] font-medium text-ink-2 hover:text-ink transition-colors duration-200" href="#servicios">Servicios</a>
          <a className="text-[14.5px] font-medium text-ink-2 hover:text-ink transition-colors duration-200" href="#nexia">Por qué Nexia</a>
          <a className="text-[14.5px] font-medium text-ink-2 hover:text-ink transition-colors duration-200" href="#nosotros">Nosotros</a>
          <a className="text-[14.5px] font-medium text-ink-2 hover:text-ink transition-colors duration-200" href="#contacto">Contacto</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3.5 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="w-10 h-10 rounded-[11px] border border-line-2 bg-surface text-ink grid place-items-center hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
          >
            {theme === 'dark' ? <Sun size={19} weight="regular" /> : <Moon size={19} weight="regular" />}
          </button>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 bg-grad text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_10px_26px_-10px_var(--accent)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_var(--accent)] transition-all duration-300"
          >
            <Headset size={18} /> Soporte
          </a>
          <button
            aria-label="Menú"
            className="md:hidden w-10 h-10 rounded-[11px] border border-line-2 bg-surface text-ink grid place-items-center"
            onClick={() => {
              const target = document.getElementById('servicios')
              window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
            }}
          >
            <List size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
