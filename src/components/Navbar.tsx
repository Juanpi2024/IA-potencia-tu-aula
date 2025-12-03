import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, GraduationCap } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="text-white h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-lg leading-none">IA Potencia</span>
                <span className="text-xs text-primary font-medium tracking-wider">TU AULA</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-500 hover:text-gray-900'} px-1 py-2 text-sm font-medium transition-colors`}>
              Inicio
            </Link>
            <Link to="/catalogo" className={`${isActive('/catalogo') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-500 hover:text-gray-900'} px-1 py-2 text-sm font-medium transition-colors`}>
              Catálogo Premium
            </Link>
            <Link to="/recursos" className={`${isActive('/recursos') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-500 hover:text-gray-900'} px-1 py-2 text-sm font-medium transition-colors`}>
              Recursos Gratuitos
            </Link>
            <Link to="/ia-educativa" className={`${isActive('/ia-educativa') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-500 hover:text-gray-900'} px-1 py-2 text-sm font-medium transition-colors`}>
              IA Educativa
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={onOpenCart}
              className="p-2 text-gray-500 hover:text-primary relative transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`${isActive('/') ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              onClick={() => setIsOpen(false)}
              className={`${isActive('/catalogo') ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Catálogo Premium
            </Link>
            <Link
              to="/recursos"
              onClick={() => setIsOpen(false)}
              className={`${isActive('/recursos') ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Recursos Gratuitos
            </Link>
            <Link
              to="/ia-educativa"
              onClick={() => setIsOpen(false)}
              className={`${isActive('/ia-educativa') ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              IA Educativa
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
