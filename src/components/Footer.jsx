const services = [
  'Desarrollo Web',
  'Routing & Switching',
  'Servidores Cloud',
  'Ciberseguridad',
  'DevOps & Automatización',
]

const company = [
  'Nosotros',
  'Blog',
  'Careers',
  'Network Status',
]

const socials = [
  { icon: 'business', label: 'LinkedIn' },
  { icon: 'code',     label: 'GitHub' },
  { icon: 'tag',      label: 'X' },
]

export default function Footer() {
  return (
    <footer>
      {/* ── Zona 1: CTA strip ─────────────────────────────── */}
      <div className="primary-gradient py-lg">
        <div className="reveal container mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-md">
          <div>
            <p className="text-white font-bold text-headline-sm leading-tight">
              ¿Listo para transformar tu infraestructura?
            </p>
            <p className="text-white/70 text-body-sm mt-1">
              Habla con nuestro equipo y obtén una auditoría técnica sin costo.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 border-2 border-white text-white font-bold px-xl py-sm rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            Hablar con un experto
          </a>
        </div>
      </div>

      {/* ── Zona 2: Columnas principales ──────────────────── */}
      <div className="bg-inverse-surface relative overflow-hidden">
        {/* network grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 container mx-auto px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-4 gap-xl">
          {/* Col 1 — Marca */}
          <div className="reveal-left space-y-md">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 primary-gradient rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>hub</span>
              </div>
              <span className="text-inverse-on-surface font-bold text-headline-sm">Nexia Tech Chile</span>
            </div>

            <p className="text-white/60 text-body-sm leading-relaxed max-w-[220px]">
              Elevando el estándar tecnológico para pymes y startups en América Latina.
            </p>

            <div className="flex gap-sm pt-xs">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{s.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Servicios */}
          <div className="reveal space-y-md" style={{ transitionDelay: '80ms' }}>
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 hover:text-white text-body-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-white transition-colors shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div className="reveal space-y-md" style={{ transitionDelay: '160ms' }}>
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest">Empresa</h4>
            <ul className="space-y-sm">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-white/60 hover:text-white text-body-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-white transition-colors shrink-0" />
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div className="reveal-right space-y-md" style={{ transitionDelay: '240ms' }}>
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm text-white/60 text-body-sm">
                <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: '18px', marginTop: '2px' }}>mail</span>
                contacto@nexiatech.cl
              </li>
              <li className="flex items-start gap-sm text-white/60 text-body-sm">
                <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: '18px', marginTop: '2px' }}>call</span>
                +56 2 2456 7890
              </li>
              <li className="flex items-start gap-sm text-white/60 text-body-sm">
                <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: '18px', marginTop: '2px' }}>location_on</span>
                Las Condes, Santiago, Chile
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 primary-gradient text-white text-body-sm font-bold px-md py-sm rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Contactar
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Zona 3: Bottom bar ────────────────────────────── */}
      <div className="bg-[#1a2230] border-t border-white/10 py-md">
        <div className="reveal container mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-sm">
          <p className="text-white/40 text-body-sm">
            © 2024 Nexia Tech Chile. Todos los derechos reservados.
          </p>
          <div className="flex gap-md">
            {['Privacy Policy', 'Terms', 'Network Status'].map((l) => (
              <a key={l} href="#" className="text-white/40 hover:text-white/80 text-body-sm transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
