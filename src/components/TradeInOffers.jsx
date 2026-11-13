import { useState } from 'react';
import { TRADE_IN_DEVICES, IPHONE_PRODUCTS, CURRENCY } from '../data/products';
import { useCart } from '../context/useCart';
import { RefreshCw, CreditCard, GraduationCap, Truck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const TradeInOffers = () => {
  const { setSelectedProduct } = useCart();
  const [selectedDevice, setSelectedDevice] = useState(TRADE_IN_DEVICES[0]);
  const [targetPhone, setTargetPhone] = useState(IPHONE_PRODUCTS[0]);

  const estimatedCredit = selectedDevice.maxCredit;
  const netPhonePrice = Math.max(0, targetPhone.startingPrice - estimatedCredit);
  const netMonthly = Math.round(netPhonePrice / 24);

  return (
    <section id="offers" className="py-20 bg-[#07040d] text-white border-t border-purple-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/25 mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Special Ways to Save</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Apple Trade In & Financing
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Get up to ₹75,000 in credit when you trade in an eligible device. Or pay 0% APR interest over 24 months.
          </p>
        </div>

        {/* Interactive Trade-In Calculator Bento */}
        <div className="bg-[#120b22] rounded-3xl p-6 sm:p-10 border border-purple-500/25 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Calculator Controls */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
                <Sparkles className="w-4 h-4" /> Instant Estimate Tool
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                See how much your old device is worth today.
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Answer a couple questions to get your instant valuation. We'll send you a prepaid trade-in kit with your new iPhone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-2">
                    1. Select your current smartphone
                  </label>
                  <select
                    value={selectedDevice.model}
                    onChange={(e) => {
                      const dev = TRADE_IN_DEVICES.find(d => d.model === e.target.value);
                      if (dev) setSelectedDevice(dev);
                    }}
                    className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400 cursor-pointer"
                  >
                    {TRADE_IN_DEVICES.map((d) => (
                      <option key={d.model} value={d.model} className="bg-[#120b22]">
                        {d.model} (Up to {CURRENCY.format(d.maxCredit)})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-2">
                    2. Select the iPhone you want
                  </label>
                  <select
                    value={targetPhone.id}
                    onChange={(e) => {
                      const p = IPHONE_PRODUCTS.find(item => item.id === e.target.value);
                      if (p) setTargetPhone(p);
                    }}
                    className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400 cursor-pointer"
                  >
                    {IPHONE_PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id} className="bg-[#120b22]">
                        {p.name} (From {CURRENCY.format(p.startingPrice)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free doorstep trade-in pickup and instant valuation guarantee.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Backed by Apple Trade In Price Guarantee.</span>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#190d30] to-[#100720] p-6 rounded-2xl border border-purple-500/30 text-center flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Estimated Trade-In Savings
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-4 mb-1">
                  {CURRENCY.format(estimatedCredit)}
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  Credited instantly toward your {targetPhone.name}
                </p>

                <div className="bg-black/50 p-4 rounded-xl space-y-2 text-left text-xs mb-6 border border-white/5">
                  <div className="flex justify-between text-gray-400">
                    <span>Retail Price:</span>
                    <span>{CURRENCY.format(targetPhone.startingPrice)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>Trade-In Credit:</span>
                    <span>-{CURRENCY.format(estimatedCredit)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/10">
                    <span>Your Net Price:</span>
                    <span className="text-emerald-400">{CURRENCY.format(netPhonePrice)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 pt-1 text-[11px]">
                    <span>Or 0% Monthly APR:</span>
                    <span className="text-white font-semibold">{CURRENCY.format(netMonthly)}/mo.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(targetPhone)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold shadow-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Upgrade to {targetPhone.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#120b22] p-6 rounded-3xl border border-purple-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-[#c084fc] flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">0% APR for 24 Months</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Pay over time, interest-free with Apple Card Monthly Installments or eligible bank credit cards.
              </p>
            </div>
            <span className="text-xs text-[#c084fc] font-semibold mt-4 block">Learn about Financing →</span>
          </div>

          <div className="bg-[#120b22] p-6 rounded-3xl border border-purple-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Education Savings</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Special pricing available to students, teachers, and faculty. Use coupon code <code className="text-white bg-white/10 px-1 py-0.5 rounded">STUDENT</code> for instant savings.
              </p>
            </div>
            <span className="text-xs text-pink-400 font-semibold mt-4 block">Verify Student Status →</span>
          </div>

          <div className="bg-[#120b22] p-6 rounded-3xl border border-purple-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Free Delivery & Returns</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Enjoy free express delivery on all orders. Free 14-day hassle-free returns.
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-semibold mt-4 block">Delivery details →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
