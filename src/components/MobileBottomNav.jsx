import React from 'react';
import { useShop } from '../context/ShopContext';
import { Home, Compass, Heart, ShoppingBag, MessageCircle } from 'lucide-react';

export const MobileBottomNav = () => {
  const {
    currentPage,
    setCurrentPage,
    cartCount,
    wishlist,
    setIsCartOpen,
    subtotal
  } = useShop();

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="mobile-bottom-bar"
      aria-label="Mobile Bottom Navigation"
    >
      {/* Home */}
      <button
        className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
        onClick={() => navigateTo('home')}
        aria-label="Home"
      >
        <Home size={19} />
        <span>Home</span>
      </button>

      {/* Shop All */}
      <button
        className={`mobile-nav-item ${currentPage === 'shop' || currentPage.includes('bracelets') || currentPage.includes('rings') || currentPage.includes('rudraksha') || currentPage.includes('chunks') || currentPage.includes('charging') ? 'active' : ''}`}
        onClick={() => navigateTo('shop')}
        aria-label="Shop Catalog"
      >
        <Compass size={19} />
        <span>Explore</span>
      </button>

      {/* Wishlist */}
      <button
        className="mobile-nav-item"
        onClick={() => navigateTo('shop')}
        aria-label={`Wishlist (${wishlist.length})`}
      >
        <div style={{ position: 'relative' }}>
          <Heart size={19} />
          {wishlist.length > 0 && (
            <span className="mobile-badge-count">{wishlist.length}</span>
          )}
        </div>
        <span>Saved</span>
      </button>

      {/* Bag / Cart */}
      <button
        className="mobile-nav-item"
        onClick={() => setIsCartOpen(true)}
        aria-label={`Cart (${cartCount})`}
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={19} />
          {cartCount > 0 && (
            <span className="mobile-badge-count">{cartCount}</span>
          )}
        </div>
        <span>Bag {subtotal > 0 ? `(₹${subtotal > 999 ? `${(subtotal/1000).toFixed(1)}k` : subtotal})` : ''}</span>
      </button>

      {/* WhatsApp Concierge */}
      <a
        href="https://wa.me/919112893227?text=Hello%20BSence,%20I%20would%20like%20to%20know%20more%20about%20your%20crystal%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-nav-item whatsapp-nav-item"
        aria-label="WhatsApp Concierge"
      >
        <MessageCircle size={19} color="#25D366" />
        <span style={{ color: '#128C7E', fontWeight: '600' }}>Chat</span>
      </a>
    </nav>
  );
};
