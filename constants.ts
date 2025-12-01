import { ServiceCategory, PortfolioItem, Testimonial, SocialPlatform } from './types';
import { Instagram, Phone, MessageCircle } from 'lucide-react';

export const BRAND_NAME = "Hair by the GOAT";
export const TAGLINE = "Stitch Braids & Luxury Styling";

// Realistic Goat Head (The GOAT) - Close up portrait
export const LOGO_URL = "https://images.unsplash.com/photo-1556950222-3c81b9576082?q=80&w=200&h=200&auto=format&fit=crop"; 

export const PRICES: ServiceCategory[] = [
  {
    title: "Stitchbraids",
    // Image focusing on clean stitch lines
    image: "https://images.unsplash.com/photo-1635368305786-07c39b97b102?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { name: "6 Stitchbraids", price: "€30,-" },
      { name: "8 Stitchbraids", price: "€35,-" },
      { name: "Stitchbraids met design", price: "v.a. €35,-" },
      { name: "Incl. nephaar", price: "+ €5,-", description: "Toeslag voor het haar" },
    ]
  },
  {
    title: "Braids",
    // Image of knotless/box braids
    image: "https://images.unsplash.com/photo-1606410333066-51259250005d?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { name: "Knotless braids M", price: "€55 - €65,-" },
      { name: "Knotless braids L", price: "€35 - €45,-" },
      { name: "Boho braids", price: "€75 - €115,-", description: "*Alleen gevlochten met human hair curls" },
      { name: "Braided ponytail", price: "€20,-" },
      { name: "Extra lengte", price: "+ €15,-" },
    ]
  },
  {
    title: "Weaven",
    // Image of a sleek weave/sew-in
    image: "https://images.unsplash.com/photo-1582095133179-bfd08d2fc6a8?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { name: "Middle part with leave out", price: "€50,-" },
      { name: "Side part with leave out", price: "€50,-" },
      { name: "Flipover", price: "€50,-" },
      { name: "Half up half down", price: "€50,-" },
      { name: "Ponytail", price: "€30,-" },
    ]
  },
  {
    title: "Kinderhaarstijlen",
    // Image of cornrows for kids
    image: "https://images.unsplash.com/photo-1624637651238-51f782390ba0?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { name: "Kinderdesigns", price: "v.a. €50,-", description: "Creatieve patronen voor kinderen" },
    ]
  }
];

export const POLICY_RULES = [
  "Voor alle afspraken geldt dat het haar gewassen, product- en klitvrij moet zijn en goed uitgeföhnt. Indien dit niet het geval is komen er kosten bij.",
  "Voor alle haarstijlen met nephaar geldt dat het nephaar zelf meegenomen dient te worden. (Er wordt alleen gevlochten met pre-stretched X-pression hair).",
  "Boho braids worden alleen gevlochten met human hair curls.",
  "Bundels voor het weaven dienen schoon, droog, product- en klitvrij aangeleverd te worden."
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: 1, 
    category: "Stitch", 
    title: "Precision Stitch", 
    image: "https://images.unsplash.com/photo-1635368305786-07c39b97b102?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    category: "Boho", 
    title: "Boho Curls", 
    image: "https://images.unsplash.com/photo-1605497788044-5a90406410d7?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    category: "Kids", 
    title: "Kids Cornrows", 
    image: "https://images.unsplash.com/photo-1624637651238-51f782390ba0?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    category: "Design", 
    title: "Freestyle Design", 
    image: "https://images.unsplash.com/photo-1595188800762-b9b87ea20eb1?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    category: "Weave", 
    title: "Sleek Ponytail", 
    image: "https://images.unsplash.com/photo-1582095133179-bfd08d2fc6a8?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    category: "Braids", 
    title: "Knotless Box Braids", 
    image: "https://images.unsplash.com/photo-1606410333066-51259250005d?q=80&w=1000&auto=format&fit=crop" 
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Naomi", text: "Eindelijk iemand die écht de tijd neemt. Mijn stitch braids zaten na 3 weken nog steeds strak.", service: "Stitch Braids" },
  { id: 2, name: "Zahra", text: "Super professioneel. Ze werkt heel netjes en mijn knotless braids waren pijnvrij.", service: "Knotless Braids" },
  { id: 3, name: "Dominique", text: "Luxe ervaring gewoon aan huis. Geen haastwerk, puur kwaliteit. Ik kom zeker terug.", service: "Freestyle" },
];

export const SOCIAL_LINKS = [
  { platform: SocialPlatform.WHATSAPP, url: "https://wa.me/31600000000", label: "WhatsApp", icon: MessageCircle, color: "bg-[#25D366] text-white" },
  { platform: SocialPlatform.INSTAGRAM, url: "https://instagram.com", label: "Instagram", icon: Instagram, color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white" },
  { platform: SocialPlatform.SNAPCHAT, url: "https://snapchat.com", label: "Snapchat", icon: Phone, color: "bg-[#FFFC00] text-black" },
];