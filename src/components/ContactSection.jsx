import { useState } from 'react';
import { useCart } from '../context/useCart';
import { MessageSquare, Phone, Calendar, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactSection = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Buying Advice & Model Comparison',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your inquiry has been submitted! An Apple Specialist will contact you shortly.', 'success');
  };

  return (
    <section id="contact" className="py-20 bg-[#07040d] text-white border-t border-purple-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc] bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>Apple Specialist & Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            We’re here to help you.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Shop one-on-one with an Apple Specialist, book a Genius Bar session, or get instant support for your iPhone.
          </p>
        </div>

        {/* 3 Apple Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#120b22] p-6 rounded-3xl border border-purple-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-[#c084fc] flex items-center justify-center mb-4 border border-purple-500/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Shop with a Specialist</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect live with an Apple Specialist online to choose the right phone finish, storage, and trade-in.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-500/15 text-xs text-[#c084fc] font-semibold flex items-center gap-1">
              Available 7 a.m. – 10 p.m.
            </div>
          </div>

          <div className="bg-[#120b22] p-6 rounded-3xl border border-purple-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4 border border-pink-500/30">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Genius Bar Reservation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Get hands-on hardware support and genuine parts repairs by certified Apple technicians at an Apple Store near you.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-500/15 text-xs text-pink-400 font-semibold flex items-center gap-1">
              Same-day appointments available
            </div>
          </div>

          <div className="bg-[#120b22] p-6 rounded-3xl border border-purple-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Direct Phone Support</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Call toll-free for immediate assistance with orders, delivery tracking, AppleCare, or setup questions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-500/15 text-xs text-emerald-400 font-semibold flex items-center gap-1">
              000800 1009009 (Toll-Free)
            </div>
          </div>
        </div>

        {/* Contact Inquiry Form Card */}
        <div className="max-w-2xl mx-auto bg-[#120b22] rounded-3xl border border-purple-500/25 p-6 sm:p-10 shadow-[0_20px_60px_rgba(112,26,179,0.3)]">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send us a message
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Have questions about an iPhone model or shipping? Fill out the form below.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 text-[#c084fc] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto">
                Thank you, {formData.name || 'valued customer'}. An Apple Specialist has received your request and will respond to <strong className="text-white">{formData.email}</strong> within 1 hour.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', topic: 'Buying Advice & Model Comparison', message: '' });
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors border border-white/15"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Aarav Sharma"
                    className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aarav@icloud.com"
                    className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Topic of Interest
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400 cursor-pointer"
                  >
                    <option value="Buying Advice & Model Comparison" className="bg-[#120b22]">Buying Advice & Model Comparison</option>
                    <option value="Apple Trade In Valuation" className="bg-[#120b22]">Apple Trade In Valuation</option>
                    <option value="Order Tracking & Delivery" className="bg-[#120b22]">Order Tracking & Delivery</option>
                    <option value="Technical Support & AppleCare" className="bg-[#120b22]">Technical Support & AppleCare</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                  Your Message or Question *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you'd like help with..."
                  className="w-full bg-[#180e2d] text-xs text-white p-3 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
