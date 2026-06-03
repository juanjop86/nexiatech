const services = [
  { icon: 'web',             color: 'text-primary',   title: 'Desarrollo Web',          description: 'Aplicaciones web modernas, escalables y optimizadas para SEO y velocidad.' },
  { icon: 'lan',             color: 'text-secondary',  title: 'Routing & Switching',      description: 'Configuración avanzada de redes para una conectividad sin interrupciones.' },
  { icon: 'storage',         color: 'text-primary',   title: 'Servidores Cloud',         description: 'Gestión y despliegue de servidores en la nube con máxima seguridad.' },
  { icon: 'security',        color: 'text-secondary',  title: 'Ciberseguridad',           description: 'Blindamos tus activos digitales contra amenazas internas y externas.' },
  { icon: 'settings_suggest',color: 'text-primary',   title: 'DevOps & Automatización',  description: 'Optimización de procesos de despliegue y flujos de trabajo IT.' },
  { icon: 'monitoring',      color: 'text-secondary',  title: 'Monitoreo 24/7',           description: 'Vigilancia constante para asegurar la continuidad operativa de tu stack.' },
]

export default function Services() {
  return (
    <section className="py-xl bg-surface-container-lowest" id="services">
      <div className="container mx-auto px-margin-desktop">
        <div className="max-w-2xl mb-xl">
          <h2 className="reveal font-headline-lg text-headline-lg text-on-surface mb-sm">Infraestructura Integral</h2>
          <p className="reveal font-body-lg text-body-lg text-on-surface-variant" style={{ transitionDelay: '100ms' }}>
            Soluciones robustas diseñadas para escalar junto a tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-md">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal bg-white p-lg rounded-lg hover-lift border border-outline-variant/30"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={`material-symbols-outlined ${service.color} text-4xl mb-md block`}>{service.icon}</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{service.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
