import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ZODIAC_SIGNS } from '../data/zodiac';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, ArrowRight, Compass, Shield } from 'lucide-react';

export const PageZodiacBracelets = () => {
  const { products, selectedZodiacSign, setSelectedZodiacSign, setActiveModalProduct } = useShop();
  const [activeSignId, setActiveSignId] = useState(selectedZodiacSign || 'aries');

  const currentSign = ZODIAC_SIGNS.find((s) => s.id === activeSignId) || ZODIAC_SIGNS[0];
  const matchedProduct = products.find((p) => p.id === currentSign.braceletId) || products[0];

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial Hero */}
      <section
        style={{
          position: 'relative',
          height: '62vh',
          minHeight: '460px',
          overflow: 'hidden',
          backgroundColor: '#171717',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src="/assets/images/hero_slide_3.jpg"
          alt="12 Zodiac Crystal Bracelets arranged around Astrological Wheel"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.85
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.82) 0%, rgba(23, 23, 23, 0.5) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>VEDIC & WESTERN ASTROLOGICAL ATELIER</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.4vw, 4rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Your Zodiac. Your Crystal.
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Align your birth chart's planetary ruler and elemental spirit with gemstones specifically tuned to your celestial archetype.
            </p>
          </div>
        </div>
      </section>

      {/* 12 Zodiac Sign Interactive Ribbon */}
      <section style={{ backgroundColor: 'var(--color-secondary)', borderBottom: '1px solid var(--color-border)', padding: '2rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '0.8rem',
              overflowX: 'auto',
              paddingBottom: '0.8rem',
              scrollbarWidth: 'thin'
            }}
          >
            {ZODIAC_SIGNS.map((sign) => {
              const isActive = sign.id === activeSignId;
              return (
                <button
                  key={sign.id}
                  onClick={() => {
                    setActiveSignId(sign.id);
                    setSelectedZodiacSign(sign.id);
                  }}
                  style={{
                    flex: '0 0 auto',
                    padding: '0.8rem 1.2rem',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-gold)' : 'var(--color-border)',
                    backgroundColor: isActive ? '#FFFFFF' : 'var(--color-warm-cream)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    minWidth: '100px',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span style={{ fontSize: '1.5rem', display: 'block', color: 'var(--color-gold)', lineHeight: 1, marginBottom: '4px' }}>
                    {sign.symbol}
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--color-text-dark)', display: 'block' }}>
                    {sign.name}
                  </span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--color-text-muted)' }}>
                    {sign.element}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Zodiac Profile Deep-Dive */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '3rem',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Astrological Analysis */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '2.5rem', color: 'var(--color-gold)', lineHeight: 1 }}>{currentSign.symbol}</span>
                <div>
                  <span className="eyebrow" style={{ margin: 0 }}>{currentSign.element.toUpperCase()} ELEMENT • {currentSign.rulingPlanet.toUpperCase()}</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--color-text-dark)', margin: 0 }}>
                    {currentSign.name}
                  </h2>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-serif-sub)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--color-gold)', marginBottom: '1.2rem' }}>
                {currentSign.sanskritName} • {currentSign.dates}
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.8rem' }}>
                {currentSign.description}
              </p>

              {/* Core Archetype Traits */}
              <div style={{ marginBottom: '1.8rem' }}>
                <strong style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                  Core Archetype Traits:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {currentSign.coreTraits.map((trait) => (
                    <span
                      key={trait}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        padding: '4px 10px',
                        backgroundColor: 'var(--color-secondary)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-dark)'
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Crystal Symbolism */}
              <div style={{ backgroundColor: 'var(--color-warm-cream)', border: '1px solid var(--color-border)', padding: '1.2rem', marginBottom: '2rem' }}>
                <strong style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)', display: 'block', marginBottom: '0.3rem' }}>
                  Suggested Crystal Resonances:
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dark)', margin: 0, lineHeight: '1.6' }}>
                  {currentSign.crystalSymbolism}
                </p>
              </div>

              <button
                className="btn-primary"
                onClick={() => setActiveModalProduct(matchedProduct)}
                style={{ padding: '1rem 2.4rem' }}
              >
                DISCOVER {currentSign.name.toUpperCase()} BRACELET <ArrowRight size={15} />
              </button>
            </div>

            {/* Right Column: Matched Zodiac Product Card */}
            <div>
              <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                OFFICIAL ZODIAC COMPANION PIECE
              </span>
              <div style={{ maxWidth: '380px', margin: '0 auto' }}>
                <ProductCard product={matchedProduct} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 12 Signs Architectural Index */}
      <section style={{ backgroundColor: 'var(--color-secondary)', padding: '4.5rem 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">COMPLETE ZODIAC COMPENDIUM</span>
            <h2 className="section-title">Explore All 12 Signs</h2>
            <p className="section-desc">Click any sign below to switch archetypes and review recommended mineral combinations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {ZODIAC_SIGNS.map((sign) => (
              <div
                key={sign.id}
                onClick={() => {
                  setActiveSignId(sign.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  padding: '1.6rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--color-gold)' }}>{sign.symbol}</span>
                    <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem' }}>{sign.name}</strong>
                  </div>
                  <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                    {sign.element}
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-gold)', marginBottom: '0.4rem' }}>
                  {sign.dates}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {sign.crystalSymbolism.slice(0, 85)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
