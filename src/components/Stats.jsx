const stats = [
  { value: '120+', label: 'Proyectos entregados' },
  { value: '99.9%', label: 'Disponibilidad media' },
  { value: '24/7', label: 'Monitoreo y soporte' },
]

export default function Stats() {
  return (
    <section className="border-y border-line py-9">
      <div className="container mx-auto px-margin-desktop">
        <div className="reveal grid grid-cols-3 gap-6 md:gap-10 max-w-2xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-[26px] md:text-[32px] font-semibold tracking-tight text-ink whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-[12.5px] md:text-[13.5px] text-ink-3 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
