import React, { useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, EXTERNAL_CATEGORIES } from '../constants';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProduct = PRODUCTS[0];
  const mainProducts = useMemo(() => PRODUCTS.slice(1), []);

  return (
    <div className="space-y-12">
      {/* Hero / Featured */}
      <section className="animate-fade-in">
        <div className="flex items-center gap-2 mb-4 text-brand-red font-bold uppercase tracking-wider text-sm">
            <TrendingUp size={16} />
            Tendência da Semana
        </div>
        <ProductCard product={featuredProduct} featured={true} />
      </section>

      {/* External Categories Grid */}
      <section>
        <h2 className="text-2xl font-bold font-serif mb-6 text-gray-800 border-l-4 border-brand-yellow pl-4">
            Explorar Categorias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {EXTERNAL_CATEGORIES.map((cat, idx) => (
            <a 
              key={idx}
              href={cat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-brand-blue hover:shadow-md transition text-center flex flex-col items-center justify-center h-24 group"
            >
              <span className="font-semibold text-sm text-gray-700 group-hover:text-brand-blue leading-tight">
                {cat.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <section id="destaques">
        <h2 className="text-3xl font-bold font-serif mb-8 text-gray-800">
            Destaques de Construção
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-brand-blue rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4">Não pague mais caro!</h2>
            <p className="mb-8 text-blue-100 text-lg">
                Nossa IA monitora os preços das melhores marcas de construção.
            </p>
            <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition">
                Ver Todas as Ofertas do Dia
            </button>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  );
};