import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 z-20">
            <div className="w-48 rounded-full flex items-center justify-center">
              <img src="/assets/logo/logo-horizontal-black.png" alt="ITAC Logo" />
            </div>
            {/* <div>
              <h1 className="text-lg font-semibold text-gray-900">INSTITUTO DE TERAPIA Y</h1>
              <p className="text-sm text-gray-600">ANÁLISIS DE LA CONDUCTA</p>
            </div> */}
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'}`}
            >
              Inicio
            </Link>
            <Link 
              to="/oferta-academica" 
              className={`transition-colors ${isActive('/oferta-academica') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'}`}
            >
              Formación Académica
            </Link>
            <Link 
               to="/equipo" 
              className={`transition-colors ${isActive('/equipo') ? 'text-[#5fbcc2] font-semibold' : 'text-gray-700 hover:text-[#5fbcc2]'}`}
            >
              Equipo
            </Link>
            <a href="#servicios" className="text-gray-700 hover:text-[#5fbcc2] transition-colors">Servicios</a>
            <a href="#blog" className="text-gray-700 hover:text-[#5fbcc2] transition-colors">Blog</a>
            <a href="#contacto" className="text-gray-700 hover:text-[#5fbcc2] transition-colors">Contacto</a>
          </nav>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
{/* ================================ Mobile header============================ */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/oferta-academica" 
                className={`transition-colors ${isActive('/oferta-academica') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Formación Académica
              </Link>
              <Link 
                to="/equipo" 
                className={`transition-colors ${isActive('/equipo') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Equipo
              </Link>
              <a href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors">Blog</a>
              <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors">Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;