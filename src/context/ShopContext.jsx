import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  // Navigation
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    return hash || 'home';
  });

  // Filter state for Shop All
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [intentionFilter, setIntentionFilter] = useState('all');
  const [selectedZodiacSign, setSelectedZodiacSign] = useState(null);
  const [selectedNumerologyNum, setSelectedNumerologyNum] = useState(null);

  // Products catalog with admin overrides
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('bsence_products');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return PRODUCTS;
  });

  // Cart state
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('bsence_cart');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [];
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('bsence_wishlist');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return ['combo-money-nazar'];
  });

  // Coupon state
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  // Orders history
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('bsence_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [
      {
        id: 'BS-89241',
        date: '2026-09-18',
        customer: 'Devina Bannerjee',
        email: 'devina.b@gmail.com',
        phone: '+91 98301 23456',
        city: 'Kolkata',
        state: 'West Bengal',
        pincode: '700019',
        items: [
          { name: 'Super Balanced Combo: Money + Nazar Protection', qty: 1, price: 3499 }
        ],
        total: 3499,
        status: 'Processing',
        paymentMethod: 'UPI'
      },
      {
        id: 'BS-89190',
        date: '2026-09-17',
        customer: 'Karan Mehra',
        email: 'karan.m@yahoo.com',
        phone: '+91 99200 87654',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050',
        items: [
          { name: 'Sacred 5 Mukhi Nepali Rudraksha Mala', qty: 1, price: 4999 }
        ],
        total: 4999,
        status: 'Shipped',
        paymentMethod: 'Credit Card'
      }
    ];
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Synchronize hash with current page
  useEffect(() => {
    window.location.hash = `/${currentPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Listen to hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash && hash !== currentPage) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // Persist storage
  useEffect(() => {
    localStorage.setItem('bsence_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('bsence_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('bsence_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('bsence_products', JSON.stringify(products));
  }, [products]);

  // Notification Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  // Cart operations
  const addToCart = (product, quantity = 1, variant = 'Standard Fit') => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.variant === variant
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, variant }];
      }
    });
    showToast(`Added "${product.name}" to cart ✨`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCart((prev) => prev.filter(
      (item) => !(item.product.id === productId && item.variant === variant)
    ));
    showToast('Item removed from cart');
  };

  const updateCartQty = (productId, variant, delta) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.product.id === productId && item.variant === variant) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from your wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart totals
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Free shipping over ₹1,999
  const freeShippingThreshold = 1999;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 149;
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  // Coupon handling
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'BSENCE10') {
      setAppliedCoupon({ code: 'BSENCE10', percent: 10, label: '10% Inaugural Luxury Discount' });
      setCouponError('');
      showToast('Coupon BSENCE10 applied! 10% off ✨');
      return true;
    } else if (cleanCode === 'KOLKATA500' && subtotal >= 2500) {
      setAppliedCoupon({ code: 'KOLKATA500', flat: 500, label: '₹500 Kolkata Heritage Privilege' });
      setCouponError('');
      showToast('Coupon KOLKATA500 applied! ₹500 off');
      return true;
    } else if (cleanCode === 'KOLKATA500' && subtotal < 2500) {
      setCouponError('KOLKATA500 requires a minimum order of ₹2,500');
      return false;
    } else {
      setCouponError('Invalid coupon code. Try BSENCE10');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.percent) {
      discountAmount = Math.round((subtotal * appliedCoupon.percent) / 100);
    } else if (appliedCoupon.flat) {
      discountAmount = appliedCoupon.flat;
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shipping);

  // Orders
  const placeOrder = (orderData) => {
    const newOrder = {
      id: `BS-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      items: cart.map(item => ({
        name: item.product.name,
        qty: item.quantity,
        price: item.product.price,
        variant: item.variant
      })),
      subtotal,
      discount: discountAmount,
      shipping,
      total: finalTotal,
      status: 'Processing',
      ...orderData
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    setIsCheckoutOpen(false);
    return newOrder;
  };

  // Product mutations for Admin
  const updateProductPrice = (productId, newPrice, newOriginalPrice) => {
    setProducts((prev) => prev.map(p => {
      if (p.id === productId) {
        const discountPercent = Math.round(((newOriginalPrice - newPrice) / newOriginalPrice) * 100);
        return { ...p, price: newPrice, originalPrice: newOriginalPrice, discountPercent };
      }
      return p;
    }));
    showToast('Product updated successfully in live catalog');
  };

  const toggleProductStock = (productId) => {
    setProducts((prev) => prev.map(p => {
      if (p.id === productId) {
        return { ...p, inStock: !p.inStock };
      }
      return p;
    }));
    showToast('Inventory status updated');
  };

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        products,
        categoryFilter,
        setCategoryFilter,
        intentionFilter,
        setIntentionFilter,
        selectedZodiacSign,
        setSelectedZodiacSign,
        selectedNumerologyNum,
        setSelectedNumerologyNum,
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        cartCount,
        subtotal,
        shipping,
        freeShippingThreshold,
        freeShippingProgress,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        couponError,
        discountAmount,
        finalTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        placeOrder,
        updateProductPrice,
        toggleProductStock,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeModalProduct,
        setActiveModalProduct,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
