export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
  timeEstimate?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  image: string;
}

export interface PortfolioItem {
  id: number;
  image: string;
  category: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  service: string;
}

export enum SocialPlatform {
  WHATSAPP = 'WhatsApp',
  SNAPCHAT = 'Snapchat',
  INSTAGRAM = 'Instagram',
}