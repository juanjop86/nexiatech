const members = [
  { initials: 'AM', name: 'Andrés Muñoz', role: 'CTO & Architect' },
  { initials: 'CP', name: 'Camila Parra',  role: 'Lead Web Dev' },
  { initials: 'RS', name: 'Ricardo Silva', role: 'DevOps Engineer' },
  { initials: 'JV', name: 'Javier Vera',   role: 'SysAdmin Specialist' },
]

export default function Team() {
  return (
    <section className="py-[110px]" id="nosotros">
      <div className="container mx-auto px-margin-desktop">
        <div className="reveal max-w-[700px] mx-auto mb-14 text-center">
          <h2 className="font-display text-headline-md text-ink mt-4">El equipo detrás de Nexia Tech.</h2>
          <p className="font-body-lg text-body-lg text-ink-2 mt-4">
            Una empresa joven chilena apasionada por la tecnología. Combinamos experiencia en desarrollo, infraestructura y redes para entregar soluciones integrales a pymes y startups.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[22px]">
          {members.map((member) => (
            <div
              key={member.name}
              className="reveal hover-lift bg-surface border border-line rounded-2xl px-6 py-[34px] text-center"
            >
              <div className="w-[76px] h-[76px] mx-auto mb-[18px] rounded-full grid place-items-center font-display font-semibold text-2xl text-white bg-accent">
                {member.initials}
              </div>
              <h3 className="font-display text-[18px] text-ink">{member.name}</h3>
              <p className="text-[13.5px] text-ink-3 mt-1 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
