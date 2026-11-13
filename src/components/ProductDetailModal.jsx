import { useState } from 'react';
import { useCart } from '../context/useCart';
import { CURRENCY } from '../data/products';
import { ThreeIPhoneCanvas } from './ThreeIPhoneCanvas';
import { X, ShieldCheck, Truck, RefreshCw, Heart, Check, Box, Image as ImageIcon } from 'lucide-react';

export const ProductDetailModal = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();

  // Selected state for configurator
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'photo'
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'reviews' | 'shipping'

  if (!selectedProduct) return null;

  // Active color and storage resolution
  const currentColor = selectedColor || selectedProduct.colors[0];
  const currentImage = activeImage || currentColor?.image;
  const currentStorage = selectedStorage || selectedProduct.storageOptions[0];

  // Gallery items
  const gallery = currentColor?.gallery && currentColor.gallery.length > 0
    ? currentColor.gallery
    : [currentColor?.image].filter(Boolean);

  // Price Calculation
  const basePrice = selectedProduct.startingPrice;
  const storageAddon = currentStorage?.priceDelta || 0;
  const currentTotal = basePrice + storageAddon;

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setActiveImage(color.image);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, {
      color: currentColor,
      storage: currentStorage,
    });
    handleClose();
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setSelectedColor(null);
    setActiveImage(null);
    setSelectedStorage(null);
    setViewMode('3d');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0c051a] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(112,26,179,0.45)] overflow-hidden my-auto max-h-[92vh] flex flex-col text-white">
        
        {/* Modal Top Header with Breadcrumbs & Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#140826]/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Home</span>
            <span>&gt;</span>
            <span>iPhone Lineup</span>
            <span>&gt;</span>
            <span className="text-purple-300 font-semibold">{selectedProduct.name}</span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left 3D Stage / Gallery | Right Luxury Customization */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          
          {/* Left Column: Vertical Thumbnails + 3D WebGL / Photo Stage */}
          <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4 items-center sm:items-start justify-center">
            
            {/* Vertical Angle Thumbnails */}
            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible py-1 shrink-0">
              <button
                onClick={() => setViewMode('3d')}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all bg-[#090314] ${
                  viewMode === '3d'
                    ? 'border-purple-500 ring-2 ring-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.4)] text-[#c084fc]'
                    : 'border-white/10 opacity-70 hover:opacity-100 hover:border-purple-500/30 text-gray-400'
                }`}
                title="3D WebGL View"
              >
                <Box className="w-5 h-5" />
                <span className="text-[9px] font-bold">3D Model</span>
              </button>

              {gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveImage(imgUrl);
                    setViewMode('photo');
                  }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border overflow-hidden p-1.5 transition-all bg-[#090314] ${
                    currentImage === imgUrl && viewMode === 'photo'
                      ? 'border-purple-500 ring-2 ring-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-purple-500/30'
                  }`}
                >
                  <img src={imgUrl} alt={`Angle ${i + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Main Stage: 3D Canvas or Photo View */}
            <div className="relative aspect-square w-full rounded-3xl bg-[#070312]/90 border border-purple-500/25 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Radial glow matching current color */}
              <div
                className="absolute inset-0 opacity-35 blur-3xl transition-colors duration-700 pointer-events-none"
                style={{ backgroundColor: currentColor?.hex }}
              />

              {viewMode === '3d' ? (
                /* Three.js Interactive 3D Model */
                <ThreeIPhoneCanvas activeColor={currentColor} />
              ) : (
                /* High-Res Photo View */
                <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                  <img
                    src={currentImage}
                    alt={selectedProduct.name}
                    className="max-h-[90%] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* View Mode Toggle Pill Top Right */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#120824]/85 backdrop-blur-xl p-1 rounded-full border border-purple-500/30 text-[11px]">
                <button
                  onClick={() => setViewMode('3d')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all ${
                    viewMode === '3d'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Box className="w-3 h-3" />
                  <span>3D View</span>
                </button>
                <button
                  onClick={() => setViewMode('photo')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all ${
                    viewMode === 'photo'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>Gallery</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Product Configuration */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Badge & Title */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full shadow-md">
                {selectedProduct.badge || 'Bestseller'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {selectedProduct.name}
              </h3>
              
              {/* Price */}
              <div className="text-3xl font-extrabold text-white mt-1">
                {CURRENCY.format(currentTotal)}
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400 text-sm">
                  {'★★★★★'}
                </div>
                <span className="text-xs text-gray-300 font-semibold">{selectedProduct.rating}</span>
                <span className="text-xs text-gray-400">({selectedProduct.reviewsCount} reviews)</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Select Color */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2.5">
                Select Color: <span className="text-[#c084fc] font-semibold">{currentColor?.name}</span>
              </label>
              <div className="flex items-center gap-3">
                {selectedProduct.colors.map((color) => {
                  const isSelected = currentColor?.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color)}
                      className={`w-8 h-8 rounded-full ${color.bgClass} transition-all relative border border-white/20 ${
                        isSelected
                          ? 'ring-2 ring-[#c084fc] ring-offset-2 ring-offset-[#0c051a] scale-110 shadow-[0_0_12px_rgba(192,132,252,0.8)]'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      title={color.name}
                      aria-label={`Select ${color.name}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Select Storage */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2.5">
                Select Storage:
              </label>
              <div className="flex items-center gap-3">
                {selectedProduct.storageOptions.map((opt) => {
                  const isSelected = currentStorage?.capacity === opt.capacity;
                  return (
                    <button
                      key={opt.capacity}
                      onClick={() => setSelectedStorage(opt)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                          : 'bg-[#150a26] text-gray-300 border-purple-500/20 hover:border-purple-500/40'
                      }`}
                    >
                      {opt.capacity}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons: Add to Cart + Wishlist Heart */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#9333ea] to-[#ec4899] hover:from-[#a855f7] hover:to-[#f472b6] text-white text-sm font-semibold shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>+ Add to Cart</span>
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${
                  isWishlisted
                    ? 'bg-pink-500/20 border-pink-500 text-pink-400'
                    : 'bg-white/5 border-purple-500/20 text-gray-400 hover:text-white hover:border-purple-500/40'
                }`}
                title="Save to Wishlist"
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* 3 Value Badges: Free Shipping, 1 Year Warranty, Easy Returns */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-purple-500/15 text-center text-[10px] text-gray-300">
              <div className="bg-[#150a26]/60 p-2.5 rounded-xl border border-purple-500/15 flex flex-col items-center">
                <Truck className="w-4 h-4 text-[#c084fc] mb-1" />
                <span className="font-semibold text-white">Free Shipping</span>
                <span className="text-gray-400 text-[9px]">On all orders</span>
              </div>
              <div className="bg-[#150a26]/60 p-2.5 rounded-xl border border-purple-500/15 flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="font-semibold text-white">1 Year Warranty</span>
                <span className="text-gray-400 text-[9px]">Apple Care</span>
              </div>
              <div className="bg-[#150a26]/60 p-2.5 rounded-xl border border-purple-500/15 flex flex-col items-center">
                <RefreshCw className="w-4 h-4 text-[#ec4899] mb-1" />
                <span className="font-semibold text-white">Easy Returns</span>
                <span className="text-gray-400 text-[9px]">Within 14 days</span>
              </div>
            </div>

            {/* Tabs: Specifications | Reviews | Shipping */}
            <div className="pt-2">
              <div className="flex border-b border-purple-500/20 text-xs font-semibold gap-6">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'specs' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Specifications
                  {activeTab === 'specs' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'reviews' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Reviews ({selectedProduct.reviewsCount})
                  {activeTab === 'reviews' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'shipping' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Shipping
                  {activeTab === 'shipping' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </button>
              </div>

              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-300 py-3 animate-in fade-in duration-200">
                  <div>
                    <span className="text-gray-400 text-[10px] block">Display:</span>
                    <span className="text-white font-medium">{selectedProduct.specs.screen}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">Chip:</span>
                    <span className="text-[#c084fc] font-medium">{selectedProduct.specs.chip}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">Camera:</span>
                    <span className="text-white font-medium">{selectedProduct.specs.camera}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">Battery:</span>
                    <span className="text-white font-medium">{selectedProduct.specs.battery}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">Storage:</span>
                    <span className="text-white font-medium">{currentStorage?.capacity}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">OS:</span>
                    <span className="text-white font-medium">{selectedProduct.specs.os || 'iOS 26'}</span>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="py-3 text-xs space-y-2 text-gray-300 animate-in fade-in duration-200">
                  <div className="bg-[#150a26]/60 p-2.5 rounded-xl border border-purple-500/15">
                    <div className="flex items-center justify-between text-amber-400 font-bold mb-1">
                      <span>★★★★★ "Unmatched 3D Titanium Feel"</span>
                      <span className="text-gray-500 text-[10px]">Verified Buyer</span>
                    </div>
                    <p className="text-gray-400 text-[11px]">
                      The deep purple titanium is breathtaking in person. Camera Control button makes photo capture instantaneous.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="py-3 text-xs text-gray-300 space-y-1.5 animate-in fade-in duration-200">
                  <p className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> Free Express Delivery across India & Worldwide
                  </p>
                  <p className="text-gray-400">
                    Ships in original luxury packaging with braided USB-C cable and documentation.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
