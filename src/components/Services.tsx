import React from 'react';
import { Apple, Users, BookOpen, Salad } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Salad className="h-8 w-8 text-rose-600" />,
      title: "Asesoría Nutricional",
      description: "Planes personalizados adaptados a tus necesidades específicas y estilo de vida."
    },
    {
      icon: <Users className="h-8 w-8 text-rose-600" />,
      title: "Consultas Online",
      description: "Seguimiento y asesoramiento nutricional desde la comodidad de tu hogar."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-rose-600" />,
      title: "Educación Nutricional",
      description: "Aprende sobre alimentación saludable y hábitos sostenibles para toda la vida."
    },
    {
      icon: <Apple className="h-8 w-8 text-rose-600" />,
      title: "Nutrición Deportiva",
      description: "Optimiza tu rendimiento deportivo con planes nutricionales específicos."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluciones nutricionales personalizadas para tu bienestar
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;