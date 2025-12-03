import React from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { PREMIUM_MATERIALS } from '../data';

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Catálogo Premium</h1>
          <p className="mt-4 text-xl text-gray-500">Materiales exclusivos diseñados para docentes de alto rendimiento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREMIUM_MATERIALS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-sm">
                  ${product.price}
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wide uppercase">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>

                <div className="mb-6 flex-1">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2 group"
                >
                  <Plus size={18} className="group-hover:scale-110 transition-transform" />
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;