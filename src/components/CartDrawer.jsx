import { useState } from 'react';
import { useCart } from '../context/useCart';
import { CURRENCY } from '../data/products';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    grandTotal,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyPromoCode(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#0e071c] border-l border-purple-500/25 shadow-2xl flex flex-col text-white animate-in slide-in-from-right duration-300">
          
          {/* Header (Matching Reference Image) */}
          <div className="p-6 border-b border-purple-500/20 flex items-center justify-between bg-[#160b2b]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-purple-500/20 text-[#c084fc] flex items-center justify-center border border-purple-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Your Shopping Cart</h2>
                <p className="text-[11px] text-gray-400">Review your items before checkout.</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto text-purple-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">Your Cart is empty.</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Free shipping and luxury packaging on all iPhone models and accessories.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold shadow-md"
                >
                  Explore Models
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 text-xs text-gray-400">
                  <span className="text-purple-300 font-medium">{cartItems.length} items in cart</span>
                  <button
                    onClick={clearCart}
                    className="text-pink-400 hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-4 rounded-2xl bg-[#140b25] border border-purple-500/20 flex gap-4 transition-all hover:border-purple-500/40 shadow-md"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-xl bg-[#090514] p-2 flex items-center justify-center shrink-0 border border-purple-500/15">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full object-contain drop-shadow-md"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-sm font-bold text-white truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-500 hover:text-rose-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-gray-400 space-y-0.5 mt-1">
                        {item.color?.name && (
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-white/20"
                              style={{ backgroundColor: item.color.hex }}
                            />
                            <span>{item.color.name}</span>
                            {item.storage?.capacity && <span>• {item.storage.capacity}</span>}
                          </div>
                        )}
                        {item.appleCare && (
                          <div className="text-emerald-400 flex items-center gap-1 text-[10px]">
                            <ShieldCheck className="w-3 h-3" />
                            {item.appleCare.name}
                          </div>
                        )}
                      </div>

                      {/* Quantity Controls & Price */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-purple-500/15">
                        <div className="flex items-center gap-2 bg-black/40 rounded-lg p-0.5 border border-purple-500/20">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 rounded hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold px-2 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 rounded hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-sm font-bold text-white">
                          {CURRENCY.format(item.unitPrice * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <div className="pt-4 border-t border-purple-500/15">
                  {appliedPromo ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs">
                      <div className="flex items-center gap-2 text-purple-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{appliedPromo.label} ({appliedPromo.code})</span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-pink-400 hover:text-white font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Coupon: TITANIUM100 or STUDENT"
                          className="w-full bg-[#140b25] text-xs text-white pl-9 pr-3 py-2.5 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400 placeholder:text-gray-500 uppercase"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-white text-xs font-semibold rounded-xl border border-purple-500/30 transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer Order Summary & Checkout Button (Matching Reference Image) */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-purple-500/20 bg-[#160b2b] space-y-3.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-200">
                Order Summary
              </h3>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">{CURRENCY.format(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-{CURRENCY.format(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-400 font-semibold">Free</span>
                </div>
              </div>

              <div className="pt-2 border-t border-purple-500/20 flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">Total</span>
                <div className="text-2xl font-extrabold text-white">
                  {CURRENCY.format(grandTotal)}
                </div>
              </div>

              {/* Luxury Gradient Proceed to Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#9333ea] to-[#ec4899] hover:from-[#a855f7] hover:to-[#f472b6] text-white text-sm font-semibold shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
                <Lock className="w-3 h-3 text-purple-400" />
                <span>Secure Checkout with 256-Bit Encryption</span>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs text-purple-300 hover:text-white pt-1"
              >
                ← Continue Shopping
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
