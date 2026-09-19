import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CRYSTALS_DATA } from '../data/crystals';
import { Sparkles, Info, ArrowRight } from 'lucide-react';

export const KnowYourCrystal = () => {
  const { setCurrentPage, setCategoryFilter } = useShop();
  const [selectedCrystal, setSelectedCrystal] = useState(CRYSTALS_DATA[0]);

  const handleExplore = () => {
    setCategoryFilter('all');
    setCurrentPage('shop');
  };

  return (
    <section className="section-padding bg-secondary" aria-labelledby="crystal-edu-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">MINERALOGY & ANCIENT LORE</span>
          <h2 id="crystal-edu-heading" className="section-title">
            Know Your Crystal
          </h2>
          <p className="section-desc">
            An educational guide into the geological beauty, traditional symbolism, and cultural lore of our most cherished crystals.
          </p>
        </div>

        {/* Tab Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {CRYSTALS_DATA.map((crystal) => (
            <button
              key={crystal.id}
              onClick={() => setSelectedCrystal(crystal)}
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: '500',
                border: '1px solid',
                borderColor: selectedCrystal.id === crystal.id ? 'var(--color-gold)' : 'var(--color-border)',
                backgroundColor: selectedCrystal.id === crystal.id ? 'var(--color-warm-cream)' : '#FFFFFF',
                color: selectedCrystal.id === crystal.id ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {crystal.name}
            </button>
          ))}
        </div>

        {/* Active Crystal Spotlight Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Image */}
          <div style={{ height: '100%', minHeight: '280px', position: 'relative' }}>
            <img
              src={selectedCrystal.image}
              alt={selectedCrystal.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.92)',
                padding: '4px 12px',
                border: '1px solid var(--color-border)',
                fontSize: '0.72rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)'
              }}
            >
              {selectedCrystal.sanskritName || selectedCrystal.name}
            </div>
          </div>

          {/* Details */}
          <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
              {selectedCrystal.chakra}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'var(--color-text-dark)',
                marginBottom: '0.4rem'
              }}
            >
              {selectedCrystal.name}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-serif-sub)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--color-gold)',
                marginBottom: '1.5rem'
              }}
            >
              {selectedCrystal.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-dark)', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Traditional Symbolism
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {selectedCrystal.traditionalSymbolism}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-dark)', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Mindful Placement
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {selectedCrystal.mindfulUsage}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-dark)', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Cleansing Method
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {selectedCrystal.cleansingMethod}
                </p>
              </div>
            </div>

            <button
              className="btn-secondary"
              onClick={handleExplore}
              style={{ padding: '0.85rem 2rem', fontSize: '0.78rem' }}
            >
              Explore {selectedCrystal.name} Pieces <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem 1.4rem',
            backgroundColor: 'var(--color-warm-cream)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}
        >
          <Info size={18} className="text-gold" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
            <strong>Cultural & Spiritual Notice:</strong> BSence products and descriptions are inspired by traditional spiritual and cultural beliefs. Any descriptions of crystal properties are shared for personal mindfulness, cultural appreciation, and symbolic enjoyment, and are not intended as medical or scientific claims.
          </p>
        </div>
      </div>
    </section>
  );
};
