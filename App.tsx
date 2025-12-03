import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Resources from './pages/Resources';
import AIEducation from './pages/AIEducation';
import { Product, CartItem } from './types';
import { Facebook, Twitter, Instagram, Mail, Heart } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer = () => (
  <footer className="bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Facebook</span>
          <Facebook size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Instagram</span>
          <Instagram size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Twitter</span>
          <Twitter size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Email</span>
          <Mail size={20} />
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
        <p className="text-base text-gray-400 flex items-center justify-center md:justify-start gap-1">
          &copy; 2024 IA potencia tu Aula. Hecho con <Heart size={14} className="text-red-400 fill-current" /> para la educación.
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  // Cart State with lazy initialization for persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('zonal-shepard-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Error loading cart", e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Persistence Effect
  useEffect(() => {
    localStorage.setItem('zonal-shepard-cart', JSON.stringify(cart));
  }, [cart]);

  // Cart Actions
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Show toast
    setShowToast(true);
    setIsCartOpen(true); // Auto open cart for better UX
    setTimeout(() => setShowToast(false), 3000);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-900">

        <Navbar
          cartCount={totalItems}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/catalogo"
              element={<Catalog onAddToCart={addToCart} />}
            />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/ia-educativa" element={<AIEducation />} />
          </Routes>
        </main>

        <Footer />

        {/* Simple Toast Notification */}
        <div
            className={`fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
                showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
            }`}
        >
            ¡Producto añadido al carrito!
        </div>
      </div>
    </HashRouter>
  );
};

export default App;