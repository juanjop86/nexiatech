import { Cloud, Globe, HardDrives, Monitor, ShieldCheck, WifiHigh } from '@phosphor-icons/react'

const services = [
  { num: '01', Icon: Globe,       title: 'Apps Web',       description: 'Desarrollo moderno con React, Angular y Node.js. Interfaces rápidas, escalables y mantenibles.' },
  { num: '02', Icon: Monitor,     title: 'Apps Desktop',    description: 'Soluciones con Electron, .NET y tecnologías nativas para Windows, macOS y Linux.' },
  { num: '03', Icon: HardDrives,  title: 'Servidores',      description: 'Administración Linux/Windows, monitoreo proactivo, respaldos automáticos y alta disponibilidad.' },
  { num: '04', Icon: WifiHigh,    title: 'Redes',           description: 'Routing, switching, VPN y seguridad perimetral. Infraestructura estable de extremo a extremo.' },
  { num: '05', Icon: ShieldCheck, title: 'Ciberseguridad',  description: 'Auditorías, hardening y monitoreo continuo. Protegemos tus datos y tu operación de forma proactiva.' },
  { num: '06', Icon: Cloud,       title: 'Cloud',           description: 'Migración y operación en AWS y Azure. Entornos elásticos, automatizados y optimizados en costos.' },
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

        <div className="reveal grid md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {services.map(({ num, Icon, title, description }) => (
            <article
              key={title}
              className="group relative bg-surface hover:bg-bg-soft transition-colors duration-300 px-8 pt-9 pb-10 min-h-[250px] flex flex-col"
            >
              <span className="absolute top-7 right-8 font-display text-[13px] text-ink-3 opacity-50">{num}</span>
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-grad transition-[width] duration-500 group-hover:w-full" />
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
