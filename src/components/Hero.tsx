import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="inicio" className="pt-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1455853828816-0c301a011711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Nutrición saludable"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/75"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transforma tu vida a través de la nutrición
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-2xl">
              Descubre el poder de una alimentación consciente y equilibrada. 
              Te acompañamos en tu camino hacia una vida más saludable con asesoramiento 
              nutricional personalizado.
            </p>
            <div className="mt-10">
              <a
                href="#citas"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition duration-300"
              >
                Reserva tu primera consulta
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;