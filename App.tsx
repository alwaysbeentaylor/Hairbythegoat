import React, { useState } from 'react';
import { Menu, X, ArrowRight, Star, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BRAND_NAME, PRICES, PORTFOLIO, SOCIAL_LINKS, TAGLINE, POLICY_RULES, LOGO_URL } from './constants';
import StyleAdvisor from './components/StyleAdvisor';

// --- Helper Components ---

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && <span className="block text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">{subtitle}</span>}
    <h2 className="font-serif text-4xl md:text-6xl text-stone-100 drop-shadow-sm">{title}</h2>
    <div className={`h-1 w-20 bg-gold-600 mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

const Button: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'outline'; onClick?: () => void; href?: string; className?: string }> = ({ 
  children, variant = 'primary', onClick, href, className = '' 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300";
  const variants = {
    primary: "bg-gold-500 text-cocoa-900 hover:bg-white hover:text-cocoa-900",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-cocoa-900"
  };

  const content = (
    <>
      {children}
      <ArrowRight className="ml-2 w-4 h-4" />
    </>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variants[variant]} ${className}`}>{content}</a>;
  }
  return <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>{content}</button>;
};

// --- Main App Component ---

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activePriceCategory, setActivePriceCategory] = useState(0);
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const scrollTo = (id: string) => {
    setIsNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-stone-300 bg-cocoa-900 overflow-x-hidden w-full relative selection:bg-gold-500 selection:text-cocoa-900">
      <StyleAdvisor />
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-cocoa-900/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Goat Logo - Realistic with gold border */}
            <div className="relative">
              <img 
                src={LOGO_URL} 
                alt="Goat Logo" 
                className="h-12 w-12 object-cover rounded-full border border-gold-500/50 shadow-lg" 
              />
            </div>
            <div className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-white">
              HAIR BY THE <span className="text-gold-400">GOAT</span>.
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest uppercase">
            <button onClick={() => scrollTo('about')} className="hover:text-gold-400 transition-colors">Over</button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-gold-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-gold-400 transition-colors">Prijslijst</button>
            <button 
              onClick={() => scrollTo('book')}
              className="bg-stone-100 text-cocoa-900 px-6 py-3 hover:bg-gold-400 transition-colors"
            >
              Nu Boeken
            </button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isNavOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-cocoa-800 border-t border-white/10 px-6 py-8 flex flex-col space-y-6"
          >
            <button onClick={() => scrollTo('about')} className="text-left font-serif text-2xl text-white">Over</button>
            <button onClick={() => scrollTo('portfolio')} className="text-left font-serif text-2xl text-white">Portfolio</button>
            <button onClick={() => scrollTo('pricing')} className="text-left font-serif text-2xl text-white">Prijzen</button>
            <button onClick={() => scrollTo('book')} className="text-left font-serif text-2xl text-gold-400 font-bold">Nu Boeken</button>
          </motion.div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          {/* Using a darker, more texture-focused image for the background */}
          <img 
            src="https://images.unsplash.com/photo-1624637651395-586b97b0a82e?q=80&w=2000&auto=format&fit=crop" 
            alt="Dark Skin Braids Texture" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cocoa-900/40 via-cocoa-900/20 to-cocoa-900"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold-400 tracking-[0.4em] text-xs md:text-sm font-bold uppercase mb-6"
          >
            Officieel Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-8xl text-white mb-8 leading-none"
          >
            HAIR BY THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">GOAT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-stone-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {TAGLINE}. High-end stitch braids, cornrows, en weaves. 
            <br className="hidden md:block"/>Strikte precisie voor elke textuur.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Button onClick={() => scrollTo('book')}>Boek via WhatsApp</Button>
            <Button variant="outline" onClick={() => scrollTo('pricing')}>Bekijk Prijslijst</Button>
          </motion.div>
        </div>
      </section>

      {/* --- About Section (Dark Theme) --- */}
      <section id="about" className="py-32 px-6 bg-cocoa-800 relative">
         {/* Texture graphic */}
         <div className="absolute top-0 left-0 text-[20rem] font-serif leading-none opacity-[0.03] pointer-events-none select-none text-white">GOAT</div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute top-4 left-4 w-full h-full border border-gold-500/30 rounded-sm z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1594824476960-e78191426854?q=80&w=1000&auto=format&fit=crop" 
               alt="Braiding technique" 
               className="w-full h-auto rounded-sm shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div>
            <span className="text-gold-400 font-bold tracking-widest text-xs uppercase mb-4 block">Over de Specialist</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Technische perfectie.<br/>Geen compromissen.</h2>
            <p className="text-stone-400 leading-loose mb-6">
              Welkom bij <strong>Hair by the GOAT</strong>. Ik ben gespecialiseerd in precisie styling voor Afro en getextureerd haar (4A-4C). 
              Mijn werkruimte is ontworpen voor klanten die kwaliteit boven snelheid waarderen.
            </p>
            <p className="text-stone-400 leading-loose mb-8">
              Of je nu boekt voor <strong>Stitch Braids</strong> of een <strong>Weave</strong>, verwacht strakke scheidingen, 
              een nette afwerking, en een haarstijl die lang meegaat. Ik neem de tijd om te zorgen dat je edges beschermd blijven en het resultaat vlekkeloos is.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Stitch Braids Specialist", "Strikte Hygiëne Standaarden", "4C Hair Care Expert"].map((item, i) => (
                <li key={i} className="flex items-center text-stone-300">
                  <CheckCircle size={16} className="text-gold-500 mr-3" />
                  <span className="uppercase tracking-wider text-xs font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Portfolio Section (Grid) --- */}
      <section id="portfolio" className="py-32 bg-cocoa-900">
        <div className="container mx-auto px-6">
          <SectionHeading title="Het Werk" subtitle="Portfolio" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cocoa-800">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-cocoa-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                   <h3 className="text-white font-serif text-2xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" href={SOCIAL_LINKS[1].url}>Check Instagram voor meer</Button>
          </div>
        </div>
      </section>

      {/* --- Pricing Section (Interactive Split View) --- */}
      <section id="pricing" className="py-32 px-6 bg-stone-950 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Prijslijst" subtitle="Investering" />

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: List */}
            <div className="lg:col-span-7 space-y-4">
              {PRICES.map((category, idx) => (
                <div 
                  key={idx} 
                  className={`border border-white/5 transition-all duration-300 rounded-sm overflow-hidden ${activePriceCategory === idx ? 'bg-cocoa-900/50 border-gold-500/30' : 'bg-cocoa-900/20 hover:bg-cocoa-900/40'}`}
                >
                  <button 
                    onClick={() => setActivePriceCategory(idx)}
                    className="w-full text-left p-6 md:p-8 flex justify-between items-center group"
                  >
                    <h3 className={`font-serif text-2xl md:text-3xl transition-colors ${activePriceCategory === idx ? 'text-gold-400' : 'text-stone-300 group-hover:text-gold-200'}`}>
                      {category.title}
                    </h3>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all ${activePriceCategory === idx ? 'bg-gold-500 text-cocoa-900 border-gold-500' : 'border-stone-600 text-stone-600'}`}>
                      <ArrowRight size={14} className={`transform transition-transform ${activePriceCategory === idx ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  
                  {/* Accordion Content for Mobile (visible always if active) */}
                  <AnimatePresence>
                    {activePriceCategory === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/5"
                      >
                         {/* Mobile Image (Only shows on small screens) */}
                         <div className="lg:hidden h-48 w-full overflow-hidden relative">
                           <img src={category.image} alt={category.title} className="w-full h-full object-cover opacity-80" />
                           <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 to-transparent"></div>
                         </div>

                        <div className="p-6 md:p-8 space-y-6">
                          {category.items.map((service, sIdx) => (
                            <div key={sIdx} className="flex flex-col md:flex-row md:items-baseline justify-between group">
                              <div className="mb-1 md:mb-0">
                                <span className="font-bold text-lg text-stone-200 group-hover:text-gold-400 transition-colors">{service.name}</span>
                                {service.description && (
                                  <p className="text-xs text-stone-500 mt-1">{service.description}</p>
                                )}
                              </div>
                              <div className="flex-grow mx-4 hidden md:block border-b border-stone-700 border-dotted relative top-[-4px]"></div>
                              <span className="font-serif text-xl text-white whitespace-nowrap">{service.price}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Image Preview (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                 <AnimatePresence mode="wait">
                    <motion.img 
                      key={activePriceCategory}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={PRICES[activePriceCategory].image} 
                      alt="Category Preview" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                 </AnimatePresence>
                 {/* Overlay Text */}
                 <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950 via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
                    <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Voorbeeld</p>
                    <h3 className="text-white font-serif text-3xl">{PRICES[activePriceCategory].title}</h3>
                 </div>
              </div>
            </div>

          </div>

          {/* Policy Rules Box */}
          <div className="mt-16 p-8 bg-cocoa-800 rounded-sm border-l-4 border-gold-500">
            <h4 className="font-serif text-xl text-white mb-6">Belangrijke Informatie</h4>
            <ul className="space-y-4">
              {POLICY_RULES.map((rule, idx) => (
                <li key={idx} className="flex items-start text-stone-400 text-sm leading-relaxed">
                  <span className="text-gold-500 mr-3 mt-1 text-xs">●</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Booking Section --- */}
      <section id="book" className="py-32 px-6 bg-cocoa-900">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Afspraak Maken" subtitle="Contact" />
          
          <div className="bg-white/5 p-12 rounded-2xl backdrop-blur-sm border border-white/5">
            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ik gebruik geen geautomatiseerd boekingssysteem. Om je plekje vast te leggen, stuur een bericht via WhatsApp, Instagram of Snapchat.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {SOCIAL_LINKS.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative overflow-hidden flex flex-col items-center justify-center p-8 rounded-lg transition-all hover:-translate-y-2 hover:shadow-2xl ${link.color}`}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <Icon size={40} className="mb-4" />
                      <span className="font-bold text-lg">{link.label}</span>
                      <span className="text-xs opacity-80 mt-2 uppercase tracking-wider">Klik om te openen</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-stone-950 text-stone-500 py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
                 {/* Realistic Goat Head Logo in Footer */}
                 <img src={LOGO_URL} alt="Logo" className="h-10 w-10 object-cover rounded-full border border-gold-500/30" />
                <div className="font-serif text-2xl text-white">HAIR BY THE <span className="text-gold-500">GOAT</span>.</div>
            </div>
            
            <p className="max-w-md mb-6 leading-relaxed text-stone-400">
              De standaard voor stitch braids en luxe cornrows. 
              Altijd netjes. Altijd met precisie.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Studio Info</h4>
            <div className="space-y-4 text-stone-400">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold-500" />
                <span>Privé Studio aan Huis<br/>Adres volgt na bevestiging</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gold-500" />
                <span>Ma - Za<br/>Alleen op afspraak</span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Menu</h4>
             <ul className="space-y-2">
               <li><button onClick={() => scrollTo('portfolio')} className="hover:text-gold-500 transition-colors">Portfolio</button></li>
               <li><button onClick={() => scrollTo('pricing')} className="hover:text-gold-500 transition-colors">Prijslijst</button></li>
               <li><button onClick={() => scrollTo('book')} className="hover:text-gold-500 transition-colors">Contact</button></li>
             </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs uppercase tracking-widest text-stone-600">
          &copy; {new Date().getFullYear()} Hair by the GOAT. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
};

export default App;