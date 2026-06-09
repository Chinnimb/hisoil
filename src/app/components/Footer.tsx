import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const navigationSections = [
    {
      title: 'Empresa',
      links: ['Sobre nosotros', 'Equipo', 'Certificaciones', 'Sostenibilidad', 'Blog', 'Carreras'],
    },
    {
      title: 'Servicios',
      links: ['Fertilización', 'Compostaje', 'Análisis de suelo', 'Asesoramiento', 'Capacitaciones', 'Membresía'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="w-full px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="/hisoil-logo.png"
              alt="HISOIL"
              className="h-12 w-auto grayscale brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              Soluciones agrícolas sostenibles que transforman residuos en valor para tu campo.
            </p>
          </div>

          {/* Navigation Links */}
          {navigationSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Ruta 9 Km 142<br />Pergamino, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">0800-HISOIL (447645)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@hisoil.com.ar</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Seguinos</h4>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Hisoil. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
