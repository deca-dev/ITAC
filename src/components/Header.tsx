import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDesktopOpen, setAboutDesktopOpen] = useState(false); // desktop hover/focus
  const [mobilePanel, setMobilePanel] = useState<'root' | 'about'>('root'); // mobile slide panel
  const aboutTimer = useRef<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // resaltar sección "Acerca de" si estás en cualquiera de sus subrutas
  const aboutPaths = ['/nosotros', '/publicaciones', '/libros'];
  const isAboutActive = aboutPaths.includes(location.pathname);

  // Desktop hover intent (reduce flicker)
  const openAbout = () => {
    if (aboutTimer.current) window.clearTimeout(aboutTimer.current);
    setAboutDesktopOpen(true);
  };
  const closeAbout = () => {
    if (aboutTimer.current) window.clearTimeout(aboutTimer.current);
    aboutTimer.current = window.setTimeout(() => setAboutDesktopOpen(false), 140);
  };

  // Cerrar menú móvil tras navegar
  const closeAllMobile = () => {
    setIsMenuOpen(false);
    setMobilePanel('root');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                isActive('/') ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
              }`}
            >
              Inicio
            </Link>

            {/* (Si quieres volver a mostrar “Nosotros” como top-level, descomenta)
            <Link
              to="/nosotros"
              className={`transition-colors ${
                isActive('/nosotros') ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
              }`}
            >
              Nosotros
            </Link> */}

            {/* Acerca de (no clickeable; abre dropdown) */}
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
                  isAboutActive ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
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

              {/* Dropdown con pequeño buffer para evitar perder hover */}
              <div
                id="about-menu-desktop"
                className={`absolute left-0 top-full pt-2 transition ${
                  aboutDesktopOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                <ul className="w-64 rounded-md border bg-white shadow-lg py-2 z-50">
                  <li>
                    <Link
                      to="/nosotros"
                      className={`block px-3 py-2 transition-colors ${
                        isActive('/nosotros')
                          ? 'text-[#1E5864] font-semibold'
                          : 'text-gray-700 hover:text-[#1E5864] hover:bg-slate-50'
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
                          ? 'text-[#1E5864] font-semibold'
                          : 'text-gray-700 hover:text-[#1E5864] hover:bg-slate-50'
                      }`}
                    >
                      Publicaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/libros"
                      className={`block px-3 py-2 transition-colors ${
                        isActive('/libros')
                          ? 'text-[#1E5864] font-semibold'
                          : 'text-gray-700 hover:text-[#1E5864] hover:bg-slate-50'
                      }`}
                    >
                      Libros Terapias Contextuales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Resto de links */}
            <Link
              to="/formacion-academica"
              className={`transition-colors ${
                isActive('/formacion-academica') ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
              }`}
            >
              Formación Académica
            </Link>
            <Link
              to="/equipo"
              className={`transition-colors ${
                isActive('/equipo') ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
              }`}
            >
              Equipo
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${
                isActive('/blog') ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
              }`}
            >
              Blog
            </Link>
             <Link
              to="/contacto"
              className={`transition-colors ${
                isActive('/contacto') ? 'text-[#1E5864] font-semibold' : 'text-gray-700 hover:text-[#1E5864]'
              }`}
            >
              Contacto
            </Link>
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
  <>
    {/* Dark backdrop (click to close) */}
    <div
      className="fixed inset-0 z-40 bg-black/30 lg:hidden"
      onClick={closeAllMobile}
      aria-hidden="true"
    />

    {/* Mobile menu overlay */}
    <div className="lg:hidden absolute left-0 right-0 top-full z-50 border-t bg-white shadow-lg py-4">
      {/* Contenedor deslizante (2 paneles) */}
      <div className="overflow-hidden">
        <div
          className={`flex w-[200%] transition-transform duration-700 ease-in-out ${
            mobilePanel === "about" ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* === Panel ROOT (col 1) === */}
          <nav className="w-1/2 pr-4 flex flex-col space-y-2">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={closeAllMobile}
            >
              Inicio
            </Link>

            {/* Botón que abre el submenú (ChevronRight en mobile) */}
            <button
              className={`w-full flex items-center justify-between py-2 ${
                isAboutActive ? "text-teal-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setMobilePanel("about")}
              aria-haspopup="true"
              aria-controls="about-mobile-panel"
              aria-expanded={mobilePanel === "about"}
            >
              <span>Acerca de</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <Link
              to="/formacion-academica"
              className={`transition-colors ${
                isActive("/formacion-academica")
                  ? "text-teal-600 font-semibold"
                  : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={closeAllMobile}
            >
              Formación Académica
            </Link>

            <Link
              to="/equipo"
              className={`transition-colors ${
                isActive("/equipo") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={closeAllMobile}
            >
              Equipo
            </Link>

            <Link
              to="/blog"
              className={`transition-colors ${
                isActive("/blog") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={closeAllMobile}
            >
              Blog
            </Link>

            <Link
              to="/contacto"
              className={`transition-colors ${
                isActive("/contacto") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={closeAllMobile}
            >
              Contacto
            </Link>
          </nav>

          {/* === Panel ABOUT (col 2) === */}
          <div id="about-mobile-panel" className="w-1/2 pl-4">
            <div className="flex items-center mb-3">
              <button
                onClick={() => setMobilePanel("root")}
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
                  isActive("/nosotros") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={closeAllMobile}
              >
                Nosotros
              </Link>

              <Link
                to="/publicaciones"
                className={`transition-colors ${
                  isActive("/publicaciones")
                    ? "text-teal-600 font-semibold"
                    : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={closeAllMobile}
              >
                Publicaciones
              </Link>

              <Link
                to="/libros"
                className={`transition-colors ${
                  isActive("/libros") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={closeAllMobile}
              >
                Libros Terapias Contextuales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}

      </div>
    </header>
  );
};

export default Header;
