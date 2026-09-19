import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Filter, SlidersHorizontal, ArrowUpDown, Sparkles, X, Check } from 'lucide-react';

export const PageShopAll = () => {
  const { products, categoryFilter, setCategoryFilter } = useShop();

  const [sortOption, setSortOption] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(7000);
  const [selectedIntention, setSelectedIntention] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'zodiac', label: 'Zodiac' },
    { id: 'numerology', label: 'Numerology' },
    { id: 'rings', label: 'Crystal Rings' },
    { id: 'rudraksha', label: 'Rudraksha' },
    { id: 'chunks', label: 'Raw Chunks' },
    { id: 'charging', label: 'Charging Plates' },
    { id: 'combos', label: 'Combos' }
  ];

  const intentions = [
    { id: 'all', label: 'All Intentions' },
    { id: 'money', label: 'Money & Wealth' },
    { id: 'calm', label: 'Stress & Calm' },
    { id: 'protection', label: 'Protection & Shield' }
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (categoryFilter !== 'all' && p.category !== categoryFilter) {
        return false;
      }
      // Intention filter
      if (selectedIntention !== 'all' && p.intention !== selectedIntention) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      // In stock filter
      if (inStockOnly && !p.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'bestseller') return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, categoryFilter, selectedIntention, maxPrice, inStockOnly, sortOption]);

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial Page Header */}
      <section
        style={{
          backgroundColor: 'var(--color-warm-cream)',
          borderBottom: '1px solid var(--color-border)',
          padding: '4.5rem 0 3.5rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span className="eyebrow">HAUTE SPIRITUAL ATELIER</span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              color: 'var(--color-text-dark)',
              marginBottom: '0.8rem'
            }}
          >
            Shop BSence
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}
          >
            Explore crystals, energized jewelry, and sacred spiritual pieces curated for your personal journey and daily rituals.
          </p>

          {/* Quick Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '2.5rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                style={{
                  padding: '0.6rem 1.3rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  border: '1px solid',
                  borderColor: categoryFilter === cat.id ? 'var(--color-gold)' : 'var(--color-border)',
                  backgroundColor: categoryFilter === cat.id ? 'var(--color-text-dark)' : '#FFFFFF',
                  color: categoryFilter === cat.id ? '#FFFFFF' : 'var(--color-text-dark)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog View with Filter Sidebar & Product Grid */}
      <div className="container" style={{ paddingTop: '3rem' }}>
        {/* Top Control Bar: Total Count & Sort Select */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            paddingBottom: '1.2rem',
            borderBottom: '1px solid var(--color-border)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              Showing <strong style={{ color: 'var(--color-text-dark)' }}>{filteredProducts.length}</strong> creations
            </span>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Filter size={14} /> Filter Options
            </button>
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <label style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--color-text-dark)' }}>
              Sort By:
            </label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{
                padding: '0.55rem 1rem',
                fontSize: '0.82rem',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-text-dark)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured Curations</option>
              <option value="bestseller">Best Sellers First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          {/* Filter Sidebar (Desktop persistent, Mobile drawer/toggle) */}
          <aside
            className={`shop-sidebar ${showMobileFilters ? 'mobile-open' : ''}`}
            style={{
              backgroundColor: 'var(--color-secondary)',
              border: '1px solid var(--color-border)',
              padding: '1.8rem 1.4rem',
              height: 'fit-content'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Filters
              </span>
              {(categoryFilter !== 'all' || selectedIntention !== 'all' || maxPrice < 7000) && (
                <button
                  onClick={() => {
                    setCategoryFilter('all');
                    setSelectedIntention('all');
                    setMaxPrice(7000);
                    setInStockOnly(false);
                  }}
                  style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: 'var(--color-gold)', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Reset
                </button>
              )}
            </div>

            {/* Price Filter Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Maximum Price: ₹{maxPrice.toLocaleString('en-IN')}
              </label>
              <input
                type="range"
                min="1000"
                max="7000"
                step="250"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--color-text-light)' }}>
                <span>₹1,000</span>
                <span>₹7,000+</span>
              </div>
            </div>

            {/* Intention Filter */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
                Spiritual Intention
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {intentions.map((intent) => (
                  <label key={intent.id} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--color-text-dark)', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="intention"
                      checked={selectedIntention === intent.id}
                      onChange={() => setSelectedIntention(intent.id)}
                    />
                    {intent.label}
                  </label>
                ))}
              </div>
            </div>

            {/* In Stock Toggle */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', fontWeight: '500', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                In Stock & Ready for Dispatch
              </label>
            </div>
          </aside>

          {/* Product Grid */}
          <main>
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-border)' }}>
                <Sparkles size={32} className="text-gold" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.6rem' }}>
                  No crystals matched your exact filters
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Try adjusting the maximum price or selecting another category.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setCategoryFilter('all');
                    setSelectedIntention('all');
                    setMaxPrice(7000);
                  }}
                >
                  VIEW ALL PIECES
                </button>
              </div>
            ) : (
              <div className="grid-3" style={{ rowGap: '2.5rem' }}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
