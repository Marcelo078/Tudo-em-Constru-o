import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { SITE_NAME, MAIN_AFFILIATE_LINK } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-xs py-1 px-4 text-center">
        <span>🚀 Frete Grátis em milhares de produtos! </span>
        <a href={MAIN_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-brand-yellow">
          Confira as ofertas do dia.
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center font-bold text-brand-dark border-2 border-brand-dark">
              TC
            </div>
            <span className="text-xl font-serif font-black tracking-tight text-gray-800 leading-none">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
            <Link to="/" className="hover:text-brand-blue transition">Início</Link>
            <Link to="/#destaques" className="hover:text-brand-blue transition">Destaques</Link>
            <Link to="/about" className="hover:text-brand-blue transition">Sobre</Link>
            <a href={MAIN_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Ofertas Relâmpago</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-700">Início</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-700">Sobre Nós</Link>
            <Link to="/privacy" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-700">Privacidade</Link>
            <a href={MAIN_AFFILIATE_LINK} target="_blank" className="bg-brand-yellow text-brand-dark font-bold text-center py-2 rounded">
              Ver Ofertas no Mercado Livre
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-300 pt-12 pb-20 md:pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-4">{SITE_NAME}</h3>
            <p className="leading-relaxed opacity-80">
              Seu guia definitivo para compras inteligentes em construção e ferramentas. 
              Análises honestas, preços competitivos e as melhores marcas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="hover:text-brand-yellow">Política de Privacidade</Link>
              <Link to="/terms" className="hover:text-brand-yellow">Termos de Uso</Link>
              <Link to="/about" className="hover:text-brand-yellow">Transparência</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Categorias</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">Ferramentas</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">Hidráulica</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">Elétrica</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">Automação</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-700 text-xs opacity-50">
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl p-3 z-50 flex justify-between items-center">
         <div className="text-xs text-gray-500">
           <p>Melhores ofertas</p>
           <p className="font-bold text-brand-dark">Tempo Limitado</p>
         </div>
         <a 
           href={MAIN_AFFILIATE_LINK}
           target="_blank"
           rel="noopener noreferrer"
           className="bg-brand-blue text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 transition flex items-center gap-2"
         >
           <ShoppingCart size={16} />
           Ver Preços
         </a>
      </div>
    </div>
  );
};

export default Layout;
