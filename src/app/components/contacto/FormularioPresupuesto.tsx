import { useState } from "react";

const tiposConsulta = [
  "Seleccioná una opción",
  "Solicitud de presupuesto",
  "Consulta técnica",
  "Información sobre productos",
  "Información sobre servicios",
  "Membresía",
  "Otro",
];

const trustSignals = [
  "Respondemos en menos de 24 horas hábiles",
  "Diagnóstico inicial sin costo",
  "Sin compromisos en la primera consulta",
  "+800 clientes en 12 provincias",
];

export function FormularioPresupuesto() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-white" id="presupuesto">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — form */}
          <div className="lg:col-span-7">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-8">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">02 — Formulario</span>
            </div>
            <h2 className="text-gray-900 mb-3">Solicitá tu presupuesto.</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Completá el formulario y un asesor técnico se contacta con vos en menos de 24 horas hábiles.
            </p>

            {sent ? (
              <div className="border border-gray-200 rounded-sm p-12 text-center">
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-500 text-lg">✓</span>
                </div>
                <div className="text-gray-900 font-semibold text-lg mb-2">Solicitud recibida</div>
                <p className="text-gray-500 text-sm">
                  Un asesor técnico se pondrá en contacto con vos en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-gray-400 text-xs font-mono underline hover:text-gray-600"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-600 transition-colors bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre de la empresa"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-600 transition-colors bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-600 transition-colors bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+54 9 ..."
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-600 transition-colors bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                    Tipo de consulta *
                  </label>
                  <select
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-700 focus:outline-none focus:border-gray-600 transition-colors bg-white text-sm appearance-none"
                  >
                    {tiposConsulta.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Contanos brevemente sobre tu operación o lo que necesitás..."
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-600 transition-colors bg-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-8 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Enviar solicitud
                </button>

                <p className="text-gray-400 text-xs font-mono text-center">
                  * Campos obligatorios. Tu información es confidencial y no será compartida.
                </p>
              </form>
            )}
          </div>

          {/* Right — trust signals */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 mb-6">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-5">Por qué elegirnos</div>
              <div className="space-y-4">
                {trustSignals.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-gray-300 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-500 text-[10px]">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp shortcut */}
            <div className="bg-gray-950 border border-gray-800 rounded-sm p-6">
              <div className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                ¿Necesitás una respuesta rápida?
              </div>
              <div className="text-white font-semibold mb-4">
                Escribinos directamente por WhatsApp.
              </div>
              <button className="w-full border border-white/20 text-white py-3 px-6 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5 text-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Iniciar conversación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
