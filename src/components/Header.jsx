import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, User, Settings } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="container">
          <div className="header-inner">
            {/* Mobile Menu Button */}
            <button
              className="icon-btn mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Brand Logo */}
            <a
              href="#/home"
              className="brand-logo"
              onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
            >
              <span className="brand-logo-text">BSENCE</span>
              <span className="brand-logo-sub">KOLKATA • EST. 2021</span>
            </a>

            {/* Main Desktop Navigation */}
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
                  Shop <ChevronDown size={14} style={{ opacity: 0.6 }} />
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
                      Everyday Solitaires
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
                    <a
                      href="#/rudraksha"
                      className="mega-item-link"
                      onClick={(e) => { e.preventDefault(); navigateTo('rudraksha'); }}
                    >
                      Energization Process
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

              {/* Admin Portal Toggle */}
              <button
                className="icon-btn"
                onClick={() => navigateTo('admin')}
                title="Admin Management Dashboard"
                aria-label="Admin Dashboard"
                style={{ opacity: currentPage === 'admin' ? 1 : 0.7 }}
              >
                <Settings size={18} />
              </button>

              {/* Wishlist Link */}
              <button
                className="icon-btn"
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

      {/* Mobile Menu Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 140,
            background: 'rgba(23, 23, 23, 0.6)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '80%',
              maxWidth: '320px',
              height: '100%',
              background: '#FFFFFF',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              boxShadow: 'var(--shadow-modal)',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', letterSpacing: '0.15em' }}>BSENCE</span>
                <p style={{ fontSize: '0.6rem', color: 'var(--color-gold)', letterSpacing: '0.2em' }}>KOLKATA</p>
              </div>
              <button className="icon-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
              <a
                href="#/home"
                style={{ fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.5rem 0' }}
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
              >
                Home
              </a>
              <a
                href="#/shop"
                style={{ fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.5rem 0' }}
                onClick={(e) => { e.preventDefault(); navigateTo('shop', 'all'); }}
              >
                Shop All Crystals & Jewelry
              </a>
              <a
                href="#/lifestyle-bracelets"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('lifestyle-bracelets'); }}
              >
                • Lifestyle Bracelets
              </a>
              <a
                href="#/zodiac-bracelets"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('zodiac-bracelets'); }}
              >
                • 12 Zodiac Bracelets
              </a>
              <a
                href="#/numerology-bracelets"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('numerology-bracelets'); }}
              >
                • Numerology Birth Numbers
              </a>
              <a
                href="#/crystal-rings"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('crystal-rings'); }}
              >
                • Luxury Crystal Rings
              </a>
              <a
                href="#/rudraksha"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('rudraksha'); }}
              >
                • Sacred Rudraksha
              </a>
              <a
                href="#/crystal-chunks"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('crystal-chunks'); }}
              >
                • Raw Crystal Chunks
              </a>
              <a
                href="#/charging-plates"
                style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('charging-plates'); }}
              >
                • Selenite Charging Plates
              </a>
              <a
                href="#/about-contact"
                style={{ fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.5rem 0', marginTop: '0.5rem' }}
                onClick={(e) => { e.preventDefault(); navigateTo('about-contact'); }}
              >
                About & Kolkata Store
              </a>
              <a
                href="#/admin"
                style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.5rem 0' }}
                onClick={(e) => { e.preventDefault(); navigateTo('admin'); }}
              >
                Admin Panel
              </a>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                Satya Enclave, Rajarhat Road, Kolkata
              </p>
              <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-text-dark)', marginTop: '4px' }}>
                +91 91128 93227
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
