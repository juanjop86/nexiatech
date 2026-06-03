const reasons = [
  { title: 'Expertos Locales',          description: 'Entendemos el mercado chileno y los desafíos técnicos de la región.' },
  { title: 'Soporte Prioritario',       description: 'Canal directo con ingenieros senior, sin tickets infinitos ni demoras.' },
  { title: 'Escalabilidad Sin Fricción', description: 'Nuestra arquitectura permite que tu infraestructura crezca con tu demanda.' },
]

export default function WhyNexia() {
  return (
    <section className="py-xl relative overflow-hidden" id="expertise">
      <div className="container mx-auto px-margin-desktop grid md:grid-cols-2 gap-xl items-center">
        {/* Left: Uptime Visual */}
        <div className="reveal-left relative">
          <div className="absolute -inset-10 primary-gradient opacity-5 blur-3xl rounded-full"></div>
          <div className="relative z-10 glass-panel p-xl rounded-xl text-center border-primary/10 shadow-lg">
            <div className="font-headline-lg text-[100px] font-bold text-primary leading-none">99.9%</div>
            <div className="font-headline-sm text-on-surface mt-4 uppercase tracking-widest font-bold">Uptime Garantizado</div>
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-4 h-4 bg-primary rounded-full glow-dot"></div>
              <div className="w-4 h-4 bg-primary rounded-full glow-dot" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-4 h-4 bg-primary rounded-full glow-dot" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Right: Reasons */}
        <div className="space-y-md">
          <h2 className="reveal font-headline-lg text-headline-lg text-on-surface" style={{ transitionDelay: '100ms' }}>
            Por qué elegir Nexia Tech
          </h2>
          <ul className="space-y-md">
            {reasons.map((reason, i) => (
              <li
                key={reason.title}
                className="reveal flex items-start gap-4"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">{reason.title}</h4>
                  <p className="font-body-sm text-on-surface-variant">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
