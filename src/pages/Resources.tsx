import React, { useState } from 'react';
import { FREE_RESOURCES } from '../data';
import { Download, FileText, Calendar, Search } from 'lucide-react';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = FREE_RESOURCES.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Comunidad</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Recursos Gratuitos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descarga materiales de alta calidad para empezar a transformar tus clases hoy mismo, sin costo alguno.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary sm:text-sm transition-all shadow-sm"
            placeholder="Buscar guías, plantillas, rúbricas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="group relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  {resource.category}
                </span>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar size={12} className="mr-1" />
                  {resource.date}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                {resource.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {resource.description}
              </p>

              <a
                href={resource.downloadUrl}
                className="mt-auto flex items-center justify-center w-full py-2 px-4 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-primary hover:border-primary/30 transition-all"
              >
                <Download size={16} className="mr-2" />
                Descargar PDF
              </a>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 text-primary transform group-hover:scale-110 transition-all">
                <FileText size={48} />
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No encontramos recursos con ese nombre.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
