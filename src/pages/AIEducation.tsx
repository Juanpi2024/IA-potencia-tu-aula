import React from 'react';
import { Bot, Brain, Sparkles, MessageSquare } from 'lucide-react';

const AIEducation: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">IA en la Educación</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre cómo la inteligencia artificial está redefiniendo el aprendizaje y la enseñanza en el siglo XXI.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es la IA Generativa?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              La IA generativa (como ChatGPT o Gemini) no solo busca información, sino que puede <span className="font-semibold text-primary">crear contenido nuevo</span>: texto, imágenes, código y más, basándose en patrones aprendidos de millones de datos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Para los docentes, esto significa tener un "copiloto" capaz de generar ideas de clases, redactar rúbricas, personalizar materiales para alumnos con necesidades especiales y automatizar tareas repetitivas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Bot className="text-primary" /> Capacidades Clave
            </h3>
            <ul className="space-y-4">
              {[
                "Generación de planes de lección detallados",
                "Creación de preguntas de examen y quizzes",
                "Adaptación de textos a diferentes niveles de lectura",
                "Ideas para proyectos creativos y ABPs",
                "Traducción y corrección de estilo instantánea"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <Sparkles size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Use Cases */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Aplicaciones Prácticas en el Aula</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-500">
            <Brain size={40} className="text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Personalización</h3>
            <p className="text-gray-600">
              Crea versiones diferentes de una misma explicación para alumnos visuales, auditivos o kinestésicos en segundos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-purple-500">
            <MessageSquare size={40} className="text-purple-500 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback Instantáneo</h3>
            <p className="text-gray-600">
              Usa la IA para analizar borradores de ensayos y proporcionar sugerencias de mejora gramatical y estructural antes de tu revisión final.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-green-500">
            <Sparkles size={40} className="text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Creatividad Ilimitada</h3>
            <p className="text-gray-600">
              Genera escenarios de rol, dilemas éticos para debatir o historias interactivas donde los alumnos deciden el final.
            </p>
          </div>
        </div>

        {/* Prompting Guide */}
        <div className="bg-indigo-900 rounded-2xl overflow-hidden text-white shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">El Arte del Prompting</h2>
              <p className="text-indigo-200 mb-8 text-lg">
                Para obtener buenos resultados, debes saber pedirlo. Una buena instrucción (prompt) debe tener: Rol, Contexto, Tarea y Formato.
              </p>
              <div className="bg-indigo-800/50 p-6 rounded-lg border border-indigo-700">
                <p className="font-mono text-sm text-indigo-300 mb-2">// Ejemplo de Prompt Malo</p>
                <p className="text-red-300 mb-4">"Hazme un examen de historia."</p>
                <p className="font-mono text-sm text-indigo-300 mb-2">// Ejemplo de Prompt Bueno</p>
                <p className="text-green-300">
                  "Actúa como un profesor experto de historia (Rol). Para alumnos de 12 años (Contexto), crea un examen de 5 preguntas de opción múltiple sobre la Revolución Francesa (Tarea). Entrégalo en formato tabla con la respuesta correcta marcada (Formato)."
                </p>
              </div>
            </div>
            <div className="bg-indigo-800 p-12 flex items-center justify-center">
              {/* Abstract Visual */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEducation;
