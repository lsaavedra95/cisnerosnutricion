import React from 'react';
import { GraduationCap, Heart, Clock, Users } from 'lucide-react';

const AboutMe = () => {
  const qualities = [
    {
      icon: <GraduationCap className="h-8 w-8 text-rose-600" />,
      title: "Formación Especializada",
      description: "Dietista-Nutricionista colegiada con especialización en nutrición deportiva"
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: "Pasión por la Nutrición",
      description: "Comprometida con tu bienestar y una alimentación saludable"
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-600" />,
      title: "Atención Personalizada",
      description: "Planes adaptados a tu estilo de vida y objetivos personales"
    },
    {
      icon: <Users className="h-8 w-8 text-rose-600" />,
      title: "Experiencia",
      description: "Años ayudando a personas a mejorar su relación con la alimentación"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre Mí
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Conoce más sobre mi trayectoria y filosofía
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              
              alt="Julia Cisneros"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-rose-600 opacity-10"></div>
          </div>
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              Soy Julia Cisneros González, Dietista-Nutricionista colegiada apasionada por ayudar a las personas a mejorar su relación con la alimentación y alcanzar sus objetivos de salud.
            </p>
            <p className="mb-6">
              Mi enfoque se centra en crear planes nutricionales personalizados que se adapten a tu estilo de vida, preferencias y necesidades específicas. Creo firmemente en la importancia de una alimentación consciente y sostenible.
            </p>
            <p>
              Me especializo en nutrición deportiva y educación nutricional, ayudando a mis pacientes a desarrollar hábitos saludables que puedan mantener a largo plazo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{quality.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {quality.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;