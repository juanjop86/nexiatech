const reasons = [
  { title: 'Expertos Locales',          description: 'Entendemos el mercado chileno y los desafíos técnicos de la región.' },
  { title: 'Soporte Prioritario',       description: 'Canal directo con ingenieros senior, sin tickets infinitos ni demoras.' },
  { title: 'Escalabilidad Sin Fricción', description: 'Nuestra arquitectura permite que tu infraestructura crezca con tu demanda.' },
]

export default function WhyNexia() {
  return (
    <section className="pb-[110px]" id="nexia">
      <div className="container mx-auto px-margin-desktop">
        <div className="reveal bg-panel text-panel-text rounded-3xl overflow-hidden border border-panel-line">
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="p-9 md:p-[74px]">
              <span className="eyebrow text-accent-2 [&::before]:bg-accent-2">Por qué Nexia</span>
              <h2 className="font-display text-headline-md text-panel-text mt-5 mb-5">Por qué elegir Nexia Tech</h2>
              <p className="text-panel-muted text-[16.5px] leading-relaxed max-w-[430px]">
                Trabajamos como una extensión de tu equipo: cercanos, transparentes y enfocados en resultados, no en horas facturadas.
              </p>
              <div className="mt-8 flex flex-col">
                {reasons.map((reason) => (
                  <div key={reason.title} className="py-[17px] border-t border-panel-line last:border-b">
                    <b className="font-display font-medium text-[16px] block mb-1">{reason.title}</b>
                    <span className="text-panel-muted text-[14px]">{reason.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative bg-panel-2 grid place-items-center overflow-hidden min-h-[300px]">
              <div className="panel-grid-bg" />
              <div className="absolute border border-panel-line rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]" />
              <div className="absolute border border-panel-line rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px]" />
              <div className="relative text-center p-10">
                <div className="font-display text-accent-2 text-[clamp(54px,8vw,92px)] font-semibold tracking-tight leading-none">99.9%</div>
                <div className="text-panel-muted mt-3 text-[14.5px]">Disponibilidad garantizada por SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
