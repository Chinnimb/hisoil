import { useEffect, useState } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { useModal } from '../context/ModalContext'

const rubros = ['Productor agrícola', 'Empresa / industria', 'Municipio', 'Vivero', 'Paisajismo / jardinería', 'Constructora / desarrolladora', 'Particular', 'Otro']
const servicios = ['Compost', 'Sustratos profesionales', 'Materias primas', 'Paisajismo y techos verdes', 'Infraestructura y restauración', 'Tratamiento de residuos', 'Asesoramiento técnico', 'Otro']

export function PresupuestoModal() {
  const { isOpen, close } = useModal()
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', empresa: '',
    rubro: '', servicio: '', volumen: '', mensaje: '',
  })

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  // Bloquear scroll del body
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  function handleClose() {
    close()
    setTimeout(() => { setStep(1); setSent(false) }, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-300 px-5 md:px-8 py-5 flex items-center justify-between z-10">
          <div>
            <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-0.5">
              {sent ? 'Solicitud enviada' : `Paso ${step} de 2`}
            </div>
            <h2 className="text-oliva font-semibold text-lg">
              {sent ? '¡Recibimos tu consulta!' : 'Solicitar presupuesto'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-paja transition-colors text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        {!sent && (
          <div className="h-0.5 bg-paja">
            <div
              className="h-full bg-oliva transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="px-5 md:px-8 py-6 md:py-8">
          {sent ? (
            /* Confirmación */
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-oliva mx-auto mb-5" />
              <h3 className="text-oliva font-bold text-2xl mb-3">Gracias, {form.nombre.split(' ')[0]}.</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Tu solicitud fue recibida. Un asesor técnico de Hisoil se va a comunicar con vos en las próximas <strong className="text-gray-800">24 horas</strong>.
              </p>
              <p className="text-gray-600 text-sm font-mono mb-8">Confirmación enviada a {form.email}</p>
              <div className="grid grid-cols-3 gap-px bg-paja border border-gray-300 rounded-sm mb-8">
                {[
                  { label: 'Interés', value: form.servicio || '—' },
                  { label: 'Rubro', value: form.rubro || '—' },
                  { label: 'Volumen', value: form.volumen || '—' },
                ].map((d) => (
                  <div key={d.label} className="bg-white p-4 text-center">
                    <div className="text-xs font-mono text-gray-600 mb-1">{d.label}</div>
                    <div className="text-oliva font-semibold text-sm">{d.value}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleClose}
                className="bg-oliva text-white px-8 py-3 rounded-full font-medium hover:bg-oliva transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : step === 1 ? (
            /* Paso 1 — Datos de contacto */
            <form onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
              <p className="text-gray-700 text-sm mb-6">
                Completá tus datos y en 24 horas te contactamos con una propuesta personalizada.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Nombre y apellido *</label>
                    <input
                      required
                      type="text"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Ej: Carlos Rodríguez"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Empresa / Establecimiento</label>
                    <input
                      type="text"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      placeholder="Opcional"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      placeholder="+54 9 11..."
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="bg-oliva text-white px-8 py-3 rounded-full font-medium hover:bg-oliva transition-colors flex items-center gap-2"
                >
                  Continuar →
                </button>
              </div>
            </form>
          ) : (
            /* Paso 2 — Detalle del pedido */
            <form onSubmit={handleSubmit}>
              <p className="text-gray-700 text-sm mb-6">
                Contanos sobre tu proyecto para preparar una propuesta técnica a medida.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">¿Qué te interesa? *</label>
                    <select
                      required
                      value={form.servicio}
                      onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors bg-white"
                    >
                      <option value="">Seleccioná una opción</option>
                      {servicios.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Rubro</label>
                    <select
                      value={form.rubro}
                      onChange={(e) => setForm({ ...form, rubro: e.target.value })}
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors bg-white"
                    >
                      <option value="">Seleccioná tu rubro</option>
                      {rubros.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Volumen o escala estimada</label>
                  <input
                    type="text"
                    value={form.volumen}
                    onChange={(e) => setForm({ ...form, volumen: e.target.value })}
                    placeholder="Ej: 500 kg, 10 m³, 200 ha, 1 tn/mes"
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Mensaje o consulta</label>
                  <textarea
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="Contanos más sobre tu situación o lo que necesitás..."
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-700 text-sm hover:text-oliva transition-colors flex items-center gap-1"
                >
                  ← Atrás
                </button>
                <button
                  type="submit"
                  className="bg-oliva text-white px-8 py-3 rounded-full font-medium hover:bg-oliva transition-colors"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
