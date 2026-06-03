export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 network-grid overflow-hidden">
      <div className="absolute inset-0 mesh-gradient -z-10"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>

      <div className="container mx-auto px-margin-desktop grid md:grid-cols-2 gap-xl items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-md">
          <div className="reveal inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1 rounded-full text-primary font-bold text-[11px] tracking-wider uppercase">
            <span className="w-2 h-2 bg-primary rounded-full glow-dot"></span>
            TECNOLOGÍA DE VANGUARDIA PARA LATAM
          </div>

          <h1 className="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight tracking-tighter text-on-surface" style={{ transitionDelay: '100ms' }}>
            Transformamos tu <span className="text-primary">infraestructura digital</span>
          </h1>

          <p className="reveal font-body-lg text-body-lg text-on-surface-variant max-w-xl" style={{ transitionDelay: '200ms' }}>
            Apps web y desktop, servidores, routing y switching. Nexia Tech es el partner tecnológico que tu pyme o startup necesita para crecer sin fricción.
          </p>

          <div className="reveal flex flex-wrap gap-md pt-md" style={{ transitionDelay: '300ms' }}>
            <button className="primary-gradient text-white px-xl py-md rounded-lg font-bold shadow-lg hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
              Comenzar proyecto
            </button>
            <button className="border-2 border-primary/20 text-primary px-xl py-md rounded-lg font-bold hover:bg-primary/5 transition-all">
              Ver servicios
            </button>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-3 gap-md pt-xl border-t border-outline-variant/30 mt-xl" style={{ transitionDelay: '400ms' }}>
            <div>
              <div className="font-headline-md text-headline-md text-on-surface">120+</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Proyectos</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-on-surface">99.9%</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Disponibilidad</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-on-surface">24/7</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Monitoreo</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="reveal-right relative hidden md:block" style={{ transitionDelay: '200ms' }}>
          <div className="glass-panel p-lg rounded-xl relative w-full max-w-lg mx-auto overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-9xl">terminal</span>
            </div>
            <div className="relative z-10 space-y-md">
              <div className="flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-fixed-dim"></div>
                </div>
                <span className="text-xs font-medium text-on-surface-variant">main.py - 128ms</span>
              </div>

              <div className="h-48 w-full rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 relative shadow-inner">
                <div className="absolute top-4 right-4 animate-bounce text-primary">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
                </div>
                <div className="absolute bottom-6 left-12 animate-pulse text-secondary">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
                </div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-primary mb-2">cloud_sync</span>
                  <div className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">Sincronizando Nodos...</div>
                </div>
              </div>

              <div className="space-y-sm">
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full primary-gradient w-[70%]"></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  <span>Optimization</span>
                  <span>System Health: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
