import React, { useState } from 'react';
import { Menu, X, Salad } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Salad className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CisnerosNutrición</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-green-600">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-green-600">Servicios</a>
            <a href="#blog" className="text-gray-600 hover:text-green-600">Blog</a>
            <a href="#citas" className="text-gray-600 hover:text-green-600">Citas</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Contactar
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-green-600">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-600 hover:text-green-600">Servicios</a>
            <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-green-600">Blog</a>
            <a href="#citas" className="block px-3 py-2 text-gray-600 hover:text-green-600">Citas</a>
            <button className="w-full text-left px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;