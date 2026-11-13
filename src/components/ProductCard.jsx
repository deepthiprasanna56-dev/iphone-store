import { useState } from 'react';
import { useCart } from '../context/useCart';
import { CURRENCY } from '../data/products';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { setSelectedProduct, addToCart } = useCart();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);
  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    const rotateX = -((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleQuickBuy = (e) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, {
      color: activeColor,
      storage: product.storageOptions[0],
    });
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1200);
  };

  // Badge label (Matching Image 3: "Popular", "New")
  const badgeLabel = product.badge || (product.series === 'Pro' ? 'Popular' : 'New');
  const isPopular = badgeLabel.toLowerCase().includes('popular') || badgeLabel.toLowerCase().includes('max');

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.18s ease-out',
      }}
      className="group bg-[#0f071e]/90 hover:bg-[#160a2b] rounded-3xl p-5 sm:p-6 border border-purple-500/25 hover:border-purple-500/50 flex flex-col justify-between cursor-pointer relative shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(112,26,179,0.35)] backdrop-blur-xl transition-colors duration-300"
    >
      {/* Background Smoky Ambient Glow */}
      <div
        className="absolute inset-0 opacity-15 group-hover:opacity-35 rounded-3xl blur-2xl transition-opacity pointer-events-none"
        style={{ backgroundColor: activeColor.hex }}
      />

      {/* Top Tag Badge (Matching Reference Image 3: Pink/Purple Gradient Pill) */}
      <div className="flex items-center justify-between mb-2 relative z-10">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.4)] ${
            isPopular
              ? 'bg-gradient-to-r from-[#ec4899] to-[#9333ea]'
              : 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]'
          }`}
        >
          {badgeLabel}
        </span>

        {/* Color Swatches inline or rating */}
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {product.colors.map((color, idx) => (
            <button
              key={color.name}
              onClick={() => setSelectedColorIndex(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${color.bgClass} ${
                selectedColorIndex === idx
                  ? 'ring-2 ring-[#c084fc] scale-110 shadow-[0_0_6px_rgba(192,132,252,0.85)]'
                  : 'opacity-50 hover:opacity-100 hover:scale-105'
              }`}
              title={color.name}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Product Image Stage with Floating Effect & Image Zoom on Hover */}
      <div className="relative aspect-square w-full flex items-center justify-center p-4 my-2 overflow-hidden rounded-2xl bg-[#070312]/75 border border-purple-500/15 group-hover:border-purple-500/35 transition-colors">
        <div
          className="absolute inset-0 opacity-25 blur-2xl transition-colors duration-500"
          style={{ backgroundColor: activeColor.hex }}
        />
        <img
          src={activeColor.image}
          alt={`${product.name} in ${activeColor.name}`}
          className="relative z-10 max-h-[92%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1.5"
          loading="lazy"
        />
      </div>

      {/* Product Info (Matching Image 3) */}
      <div className="text-left mt-2 flex-1 relative z-10">
        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors leading-tight">
          {product.name}
        </h4>
        
        {/* Price in INR */}
        <div className="mt-1.5 mb-2">
          <div className="text-xl sm:text-2xl font-black text-white">
            {CURRENCY.format(product.startingPrice)}
          </div>
        </div>

        {/* Specs Row: Display | Chip | Camera | Storage (Matching Image 3) */}
        <div className="pt-2 pb-1 border-t border-purple-500/15 text-[10px] sm:text-[11px] text-gray-300">
          <p className="truncate text-gray-300">
            <span className="text-white font-medium">{product.displaySize || '6.9" Display'}</span>
            <span className="mx-1 text-purple-400">|</span>
            <span className="text-[#c084fc] font-medium">{product.chip || 'A19 Pro Chip'}</span>
            <span className="mx-1 text-purple-400">|</span>
            <span className="text-white font-medium">{product.cameraMP || '48MP Camera'}</span>
            <span className="mx-1 text-purple-400">|</span>
            <span className="text-gray-300">{product.storageOptions?.[0]?.capacity || '256GB'}</span>
          </p>
        </div>
      </div>

      {/* Card Action Buttons (Matching Image 3: [Explore →]  [ 🛒 ]) */}
      <div className="flex items-center gap-2 pt-3 relative z-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleQuickBuy}
          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#9333ea] to-[#ec4899] hover:from-[#a855f7] hover:to-[#f472b6] text-white text-xs font-semibold shadow-[0_0_18px_rgba(168,85,247,0.45)] transition-all transform hover:-translate-y-0.5"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleQuickAdd}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
            isAddedFeedback
              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 scale-105 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
              : 'bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border-purple-500/30 hover:border-purple-400'
          }`}
          title="Add to Shopping Cart"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
