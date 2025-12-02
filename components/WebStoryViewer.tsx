import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Product, WebStorySlide } from '../types';

interface WebStoryViewerProps {
  product: Product;
  onClose: () => void;
}

export const WebStoryViewer: React.FC<WebStoryViewerProps> = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate slides dynamically based on product
  const slides: WebStorySlide[] = [
    { id: 1, type: 'cover', text: product.name, subText: 'Por que todo mundo está comprando?', imageSeed: product.imageSeed },
    { id: 2, type: 'content', text: 'Tecnologia de Ponta', subText: product.features[0], imageSeed: product.imageSeed + 10 },
    { id: 3, type: 'content', text: 'Alta Durabilidade', subText: 'Feito com materiais premium para durar anos.', imageSeed: product.imageSeed + 20 },
    { id: 4, type: 'quote', text: '"Melhor custo benefício do mercado atual."', imageSeed: product.imageSeed + 30 },
    { id: 5, type: 'content', text: 'Segurança Total', subText: 'Certificado pelas principais normas.', imageSeed: product.imageSeed + 40 },
    { id: 6, type: 'cta', text: 'Não perca essa oferta!', subText: 'Oferta por tempo limitado.', imageSeed: product.imageSeed + 50 },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    // Auto advance progress bar logic could go here
    const timer = setTimeout(() => {
      // Auto advance functionality (optional)
      // handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative w-full h-full md:w-[400px] md:h-[800px] bg-gray-900 md:rounded-xl overflow-hidden shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={`https://picsum.photos/seed/${currentSlide.imageSeed}/800/1200`} 
            alt="Story background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Progress Bars */}
        <div className="absolute top-4 left-2 right-2 flex gap-1 z-20">
          {slides.map((slide, idx) => (
            <div key={slide.id} className="h-1 flex-1 bg-gray-600 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-white transition-all duration-300 ${idx <= currentIndex ? 'w-full' : 'w-0'}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-8 right-4 z-30 text-white hover:text-gray-300 p-2"
        >
          <X size={28} />
        </button>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 z-10" onClick={handleNext}>
           {/* Tap Left Area */}
           <div className="absolute top-0 left-0 w-1/3 h-full z-20" onClick={handlePrev}></div>

           <div className={`transition-all duration-500 transform translate-y-0 opacity-100`}>
             <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-1 rounded mb-4 uppercase tracking-wider">
               {product.category}
             </span>
             <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 drop-shadow-lg">
               {currentSlide.text}
             </h2>
             {currentSlide.subText && (
               <p className="text-lg text-gray-200 font-medium drop-shadow-md">
                 {currentSlide.subText}
               </p>
             )}

             {currentSlide.type === 'cta' && (
               <a 
                 href={product.affiliateLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-6 w-full bg-brand-blue text-white py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 animate-bounce"
               >
                 Ver Oferta Agora <ChevronRight size={20} />
               </a>
             )}
           </div>
           
           <div className="mt-8 text-center text-xs text-gray-400 font-semibold">
             Toque para avançar
           </div>
        </div>
      </div>
    </div>
  );
};