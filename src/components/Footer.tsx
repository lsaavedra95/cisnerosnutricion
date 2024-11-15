import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CisnerosNutrición</h3>
            <p className="text-gray-400">
              Transformando vidas a través de la nutrición personalizada y hábitos saludables.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@cisnerosnutricion.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-green-500">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-green-500">Servicios</a></li>
              <li><a href="#blog" className="hover:text-green-500">Blog</a></li>
              <li><a href="#citas" className="hover:text-green-500">Reservar cita</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <a
              href="https://instagram.com/cisnerosnutricion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-500"
            >
              <Instagram className="h-5 w-5 mr-2" />
              <span>@cisnerosnutricion</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CisnerosNutrición. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;