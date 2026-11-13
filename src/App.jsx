import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LuxuryMediaBento } from './components/LuxuryMediaBento';
import { CollectionsSection } from './components/CollectionsSection';
import { ProductListing } from './components/ProductListing';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CompareSection } from './components/CompareSection';
import { AccessoriesSection } from './components/AccessoriesSection';
import { TradeInOffers } from './components/TradeInOffers';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#07040d] text-[#f5f5f7] flex flex-col font-sans selection:bg-[#a855f7] selection:text-white">
      {/* Top Dynamic Island Alert Toast */}
      <Toast />

      {/* Apple-style Luxury Frosted Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Luxury Hero Section with 3D Motion View & Slow Animation */}
        <Hero />

        {/* Media Bento with Promotional Video & Feature Pillars */}
        <LuxuryMediaBento />

        {/* Curated iPhone and Apple ecosystem collections */}
        <CollectionsSection />

        {/* The iPhone Lineup: Explore iPhone Models */}
        <ProductListing />

        {/* Side-by-Side iPhone Model Comparison Matrix */}
        <CompareSection />

        {/* MagSafe & Audio Accessories Showcase */}
        <AccessoriesSection />

        {/* Apple Trade In Calculator & Financing Offers */}
        <TradeInOffers />

        {/* Apple Specialist Support & Contact Form */}
        <ContactSection />
      </main>

      {/* Luxury Footer with Social Links & Newsletter */}
      <Footer setActiveSection={setActiveSection} />

      {/* Interactive 3D Product Detail & Configurator Modal */}
      <ProductDetailModal />

      {/* Slide-out Apple Bag Cart Drawer */}
      <CartDrawer />

      {/* Apple Pay & Checkout Modal with Confetti */}
      <CheckoutModal />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
