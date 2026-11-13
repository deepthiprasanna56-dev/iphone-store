import { useState } from 'react';
import { useCart } from '../context/useCart';
import { IPHONE_PRODUCTS, CURRENCY } from '../data/products';
import { COMPARISON_METRICS } from '../data/comparison';
import { Sparkles, ArrowRight, Check, Minus } from 'lucide-react';

export const CompareSection = () => {
  const { setSelectedProduct } = useCart();
  const [model1Id, setModel1Id] = useState('iphone-17-pro-max');
  const [model2Id, setModel2Id] = useState('iphone-17-pro');
  const [model3Id, setModel3Id] = useState('iphone-17');

  const model1 = IPHONE_PRODUCTS.find(p => p.id === model1Id) || IPHONE_PRODUCTS[0];
  const model2 = IPHONE_PRODUCTS.find(p => p.id === model2Id) || IPHONE_PRODUCTS[1];
  const model3 = IPHONE_PRODUCTS.find(p => p.id === model3Id) || IPHONE_PRODUCTS[2];

  const comparedModels = [model1, model2, model3];

  return (
    <section id="compare" className="py-20 bg-[#07040d] text-white border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc] bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>Side-by-Side Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Compare iPhone Models
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Select and compare technical specifications to discover which model matches your workflow.
          </p>
        </div>

        {/* Model Selectors & Column Headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {comparedModels.map((model, idx) => {
            const setModelFn = idx === 0 ? setModel1Id : idx === 1 ? setModel2Id : setModel3Id;
            return (
              <div
                key={idx}
                className="bg-[#120b22]/80 rounded-3xl p-6 border border-purple-500/20 flex flex-col items-center text-center shadow-xl hover:border-purple-500/40 transition-all"
              >
                {/* Dropdown Selector */}
                <select
                  value={model.id}
                  onChange={(e) => setModelFn(e.target.value)}
                  className="w-full bg-[#180e2d] text-xs font-semibold text-white px-3 py-2 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400 mb-4 text-center cursor-pointer"
                >
                  {IPHONE_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id} className="bg-[#120b22]">
                      {p.name}
                    </option>
                  ))}
                </select>

                {/* Device Preview Image */}
                <div className="w-36 h-36 flex items-center justify-center p-2 my-2">
                  <img
                    src={model.colors[0]?.image}
                    alt={model.name}
                    className="max-h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Color dots preview */}
                <div className="flex items-center gap-1.5 my-2">
                  {model.colors.map((c) => (
                    <span key={c.name} className={`w-3.5 h-3.5 rounded-full ${c.bgClass} border border-white/20`} />
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white mt-1">{model.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{model.tagline}</p>
                
                <div className="text-xl font-extrabold text-white mb-4">
                  From {CURRENCY.format(model.startingPrice)}
                </div>

                <button
                  onClick={() => setSelectedProduct(model)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Configure</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Metrics Table */}
        <div className="bg-[#120b22]/90 rounded-3xl border border-purple-500/20 overflow-hidden shadow-2xl">
          {COMPARISON_METRICS.map((section, sIdx) => (
            <div key={section.category} className={sIdx > 0 ? 'border-t border-purple-500/20' : ''}>
              {/* Category Header */}
              <div className="bg-[#190e2e] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-purple-300">
                {section.category}
              </div>

              {/* Metric rows */}
              <div className="divide-y divide-purple-500/10">
                {section.items.map((item) => (
                  <div key={item.label} className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="text-xs font-semibold text-gray-400 md:col-span-1">
                      {item.label}
                    </div>

                    <div className="grid grid-cols-3 md:col-span-3 gap-4 text-center md:text-left">
                      {comparedModels.map((m, mIdx) => {
                        const val = item.getValue(m);
                        return (
                          <div key={mIdx} className="text-xs sm:text-sm font-semibold text-gray-200">
                            {val === 'Yes' ? (
                              <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                                <Check className="w-4 h-4" /> Yes
                              </span>
                            ) : val === 'No' ? (
                              <span className="inline-flex items-center gap-1 text-gray-500 font-normal">
                                <Minus className="w-4 h-4" /> No
                              </span>
                            ) : (
                              val
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
