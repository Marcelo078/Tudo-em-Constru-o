import React from 'react';

export const LegalContent: React.FC<{ type: 'privacy' | 'terms' | 'about' }> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Política de Privacidade</h2>
        <p>A sua privacidade é importante para nós. É política do Tudo em Construção respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Tudo em Construção, e outros sites que possuímos e operamos.</p>
        <p className="mt-2">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
        <p className="mt-2">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
      </div>
    );
  }
  if (type === 'terms') {
    return (
      <div className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Termos de Uso</h2>
        <p>Ao acessar ao site Tudo em Construção, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
        <h3 className="text-xl font-bold mt-4">Isenção de responsabilidade</h3>
        <p>Os materiais no site da Tudo em Construção são fornecidos 'como estão'. Tudo em Construção não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.</p>
      </div>
    );
  }
  return (
    <div className="prose max-w-none text-gray-700">
      <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
      <p>O <strong>Tudo em Construção</strong> é um portal especializado em curadoria de produtos. Nossa missão é simplificar a sua escolha na hora de comprar ferramentas e materiais.</p>
      <p className="mt-2">Atuamos como afiliados de grandes plataformas, trazendo análises imparciais e as melhores ofertas do mercado. Quando você compra através de nossos links, podemos ganhar uma comissão sem custo adicional para você.</p>
    </div>
  );
};