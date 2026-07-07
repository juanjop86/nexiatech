import { Cloud, Globe, HardDrives, Monitor, ShieldCheck, WifiHigh } from '@phosphor-icons/react'

const services = [
  { Icon: Globe,       title: 'Apps Web',       description: 'Desarrollo moderno con React, Angular y Node.js. Interfaces rápidas, escalables y mantenibles.', featured: true },
  { Icon: ShieldCheck, title: 'Ciberseguridad',  description: 'Auditorías, hardening y monitoreo continuo. Protegemos tus datos y tu operación de forma proactiva.', featured: true },
  { Icon: Monitor,     title: 'Apps Desktop',    description: 'Soluciones con Electron, .NET y tecnologías nativas para Windows, macOS y Linux.' },
  { Icon: HardDrives,  title: 'Servidores',      description: 'Administración Linux/Windows, monitoreo proactivo y respaldos automáticos.' },
  { Icon: WifiHigh,    title: 'Redes',           description: 'Routing, switching, VPN y seguridad perimetral de extremo a extremo.' },
  { Icon: Cloud,       title: 'Cloud',           description: 'Migración y operación en AWS y Azure, optimizadas en costos.' },
]

export default function Services() {
  return (
    <section className="py-[110px]" id="servicios">
      <div className="container mx-auto px-margin-desktop">
        <div className="reveal max-w-[700px] mx-auto mb-14 text-center">
          <span className="eyebrow justify-center">Nuestros servicios</span>
          <h2 className="font-display text-headline-md text-ink mt-4">Todo tu stack tecnológico,<br />un solo partner.</h2>
          <p className="font-body-lg text-body-lg text-ink-2 mt-4">
            Desarrollo, infraestructura y redes bajo un mismo estándar de calidad. Sin coordinar diez proveedores.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {services.map(({ Icon, title, description, featured }) => (
            <article
              key={title}
              className={`group relative rounded-2xl border px-8 pt-9 pb-10 min-h-[220px] flex flex-col transition-colors duration-300 lg:col-span-3 ${
                featured
                  ? 'lg:col-span-6 bg-[var(--accent-soft)] border-[color-mix(in_srgb,var(--accent)_25%,transparent)]'
                  : 'bg-surface border-line hover:bg-bg-soft'
              }`}
            >
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
              <div className="w-[52px] h-[52px] rounded-2xl border border-line-2 grid place-items-center text-accent mb-5 transition-all duration-500 group-hover:-translate-y-1 group-hover:-rotate-[4deg] group-hover:border-accent group-hover:bg-[var(--accent-soft)]">
                <Icon size={26} />
              </div>
              <h3 className="font-display text-[20px] font-semibold text-ink mb-2.5">{title}</h3>
              <p className="text-[14.5px] text-ink-2 leading-relaxed flex-1">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
