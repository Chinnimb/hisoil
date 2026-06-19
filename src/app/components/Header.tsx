import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useModal } from '../context/ModalContext';

const navItems = [
  { label: 'Productos', to: '/productos' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Membresía', to: '/membresia' },
  { label: 'Nosotros', to: '/nosotros' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { open } = useModal();

  return (
    <header className="sticky top-0 bg-white border-b border-gray-300 z-50 shadow-sm">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] justify-between items-center gap-4 lg:gap-6 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center lg:justify-self-start">
            <img
              src="/hisoil-logo.png"
              alt="HISOIL"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation — centered column of the grid */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 justify-self-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === item.to
                    ? 'text-oliva border-b-2 border-gray-900 pb-0.5'
                    : 'text-gray-600 hover:text-oliva'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center justify-end gap-3 lg:justify-self-end">
            <Link
              to="/contacto"
              className={`px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-paja transition-all text-sm ${
                location.pathname === '/contacto' ? 'border-gray-900 text-oliva' : ''
              }`}
            >
              Contacto
            </Link>
            <button onClick={open} className="px-6 py-2.5 bg-oliva text-white font-medium rounded-full hover:bg-oliva transition-all shadow-md hover:shadow-lg text-sm">
              Solicitar Presupuesto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-paja"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen
              ? <X className="w-6 h-6 text-gray-700" />
              : <Menu className="w-6 h-6 text-gray-700" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.to ? 'text-oliva' : 'text-gray-600 hover:text-oliva'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full text-center"
              >
                Contacto
              </Link>
              <button
                onClick={() => { open(); setMobileMenuOpen(false) }}
                className="px-6 py-3 bg-oliva text-white font-medium rounded-full text-center"
              >
                Solicitar Presupuesto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
