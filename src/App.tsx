import { motion } from "motion/react";
import { 
  Globe, 
  Truck, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Award,
  ShieldCheck,
  TrendingUp,
  Languages
} from "lucide-react";
import { useState, useEffect } from "react";
import { translations, Language } from "./translations";

// Links de exemplo (substitua pelos seus links reais ou IDs do Drive se desejar)
const IMAGES = {
  hero: "https://lh3.googleusercontent.com/u/0/d/1b2sN43G0yybaoyqMgFWcFHwRfAWYiI0w",
  about: "https://lh3.googleusercontent.com/u/0/d/1QJwe5rlVl0DQ0QS3VJqt6tuV9CC0vz3q",
};

const STATS = [
  { labelKey: "exp", value: "10+" },
  { labelKey: "countries", value: "15+" },
  { labelKey: "tons", value: "500k+" },
  { labelKey: "farms", value: "200+" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-agri-green selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 bg-agri-green rounded-lg flex items-center justify-center text-white font-bold text-xl">
              I
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-none ${scrolled ? "text-slate-900" : "text-white"}`}>ITARARÉ</span>
              <span className={`text-[10px] tracking-[0.2em] font-medium ${scrolled ? "text-agri-green" : "text-agri-gold"}`}>CEREALISTA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Products', 'Logistics', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium hover:text-agri-green transition-colors ${scrolled ? "text-slate-600" : "text-white/90"}`}
              >
                {t.nav[item.toLowerCase() as keyof typeof t.nav]}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-white/20 pl-6 ml-2">
              <Languages size={16} className={scrolled ? "text-slate-400" : "text-white/60"} />
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold uppercase transition-all ${lang === l ? (scrolled ? "text-agri-green" : "text-agri-gold") : (scrolled ? "text-slate-400" : "text-white/40")} hover:text-agri-green`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? "text-slate-900" : "text-white"} /> : <Menu className={scrolled ? "text-slate-900" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {['About', 'Products', 'Logistics', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-lg font-medium text-slate-600 py-2"
              >
                {t.nav[item.toLowerCase() as keyof typeof t.nav]}
              </button>
            ))}
            <div className="flex gap-4 py-4 border-y border-slate-100">
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsMenuOpen(false); }}
                  className={`text-sm font-bold uppercase ${lang === l ? "text-agri-green" : "text-slate-400"}`}
                >
                  {l === 'pt' ? 'Português' : l === 'en' ? 'English' : 'Español'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Agribusiness Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-agri-gold/20 text-agri-gold text-xs font-bold tracking-widest uppercase mb-6 border border-agri-gold/30">
              {t.hero.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollTo('products')}
                className="bg-white text-agri-green px-8 py-4 rounded-full font-bold hover:bg-agri-green hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                {t.hero.ctaProducts}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                {t.hero.ctaContact}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-agri-green mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t.stats[stat.labelKey as keyof typeof t.stats]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.about} 
                  alt="Agriculture Field"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden lg:block border border-slate-100">
                <Award className="text-agri-gold mb-4" size={40} />
                <h3 className="font-display font-bold text-xl mb-2">{t.about.certified}</h3>
                <p className="text-sm text-slate-600">{t.about.certifiedDesc}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-agri-green font-bold tracking-widest uppercase text-sm mb-4 block">{t.about.tag}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                {t.about.title}<span className="text-agri-green">{t.about.titleAccent}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t.about.desc1}
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                {t.about.desc2}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-agri-green/10 rounded-xl flex items-center justify-center text-agri-green shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.about.reliability}</h4>
                    <p className="text-sm text-slate-500">CNPJ: 23.208.217/0001-97</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-agri-green/10 rounded-xl flex items-center justify-center text-agri-green shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.about.growth}</h4>
                    <p className="text-sm text-slate-500">{t.about.growthDesc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-agri-gold font-bold tracking-widest uppercase text-sm mb-4 block">{t.products.tag}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t.products.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t.products.desc}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.items.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="text-2xl font-display font-bold mb-2">{product.name}</h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-agri-gold transition-all duration-300 mx-auto"></div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed px-2 text-center">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistics" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-agri-green rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Globe size={400} />
            </div>
            
            <div className="flex-1 relative z-10">
              <span className="text-agri-gold font-bold tracking-widest uppercase text-xs mb-4 block">{t.logistics.tag}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">{t.logistics.title}</h2>
              <div className="space-y-6">
                {t.logistics.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      {i === 0 ? <Truck /> : i === 1 ? <Globe /> : <ShieldCheck />}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                <h3 className="text-2xl font-display font-bold mb-6">{t.logistics.destinations}</h3>
                <div className="space-y-4">
                  {['China & Southeast Asia', 'European Union', 'Middle East', 'North Africa'].map((dest, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="font-medium">{dest}</span>
                      <ChevronRight size={16} className="text-agri-gold" />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-4 bg-white text-agri-green rounded-xl font-bold hover:bg-agri-gold hover:text-white transition-all">
                  {t.logistics.quote}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-agri-green font-bold tracking-widest uppercase text-sm mb-4 block">{t.contact.tag}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">{t.contact.title}</h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                {t.contact.desc}
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">{t.contact.email}</div>
                    <a href="mailto:sales@cerealistaitarare.com" className="text-xl font-bold text-slate-900 hover:text-agri-green transition-colors">
                      sales@cerealistaitarare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">{t.contact.phone}</div>
                    <a href="https://wa.me/5541995872276" className="text-xl font-bold text-slate-900 hover:text-agri-green transition-colors">
                      +55 41 99587-2276
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">{t.contact.address}</div>
                    <div className="text-xl font-bold text-slate-900">
                      Av. Itararé, 43, Centro <br />
                      Curitiba, PR - Brazil
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">{t.contact.form.title}</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.contact.form.name}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-agri-green focus:ring-2 focus:ring-agri-green/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.contact.form.company}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-agri-green focus:ring-2 focus:ring-agri-green/20 outline-none transition-all" placeholder="Global Trading Co." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t.contact.form.email}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-agri-green focus:ring-2 focus:ring-agri-green/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t.contact.form.message}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-agri-green focus:ring-2 focus:ring-agri-green/20 outline-none transition-all resize-none" placeholder={t.contact.form.placeholder}></textarea>
                </div>
                <button className="w-full py-4 bg-agri-green text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-agri-green/20">
                  {t.contact.form.btn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-agri-green rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  I
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-none">ITARARÉ</span>
                  <span className="text-[10px] tracking-[0.2em] font-medium text-agri-gold">CEREALISTA</span>
                </div>
              </div>
              <p className="text-white/40 max-w-sm mb-8">
                {t.footer.desc}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6">{t.footer.legal}</h4>
              <ul className="space-y-4 text-white/60">
                <li>CNPJ: 23.208.217/0001-97</li>
                <li>Cerealista Itararé Ltda</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Cerealista Itararé Ltda. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5541995872276"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform group"
      >
        <svg 
          viewBox="0 0 448 512" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
