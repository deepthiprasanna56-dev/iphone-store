import { useState } from 'react';
import { useCart } from '../context/useCart';
import { IPHONE_PRODUCTS, CURRENCY } from '../data/products';
import { ThreeIPhoneCanvas } from './ThreeIPhoneCanvas';
import { SmokyAtmosphere } from './SmokyAtmosphere';
import { ArrowRight, Sparkles, Camera, Cpu, BatteryCharging, ChevronLeft, ChevronRight, Lock } from 'lucide-react';

export const Hero = () => {
  const { setSelectedProduct, addToCart } = useCart();

  // Flagship carousel slides (iPhone 17 Pro Max, iPhone 17 Pro, iPhone 17 Air)
  const slides = [
    {
      product: IPHONE_PRODUCTS.find(p => p.id === 'iphone-17-pro-max') || IPHONE_PRODUCTS[0],
      modelLabel: 'iPhone 17 Pro Max',
      headlinePrefix: 'Beyond ',
      headlineHighlight: 'the ordinary.',
      tagline: 'Power. Beauty. Innovation.',
      badge: 'NEW ARRIVAL',
      annotation: 'Titanium Design',
      startingPrice: 149900,
      specs: [
        { icon: Cpu, label: 'A19 Pro Chip' },
        { icon: Camera, label: 'Pro Camera System' },
        { icon: BatteryCharging, label: 'All-Day Battery' },
      ],
    },
    {
      product: IPHONE_PRODUCTS.find(p => p.id === 'iphone-17-pro') || IPHONE_PRODUCTS[1],
      modelLabel: 'iPhone 17 Pro',
      headlinePrefix: 'Titanium ',
      headlineHighlight: 'reborn.',
      tagline: 'Lighter. Stronger. Unrivaled performance.',
      badge: 'PRO SERIES',
      annotation: 'Precision Grade 5',
      startingPrice: 129900,
      specs: [
        { icon: Cpu, label: 'A19 Pro Silicon' },
        { icon: Camera, label: '48MP Triple Fusion' },
        { icon: BatteryCharging, label: '33hr Video Playback' },
      ],
    },
    {
      product: IPHONE_PRODUCTS.find(p => p.id === 'iphone-17-air') || IPHONE_PRODUCTS[2],
      modelLabel: 'iPhone 17 Air',
      headlinePrefix: 'Ultra-thin ',
      headlineHighlight: 'perfection.',
      tagline: '5.6mm aerospace titanium. Future in your hand.',
      badge: 'REVOLUTIONARY',
      annotation: '5.6mm Profile',
      startingPrice: 119900,
      specs: [
        { icon: Cpu, label: 'A19 Pro Chip' },
        { icon: Camera, label: '48MP Studio Fusion' },
        { icon: BatteryCharging, label: '26hr Video Playback' },
      ],
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];
  const heroProduct = currentSlide.product;

  // Active color finish state
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const activeColor = heroProduct.colors[selectedColorIndex] || heroProduct.colors[0];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setSelectedColorIndex(0);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setSelectedColorIndex(0);
  };

  const handleQuickBuy = () => {
    addToCart(heroProduct, {
      color: activeColor,
      storage: heroProduct.storageOptions[0],
    });
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-[95vh] flex items-center justify-center pt-6 pb-16 md:py-16 bg-[#05020a] text-white">
      {/* 1. Realistic Billowing Smoke, Fog & Atmospheric Embers Engine */}
      <SmokyAtmosphere density="high" showSpotlight={true} />

      {/* 2. Ambient Deep Cosmic Violet Radial Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#7c3aed]/25 via-[#a855f7]/20 to-[#ec4899]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[500px] bg-gradient-to-tl from-[#9333ea]/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs (Exact User Prompt Requirements) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            
            {/* New Arrival Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-900/40 via-purple-700/30 to-pink-900/40 border border-purple-500/40 text-[11px] font-bold text-[#c084fc] shadow-[0_0_20px_rgba(168,85,247,0.35)] w-fit backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ec4899] animate-pulse" />
              <span className="uppercase tracking-widest font-mono">{currentSlide.badge}</span>
            </div>

            {/* Headline: Model Name + "Beyond the ordinary." */}
            <div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#c084fc] mb-1.5 font-mono">
                {currentSlide.modelLabel}
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
                {currentSlide.headlinePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#a855f7] drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                  {currentSlide.headlineHighlight}
                </span>
              </h1>
              
              {/* Supporting text */}
              <p className="text-gray-300 text-base sm:text-xl font-normal mt-4 max-w-lg leading-relaxed">
                {currentSlide.tagline}
              </p>
            </div>

            {/* CTAs: Explore iPhone & Buy Now (Matching Reference Image) */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => setSelectedProduct(heroProduct)}
                className="bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#ec4899] hover:from-[#a855f7] hover:to-[#f472b6] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_0_35px_rgba(168,85,247,0.65)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Explore iPhone</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleQuickBuy}
                className="bg-white/5 hover:bg-white/10 text-white border border-purple-500/30 hover:border-purple-400 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all flex items-center gap-2 backdrop-blur-md shadow-sm"
              >
                <span>Buy Now</span>
                <Lock className="w-4 h-4 text-purple-300" />
              </button>
            </div>

            {/* Feature Highlights: 3 Horizontal Pills (A19 Pro Chip, Pro Camera System, All-Day Battery) */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-purple-500/20 max-w-lg">
              {currentSlide.specs.map((spec, i) => {
                const IconComponent = spec.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#120824]/70 border border-purple-500/20 rounded-2xl p-3 flex flex-col items-start backdrop-blur-md shadow-sm hover:border-purple-500/40 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-[#c084fc] mb-1.5" />
                    <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                      {spec.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row: Carousel Slider Navigation (< 01 / 03 >) & Price */}
            <div className="pt-2 flex items-center justify-between max-w-lg">
              {/* Pagination Controls Matching Image 3 */}
              <div className="flex items-center gap-3 bg-[#120824]/80 px-4 py-2 rounded-full border border-purple-500/25 backdrop-blur-md">
                <button
                  onClick={handlePrevSlide}
                  className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="font-mono text-xs font-bold tracking-widest text-[#c084fc]">
                  0{currentSlideIndex + 1} <span className="text-gray-500">/</span> 0{slides.length}
                </span>

                <button
                  onClick={handleNextSlide}
                  className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Price Callout */}
              <div className="text-right">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Starting at</div>
                <div className="text-lg sm:text-xl font-black text-white">
                  {CURRENCY.format(currentSlide.startingPrice)}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic 3D iPhone Presentation (Three.js WebGL Engine) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Top Annotation: Titanium Design with Stylized Curved Arrow */}
            <div className="w-full flex items-center justify-between mb-2 px-4 relative z-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c084fc] bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] animate-ping" />
                <span>Cinematic 3D WebGL</span>
              </div>

              {/* Hand-drawn style Callout (Matching Image 3) */}
              <div className="hidden sm:flex items-center gap-2 text-right">
                <div className="flex flex-col items-end">
                  <span className="font-serif italic text-sm text-[#f472b6] font-medium tracking-wide">
                    {currentSlide.annotation}
                  </span>
                  <span className="text-[10px] text-purple-300/80">Grade 5 Aerospace</span>
                </div>
                {/* Curved Arrow SVG */}
                <svg className="w-7 h-7 text-[#f472b6] transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4c0 8 6 14 14 14" />
                  <path d="M14 18l4 0l0-4" />
                </svg>
              </div>
            </div>

            {/* 3D WebGL Device Viewport */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] rounded-3xl bg-gradient-to-b from-[#180e2d]/60 via-[#100720]/80 to-[#080312] border border-purple-500/25 shadow-[0_20px_80px_rgba(112,26,179,0.35)] backdrop-blur-xl flex items-center justify-center overflow-hidden">
              {/* Realistic Three.js 3D Interactive Canvas */}
              <ThreeIPhoneCanvas activeColor={activeColor} />

              {/* Floating Hand-annotated Price Tag on Bottom Right (Matching Image 3) */}
              <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-[#120824]/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-purple-500/30 shadow-lg">
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-purple-300 block">Starting at</span>
                  <span className="text-xs font-bold text-white">{CURRENCY.format(currentSlide.startingPrice)}</span>
                </div>
                <svg className="w-5 h-5 text-[#c084fc] transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </div>

            {/* Bottom Color Swatches Bar */}
            <div className="mt-4 flex items-center gap-3 bg-[#120824]/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-purple-500/25 shadow-lg">
              <span className="text-xs text-gray-300 font-medium hidden sm:inline">Finish:</span>
              <div className="flex items-center gap-2.5">
                {heroProduct.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-6 h-6 rounded-full transition-all duration-300 relative ${color.bgClass} border border-white/20 ${
                      selectedColorIndex === idx
                        ? 'ring-2 ring-[#c084fc] ring-offset-2 ring-offset-[#120824] scale-110 shadow-[0_0_12px_rgba(192,132,252,0.85)]'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
              <span className="text-xs text-purple-300 font-semibold ml-1">
                {activeColor.name}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
