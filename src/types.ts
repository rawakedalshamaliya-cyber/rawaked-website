export interface ServiceItem {
  id: string;
  title: string;
  titleEn?: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  category: 'shipping' | 'logistics' | 'commercial' | 'general';
  features: string[];
  specs?: { label: string; value: string }[];
  processSteps?: string[];
  imageUrl: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  imageUrl: string;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  origin?: string;
  destination?: string;
  weightVolume?: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'shipping' | 'warehouses' | 'projects' | 'events';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  date?: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  type: string;
  logoText: string;
  description: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
  tags: string[];
}
