import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const interesOptions = [
  'Compost',
  'Sustratos profesionales',
  'Materias primas',
  'Paisajismo y techos verdes',
  'Infraestructura y restauración',
  'Tratamiento de residuos orgánicos',
  'Asesoramiento técnico',
];

const rubroOptions = [
  'Productor agrícola',
  'Empresa / industria',
  'Municipio',
  'Vivero',
  'Paisajismo / jardinería',
  'Constructora / desarrolladora',
  'Particular',
  'Otro',
];

const provinciasArgentina = [
  'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes',
  'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones',
  'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz',
  'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán',
];

export function SumateForm() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder: en producción esto envía a un backend/mail
    setSent(true);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-nata">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 scroll-reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Left column — info */}
          <div className="lg:col-span-1">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">
                Ficha de cliente
              </span>
            </div>
            <h2 className="text-oliva mb-4">Contanos sobre tu proyecto.</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Completá el formulario con los datos básicos y qué tipo de solución necesitás.
              Nos comunicamos por WhatsApp, mail o teléfono según prefieras.
            </p>

            <div className="bg-white border border-oliva/15 rounded-2xl p-6">
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">
                ¿Preferís contactarnos directamente?
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5491144401919?text=Hola%20Hisoil,%20quisiera%20consultar%20por%20sus%20productos%20y%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-oliva hover:text-lima transition-colors group"
                >
                  <div>
                    <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">WhatsApp</div>
                    <div className="font-semibold text-sm">+54 9 11 4440-1919</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:administracion@hisoil.com.ar"
                  className="flex items-center justify-between text-oliva hover:text-lima transition-colors group"
                >
                  <div>
                    <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">Email</div>
                    <div className="font-semibold text-sm">administracion@hisoil.com.ar</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="bg-white border border-oliva/20 rounded-2xl p-10 md:p-14 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-lima/25 border border-lima/50 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-oliva" strokeWidth={2} />
                </div>
                <h3 className="text-oliva font-bold text-2xl md:text-3xl mb-4">¡Ficha recibida!</h3>
                <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
                  Gracias por sumarte. Nuestro equipo se pondrá en contacto en las próximas 24 a 48 horas hábiles.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-oliva/15 rounded-2xl p-6 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Nombre y apellido *" name="nombre" required />
                  <Field label="Empresa (opcional)" name="empresa" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Email *" name="email" type="email" required />
                  <Field label="Teléfono / WhatsApp *" name="telefono" type="tel" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <SelectField label="Rubro *" name="rubro" options={rubroOptions} required />
                  <SelectField label="Provincia *" name="provincia" options={provinciasArgentina} required />
                </div>

                <div>
                  <label className="block text-oliva text-xs font-mono uppercase tracking-widest mb-3">
                    ¿En qué estás interesado? (podés marcar más de uno)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interesOptions.map((op) => (
                      <label
                        key={op}
                        className="flex items-center gap-3 p-3 border border-oliva/15 rounded-lg cursor-pointer hover:border-oliva/40 hover:bg-paja/40 transition-colors"
                      >
                        <input type="checkbox" name="interes" value={op} className="accent-oliva w-4 h-4" />
                        <span className="text-sm text-gray-700">{op}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-oliva text-xs font-mono uppercase tracking-widest mb-2">
                    Contanos más sobre tu proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 border border-oliva/15 rounded-lg focus:border-oliva focus:outline-none focus:ring-1 focus:ring-oliva/25 text-sm resize-none"
                    placeholder="Volúmenes estimados, plazos, características del terreno, dudas puntuales, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-oliva text-white text-sm font-semibold py-4 px-8 rounded-full hover:bg-lima hover:text-oliva transition-all shadow-lg"
                >
                  Enviar ficha
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Al enviar aceptás que HISOIL utilice estos datos para contactarte. No compartimos tu información con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

function Field({ label, name, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-oliva text-xs font-mono uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-3 border border-oliva/15 rounded-lg focus:border-oliva focus:outline-none focus:ring-1 focus:ring-oliva/25 text-sm"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-oliva text-xs font-mono uppercase tracking-widest mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full px-4 py-3 border border-oliva/15 rounded-lg focus:border-oliva focus:outline-none focus:ring-1 focus:ring-oliva/25 text-sm bg-white"
      >
        <option value="" disabled>Seleccioná una opción</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
