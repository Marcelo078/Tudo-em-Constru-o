import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { PRODUCTS, MOCK_REVIEWS } from '../constants';
import { Product } from '../types';
import { WebStoryViewer } from '../components/WebStoryViewer';

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showStory, setShowStory] = useState(false);
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-20 text-xl font-bold">Produto não encontrado. <Link to="/" className="text-brand-blue underline">Voltar</Link></div>;
  }

  // Generate dynamic content based on the product
  const titleA = `Ninguém esperava que a ${product.name} fosse tão poderosa em 2025`;
  const titleB = `Top Motivos para escolher a ${product.name} hoje mesmo`;
  const mainTitle = Math.random() > 0.5 ? titleA : titleB;

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Schema.org Mock */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.longTailKeyword,
          "image": `https://picsum.photos/seed/${product.imageSeed}/800/600`,
          "brand": { "@type": "Brand", "name": "Generic" },
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
        })}
      </script>

      {/* Web Story Trigger */}
      {showStory && <WebStoryViewer product={product} onClose={() => setShowStory(false)} />}

      <header className="p-6 md:p-10 pb-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            {product.category}
          </span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Clock size={12} /> 5 min de leitura
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-900 leading-tight mb-6">
          {mainTitle}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
          {product.longTailKeyword}. Descubra por que especialistas estão recomendando este modelo como a escolha definitiva para sua casa ou obra.
        </p>

        <div className="flex flex-wrap gap-4 py-4 border-y border-gray-100 items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://picsum.photos/seed/editor/100/100" alt="Editor" />
                </div>
                <div className="text-sm">
                    <p className="font-bold text-gray-900">Por Redação TC</p>
                    <p className="text-gray-500">Atualizado hoje</p>
                </div>
            </div>
            <button className="flex items-center gap-2 text-gray-500 hover:text-brand-blue transition font-medium text-sm">
                <Share2 size={16} /> Compartilhar
            </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative mt-8 group cursor-pointer" onClick={() => setShowStory(true)}>
        <img 
          src={`https://picsum.photos/seed/${product.imageSeed}/1000/600`} 
          alt={product.name}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold text-brand-dark shadow-lg transform scale-90 group-hover:scale-100 transition flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                Ver Web Story
            </div>
        </div>
      </div>

      <div className="p-6 md:p-10 prose prose-lg max-w-none text-gray-800">
        <p>
          Quando se trata de <strong>{product.category}</strong>, encontrar o equilíbrio entre preço e qualidade é essencial. 
          A <strong>{product.name}</strong> tem se destacado no mercado, não apenas pelo design, mas pela eficiência que entrega.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-brand-dark">
          O que torna este produto especial?
        </h2>
        <p>
          Testamos diversos modelos e o que chama a atenção neste é a consistência. 
          Ao contrário de marcas genéricas, aqui temos materiais de alta durabilidade.
        </p>

        <div className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-6 my-8 rounded-r-lg">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <ShieldCheck className="text-brand-dark" /> Destaque da Análise
          </h3>
          <p className="italic mb-0">
            "A capacidade de adaptação deste produto em diferentes cenários de obra e reforma é impressionante. É um 'must-have' para 2025."
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Principais Benefícios</h2>
        <ul className="space-y-3 list-none pl-0">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <span>{feature} - Garantindo máxima eficiência no seu dia a dia.</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">O que as pessoas estão dizendo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          {MOCK_REVIEWS.slice(0, 2).map((review, i) => (
             <div key={i} className="bg-gray-50 p-4 rounded-lg text-sm italic text-gray-600 border border-gray-100">
               "{review}"
             </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Veredito Final: Vale a pena?</h2>
        <p>
          Absolutamente. Se você busca algo que dure e entregue o que promete, a <strong>{product.name}</strong> é a escolha certa. 
          Com as promoções atuais, o custo-benefício se torna imbatível.
        </p>

        {/* Affiliate CTA */}
        <div className="my-10 p-8 bg-brand-dark text-white rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-brand-yellow rounded-full opacity-20 blur-2xl"></div>
          
          <h3 className="text-2xl font-bold mb-2">Oferta Exclusiva Encontrada</h3>
          <p className="mb-6 opacity-90">Verificamos os preços e encontramos o menor valor no Mercado Livre.</p>
          
          <a 
            href={product.affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-black text-lg shadow-lg hover:scale-105 transition transform"
          >
            VER PREÇO AGORA
          </a>
          <p className="mt-4 text-xs opacity-60">Compra segura e entrega garantida</p>
        </div>

        {/* Pinterest Integration */}
        <div className="flex justify-center mt-8">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-red-700 transition">
                Salvar no Pinterest
            </button>
        </div>
      </div>
    </article>
  );
};