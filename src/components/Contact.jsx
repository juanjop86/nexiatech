import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: 'Desarrollo Web', mensaje: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Consulta enviada! Nos pondremos en contacto pronto.')
  }

  return (
    <section className="py-xl relative" id="contact">
      <div className="container mx-auto px-margin-desktop">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl grid md:grid-cols-2 border border-outline-variant/30">
          {/* Contact Info */}
          <div className="reveal-left primary-gradient p-xl text-white space-y-lg relative">
            <div className="absolute bottom-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[160px]">contact_support</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-md text-white">Construyamos el futuro hoy</h2>
              <p className="font-body-lg opacity-90">
                Estamos listos para llevar tu infraestructura al siguiente nivel. Contáctanos y obtén una auditoría técnica inicial.
              </p>
              <div className="space-y-md mt-xl">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="font-medium">contacto@nexiatech.cl</span>
                </div>
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="font-medium">Las Condes, Santiago, Chile</span>
                </div>
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined">call</span>
                  <span className="font-medium">+56 2 2456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right p-xl bg-surface space-y-md" style={{ transitionDelay: '100ms' }}>
            <form className="grid gap-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-md text-on-surface-variant uppercase text-[10px] font-bold">Nombre</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full bg-white border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface outline-none transition"
                    placeholder="Ej. Juan Pérez"
                    type="text"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-md text-on-surface-variant uppercase text-[10px] font-bold">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface outline-none transition"
                    placeholder="juan@empresa.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-xs">
                <label className="font-label-md text-on-surface-variant uppercase text-[10px] font-bold">Servicio de Interés</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full bg-white border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface outline-none transition"
                >
                  <option>Desarrollo Web</option>
                  <option>Infraestructura de Red</option>
                  <option>Cloud &amp; Servidores</option>
                  <option>Soporte 24/7</option>
                </select>
              </div>

              <div className="space-y-xs">
                <label className="font-label-md text-on-surface-variant uppercase text-[10px] font-bold">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full bg-white border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface outline-none transition"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="primary-gradient text-white w-full py-md rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Enviar Consulta <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
