import { useState } from 'react'
import { CheckCircle, Clock, Envelope, MapPin, PaperPlaneTilt, Phone } from '@phosphor-icons/react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', servicio: 'Desarrollo Web', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const fieldClass =
    'w-full bg-white/5 border border-panel-line rounded-xl px-4 py-3.5 text-panel-text placeholder:text-white/45 outline-none focus:border-accent focus:bg-white/[0.08] transition-colors duration-200'

  return (
    <section className="pb-[110px]" id="contacto">
      <div className="container mx-auto px-margin-desktop">
        <div className="reveal relative bg-panel text-panel-text rounded-3xl border border-panel-line overflow-hidden p-9 md:p-16 grid md:grid-cols-2 gap-[52px] items-center">
          <div className="absolute w-[360px] h-[360px] rounded-full bg-accent blur-[100px] opacity-30 -top-28 -right-16" />

          {/* Contact Info */}
          <div className="relative z-10">
            <h2 className="font-display text-headline-md text-panel-text mb-4">Hablemos.</h2>
            <p className="text-panel-muted text-[16px] leading-relaxed max-w-[360px] mb-7">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una propuesta inicial sin compromiso.
            </p>
            <div className="flex flex-col gap-3.5">
              <div className="inline-flex items-center gap-3 text-panel-muted text-[15px]">
                <MapPin size={19} className="text-accent-2" /> Las Condes, Santiago, Chile
              </div>
              <a href="tel:+56224567890" className="inline-flex items-center gap-3 text-panel-muted hover:text-panel-text text-[15px] transition-colors duration-200 w-fit">
                <Phone size={19} className="text-accent-2" /> +56 2 2456 7890
              </a>
              <a href="mailto:contacto@nexiatech.cl" className="inline-flex items-center gap-3 text-panel-muted hover:text-panel-text text-[15px] transition-colors duration-200 w-fit">
                <Envelope size={19} className="text-accent-2" /> contacto@nexiatech.cl
              </a>
              <div className="inline-flex items-center gap-3 text-panel-muted text-[15px]">
                <Clock size={19} className="text-accent-2" /> Lun – Vie · 09:00 – 18:00
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="relative z-10 grid gap-3.5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3.5">
              <input name="nombre" value={form.nombre} onChange={handleChange} className={fieldClass} placeholder="Nombre completo" type="text" required />
              <input name="empresa" value={form.empresa} onChange={handleChange} className={fieldClass} placeholder="Empresa" type="text" />
            </div>
            <input name="email" value={form.email} onChange={handleChange} className={fieldClass} placeholder="Correo electrónico" type="email" required />
            <select name="servicio" value={form.servicio} onChange={handleChange} className={fieldClass}>
              <option className="text-ink">Desarrollo Web</option>
              <option className="text-ink">Infraestructura de Red</option>
              <option className="text-ink">Cloud &amp; Servidores</option>
              <option className="text-ink">Soporte 24/7</option>
            </select>
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className={`${fieldClass} resize-y min-h-[96px]`} placeholder="¿En qué podemos ayudarte?" />

            {!sent ? (
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 bg-accent text-white py-3.5 rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <PaperPlaneTilt size={18} /> Enviar mensaje
              </button>
            ) : (
              <div className="flex items-center gap-2 text-[#5bd6a0] text-[14.5px] font-semibold pt-0.5">
                <CheckCircle size={19} /> ¡Gracias! Te contactaremos en menos de 24 horas.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
