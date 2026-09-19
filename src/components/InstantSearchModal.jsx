import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CRYSTALS_DATA } from '../data/crystals';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const InstantSearchModal = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    products,
    setActiveModalProduct,
    setCurrentPage,
    setCategoryFilter
  } = useShop();

  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search products
  const matchedProducts = cleanQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.crystalType.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          (p.intention && p.intention.toLowerCase().includes(cleanQuery))
      )
    : [];

  // Search educational crystals
  const matchedCrystals = cleanQuery
    ? CRYSTALS_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(cleanQuery) ||
          c.subtitle.toLowerCase().includes(cleanQuery) ||
          c.traditionalSymbolism.toLowerCase().includes(cleanQuery)
      )
    : [];

  const handleSelectProduct = (product) => {
    setIsSearchOpen(false);
    setActiveModalProduct(product);
  };

  const handleSelectCategory = (cat) => {
    setIsSearchOpen(false);
    setCategoryFilter(cat);
    setCurrentPage('shop');
  };

  const quickSuggestions = ['Pyrite', 'Amethyst', 'Rudraksha', 'Money Combo', 'Zodiac', 'Selenite', 'Rose Quartz'];

  return (
    <div className="modal-overlay" onClick={() => setIsSearchOpen(false)}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          maxWidth: '740px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-modal)',
          border: '1px solid var(--color-border)',
          position: 'relative',
          padding: '2.5rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="icon-btn"
          onClick={() => setIsSearchOpen(false)}
          style={{ position: 'absolute', top: '18px', right: '18px' }}
        >
          <X size={22} />
        </button>

        {/* Search Input */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <Search
            size={20}
            className="text-gold"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            autoFocus
            placeholder="Search crystals, intentions, zodiac signs or Rudraksha..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1.1rem 1.4rem 1.1rem 3.2rem',
              fontSize: '1.1rem',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-text-dark)',
              outline: 'none',
              fontFamily: 'var(--font-heading)'
            }}
          />
        </div>

        {/* Quick Suggestion Pills */}
        {!cleanQuery && (
          <div>
            <span className="eyebrow" style={{ fontSize: '0.68rem', marginBottom: '0.6rem' }}>
              POPULAR DISCOVERY KEYWORDS
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {quickSuggestions.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  style={{
                    padding: '0.4rem 0.9rem',
                    backgroundColor: 'var(--color-warm-cream)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.78rem',
                    color: 'var(--color-text-dark)',
                    cursor: 'pointer'
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Sections */}
        {cleanQuery && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Matched Products */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
                <span className="eyebrow" style={{ margin: 0 }}>
                  PRODUCTS ({matchedProducts.length})
                </span>
                {matchedProducts.length > 0 && (
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentPage('shop');
                    }}
                    style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: 'var(--color-gold)', fontWeight: '600', cursor: 'pointer' }}
                  >
                    View All in Shop →
                  </button>
                )}
              </div>

              {matchedProducts.length === 0 ? (
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  No matching jewelry found for "{query}". Try browsing our collections.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {matchedProducts.slice(0, 5).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectProduct(p)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.6rem',
                        backgroundColor: 'var(--color-secondary)',
                        border: '1px solid var(--color-border-subtle)',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-warm-cream)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-secondary)')}
                    >
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        style={{ width: '48px', height: '54px', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', margin: 0 }}>
                          {p.name}
                        </h4>
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>
                          {p.category.toUpperCase()} • {p.crystalType}
                        </span>
                      </div>
                      <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Matched Educational Crystals */}
            {matchedCrystals.length > 0 && (
              <div>
                <span className="eyebrow" style={{ display: 'block', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
                  CRYSTAL KNOWLEDGE & SYMBOLISM ({matchedCrystals.length})
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {matchedCrystals.map((crystal) => (
                    <div
                      key={crystal.id}
                      style={{
                        padding: '0.8rem 1rem',
                        backgroundColor: 'var(--color-secondary)',
                        border: '1px solid var(--color-border-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{crystal.name}</strong>
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-gold)', fontWeight: '600' }}>{crystal.chakra}</span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', margin: 0 }}>
                        {crystal.traditionalSymbolism}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
