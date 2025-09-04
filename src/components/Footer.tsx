import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a3457] text-white py-12">
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
              Desde 2010, formamos profesionales con ciencia, ética y pasión por
              la Terapia Contextual.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/TerapiaContextualCDMX/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/instituto-de-ciencia-y-terapia-conductual-contextual-cdmx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a
                href="https://instagram.com/terapiacontextualcdmx?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Acerca de</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/nosotros" className="hover:text-white transition-colors">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a
                  href="/formacion-academica"
                  className="hover:text-white transition-colors"
                >
                  Formación académica
                </a>
              </li>
              <li>
                <a
                  href="/equipo"
                  className="hover:text-white transition-colors"
                >
                  Nuestro equipo
                </a>
              </li>
              <li>
                <a href="/aviso-de-privacidad" className="hover:text-white transition-colors">
                  Aviso de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contáctanos</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3 min-w-0 hover:text-white">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/f4Ydm9ghxEWWonr88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm break-words hover:underline hover:text-white"
                >
                  Callejón Belisario Domínguez #141 Col. del Carmen, Coyoacán,
                  CDMX
                </a>
              </div>
              <div className="flex items-center space-x-3 min-w-0 hover:text-white">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:informes@institutoterapiaconductual.com"
                  className="text-sm break-all hover:underline hover:text-white"
                >
                  informes@institutoterapiaconductual.com
                </a>
              </div>
              <div className="flex items-center space-x-3 min-w-0 hover:text-white">
                <Phone className="w-5 h-5 flex-shrink-0 " />
                <a href="tel:+525555547420" className="text-sm hover:underline ">
                  55 5554 7420
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 Instituto de Terapia y Análisis de la Conducta. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
