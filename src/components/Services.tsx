import React from 'react';
import { Scale, Users, Apple } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8 text-green-600" />,
      title: "Asesoría Nutricional",
      description: "Planes personalizados adaptados a tus necesidades y objetivos específicos, enfocados en tu bienestar integral."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Consultas Online",
      description: "Seguimiento y asesoramiento nutricional desde la comodidad de tu hogar, con la misma calidad y atención personalizada."
    },
    {
      icon: <Apple className="h-8 w-8 text-green-600" />,
      title: "Educación Nutricional",
      description: "Aprende sobre alimentación saludable y desarrolla hábitos sostenibles que transformarán tu relación con la comida."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Servicios
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-green-600 rounded"></div>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos nutricionales
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center">
                <div className="p-3 bg-green-50 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#citas"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Saber más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;