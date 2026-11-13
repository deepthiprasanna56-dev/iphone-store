import { useState } from 'react';
import { useCart } from '../context/useCart';
import { CURRENCY } from '../data/products';
import { X, CheckCircle, CreditCard, Lock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, grandTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState('apple-pay');
  const [formData, setFormData] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@icloud.com',
    address: 'B-402, Platinum Heights, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    zip: '400050',
    cardNumber: '•••• •••• •••• 8892',
    cardExp: '09/29',
    cardCvc: '•••'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      const generatedId = 'IND' + Math.floor(100000000 + Math.random() * 900000000);
      setOrderId(generatedId);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#10091e] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(112,26,179,0.4)] overflow-hidden my-auto text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#160b29]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#c084fc]" />
            <h2 className="text-lg font-bold">Apple Secure Checkout</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-500/40 text-[#c084fc] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/30">
                Order Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
                Thank you for your order!
              </h3>
              <p className="text-sm text-gray-300">
                Order number: <strong className="text-white font-mono">{orderId}</strong>
              </p>
              <p className="text-xs text-gray-400 mt-2 max-w-md mx-auto">
                We’ve sent your confirmation and tracking details to <span className="text-white">{formData.email}</span>. Estimated delivery: <span className="text-[#c084fc] font-semibold">In 2 business days</span>.
              </p>
            </div>

            <div className="bg-[#150c26] p-4 rounded-2xl border border-purple-500/20 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex items-center justify-between text-gray-400">
                <span>Shipping Address:</span>
                <span className="text-white">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Payment Method:</span>
                <span className="text-white">{paymentMethod === 'apple-pay' ? 'Pay' : 'Credit Card ending 8892'}</span>
              </div>
              <div className="flex items-center justify-between text-gray-400 pt-1 border-t border-purple-500/15">
                <span>Total Paid:</span>
                <span className="text-white font-bold text-sm">{CURRENCY.format(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold shadow-lg transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          /* Checkout Form View */
          <form onSubmit={handleCompleteOrder} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Express Apple Pay Option */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Express Checkout
              </label>
              <button
                type="button"
                onClick={() => setPaymentMethod('apple-pay')}
                className={`w-full py-3 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 border transition-all ${
                  paymentMethod === 'apple-pay'
                    ? 'bg-white text-black border-white shadow-xl ring-2 ring-purple-500'
                    : 'bg-[#180e2d] text-white border-purple-500/20 hover:bg-[#22143d]'
                }`}
              >
                <span className="text-base font-semibold">Pay</span>
                <span className="text-xs font-normal">Instant One-Touch</span>
              </button>
            </div>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-purple-500/20"></div>
              <span className="flex-shrink mx-4 text-xs text-gray-500 uppercase">Or pay with card</span>
              <div className="flex-grow border-t border-purple-500/20"></div>
            </div>

            {/* Shipping Details */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                Shipping Address
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="bg-[#150c26] text-xs text-white p-3 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="bg-[#150c26] text-xs text-white p-3 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400"
                />
              </div>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                required
                className="w-full bg-[#150c26] text-xs text-white p-3 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                  className="bg-[#150c26] text-xs text-white p-3 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                  className="bg-[#150c26] text-xs text-white p-3 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400"
                />
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  placeholder="PIN Code"
                  required
                  className="bg-[#150c26] text-xs text-white p-3 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                Payment Information
              </label>
              <div className="p-3.5 bg-[#150c26] rounded-xl border border-purple-500/20 space-y-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#c084fc]" />
                  <span className="text-xs font-medium text-white">Credit or Debit Card</span>
                </div>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card Number"
                  className="w-full bg-black/40 text-xs text-white p-2.5 rounded-lg border border-purple-500/15 focus:outline-none focus:border-purple-400"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="cardExp"
                    value={formData.cardExp}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="bg-black/40 text-xs text-white p-2.5 rounded-lg border border-purple-500/15 focus:outline-none focus:border-purple-400"
                  />
                  <input
                    type="text"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    className="bg-black/40 text-xs text-white p-2.5 rounded-lg border border-purple-500/15 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>
            </div>

            {/* Order Total & Submit */}
            <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400">Total:</span>
                <div className="text-2xl font-bold text-white">{CURRENCY.format(grandTotal)}</div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Authorizing...
                  </span>
                ) : (
                  <>
                    <span>Place Your Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
