import React from 'react';
import { Brain, Sparkles, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIEducation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">Revolución Educativa</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Inteligencia Artificial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              en el Aula
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
            Guía definitiva para docentes que quieren liderar el cambio sin perder la esencia humana de la enseñanza.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué integrar IA ahora?</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                                <Cpu size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Personalización a Escala</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Crea rutas de aprendizaje únicas para cada estudiante en minutos, adaptando contenidos a diferentes estilos y ritmos.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                <Brain size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Reducción de Carga Administrativa</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Automatiza la creación de rúbricas, exámenes y reportes para dedicar más tiempo a lo que realmente importa: tus alumnos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative rounded-2xl shadow-xl overflow-hidden group">
                 <img 
                    src="https://picsum.photos/id/60/800/600" 
                    alt="Profesor usando IA" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-medium italic">"La IA no reemplazará a los docentes, pero los docentes que usen IA reemplazarán a los que no lo hagan."</p>
                 </div>
            </div>
        </div>

        {/* Ethics Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 text-center md:text-left">
                    <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6 text-primary">
                        <ShieldCheck size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Ética y Responsabilidad</h2>
                </div>
                <div className="md:w-2/3">
                    <p className="text-lg text-gray-600 mb-6">
                        La integración de la IA requiere un marco ético sólido. En nuestros materiales, hacemos énfasis en:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Privacidad de datos de menores', 'Detección de sesgos algorítmicos', 'Transparencia en el uso', 'Fomento del pensamiento crítico'].map((item) => (
                            <li key={item} className="flex items-center text-gray-700 font-medium">
                                <div className="h-2 w-2 bg-accent rounded-full mr-3"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Comienza tu viaje hoy</h2>
            <p className="text-xl text-gray-500 mb-8">
                Descarga nuestra guía introductoria gratuita o adquiere el Kit Completo para transformar tu aula.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                    to="/recursos" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                    Ir a Recursos Gratuitos
                </Link>
                <Link 
                    to="/catalogo" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors shadow-lg shadow-blue-200"
                >
                    Ver Kit Premium
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AIEducation;