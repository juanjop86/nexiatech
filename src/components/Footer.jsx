import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo, MapPin, Phone } from '@phosphor-icons/react'

const services = [
  'Apps Web',
  'Apps Desktop',
  'Servidores',
  'Redes',
]

const company = [
  { label: 'Por qué Nexia', href: '#nexia' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const socials = [
  { Icon: LinkedinLogo, label: 'LinkedIn' },
  { Icon: InstagramLogo, label: 'Instagram' },
  { Icon: GithubLogo, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="mt-[110px] bg-panel text-panel-text pt-20 pb-9">
      <div className="container mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr_1fr_1fr] gap-10 pb-14">
          {/* Col 1 — Marca */}
          <div className="reveal-left">
            <a href="#inicio" className="flex items-center gap-2.5 font-display text-[21px] font-semibold tracking-tight text-panel-text mb-[18px]">
              <span className="w-8 h-8 grid place-items-center shrink-0">
                <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
                  <rect x="1.5" y="1.5" width="27" height="27" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
                  <path d="M9 21V9l12 12V9" stroke="var(--accent-2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Nexia<span className="grad-text">Tech</span></span>
            </a>
            <p className="text-panel-muted text-[14.5px] leading-relaxed max-w-[280px]">
              Tecnología joven, visión de futuro. Desarrollo, infraestructura y redes para empresas chilenas que quieren crecer.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[38px] h-[38px] rounded-[10px] border border-panel-line grid place-items-center text-panel-muted hover:text-accent-2 hover:border-accent-2 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Servicios */}
          <div className="reveal" style={{ transitionDelay: '80ms' }}>
            <h4 className="text-[12.5px] uppercase tracking-widest text-white/50 font-semibold mb-4">Servicios</h4>
            <ul className="flex flex-col">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="block text-panel-muted hover:text-accent-2 hover:translate-x-1 text-[14px] py-1.5 transition-all duration-200 w-fit">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div className="reveal" style={{ transitionDelay: '160ms' }}>
            <h4 className="text-[12.5px] uppercase tracking-widest text-white/50 font-semibold mb-4">Empresa</h4>
            <ul className="flex flex-col">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="block text-panel-muted hover:text-accent-2 hover:translate-x-1 text-[14px] py-1.5 transition-all duration-200 w-fit">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div className="reveal-right" style={{ transitionDelay: '240ms' }}>
            <h4 className="text-[12.5px] uppercase tracking-widest text-white/50 font-semibold mb-4">Contacto</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2.5 text-panel-muted text-[14px]">
                <Envelope size={17} className="text-accent-2 shrink-0" /> contacto@nexiatech.cl
              </li>
              <li className="flex items-center gap-2.5 text-panel-muted text-[14px]">
                <Phone size={17} className="text-accent-2 shrink-0" /> +56 2 2456 7890
              </li>
              <li className="flex items-center gap-2.5 text-panel-muted text-[14px]">
                <MapPin size={17} className="text-accent-2 shrink-0" /> Las Condes, Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-4 pt-7 border-t border-panel-line">
          <p className="text-white/50 text-[13px]">© 2026 Nexia Tech Chile · Tecnología joven, visión de futuro.</p>
          <div className="flex gap-6">
            {['Política de Privacidad', 'Términos', 'Estado de Red'].map((l) => (
              <a key={l} href="#" className="text-white/50 hover:text-white/80 text-[13px] transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
