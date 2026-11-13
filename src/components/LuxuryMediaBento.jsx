import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Zap, Camera, Battery, ShieldCheck, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { MAGSAFE_CHARGER_IMAGE } from '../data/products';

export const LuxuryMediaBento = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="py-20 bg-[#07040d] text-white border-t border-purple-500/15 relative overflow-hidden">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-pink-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc] bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>Cinematic Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">iPhone?</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base">
            Innovation. Performance. Style. Engineered down to the atomic level.
          </p>
        </div>

        {/* Video & Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Promotional Video Showcase Player Card (Matching Image 2) */}
          <div className="lg:col-span-7 bg-[#120b22] border border-purple-500/25 rounded-3xl p-5 sm:p-7 shadow-[0_20px_60px_rgba(112,26,179,0.25)] flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Backlight */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-bl from-purple-600/20 to-pink-600/10 blur-[100px] pointer-events-none" />

            {/* Video Stage Frame */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-purple-500/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85"
                alt="iPhone 17 Pro Cinematic Reveal"
                className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
              />

              {/* Luminous Purple Radial Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-purple-950/25 to-transparent" />

              {/* Play / Pause Interactive Button Center */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#9333ea] to-[#ec4899] text-white flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-110 transition-transform group-hover:shadow-[0_0_50px_rgba(236,72,153,0.8)]"
                aria-label={isPlaying ? 'Pause Promotional Video' : 'Play Promotional Video'}
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
              </button>

              {/* Top Tag: Promotional Video (Matching Image 2) */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/30 text-purple-300">
                  Promotional Video
                </span>
              </div>

              {/* Bottom Video Controls Scrubber Bar */}
              <div className="absolute bottom-3 left-4 right-4 z-20 bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-[11px] text-gray-400">0:00 / 0:08</span>
                </div>

                {/* Progress bar */}
                <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${isPlaying ? 'w-3/4 animate-pulse' : 'w-1/4'}`} />
                </div>

                <div className="flex items-center gap-2.5">
                  <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold text-white mb-1">
                Engineered for Apple Intelligence
              </h3>
              <p className="text-xs text-gray-400">
                Witness the architectural breakthrough of A19 Pro silicon and tactile Camera Control in 4K 120 fps.
              </p>
            </div>
          </div>

          {/* Right Bento Column: MagSafe Accessories & Trade In Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* MagSafe Accessories Card (Matching Image 2) */}
            <div className="bg-[#120b22] border border-purple-500/25 rounded-3xl p-6 sm:p-7 shadow-xl flex items-center justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="space-y-3 z-10 max-w-[58%]">
                <span className="text-[11px] uppercase tracking-wider text-[#c084fc] font-semibold bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  MagSafe Accessories
                </span>
                <h4 className="text-lg font-bold text-white">
                  Snap. Charge. Go.
                </h4>
                <p className="text-xs text-gray-400">
                  Fast wireless power and magnetic alignment for your daily setup.
                </p>
                <a
                  href="#accessories"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-2 rounded-full shadow-md transition-all mt-1"
                >
                  Shop Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* MagSafe Graphic Stage */}
              <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-2xl bg-black/50 p-2 flex items-center justify-center border border-purple-500/20 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src={MAGSAFE_CHARGER_IMAGE}
                  alt="MagSafe Charger"
                  className="max-h-full object-contain drop-shadow-[0_10px_20px_rgba(168,85,247,0.4)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Trade In & Upgrade Card (Matching Image 2) */}
            <div className="bg-[#120b22] border border-purple-500/25 rounded-3xl p-6 sm:p-7 shadow-xl flex items-center justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="space-y-3 z-10 max-w-[58%]">
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Trade In & Upgrade
                </span>
                <h4 className="text-lg font-bold text-white">
                  Get the best value.
                </h4>
                <p className="text-xs text-gray-400">
                  Trade in your current smartphone for up to ₹75,000 instant credit.
                </p>
                <a
                  href="#offers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/15 transition-all mt-1"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Phone Graphic */}
              <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-2xl bg-black/50 p-2 flex items-center justify-center border border-purple-500/20 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=400&q=80"
                  alt="Trade In iPhone"
                  className="max-h-full object-contain drop-shadow-[0_10px_20px_rgba(168,85,247,0.4)]"
                />
              </div>
            </div>

          </div>

        </div>

        {/* 4 Feature Pillars (From reference Image 1 & 2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#120b22]/70 border border-purple-500/20 rounded-2xl p-5 text-center flex flex-col items-center hover:border-purple-500/40 transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-[#c084fc] flex items-center justify-center mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Blazing Fast</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Powered by cutting-edge Apple Silicon with hardware ray tracing.
            </p>
          </div>

          <div className="bg-[#120b22]/70 border border-purple-500/20 rounded-2xl p-5 text-center flex flex-col items-center hover:border-purple-500/40 transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-[#ec4899] flex items-center justify-center mb-3">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Pro-Grade Camera</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              48MP Triple Fusion system with dedicated Camera Control sensor.
            </p>
          </div>

          <div className="bg-[#120b22]/70 border border-purple-500/20 rounded-2xl p-5 text-center flex flex-col items-center hover:border-purple-500/40 transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-emerald-400 flex items-center justify-center mb-3">
              <Battery className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">All-Day Battery</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Up to 33 hours continuous video playback with intelligent power optimization.
            </p>
          </div>

          <div className="bg-[#120b22]/70 border border-purple-500/20 rounded-2xl p-5 text-center flex flex-col items-center hover:border-purple-500/40 transition-all shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-cyan-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Advanced Security</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Face ID, Secure Enclave, and on-device privacy protection built-in.
            </p>
          </div>
        </div>

        {/* Design Assets Callout Strip (Matching Image 2) */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-[#120824]/60 border border-purple-500/20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c084fc]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">Design Assets</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {['Premium', 'Modern', 'Luxury', 'Responsive'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-purple-500/30 text-purple-300 font-medium"
              >
                <CheckCircle className="w-3 h-3 text-[#ec4899]" />
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
