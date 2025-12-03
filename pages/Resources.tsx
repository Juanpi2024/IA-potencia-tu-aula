import React, { useState } from 'react';
import { Download, FileText, Filter, Search } from 'lucide-react';
import { FREE_RESOURCES } from '../data';
import { Category } from '../types';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = ['Todos', 'Guías', 'Rúbricas', 'Plantillas', 'Talleres'];

  const filteredResources = FREE_RESOURCES.filter(resource => {
    const matchesCategory = activeCategory === 'Todos' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Biblioteca de Recursos</h1>
          <p className="mt-4 text-xl text-gray-500">Herramientas gratuitas para potenciar tus clases hoy mismo.</p>
        </div>

        {/* Filters & Search */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar recursos..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    resource.category === 'Guías' ? 'bg-purple-100 text-purple-800' :
                    resource.category === 'Plantillas' ? 'bg-green-100 text-green-800' :
                    resource.category === 'Rúbricas' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                }`}>
                  {resource.category}
                </span>
                <span className="text-xs text-gray-400">{resource.date}</span>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                    <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{resource.title}</h3>
              </div>

              <p className="text-gray-600 text-sm mt-2 mb-6 flex-1">{resource.description}</p>

              <a
                href={resource.downloadUrl}
                onClick={(e) => { e.preventDefault(); alert("En un entorno real, la descarga comenzaría aquí."); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Download size={16} />
                Descargar Gratis
              </a>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
            <div className="text-center py-20">
                <Filter size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">No se encontraron recursos con esos criterios.</p>
                <button
                    onClick={() => { setActiveCategory('Todos'); setSearchTerm(''); }}
                    className="mt-4 text-primary font-medium hover:underline"
                >
                    Limpiar filtros
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Resources;