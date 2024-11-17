import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Bienvenidos a CisnerosNutrición
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Tu camino hacia una vida más saludable comienza aquí
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <Link to="/servicios" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600">
                  Nuestros Servicios
                </h3>
                <p className="mt-2 text-gray-600">Descubre cómo podemos ayudarte</p>
                <ArrowRight className="mt-4 h-5 w-5 text-rose-600" />
              </div>
            </Link>

            <Link to="/blog" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600">
                  Blog Nutricional
                </h3>
                <p className="mt-2 text-gray-600">Artículos y consejos de nutrición</p>
                <ArrowRight className="mt-4 h-5 w-5 text-rose-600" />
              </div>
            </Link>

            <Link to="/citas" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600">
                  Reserva tu Cita
                </h3>
                <p className="mt-2 text-gray-600">Comienza tu transformación hoy</p>
                <ArrowRight className="mt-4 h-5 w-5 text-rose-600" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;