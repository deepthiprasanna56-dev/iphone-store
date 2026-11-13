import { useEffect, useState } from 'react';
import { useCart } from '../context/useCart';
import { ACCESSORIES_PRODUCTS, CURRENCY, MAGSAFE_CHARGER_IMAGE } from '../data/products';
import { SmokyAtmosphere } from './SmokyAtmosphere';
import { Sparkles, ShoppingBag, Star, ArrowRight, Tag } from 'lucide-react';

export const AccessoriesSection = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleCollection = (event) => {
      if (event.detail?.section === 'accessories') setSelectedCategory(event.detail.category || 'All');
    };
    window.addEventListener('store-collection', handleCollection);
    return () => window.removeEventListener('store-collection', handleCollection);
  }, []);

  const categories = ['All', 'Audio', 'Power', 'Wearables'];

  const filteredAccessories = selectedCategory === 'All'
    ? ACCESSORIES_PRODUCTS
    : ACCESSORIES_PRODUCTS.filter(a => a.category === selectedCategory);

  return (
    <section id="accessories" className="py-20 bg-[#05020a] text-white border-t border-purple-500/15 relative overflow-hidden">
      {/* Background Smoky Atmosphere */}
      <SmokyAtmosphere density="low" showSpotlight={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Wide Cinematic Promotional Banner (Matching Image 3: Premium Accessories, Complete your Apple experience, Get up to 20% OFF) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#170c2e] via-[#200f3e] to-[#140826] border border-purple-500/30 p-8 sm:p-12 mb-16 shadow-[0_20px_60px_rgba(112,26,179,0.3)]">
          {/* Subtle Ambient Backlights */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#9333ea]/35 to-[#ec4899]/20 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#7c3aed]/30 to-transparent blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc] bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25">
                <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
                <span>The Apple Ecosystem</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#a855f7]">ACCESSORIES</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Complete your Apple experience. Seamlessly engineered to pair with your iPhone. Immerse yourself in spatial audio with AirPods Pro, stay connected with Apple Watch Ultra, and charge effortlessly with high-speed MagSafe.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#accessories-grid"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9333ea] to-[#ec4899] hover:from-[#a855f7] hover:to-[#f472b6] text-white text-sm font-semibold shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* 20% OFF Offer Pill Callout (Matching Image 3) */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 text-xs font-bold text-pink-300 backdrop-blur-md">
                  <Tag className="w-3.5 h-3.5 text-pink-400" />
                  <span>Get up to 20% OFF with bundle</span>
                </div>
              </div>
            </div>

            {/* Banner Right Image Collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 relative z-10">
              <div className="space-y-3">
                <div className="aspect-square rounded-2xl bg-[#090314]/80 border border-purple-500/20 p-3 flex items-center justify-center overflow-hidden shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=500&q=80"
                    alt="AirPods Pro 2"
                    className="max-h-[85%] object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="aspect-video rounded-2xl bg-[#090314]/80 border border-purple-500/20 p-3 flex items-center justify-center overflow-hidden shadow-lg group">
                  <img
                    src={MAGSAFE_CHARGER_IMAGE}
                    alt="MagSafe Charger"
                    className="max-h-[85%] object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <div className="aspect-video rounded-2xl bg-[#090314]/80 border border-purple-500/20 p-3 flex items-center justify-center overflow-hidden shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
                    alt="AirPods Max"
                    className="max-h-[85%] object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-[#090314]/80 border border-purple-500/20 p-3 flex items-center justify-center overflow-hidden shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
                    alt="Apple Watch Ultra"
                    className="max-h-[85%] object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Section Grid Header */}
        <div id="accessories-grid" className="flex flex-col md:flex-row md:items-end justify-between mb-10 pt-4">
          <div>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Curated Accessories
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Select from authentic Apple audio, power, and wearable equipment.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-4 md:mt-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-[#120822] text-gray-400 hover:text-white hover:bg-white/10 border border-purple-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accessories Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAccessories.map((item) => (
            <div
              key={item.id}
              className="bg-[#100720]/80 hover:bg-[#160a2c] rounded-3xl p-5 sm:p-6 border border-purple-500/20 hover:border-purple-500/45 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold bg-black/40 px-2.5 py-0.5 rounded-full border border-white/5">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Accessory Image Stage */}
                <div className="aspect-square w-full rounded-2xl bg-[#070312]/70 border border-purple-500/15 p-4 flex items-center justify-center my-2 overflow-hidden shadow-inner">
                  <img
                    src={item.colors[0]?.image}
                    alt={item.name}
                    className="max-h-[85%] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <h4 className="text-base sm:text-lg font-bold text-white mt-3 group-hover:text-[#c084fc] transition-colors truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1 mb-4 line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              {/* Price & Add to Bag */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-400">Price</div>
                  <div className="text-lg font-extrabold text-white">
                    {CURRENCY.format(item.startingPrice)}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(item, {
                    color: item.colors[0],
                    storage: { capacity: 'Standard', priceDelta: 0 }
                  })}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
