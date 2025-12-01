import { ServiceCategory, PortfolioItem, Testimonial, SocialPlatform } from './types';
import { Instagram, Phone, MessageCircle } from 'lucide-react';

export const BRAND_NAME = "Hair by the GOAT";
export const TAGLINE = "Stitch Braids & Luxury Styling";

// Cute Goat Head Cartoon Character Logo
export const LOGO_URL = "/cute-goat-head-cartoon-character-free-png.png"; 

export const PRICES: ServiceCategory[] = [
  {
    title: "Stitchbraids",
    // Image focusing on clean stitch lines
    image: "/images/photo_1.jpg", 
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
    image: "/images/photo_2.jpg", 
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
    image: "/images/photo_3.jpg", 
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
    image: "/images/photo_1.jpg", 
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
    image: "/images/photo_1.jpg" 
  },
  { 
    id: 2, 
    category: "Boho", 
    title: "Boho Curls", 
    image: "/images/photo_2.jpg" 
  },
  { 
    id: 3, 
    category: "Kids", 
    title: "Kids Cornrows", 
    image: "/images/photo_3.jpg" 
  },
  { 
    id: 4, 
    category: "Design", 
    title: "Freestyle Design", 
    image: "/images/photo_1.jpg" 
  },
  { 
    id: 5, 
    category: "Weave", 
    title: "Sleek Ponytail", 
    image: "/images/photo_2.jpg" 
  },
  { 
    id: 6, 
    category: "Braids", 
    title: "Knotless Box Braids", 
    image: "/images/photo_3.jpg" 
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