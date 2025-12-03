import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Zap, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm mb-6">
              Educación del Futuro
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transformando la educación <span className="text-primary">con Inteligencia Artificial</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Potencia tu práctica docente con recursos innovadores, guías prácticas y materiales diseñados para integrar la tecnología en el aula de manera efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/catalogo"
                className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                Ver Catálogo <ArrowRight size={20} />
              </Link>
              <Link
                to="/recursos"
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-sm border border-gray-200 transition-all flex items-center justify-center"
              >
                Recursos Gratis
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
              alt="Estudiantes usando tecnología"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir IA Potencia tu Aula?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros recursos están diseñados por docentes para docentes, asegurando su aplicabilidad real en el contexto escolar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={40} className="text-yellow-500" />,
                title: "Ahorra Tiempo",
                desc: "Automatiza tareas administrativas y de planificación para enfocarte en lo que importa: enseñar."
              },
              {
                icon: <BookOpen size={40} className="text-blue-500" />,
                title: "Recursos Listos",
                desc: "Materiales probados y listos para usar, desde rúbricas hasta planes de clase completos."
              },
              {
                icon: <Users size={40} className="text-green-500" />,
                title: "Comunidad",
                desc: "Únete a cientos de educadores innovadores que ya están transformando sus aulas."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-400">Docentes Capacitados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2k+</div>
              <div className="text-gray-400">Recursos Descargados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-400">Escuelas Asociadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-gray-400">Valoración Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Listo para innovar en tu aula?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubre nuestro catálogo completo de herramientas y empieza hoy mismo.
          </p>
          <ul className="flex flex-wrap justify-center gap-6 mb-10 text-gray-700">
            <li className="flex items-center gap-2"><CheckCircle size={20} className="text-green-500" /> Acceso Inmediato</li>
            <li className="flex items-center gap-2"><CheckCircle size={20} className="text-green-500" /> Garantía de Calidad</li>
            <li className="flex items-center gap-2"><CheckCircle size={20} className="text-green-500" /> Soporte Continuo</li>
          </ul>
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-primary hover:bg-blue-700 md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explorar el Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
