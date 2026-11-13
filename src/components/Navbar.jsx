import { useState, useEffect } from 'react';
import { useCart } from '../context/useCart';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export const Navbar = ({ activeSection, setActiveSection }) => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'iPhone', id: 'iphone' },
    { name: 'Accessories', id: 'accessories' },
    { name: 'Offers', id: 'offers' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    window.dispatchEvent(new CustomEvent('store-search', { detail: searchQuery.trim() }));
    handleNavClick('iphone');
  };

  return (
    <>
      {/* Main Luxury Apple Frosted Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090514]/85 backdrop-blur-2xl border-b border-purple-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-[#07040d]/70 backdrop-blur-xl border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Apple Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-white hover:opacity-85 transition-opacity group"
            aria-label="iPhone Store Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform">
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 170 170"
              >
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-7.24-11.02-12.87-23.77-16.9-38.25-4.03-14.48-6.05-28.02-6.05-40.61 0-14.7 3.52-26.65 10.56-35.85 7.04-9.2 16.02-13.88 26.94-14.05 4.81 0 10.15 1.25 16.02 3.75 5.87 2.5 9.77 3.8 11.71 3.9 2.18-.21 6.13-1.57 11.85-4.08 5.72-2.51 10.8-3.68 15.24-3.51 8.51.35 15.86 3.16 22.04 8.44 6.18 5.27 10.5 12.19 12.96 20.74-7.6 4.58-12.63 10.87-15.09 18.88-2.46 8.01-2.4 15.93.18 23.77 2.59 7.84 7.28 13.85 14.07 18.03 6.79 4.18 14.44 6.21 22.95 6.09-.75 4.54-1.97 9.4-3.66 14.58zm-32.9-106.82c0 5.48-1.96 10.84-5.88 16.08-3.92 5.24-8.87 9.07-14.85 11.49-.93-3.26-1.39-6.42-1.39-9.48 0-5.48 2.05-10.84 6.15-16.08 4.1-5.24 9.17-9.06 15.22-11.45.5 3.13.75 6.28.75 9.44z" />
              </svg>
            </div>
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              iPhone Store
            </span>
          </button>

          {/* Center Navigation Links (Matching reference image) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-all ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Search, Bag Badge, Mobile Hamburger */}
          <div className="flex items-center space-x-3.5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/5"
              aria-label="Search models"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Bag Icon with Luxury Purple Count Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors relative border border-white/5 group"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-105 transition-transform" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/5 text-gray-300 hover:text-white flex items-center justify-center border border-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="bg-[#120b20] border-t border-b border-purple-500/20 px-4 py-3 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search iPhone 17 Pro, MagSafe, AirPods..."
                className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-gray-500"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
              />
              <button
                onClick={handleSearch}
                className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-3.5 py-1.5 rounded-full font-medium transition-colors shadow-md"
              >
                Find
              </button>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0d071c]/95 backdrop-blur-2xl border-b border-purple-500/20 px-6 py-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg font-medium py-2 border-b border-white/5 transition-colors ${
                    activeSection === link.id ? 'text-[#c084fc]' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="flex items-center gap-2 text-sm text-[#c084fc] font-medium"
                >
                  <ShoppingBag className="w-4 h-4" />
                  View Bag ({totalItemsCount})
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
