import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  return (
    <div className={`group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col ${featured ? 'md:col-span-2 md:flex-row' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/3 h-64 md:h-auto' : 'h-56'}`}>
        <img 
          src={`https://picsum.photos/seed/${product.imageSeed}/${featured ? '800/600' : '400/400'}`} 
          alt={`Foto de ${product.name}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-1 rounded shadow-md">
          Melhor Oferta
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-1 block">
            {product.category}
          </span>
          <h3 className={`font-serif font-bold text-gray-900 leading-tight mb-2 group-hover:text-brand-blue transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
            <Link to={`/article/${product.id}`}>
              {featured ? `Análise Completa: ${product.name}` : product.name}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.longTailKeyword}. Descubra porque este modelo está dominando o mercado em 2025.
          </p>
          
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="fill-brand-yellow text-brand-yellow" />
            ))}
            <span className="text-xs text-gray-400 ml-1">(120+ avaliações)</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <Link 
            to={`/article/${product.id}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2.5 rounded-lg font-semibold text-sm transition"
          >
            Ler Análise
          </Link>
          <a 
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-brand-blue hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold text-sm transition shadow-blue-200 shadow-lg"
          >
            Ver Preço
          </a>
        </div>
      </div>
    </div>
  );
};