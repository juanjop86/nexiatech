const members = [
  { initials: 'AM', name: 'Andrés Muñoz', role: 'CTO & Architect',     gradient: true },
  { initials: 'CP', name: 'Camila Parra',  role: 'Lead Web Dev',        gradient: false },
  { initials: 'RS', name: 'Ricardo Silva', role: 'DevOps Engineer',     gradient: false },
  { initials: 'JV', name: 'Javier Vera',   role: 'SysAdmin Specialist', gradient: true },
]

export default function Team() {
  return (
    <section className="py-xl bg-surface-container-low" id="team">
      <div className="container mx-auto px-margin-desktop text-center">
        <h2 className="reveal font-headline-lg text-headline-lg text-on-surface mb-xl">Nuestro Equipo Core</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="reveal space-y-sm bg-white p-lg rounded-lg border border-outline-variant/30"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-24 h-24 mx-auto rounded-lg flex items-center justify-center text-2xl font-bold shadow-md ${
                  member.gradient ? 'primary-gradient text-white' : 'bg-surface-dim text-on-surface'
                }`}
              >
                {member.initials}
              </div>
              <div>
                <div className="text-on-surface font-bold">{member.name}</div>
                <div className="text-primary text-xs font-bold uppercase tracking-wider">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
