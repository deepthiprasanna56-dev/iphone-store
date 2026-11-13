import { useState } from 'react';
import { Camera, Cpu, Film, Shield, Sparkles, Check } from 'lucide-react';

export const Highlights = () => {
  const [activeTab, setActiveTab] = useState('camera-control');

  const highlightsData = [
    {
      id: 'camera-control',
      title: 'Camera Control',
      subtitle: 'Take total control of your camera. Without touching the screen.',
      description: 'Now you can capture the perfect photo or video in record time. Camera Control gives you an easier way to quickly access camera tools, adjust exposure, depth of field, switch lenses, and zoom digitally.',
      icon: Camera,
      tag: 'New Hardware Feature',
      gradient: 'from-amber-500/20 to-orange-500/5',
      stat: 'Instant Access',
      statLabel: 'Zero shutter lag & tactile haptics',
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'a18-pro',
      title: 'A18 Pro Chip',
      subtitle: 'Colossal performance. Incredible efficiency.',
      description: 'Featuring a faster 16-core Neural Engine, enhanced 6-core CPU, and 6-core GPU, A18 Pro drives Apple Intelligence, console-quality graphics with hardware-accelerated ray tracing, and unmatched battery optimization.',
      icon: Cpu,
      tag: 'Industry-Leading Silicon',
      gradient: 'from-blue-500/20 to-cyan-500/5',
      stat: 'Up to 20%',
      statLabel: 'Faster CPU than previous generation',
      image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cinematic',
      title: '4K 120 fps Dolby Vision',
      subtitle: 'Cinema in your pocket. 120 frames of pure magic.',
      description: 'iPhone 16 Pro elevates video recording to a whole new tier. Capture cinematic slow-motion in 4K 120 fps Dolby Vision, and adjust playback speed after you shoot in the refreshed Photos app.',
      icon: Film,
      tag: 'Pro Video Studio',
      gradient: 'from-purple-500/20 to-pink-500/5',
      stat: '4K 120fps',
      statLabel: 'Highest resolution and frame rate ever in iPhone',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'titanium',
      title: 'Grade 5 Titanium',
      subtitle: 'Strength meets refinement. Featherlight durability.',
      description: 'Forged in Grade 5 titanium with a refined microblasted texture. Titanium has one of the highest strength-to-weight ratios of any metal, making these our lightest and most durable Pro models ever.',
      icon: Shield,
      tag: 'Aerospace Engineering',
      gradient: 'from-stone-500/20 to-zinc-500/5',
      stat: 'Grade 5',
      statLabel: 'Same alloy used in spacecraft sent to Mars',
      image: 'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const currentHighlight = highlightsData.find(h => h.id === activeTab) || highlightsData[0];

  return (
    <section id="highlights" className="py-20 bg-[#000000] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af88] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Pro Innovations
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Get the highlights.
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
            Engineered from the ground up to empower your creativity and everyday tasks with Apple Intelligence.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar scroll-smooth">
          {highlightsData.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-white/15 text-white border-white/30 shadow-lg'
                    : 'bg-[#161617] text-gray-400 border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#2997ff]' : 'text-gray-500'}`} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Showcase for Active Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Info Card */}
          <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-gradient-to-br ${currentHighlight.gradient} bg-[#161617] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden`}>
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300 inline-block mb-6">
                {currentHighlight.tag}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">
                {currentHighlight.title}
              </h3>
              <p className="text-lg sm:text-xl text-gray-200 font-medium mb-4">
                {currentHighlight.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
                {currentHighlight.description}
              </p>
            </div>

            {/* Stat Callout */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {currentHighlight.stat}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  {currentHighlight.statLabel}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                <currentHighlight.icon className="w-6 h-6 text-[#2997ff]" />
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#161617] border border-white/10 p-6 flex flex-col items-center justify-center overflow-hidden relative min-h-[350px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={currentHighlight.image}
              alt={currentHighlight.title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#2997ff] font-medium mb-1">
                <Check className="w-4 h-4" />
                Featured on iPhone 16 Pro Series
              </div>
              <p className="text-xs text-gray-300">
                Experience next-generation tactile hardware designed in Cupertino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
