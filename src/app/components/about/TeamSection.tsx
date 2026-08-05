import { Sprout, ClipboardCheck, Wrench, Factory, Handshake, ImagePlus } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const disciplines = [
  { Icon: Sprout, title: 'Ingenieros agrónomos', description: 'Diagnóstico técnico, planes nutricionales y seguimiento a campo.' },
  { Icon: ClipboardCheck, title: 'Especialistas ambientales', description: 'Gestión de residuos, normativa y compliance ambiental.' },
  { Icon: Wrench, title: 'Técnicos de producción', description: 'Control de calidad y procesos de compostaje profesional.' },
  { Icon: Factory, title: 'Operadores de planta', description: 'Ejecución operativa en cada etapa del tratamiento.' },
  { Icon: Handshake, title: 'Asesores comerciales', description: 'Acompañamiento personalizado desde la primera consulta.' },
];

export function TeamSection() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [bodyRef, bodyVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [galleryRef, galleryVisible] = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">08 — Equipo</span>
          </div>
          <h2 className="text-oliva mb-4">Las personas detrás de Hisoil.</h2>
        </div>

        {/* Body copy */}
        <div
          ref={bodyRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20 scroll-reveal ${bodyVisible ? 'is-visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <h3 className="text-oliva font-bold text-2xl leading-tight">
              Un equipo <span className="text-lima">multidisciplinario</span> integrado en cada etapa.
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              Detrás de cada proyecto hay un equipo multidisciplinario que trabaja de manera integrada para desarrollar soluciones eficientes y sostenibles.
            </p>
            <p>
              Combinamos <span className="text-oliva font-semibold">experiencia, conocimiento técnico y compromiso con la mejora continua</span> para acompañar a nuestros clientes en cada etapa del proceso, desde el diagnóstico inicial hasta la implementación y el seguimiento de los resultados.
            </p>
            <p>
              Nuestro objetivo es brindar soluciones <span className="text-oliva font-semibold">confiables, cercanas y adaptadas a cada realidad productiva</span>, generando relaciones de largo plazo basadas en la confianza y el trabajo conjunto.
            </p>
          </div>
        </div>

        {/* Disciplines grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 md:mb-20 scroll-reveal ${gridVisible ? 'is-visible' : ''}`}
        >
          {disciplines.map((d, i) => {
            const { Icon } = d;
            return (
              <div
                key={d.title}
                className="bg-white border border-oliva/15 rounded-2xl p-6 hover:border-oliva/40 hover:shadow-lg transition-all duration-500 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center mb-4 group-hover:bg-lima/25 group-hover:border-lima/40 transition-all duration-500">
                  <Icon className="w-5 h-5 text-oliva" />
                </div>
                <h4 className="text-oliva font-bold text-base leading-tight mb-2">{d.title}</h4>
                <p className="text-gray-700 text-xs leading-relaxed">{d.description}</p>
              </div>
            );
          })}
        </div>

        {/* Placeholder para fotos y videos de planta */}
        <div
          ref={galleryRef}
          className={`bg-white border border-dashed border-oliva/30 rounded-3xl p-8 md:p-12 scroll-reveal ${galleryVisible ? 'is-visible' : ''}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-oliva/10 border border-oliva/20 flex items-center justify-center flex-shrink-0">
              <ImagePlus className="w-7 h-7 text-oliva" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-2">Galería</div>
              <h4 className="text-oliva font-bold text-lg md:text-xl mb-1">Fotos y videos de nuestras plantas</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Próximamente incorporaremos material audiovisual de nuestras operaciones y equipo en campo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
