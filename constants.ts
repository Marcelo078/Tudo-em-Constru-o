import { Product, AffiliateCategory } from './types';

export const SITE_NAME = "Tudo em Construção";
export const MAIN_AFFILIATE_LINK = "https://mercadolivre.com/sec/23DZvGp";

export const EXTERNAL_CATEGORIES: AffiliateCategory[] = [
  { title: "Melhores Suplementos", link: "https://mercadolivre.com/sec/1WqdDGr" },
  { title: "Ofertas Limitadas", link: "https://mercadolivre.com/sec/14GQgfK" },
  { title: "Pet Shop Cães e Gatos", link: "https://mercadolivre.com/sec/2w3WCFN" },
  { title: "Peças de Trator", link: "https://mercadolivre.com/sec/2d6sMcw" },
  { title: "Melhores Notebooks", link: "https://mercadolivre.com/sec/2cQ33FV" },
  { title: "Melhores TVs", link: "https://mercadolivre.com/sec/2DLVWrw" },
  { title: "Construção e Ferramentas", link: "https://mercadolivre.com/sec/23DZvGp" },
  { title: "Melhores Creatina", link: "https://mercadolivre.com/sec/1e23ygz" },
  { title: "Smart Home", link: "https://mercadolivre.com/sec/32Q9odi" },
  { title: "Carrinhos de Bebê", link: "https://mercadolivre.com/sec/1RdnycU" },
  { title: "Bebedouros de Água", link: "https://mercadolivre.com/sec/2CjPSqn" },
  { title: "Motos Infantil Elétrica", link: "https://mercadolivre.com/sec/18DzYmU" },
  { title: "Triciclos Adulto", link: "https://mercadolivre.com/sec/2bb6TRL" },
  { title: "Espelhos Orgânicos", link: "https://mercadolivre.com/sec/1MEENov" },
  { title: "Placas de Vídeo", link: "https://mercadolivre.com/sec/1HnRJHj" },
  { title: "Bicicletas Ergométricas", link: "https://mercadolivre.com/sec/2nKZmda" },
  { title: "Hoverboard Skate Elétrico", link: "https://mercadolivre.com/sec/28Ru8g8" },
];

export const PRODUCTS: Product[] = [
  {
    id: "fechadura-fr220",
    name: "Fechadura Digital Intelbras FR 220",
    category: "Segurança",
    longTailKeyword: "Melhores Fechaduras Digitais Biometria: Segurança Residencial",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 101,
    features: ["Biometria avançada", "Senha numérica", "Instalação de sobrepor"]
  },
  {
    id: "fechadura-mfr7000",
    name: "Fechadura Digital MFR 7000 Intelbras",
    category: "Segurança",
    longTailKeyword: "Fechadura Smart Maçaneta: Casa Inteligente 2025",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 102,
    features: ["Design moderno", "Integração smart home", "Mecanismo robusto"]
  },
  {
    id: "fechadura-kuanttum",
    name: "Fechadura Kuanttum Delta Pro Tuya Wi-fi",
    category: "Segurança",
    longTailKeyword: "Melhor Custo Benefício Fechadura Wifi: Automação",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 103,
    features: ["Conexão Wi-Fi", "App Tuya", "Desbloqueio remoto"]
  },
  {
    id: "parafusadeira-black-tools",
    name: "Parafusadeira Furadeira Impacto 21v TB-21yx",
    category: "Ferramentas",
    longTailKeyword: "Kit Parafusadeira Profissional: Potência e Durabilidade",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 104,
    features: ["2 Baterias", "Maleta inclusa", "Função impacto"]
  },
  {
    id: "wap-bpf-12k3",
    name: "Parafusadeira WAP BPF 12k3.2",
    category: "Ferramentas",
    longTailKeyword: "Ferramentas WAP Boas e Baratas: Uso Doméstico",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 105,
    features: ["Bateria Li-Ion", "Leve e compacta", "Luz LED"]
  },
  {
    id: "desobstruidora-wap",
    name: "Desobstruidora Alta Pressão WAP Ousada Plus",
    category: "Limpeza",
    longTailKeyword: "Lavadora Alta Pressão WAP: Limpeza Pesada",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 106,
    features: ["1500W Potência", "Economia de água", "Bico turbo"]
  },
  {
    id: "pulverizador-brudden",
    name: "Pulverizador Costal Brudden SS-20b 12v",
    category: "Jardinagem",
    longTailKeyword: "Melhores Pulverizadores a Bateria: Agricultura Familiar",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 107,
    features: ["20 Litros", "Autonomia estendida", "Conforto ergonômico"]
  },
  {
    id: "esmerilhadeira-bosch",
    name: "Mini Esmerilhadeira Bosch GWS 700",
    category: "Ferramentas",
    longTailKeyword: "Esmerilhadeira Profissional Bosch: Corte Preciso",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 108,
    features: ["710W Potência", "Design slim", "Durabilidade Bosch"]
  },
  {
    id: "lavadora-eletroplas",
    name: "Lavadora Alta Vazão Eletroplas EL-4000v3",
    category: "Industrial",
    longTailKeyword: "Lavadora Profissional Motor WEG: Alta Performance",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 109,
    features: ["Motor WEG 3HP", "Uso contínuo", "Alta vazão"]
  },
  {
    id: "aparador-grama",
    name: "Aparador de Grama Sem Fio 48v",
    category: "Jardinagem",
    longTailKeyword: "Roçadeira a Bateria Potente: Jardinagem Prática",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 110,
    features: ["Sem fios", "Bateria recarregável", "18000 RPM"]
  },
  {
    id: "cuba-gourmet",
    name: "Cuba Cozinha Gourmet Inox 304",
    category: "Cozinha",
    longTailKeyword: "Cuba Gourmet Inox Luxo: Tendência Decoração 2025",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 111,
    features: ["Aço Inox 304", "Acabamento Premium", "Anti-ruído"]
  },
  {
    id: "martelete-makita",
    name: "Martelete Combinado Makita HR2470",
    category: "Ferramentas",
    longTailKeyword: "Martelete Makita Original: Força Bruta Construção",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 112,
    features: ["800W", "3 Modos de operação", "Sistema SDS-Plus"]
  },
  {
    id: "interruptor-ekaza",
    name: "Interruptor Ekaza Inteligente",
    category: "Smart Home",
    longTailKeyword: "Automação Residencial Barata: Interruptor Wifi",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 113,
    features: ["Comando de voz", "App Smart Life", "Design Touch"]
  },
  {
    id: "camera-intelbras",
    name: "Câmera Inteligente Wi-fi Im8 Intelbras",
    category: "Segurança",
    longTailKeyword: "Câmera Segurança Wifi Externa: Monitoramento 360",
    affiliateLink: MAIN_AFFILIATE_LINK,
    imageSeed: 114,
    features: ["Resolução 3MP", "Visão Noturna", "Áudio Bidirecional"]
  }
];

export const MOCK_REVIEWS = [
  "Melhor investimento que fiz para minha obra. Recomendo demais!",
  "A qualidade surpreendeu, chegou antes do prazo.",
  "Excelente custo benefício, a marca é muito confiável.",
  "Produto robusto e fácil de usar. Nota 10.",
  "Comprei pela indicação do site e não me arrependi."
];
