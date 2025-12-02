export interface Product {
  id: string;
  name: string;
  category: string;
  longTailKeyword: string;
  affiliateLink: string;
  imageSeed: number; // For consistent picsum images
  features: string[];
}

export interface AffiliateCategory {
  title: string;
  link: string;
  icon?: string;
}

export interface WebStorySlide {
  id: number;
  type: 'cover' | 'content' | 'quote' | 'cta';
  text: string;
  subText?: string;
  imageSeed: number;
}

export interface ArticleData {
  titleDiscovery: string;
  titleRanking: string;
  titleMystery: string;
  metaDescription: string;
  publishDate: string;
  author: string;
  content: string[]; // Mock content paragraphs
  faq: { question: string; answer: string }[];
}