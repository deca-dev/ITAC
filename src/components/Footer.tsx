import React from 'react';
import {Twitter, Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-48 flex items-center justify-center">
             <img src="/assets/logo/logo-footer.png" alt="" />
              </div>
              {/* <div>
                <h3 className="text-lg font-semibold">ITAC</h3>
                <p className="text-sm text-gray-400">Instituto de Terapia y Análisis de la Conducta</p>
              </div> */}
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Desde 2016. Somos una institución especializada en Terapia Conductual que brinda servicios y cursos de formación.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Acerca de</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Quiénes somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Oferta académica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nuestro equipo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviso de privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contáctanos</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Calzada Belisario Domínguez #161 Col. del Carmen, Coyoacán, CDMX
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">informes@institutoterapiaconductual.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">55 5554220</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Instituto de Terapia y Análisis de la Conducta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;