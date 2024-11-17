import React, { useState } from 'react';
import { Menu, X, Salad } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Citas', path: '/citas' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Salad className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">CisnerosNutrición</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${isActive(item.path)} transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 ${isActive(item.path)}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;