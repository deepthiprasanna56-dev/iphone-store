import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Footer = ({ setActiveSection }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#090514] text-gray-400 text-xs pt-16 pb-12 border-t border-purple-500/15 font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Motto (Matching Reference: iPhone Store — Dream it. Own it.) */}
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-7.24-11.02-12.87-23.77-16.9-38.25-4.03-14.48-6.05-28.02-6.05-40.61 0-14.7 3.52-26.65 10.56-35.85 7.04-9.2 16.02-13.88 26.94-14.05 4.81 0 10.15 1.25 16.02 3.75 5.87 2.5 9.77 3.8 11.71 3.9 2.18-.21 6.13-1.57 11.85-4.08 5.72-2.51 10.8-3.68 15.24-3.51 8.51.35 15.86 3.16 22.04 8.44 6.18 5.27 10.5 12.19 12.96 20.74-7.6 4.58-12.63 10.87-15.09 18.88-2.46 8.01-2.4 15.93.18 23.77 2.59 7.84 7.28 13.85 14.07 18.03 6.79 4.18 14.44 6.21 22.95 6.09-.75 4.54-1.97 9.4-3.66 14.58zm-32.9-106.82c0 5.48-1.96 10.84-5.88 16.08-3.92 5.24-8.87 9.07-14.85 11.49-.93-3.26-1.39-6.42-1.39-9.48 0-5.48 2.05-10.84 6.15-16.08 4.1-5.24 9.17-9.06 15.22-11.45.5 3.13.75 6.28.75 9.44z" />
                </svg>
              </div>
              <span className="font-bold text-white text-base">iPhone Store</span>
            </div>
            <p className="text-gray-400 text-xs italic">Dream it. Own it.</p>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              The premier destination for iPhone 17 Pro, Apple Intelligence, and luxury MagSafe accessories.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => scrollTo('home')} className="hover:text-purple-300 transition-colors">Home</button></li>
              <li><button onClick={() => scrollTo('iphone')} className="hover:text-purple-300 transition-colors">iPhone</button></li>
              <li><button onClick={() => scrollTo('accessories')} className="hover:text-purple-300 transition-colors">Accessories</button></li>
              <li><button onClick={() => scrollTo('offers')} className="hover:text-purple-300 transition-colors">Offers</button></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Support</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => scrollTo('contact')} className="hover:text-purple-300 transition-colors">Contact Us</button></li>
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">FAQ</span></li>
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">Shipping Info</span></li>
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">Returns & Warranty</span></li>
            </ul>
          </div>

          {/* Col 4: Follow Us (Matching Image 3: YT, Insta, X, FB, LinkedIn) */}
          <div>
            <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Follow Us</h4>
            <div className="flex items-center gap-2.5">
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-purple-500/20" title="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-purple-500/20" title="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-purple-500/20" title="X (Twitter)">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-purple-500/20" title="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-purple-500/20" title="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 5: Stay Updated Newsletter (Matching Reference Image) */}
          <div>
            <h4 className="font-semibold text-white mb-1.5 uppercase tracking-wider text-[11px]">Stay Updated</h4>
            <p className="text-gray-400 text-[11px] mb-3">Get the latest offers and updates.</p>

            {isSubscribed ? (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#140b25] text-xs text-white px-3.5 py-2.5 rounded-xl border border-purple-500/20 focus:outline-none focus:border-purple-400 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white flex items-center justify-center shrink-0 shadow-md transition-all"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal Bar (Matching Reference) */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © 2026 iPhone Store. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="hover:text-purple-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-purple-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
