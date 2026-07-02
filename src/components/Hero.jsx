import { Code, Desktop, HardDrives, RocketLaunch, ShareNetwork } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section className="relative pt-[70px] pb-24 overflow-hidden" id="inicio">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="absolute rounded-full blur-[80px] w-[480px] h-[480px] -top-40 -right-20 bg-[var(--accent-soft)]" />
        <div className="absolute rounded-full blur-[80px] w-[360px] h-[360px] -bottom-40 -left-24 bg-[color-mix(in_srgb,var(--accent-2)_12%,transparent)]" />
      </div>

      <div className="container mx-auto px-margin-desktop grid md:grid-cols-2 gap-xl items-center relative z-10">
        {/* Left Content */}
        <div>
          <span className="reveal inline-flex items-center gap-2 bg-[var(--accent-soft)] text-accent px-4 py-2 rounded-full text-[13px] font-semibold border border-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
            🇨🇱 Empresa chilena · Soporte TI
          </span>

          <h1
            className="reveal font-display text-headline-lg-mobile md:text-headline-lg text-ink mt-6"
            style={{ transitionDelay: '100ms' }}
          >
            Transformamos tu <span className="grad-text">infraestructura digital</span>
          </h1>

          <p className="reveal font-body-lg text-body-lg text-ink-2 max-w-xl mt-6" style={{ transitionDelay: '200ms' }}>
            Apps web y desktop, servidores, routing y switching. Nexia Tech es el partner tecnológico que tu pyme o startup necesita para crecer sin fricción.
          </p>

          <div className="reveal flex flex-wrap gap-3.5 mt-8" style={{ transitionDelay: '300ms' }}>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-grad text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_10px_26px_-10px_var(--accent)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_var(--accent)] transition-all duration-300"
            >
              <RocketLaunch size={18} /> Comenzar proyecto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-transparent text-ink border border-line-2 px-6 py-3.5 rounded-xl font-semibold text-[15px] hover:-translate-y-0.5 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Ver servicios
            </a>
          </div>

          {/* Stats */}
          <div className="reveal flex gap-10 flex-wrap mt-14" style={{ transitionDelay: '400ms' }}>
            <div>
              <div className="font-display text-[32px] font-semibold tracking-tight text-ink whitespace-nowrap">120+</div>
              <div className="text-[13.5px] text-ink-3 font-medium mt-1">Proyectos entregados</div>
            </div>
            <div>
              <div className="font-display text-[32px] font-semibold tracking-tight text-ink whitespace-nowrap">99.9%</div>
              <div className="text-[13.5px] text-ink-3 font-medium mt-1">Disponibilidad media</div>
            </div>
            <div>
              <div className="font-display text-[32px] font-semibold tracking-tight text-ink whitespace-nowrap">24/7</div>
              <div className="text-[13.5px] text-ink-3 font-medium mt-1">Monitoreo y soporte</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="reveal-right relative hidden md:grid place-items-center" style={{ transitionDelay: '200ms' }}>
          <div className="absolute border border-line-2 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]" />
          <div className="absolute border border-line-2 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-55" />

          <div className="float-card relative z-[2] w-[340px] h-[340px] bg-surface border border-line rounded-[40px] grid place-items-center shadow-[0_30px_60px_-28px_color-mix(in_srgb,var(--accent)_45%,transparent)] group">
            <div className="grid grid-cols-2 gap-5">
              <div className="w-[110px] h-[110px] rounded-[24px] bg-bg-soft border border-line grid place-items-center text-accent transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:-rotate-[5deg]">
                <Code size={40} />
              </div>
              <div className="w-[110px] h-[110px] rounded-[24px] bg-bg-soft border border-line grid place-items-center text-accent transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[5deg]">
                <HardDrives size={40} />
              </div>
              <div className="w-[110px] h-[110px] rounded-[24px] bg-bg-soft border border-line grid place-items-center text-accent transition-transform duration-500 group-hover:translate-y-1.5 group-hover:rotate-[5deg]">
                <ShareNetwork size={40} />
              </div>
              <div className="w-[110px] h-[110px] rounded-[24px] bg-bg-soft border border-line grid place-items-center text-accent transition-transform duration-500 group-hover:translate-y-1.5 group-hover:-rotate-[5deg]">
                <Desktop size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
