import { useState, useEffect } from 'react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1635174815450-337f1f0abf5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3Jvbm9taXN0JTIwdGVhbSUyMHdvcmtpbmclMjBmaWVsZCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzMDU1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Equipo en campo",
  },
  {
    url: "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwbGFib3JhdG9yeSUyMGFuYWx5c2lzJTIwc2NpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc4MDkzMDU2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Análisis de suelo",
  },
  {
    url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZ3Jvbm9taXN0JTIwdGVhbSUyMHdvcmtpbmclMjBmaWVsZCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzMDU1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Maquinaria agrícola",
  },
  {
    url: "https://images.unsplash.com/photo-1707235164180-85fa316ce0ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhZ3Jvbm9taXN0JTIwdGVhbSUyMHdvcmtpbmclMjBmaWVsZCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzMDU1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Relevamiento en campo",
  },
];

export function AboutHero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out, swap, fade in
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white min-h-screen flex flex-col border-b border-gray-200">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full w-full px-6 pt-16 md:pt-24 gap-0">

        {/* Left — copy */}
        <div className="lg:col-span-6 flex flex-col justify-center pb-16 lg:pb-24 lg:pr-16 lg:border-r border-gray-200">
          <div className="inline-block border border-gray-300 px-3 py-1.5 mb-8 self-start">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-[0.2em]">Sobre nosotros</span>
          </div>

          <h1 className="text-gray-900 mb-6 leading-[1.05]">
            Transformamos desafíos ambientales en soluciones sostenibles.
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
            [Subtítulo — Hisoil es una empresa especializada en soluciones agro-ambientales que acompaña a productores, empresas e industrias con productos técnicos y servicios de gestión ambiental con impacto real y medible.]
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Solicitar presupuesto
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Conocer nuestros productos
            </button>
          </div>

          {/* Quick trust row */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-200">
            {[
              { value: "+15 años", label: "en el sector" },
              { value: "800+", label: "clientes atendidos" },
              { value: "ISO 14001", label: "certificado" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-bold text-gray-900 text-lg">{s.value}</div>
                <div className="text-gray-400 text-xs font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="lg:col-span-6 flex items-center pb-16 lg:pb-24 lg:pl-16">
          <div className="w-full">
            {/* Fadeshow — main image */}
            <div className="aspect-[4/3] bg-gray-900 rounded-sm relative overflow-hidden mb-3">
              <img
                key={current}
                src={slides[current].url}
                alt={slides[current].label}
                className="absolute inset-0 w-full h-full object-cover grayscale"
                style={{
                  filter: 'grayscale(100%)',
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent pointer-events-none" />

              {/* Label pill */}
              <div className="absolute bottom-4 left-4">
                <span
                  className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-full"
                  style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                >
                  {slides[current].label}
                </span>
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 500); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? '20px' : '6px',
                      height: '6px',
                      background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip — clickable */}
            <div className="grid grid-cols-4 gap-2">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 500); }}
                  className="aspect-[4/3] rounded-sm overflow-hidden relative group"
                  style={{ outline: 'none' }}
                >
                  <img
                    src={s.url}
                    alt={s.label}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                  <div
                    className="absolute inset-0 transition-all duration-200"
                    style={{
                      background: i === current
                        ? 'rgba(0,0,0,0.1)'
                        : 'rgba(0,0,0,0.45)',
                    }}
                  />
                  {i === current && (
                    <div className="absolute inset-0 ring-2 ring-white/60 rounded-sm pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
