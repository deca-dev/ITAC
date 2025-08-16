import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronLeft } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDesktopOpen, setAboutDesktopOpen] = useState(false); // desktop hover/focus
  const [mobilePanel, setMobilePanel] = useState<'root' | 'about'>('root'); // mobile column panel
  const aboutTimer = useRef<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // highlight any Acerca de sub-route
  const aboutPaths = ['/nosotros', '/publicaciones', '/libros-terapias-contextuales'];
  const isAboutActive = aboutPaths.includes(location.pathname);

  // Desktop hover intent (prevents flicker)
  const openAbout = () => {
    if (aboutTimer.current) window.clearTimeout(aboutTimer.current);
    setAboutDesktopOpen(true);
  };
  const closeAbout = () => {
    if (aboutTimer.current) window.clearTimeout(aboutTimer.current);
    aboutTimer.current = window.setTimeout(() => setAboutDesktopOpen(false), 140);
  };

  // Close mobile menu after navigation
  const closeAllMobile = () => {
    setIsMenuOpen(false);
    setMobilePanel('root');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 z-20">
            <div className="w-48 rounded-full flex items-center justify-center">
              <img src="/assets/logo/logo-horizontal-black.png" alt="ITAC Logo" />
            </div>
          </Link>

          {/* ======================== Desktop Nav ======================== */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'
              }`}
            >
              Inicio
            </Link>

            {/* New top-level page: Nosotros */}
            {/* <Link
              to="/nosotros"
              className={`transition-colors ${
                isActive('/nosotros') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'
              }`}
            >
              Nosotros
            </Link> */}

            {/* Acerca de (NOT clickable): acts as a menu button with dropdown */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
              onFocusCapture={openAbout}
              onBlurCapture={closeAbout}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors ${
                  isAboutActive ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'
                }`}
                aria-haspopup="true"
                aria-expanded={aboutDesktopOpen}
                aria-controls="about-menu-desktop"
              >
                Acerca de
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${aboutDesktopOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown: use top-full + pt-2 (buffer) to avoid hover gaps */}
              <div
                id="about-menu-desktop"
                className={`absolute left-0 top-full pt-2 transition opacity-100 ${
                  aboutDesktopOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                <ul className="w-64 rounded-md border bg-white shadow-lg py-2 z-50">
                  <li>
                    <Link
                      to="/nosotros"
                      className={`block px-3 py-2 transition-colors ${
                        isActive('/nosotros')
                          ? 'text-[#5fbcc2] font-semibold'
                          : 'text-gray-700 hover:text-[#5fbcc2] hover:bg-slate-50'
                      }`}
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/publicaciones"
                      className={`block px-3 py-2 transition-colors ${
                        isActive('/publicaciones')
                          ? 'text-[#5fbcc2] font-semibold'
                          : 'text-gray-700 hover:text-[#5fbcc2] hover:bg-slate-50'
                      }`}
                    >
                      Publicaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/libros-terapias-contextuales"
                      className={`block px-3 py-2 transition-colors ${
                        isActive('/libros-terapias-contextuales')
                          ? 'text-[#5fbcc2] font-semibold'
                          : 'text-gray-700 hover:text-[#5fbcc2] hover:bg-slate-50'
                      }`}
                    >
                      Libros Terapias Contextuales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other links */}
            <Link
              to="/formacion-academica"
              className={`transition-colors ${
                isActive('/formacion-academica') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'
              }`}
            >
              Formación Académica
            </Link>

            <Link
              to="/equipo"
              className={`transition-colors ${
                isActive('/equipo') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'
              }`}
            >
              Equipo
            </Link>

            <a href="#blog" className="text-gray-700 hover:text-[#5fbcc2] transition-colors">
              Blog
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-[#5fbcc2] transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => {
              setIsMenuOpen((v) => !v);
              setMobilePanel('root');
            }}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ======================== Mobile Nav ======================== */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            {/* Panels: root or about */}
            {mobilePanel === 'root' ? (
              <nav className="flex flex-col py-4 space-y-2">
                <Link
                  to="/"
                  className={`transition-colors ${
                    isActive('/') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                  }`}
                  onClick={closeAllMobile}
                >
                  Inicio
                </Link>

                <Link
                  to="/nosotros"
                  className={`transition-colors ${
                    isActive('/nosotros') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                  }`}
                  onClick={closeAllMobile}
                >
                  Nosotros
                </Link>

                {/* Acerca de -> opens second column panel */}
                <button
                  className={`w-full flex items-center justify-between px-0 py-2 ${
                    isAboutActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                  }`}
                  onClick={() => setMobilePanel('about')}
                  aria-haspopup="true"
                  aria-controls="about-mobile-panel"
                  aria-expanded={mobilePanel === 'about'}
                >
                  <span>Acerca de</span>
                  <ChevronDown className="w-5 h-5" />
                </button>

                <Link
                  to="/formacion-academica"
                  className={`transition-colors ${
                    isActive('/formacion-academica') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                  }`}
                  onClick={closeAllMobile}
                >
                  Formación Académica
                </Link>

                <Link
                  to="/equipo"
                  className={`transition-colors ${
                    isActive('/equipo') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                  }`}
                  onClick={closeAllMobile}
                >
                  Equipo
                </Link>

                <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={closeAllMobile}>
                  Blog
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={closeAllMobile}>
                  Contacto
                </a>
              </nav>
            ) : (
              // ======= ABOUT SUBMENU PANEL (Second column) =======
              <div id="about-mobile-panel" className="py-4">
                <div className="flex items-center mb-3">
                  <button
                    onClick={() => setMobilePanel('root')}
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                    aria-label="Volver"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Menú</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="/nosotros"
                    className={`transition-colors ${
                      isActive('/nosotros') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                    }`}
                    onClick={closeAllMobile}
                  >
                    Nosotros
                  </Link>

                  <Link
                    to="/publicaciones"
                    className={`transition-colors ${
                      isActive('/publicaciones') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                    }`}
                    onClick={closeAllMobile}
                  >
                    Publicaciones
                  </Link>

                  <Link
                    to="/libros-terapias-contextuales"
                    className={`transition-colors ${
                      isActive('/libros-terapias-contextuales') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'
                    }`}
                    onClick={closeAllMobile}
                  >
                    Libros Terapias Contextuales
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
