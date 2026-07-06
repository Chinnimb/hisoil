import { Leaf, TrendingUp, Settings } from 'lucide-react';

const benefits = [
  {
    number: "01",
    Icon: Leaf,
    title: "Beneficio ambiental",
    headline: "Cumplimiento normativo garantizado",
    points: [
      "Reducción del 60% en pasivos ambientales",
      "Certificación ISO 14001 del proceso",
      "Documentación regulatoria completa",
      "Cero vertidos fuera de norma",
    ],
    badge: "Ambiental",
  },
  {
    number: "02",
    Icon: TrendingUp,
    title: "Beneficio económico",
    headline: "Ahorro y retorno medible",
    points: [
      "Reducción de costos de disposición final",
      "Evitar multas y sanciones regulatorias",
      "Valorización de subproductos recuperados",
      "ROI estimado 3x en 12 meses",
    ],
    badge: "Económico",
  },
  {
    number: "03",
    Icon: Settings,
    title: "Beneficio operativo",
    headline: "Eficiencia y continuidad productiva",
    points: [
      "Gestión integral sin carga operativa interna",
      "Asesor técnico dedicado en cada proyecto",
      "Reportes automáticos y trazabilidad completa",
      "Flexibilidad en frecuencia y volumen",
    ],
    badge: "Operativo",
  },
];

export function ServiceBenefits() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-700 text-xs font-mono uppercase tracking-widest">04 — Beneficios</span>
            </div>
            <h2 className="text-oliva mb-3">Beneficios para tu operación</h2>
            <p className="text-gray-700 leading-relaxed">
              [Descripción — Impacto concreto y medible en las tres dimensiones que más importan a cada cliente.]
            </p>
          </div>
          <button className="self-start md:self-auto border border-gray-900 text-oliva px-6 py-3 rounded-full text-sm font-medium hover:bg-paja transition-colors whitespace-nowrap">
            Solicitar Presupuesto
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const { Icon } = b;
            return (
            <div key={b.number} className="border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:border-oliva/40 hover:shadow-xl transition-all duration-500">
              {/* Card top */}
              <div className="bg-paja p-8 border-b border-gray-200">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center group-hover:bg-lima/25 group-hover:border-lima/40 transition-all duration-500">
                    <Icon className="w-5 h-5 text-oliva group-hover:text-oliva transition-colors duration-500" />
                  </div>
                  <span className="text-xs font-mono text-gray-600 bg-white border border-gray-300 px-2.5 py-1 rounded-full">
                    {b.badge}
                  </span>
                </div>
                <div className="text-gray-200 font-bold font-mono text-4xl mb-2">{b.number}</div>
                <h3 className="text-oliva text-lg font-semibold mb-1">{b.title}</h3>
                <p className="text-gray-700 text-sm">{b.headline}</p>
              </div>

              {/* Points */}
              <div className="p-8 flex-1">
                <ul className="space-y-3">
                  {b.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
