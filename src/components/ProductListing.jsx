import { useState, useMemo, useEffect } from 'react';
import { IPHONE_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { SmokyAtmosphere } from './SmokyAtmosphere';
import { Sparkles, Search, ArrowUpDown, ArrowRight } from 'lucide-react';

export const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const handleCollection = (event) => {
      if (event.detail?.section === 'iphone') {
        setSelectedCategory(event.detail.category || 'All');
        setSearchQuery('');
      }
    };
    const handleSearch = (event) => {
      setSelectedCategory('All');
      setSearchQuery(event.detail || '');
    };
    window.addEventListener('store-collection', handleCollection);
    window.addEventListener('store-search', handleSearch);
    return () => {
      window.removeEventListener('store-collection', handleCollection);
      window.removeEventListener('store-search', handleSearch);
    };
  }, []);

  const categories = [
    { id: 'All', label: 'All Models' },
    { id: 'Pro', label: 'iPhone Pro & Max' },
    { id: 'Air', label: 'iPhone Air (Ultra-Thin)' },
    { id: 'Standard', label: 'iPhone Standard & SE' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...IPHONE_PRODUCTS];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.series === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.specs.chip.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleViewAll = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <section id="iphone" className="py-20 bg-[#05020a] text-white relative border-t border-purple-500/15 overflow-hidden">
      {/* Soft Drifting Purple Fog Background */}
      <SmokyAtmosphere density="low" showSpotlight={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Matching Image 3: "Explore iPhone Models" + "View All →" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-500/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc] bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
              <span>The iPhone Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Explore iPhone <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">Models</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Find the perfect iPhone for you. Precision craftsmanship in Grade 5 Titanium and color-infused aerospace glass.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white transition-colors py-2 group shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filters and Controls Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-purple-500/15">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                    : 'bg-[#120822] text-gray-400 hover:text-white hover:bg-white/10 border border-purple-500/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-60">
              <Search className="w-4 h-4 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models..."
                className="w-full bg-[#100720] text-xs text-white pl-9 pr-3 py-2.5 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400 placeholder:text-gray-500"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#100720] text-xs text-gray-300 pl-3 pr-8 py-2.5 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400 appearance-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-purple-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Responsive Product Grid: 5 Products */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0d061c]/50 rounded-3xl border border-purple-500/20">
            <p className="text-gray-400 text-sm">No models found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-purple-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
