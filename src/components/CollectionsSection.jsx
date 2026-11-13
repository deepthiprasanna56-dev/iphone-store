import { ACCESSORIES_PRODUCTS, CURRENCY, IPHONE_PRODUCTS } from '../data/products';
import { ArrowRight, Headphones, Radio, Smartphone, Watch } from 'lucide-react';

const collections = [
  {
    id: 'pro', section: 'iphone', category: 'Pro', label: 'Pro lineup',
    title: 'Made for big ideas.', detail: 'Pro camera. Pro performance. Titanium design.',
    product: IPHONE_PRODUCTS.find((item) => item.series === 'Pro'), icon: Smartphone,
    accent: 'from-violet-500/20'
  },
  {
    id: 'iphone', section: 'iphone', category: 'Standard', label: 'iPhone',
    title: 'A little more you.', detail: 'Powerful features in a beautiful everyday iPhone.',
    product: IPHONE_PRODUCTS.find((item) => item.series === 'Standard'), icon: Smartphone,
    accent: 'from-fuchsia-500/20'
  },
  {
    id: 'audio', section: 'accessories', category: 'Audio', label: 'Audio',
    title: 'Sound all around.', detail: 'Personal audio for music, calls, and everything between.',
    product: ACCESSORIES_PRODUCTS.find((item) => item.category === 'Audio'), icon: Headphones,
    accent: 'from-pink-500/20'
  },
  {
    id: 'power', section: 'accessories', category: 'Power', label: 'Power & MagSafe',
    title: 'Click. Charge. Go.', detail: 'A simple, seamless way to power your devices.',
    product: ACCESSORIES_PRODUCTS.find((item) => item.category === 'Power'), icon: Radio,
    accent: 'from-blue-500/20'
  },
  {
    id: 'wearables', section: 'accessories', category: 'Wearables', label: 'Wearables',
    title: 'Your day, in sync.', detail: 'A smarter companion for movement and everyday life.',
    product: ACCESSORIES_PRODUCTS.find((item) => item.category === 'Wearables'), icon: Watch,
    accent: 'from-emerald-500/20'
  }
].filter((collection) => collection.product);

export const CollectionsSection = () => {
  const openCollection = (collection) => {
    window.dispatchEvent(new CustomEvent('store-collection', {
      detail: { section: collection.section, category: collection.category }
    }));
    document.getElementById(collection.section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collections" className="relative overflow-hidden border-y border-purple-500/15 bg-[#090514] py-14 sm:py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,.13),transparent_65%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.18em] text-purple-200">
              Find your favorite
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Shop by collection.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400">
            Explore the iPhone lineup and accessories designed to work beautifully together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {collections.map((collection) => {
            const Icon = collection.icon;
            const image = collection.product.colors?.[0]?.image;
            return (
              <button
                key={collection.id}
                type="button"
                onClick={() => openCollection(collection)}
                className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${collection.accent} to-[#10091d] p-5 text-left shadow-[0_18px_50px_rgba(0,0,0,.2)] transition-all duration-500 hover:-translate-y-1 hover:border-purple-300/35 hover:shadow-[0_22px_60px_rgba(124,58,237,.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-purple-200">{collection.label}</span>
                  <Icon className="h-4 w-4 text-purple-200/80" aria-hidden="true" />
                </div>
                <div className="relative flex min-h-[145px] flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black/25">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(168,85,247,.18),transparent_68%)] transition-opacity duration-500 group-hover:opacity-150" />
                  {image && <img src={image} alt="" loading="lazy" className="relative z-10 max-h-40 w-[82%] object-contain drop-shadow-[0_18px_20px_rgba(0,0,0,.55)] transition-transform duration-700 group-hover:scale-105" />}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold tracking-tight">{collection.title}</h3>
                  <p className="mt-1 min-h-10 text-xs leading-relaxed text-gray-400">{collection.detail}</p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-gray-200">
                      From {CURRENCY.format(collection.product.startingPrice)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-200 transition-all group-hover:gap-2">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
