import { useState, useEffect } from 'react';
import { CartContext } from './cartContextInstance';
import { CURRENCY } from '../data/products';

const CART_STORAGE_KEY = 'apple_store_cart_v2';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
      // Initial sample luxury cart items matching reference images!
      return [
        {
          cartItemId: 'sample-iphone-17-pro-max',
          id: 'iphone-17-pro-max',
          name: 'iPhone 17 Pro Max',
          tagline: 'Beyond the ordinary',
          image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85',
          color: { name: 'Deep Purple', hex: '#6b4fa0' },
          storage: { capacity: '256GB' },
          unitPrice: 149900,
          quantity: 1
        },
        {
          cartItemId: 'sample-airpods-pro-2',
          id: 'airpods-pro-2',
          name: 'AirPods Pro 2',
          tagline: 'USB-C Charging',
          image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
          color: { name: 'White', hex: '#ffffff' },
          storage: { capacity: 'Standard' },
          unitPrice: 24900,
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeToast, setActiveToast] = useState(null);
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success', actionText = null, onAction = null) => {
    setActiveToast({ message, type, actionText, onAction });
    setTimeout(() => {
      setActiveToast((current) => (current?.message === message ? null : current));
    }, 4000);
  };

  const addToCart = (product, options = {}) => {
    const selectedColor = options.color || product.colors?.[0] || { name: 'Deep Purple', hex: '#6b4fa0' };
    const selectedStorage = options.storage || product.storageOptions?.[0] || { capacity: '256GB', priceDelta: 0 };
    const appleCare = options.appleCare || null;
    const tradeIn = options.tradeIn || null;

    const itemPrice = (product.startingPrice || 0) + (selectedStorage.priceDelta || 0) + (appleCare?.price || 0);
    const cartItemId = `${product.id}-${selectedColor.name}-${selectedStorage.capacity}-${appleCare ? 'care' : 'nocare'}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += (options.quantity || 1);
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            id: product.id,
            name: product.name,
            tagline: product.tagline,
            image: selectedColor.image || product.colors?.[0]?.image,
            color: selectedColor,
            storage: selectedStorage,
            appleCare,
            tradeIn,
            unitPrice: itemPrice,
            quantity: options.quantity || 1
          }
        ];
      }
    });

    showToast(`Added ${product.name} (${selectedColor.name}, ${selectedStorage.capacity}) to Bag!`, 'success', 'View Bag', () => setIsCartOpen(true));
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from your Shopping Cart', 'info');
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedPromo(null);
  };

  const applyPromoCode = (code) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'TITANIUM100' || cleaned === 'APPLE100') {
      setAppliedPromo({ code: cleaned, discount: 10000, type: 'fixed', label: `${CURRENCY.format(10000)} Apple Store Credit` });
      showToast(`Promo code applied! ${CURRENCY.format(10000)} saved.`, 'success');
      return { success: true };
    } else if (cleaned === 'APPLE10') {
      setAppliedPromo({ code: cleaned, discount: 0.10, type: 'percent', label: '10% Exclusive Privilege Discount' });
      showToast('10% discount applied!', 'success');
      return { success: true };
    } else if (cleaned === 'STUDENT') {
      setAppliedPromo({ code: cleaned, discount: 8000, type: 'fixed', label: `${CURRENCY.format(8000)} Student Savings` });
      showToast(`Student discount applied! ${CURRENCY.format(8000)} saved.`, 'success');
      return { success: true };
    } else {
      showToast('Invalid promo code. Try "TITANIUM100" or "STUDENT".', 'error');
      return { success: false, message: 'Invalid coupon' };
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Promo code removed', 'info');
  };

  // Totals calculation (matches reference image: subtotal - discount = total, Free shipping)
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'fixed') {
      discountAmount = Math.min(appliedPromo.discount, subtotal);
    } else if (appliedPromo.type === 'percent') {
      discountAmount = subtotal * appliedPromo.discount;
    }
  }

  const freeShipping = true;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemsCount,
        subtotal,
        discountAmount,
        grandTotal,
        freeShipping,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        activeToast,
        setActiveToast,
        showToast,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCheckoutOpen,
        setIsCheckoutOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
