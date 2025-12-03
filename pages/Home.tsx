import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Star, BrainCircuit } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4 tracking-wide">
                  Educación del Futuro
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Transformando la educación</span>{' '}
                  <span className="block text-primary xl:inline">con Inteligencia Artificial</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Potencia tu práctica docente con recursos innovadores, guías prácticas y materiales diseñados para integrar la tecnología en el aula de manera efectiva.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/catalogo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg transition-colors"
                    >
                      Ver Catálogo
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/recursos"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition-colors"
                    >
                      Recursos Gratis
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            src="https://picsum.photos/id/4/1200/800"
            alt="Educación moderna"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:via-white/20"></div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sobre Mí</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Prof. Ana Martínez
            </p>
          </div>

          <div className="md:flex md:gap-12 items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://picsum.photos/id/64/600/600"
                  alt="Prof. Ana Martínez"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Con más de 15 años de experiencia en el aula y una maestría en Tecnología Educativa, me dedico a cerrar la brecha entre la pedagogía tradicional y las herramientas del futuro.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mi misión es ayudar a educadores de todos los niveles a perder el miedo a la Inteligencia Artificial, utilizándola como una aliada para reducir la carga administrativa y potenciar la creatividad de sus estudiantes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Users className="text-accent" size={24} />
                  <span className="font-medium text-gray-900">5k+ Docentes formados</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <BookOpen className="text-primary" size={24} />
                  <span className="font-medium text-gray-900">100+ Recursos creados</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <BrainCircuit className="text-purple-600" size={24} />
                  <span className="font-medium text-gray-900">Especialista en IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            ¿Listo para innovar en tu clase?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesores que ya están utilizando nuestros materiales premium.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:bg-blue-50 md:text-lg transition-transform transform hover:scale-105"
          >
            Explorar Catálogo Premium <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;