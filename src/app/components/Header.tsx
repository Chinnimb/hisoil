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
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-[1600px] mx-auto w-full px-6">
        <div className="flex justify-between items-center gap-6 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-1 lg:flex-1">
            <img
              src="/hisoil-logo.png"
              alt="HISOIL"
              className="h-8 md:h-10 w-auto grayscale"
            />
          </Link>

          {/* Desktop Navigation — centered via flex */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.to
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-0.5'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center justify-end gap-3 flex-1">
            <Link
              to="/contacto"
              className={`px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all text-sm ${
                location.pathname === '/contacto' ? 'border-gray-900 text-gray-900' : ''
              }`}
            >
              Contacto
            </Link>
            <button onClick={open} className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg text-sm">
              Solicitar Presupuesto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
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
                    location.pathname === item.to ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
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
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full text-center"
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
