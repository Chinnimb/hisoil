import { Link } from 'react-router';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

// Solo redes con URL confirmada. LinkedIn y YouTube: no tienen cuenta.
const redes = [
  { Icon: Instagram, nombre: 'Instagram', url: 'https://www.instagram.com/hisoil_/' },
  {
    Icon: Facebook,
    nombre: 'Facebook',
    url: 'https://www.facebook.com/p/Hi-Soil-100066773138615/',
  },
];

export function Footer() {
  // Solo destinos que existen. Los servicios enlazan a su card en /servicios.
  const navigationSections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Productos', to: '/productos' },
        { label: 'Servicios', to: '/servicios' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Nosotros', to: '/nosotros' },
        { label: 'Contacto', to: '/contacto' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Tratamiento de residuos', to: '/servicios#servicio-residuo' },
        { label: 'Compostaje a medida', to: '/servicios#servicio-proceso' },
        { label: 'Restauración ambiental', to: '/servicios#servicio-recuperacion' },
        { label: 'Asesoramiento técnico', to: '/servicios#servicio-conocimiento' },
      ],
    },
  ];

  return (
    <footer className="bg-[#14201A] text-white py-16">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              loading="lazy"
              decoding="async"
              src="/hisoil-logo.png"
              alt="HISOIL"
              className="h-12 w-auto"
            />
            <p className="text-white/65 leading-relaxed text-sm">
              Soluciones agrícolas sostenibles que transforman residuos en valor para tu campo.
            </p>
          </div>

          {/* Navigation Links */}
          {navigationSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-white/65 hover:text-lima transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lima flex-shrink-0" />
                <span className="text-white/75 text-sm">+54 9 11 4440-1919</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lima flex-shrink-0" />
                <span className="text-white/75 text-sm">administracion@hisoil.com.ar</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Seguinos</h4>
              <div className="flex gap-3">
                {redes.map(({ Icon, nombre, url }) => (
                  <a
                    key={nombre}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={nombre}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-lima/20 hover:text-lima transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white/75" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/55 text-sm">© 2026 Hisoil. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
