import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, Settings } from 'lucide-react';

export const Header = () => {
  const {
    currentPage,
    setCurrentPage,
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    setCategoryFilter
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navigateTo = (page, category = null) => {
    if (category) {
      setCategoryFilter(category);
    }
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header glass-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="header-inner">
            {/* Left Column on Mobile: Hamburger Button */}
            <div className="header-left">
              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={22} />
              </button>

              {/* Desktop Brand Logo (Left on desktop) */}
              <a
                href="#/home"
                className="brand-logo desktop-logo"
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
              >
                <span className="brand-logo-text">BSENCE</span>
                <span className="brand-logo-sub">KOLKATA • EST. 2021</span>
              </a>
            </div>

            {/* Mobile Brand Logo (Centered on mobile) */}
            <a
              href="#/home"
              className="brand-logo mobile-logo"
              onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
            >
              <span className="brand-logo-text">BSENCE</span>
              <span className="brand-logo-sub">KOLKATA</span>
            </a>

            {/* Main Desktop Navigation (Center on desktop) */}
            <nav className="nav-links" aria-label="Main Navigation">
              <div className="nav-item">
                <a
                  href="#/home"
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                >
                  Home
                </a>
              </div>

              {/* Shop Mega Menu */}
              <div className="nav-item">
                <a
                  href="#/shop"
                  className={`nav-link ${currentPage === 'shop' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('shop', 'all'); }}
                >
                  Shop <ChevronDown size={13} style={{ opacity: 0.6 }} />
                </a>

                {/* Mega Menu Dropdown */}
                <div className="mega-menu">
                  <div>
                    <h4 className="mega-col-title">Bracelets</h4>
                    <a
                      href="#/lifestyle-bracelets"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('lifestyle-bracelets'); }}
                    >
                      Lifestyle Intention Bracelets
                    </a>
                    <a
                      href="#/zodiac-bracelets"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('zodiac-bracelets'); }}
                    >
                      12 Zodiac Sign Bracelets
                    </a>
                    <a
                      href="#/numerology-bracelets"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('numerology-bracelets'); }}
                    >
                      Numerology Birth Number (1–9)
                    </a>
                    <a
                      href="#/shop"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('shop', 'bracelets'); }}
                    >
                      View All Bracelets →
                    </a>
                  </div>

                  <div>
                    <h4 className="mega-col-title">Jewelry</h4>
                    <a
                      href="#/crystal-rings"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('crystal-rings'); }}
                    >
                      Luxury Statement Rings
                    </a>
                    <a
                      href="#/crystal-rings"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('crystal-rings'); }}
                    >
                      Raw Amethyst & Gold Vermeil
                    </a>
                    <a
                      href="#/crystal-rings"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('crystal-rings'); }}
                    >
                      Ring Sizing Guide
                    </a>
                  </div>

                  <div>
                    <h4 className="mega-col-title">Sacred Spiritual</h4>
                    <a
                      href="#/rudraksha"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('rudraksha'); }}
                    >
                      Authentic Nepali Rudraksha
                    </a>
                    <a
                      href="#/crystal-chunks"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('crystal-chunks'); }}
                    >
                      Natural Raw Crystal Chunks
                    </a>
                    <a
                      href="#/charging-plates"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('charging-plates'); }}
                    >
                      Selenite Charging Plates
                    </a>
                  </div>

                  <div>
                    <h4 className="mega-col-title">Bespoke Combos</h4>
                    <a
                      href="#/shop"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('shop', 'combos'); }}
                    >
                      Super Balanced: Money + Nazar
                    </a>
                    <div style={{ marginTop: '1rem', padding: '0.8rem', background: 'var(--color-warm-cream)', border: '1px solid var(--color-border)' }}>
                      <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>Featured Pair</span>
                      <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-text-dark)', marginBottom: '0.3rem' }}>
                        Money + Nazar Combo
                      </p>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-gold)', fontWeight: '600' }}>Save 30% Today</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nav-item">
                <a
                  href="#/zodiac-bracelets"
                  className={`nav-link ${currentPage === 'zodiac-bracelets' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('zodiac-bracelets'); }}
                >
                  Zodiac
                </a>
              </div>

              <div className="nav-item">
                <a
                  href="#/numerology-bracelets"
                  className={`nav-link ${currentPage === 'numerology-bracelets' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('numerology-bracelets'); }}
                >
                  Numerology
                </a>
              </div>

              <div className="nav-item">
                <a
                  href="#/about-contact"
                  className={`nav-link ${currentPage === 'about-contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('about-contact'); }}
                >
                  Our Story & Store
                </a>
              </div>
            </nav>

            {/* Header Right Action Icons */}
            <div className="header-actions">
              {/* Search Toggle */}
              <button
                className="icon-btn"
                onClick={() => setIsSearchOpen(true)}
                title="Search Crystals & Jewelry"
                aria-label="Search"
              >
                <Search size={19} />
              </button>

              {/* Admin Portal Toggle (Desktop only) */}
              <button
                className="icon-btn desktop-only-icon"
                onClick={() => navigateTo('admin')}
                title="Admin Management Dashboard"
                aria-label="Admin Dashboard"
                style={{ opacity: currentPage === 'admin' ? 1 : 0.7 }}
              >
                <Settings size={18} />
              </button>

              {/* Wishlist Link (Desktop only - mobile has bottom nav) */}
              <button
                className="icon-btn desktop-only-icon"
                onClick={() => navigateTo('shop')}
                title={`Wishlist (${wishlist.length})`}
                aria-label="Wishlist"
              >
                <Heart size={19} />
                {wishlist.length > 0 && (
                  <span className="badge-count">{wishlist.length}</span>
                )}
              </button>

              {/* Cart Drawer Button */}
              <button
                className="icon-btn"
                onClick={() => setIsCartOpen(true)}
                title={`Shopping Bag (${cartCount})`}
                aria-label="Shopping Cart"
              >
                <ShoppingBag size={19} />
                {cartCount > 0 && (
                  <span className="badge-count">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <div>
                <span className="brand-logo-text" style={{ fontSize: '1.4rem' }}>BSENCE</span>
                <span className="brand-logo-sub" style={{ fontSize: '0.5rem', display: 'block' }}>KOLKATA • EST. 2021</span>
              </div>
              <button
                className="icon-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="mobile-drawer-links">
              <a
                href="#/home"
                className={`mobile-drawer-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
              >
                Home
              </a>
              <a
                href="#/shop"
                className={`mobile-drawer-link ${currentPage === 'shop' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); navigateTo('shop', 'all'); }}
              >
                Shop All Creations
              </a>

              <div className="mobile-drawer-category-group">
                <span className="mobile-drawer-group-title">Collections</span>
                <a
                  href="#/lifestyle-bracelets"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('lifestyle-bracelets'); }}
                >
                  • Lifestyle Intention Bracelets
                </a>
                <a
                  href="#/zodiac-bracelets"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('zodiac-bracelets'); }}
                >
                  • 12 Zodiac Bracelets
                </a>
                <a
                  href="#/numerology-bracelets"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('numerology-bracelets'); }}
                >
                  • Numerology Birth Numbers (1–9)
                </a>
                <a
                  href="#/crystal-rings"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('crystal-rings'); }}
                >
                  • Luxury Crystal Rings
                </a>
                <a
                  href="#/rudraksha"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('rudraksha'); }}
                >
                  • Sacred Nepali Rudraksha
                </a>
                <a
                  href="#/crystal-chunks"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('crystal-chunks'); }}
                >
                  • Raw Crystal Chunks & Geodes
                </a>
                <a
                  href="#/charging-plates"
                  className="mobile-drawer-sublink"
                  onClick={(e) => { e.preventDefault(); navigateTo('charging-plates'); }}
                >
                  • The Selenite Charging Plate
                </a>
              </div>

              <a
                href="#/about-contact"
                className={`mobile-drawer-link ${currentPage === 'about-contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); navigateTo('about-contact'); }}
              >
                Our Story & Kolkata Store
              </a>

              <a
                href="#/admin"
                className={`mobile-drawer-link ${currentPage === 'admin' ? 'active' : ''}`}
                style={{ color: 'var(--color-gold)' }}
                onClick={(e) => { e.preventDefault(); navigateTo('admin'); }}
              >
                Admin Operations Portal
              </a>
            </div>

            {/* Drawer Footer */}
            <div className="mobile-drawer-footer">
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                Satya Enclave, Rajarhat Road, Kolkata
              </p>
              <a href="tel:+919051512315" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>
                +91 90515 12315
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
