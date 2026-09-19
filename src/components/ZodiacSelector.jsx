import React from 'react';
import { useShop } from '../context/ShopContext';
import { ZODIAC_SIGNS } from '../data/zodiac';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ZodiacSelector = () => {
  const { setCurrentPage, setSelectedZodiacSign } = useShop();

  const handleSelectZodiac = (sign) => {
    setSelectedZodiacSign(sign.id);
    setCurrentPage('zodiac-bracelets');
  };

  return (
    <section className="section-padding bg-white" aria-labelledby="zodiac-selector-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">CELESTIAL RESONANCE</span>
          <h2 id="zodiac-selector-heading" className="section-title">
            Your Zodiac. Your Crystal.
          </h2>
          <p className="section-desc">
            Explore crystal bracelets curated around the ancient symbolism of your zodiac sign, aligning planetary correspondences with natural gemstone frequencies.
          </p>
        </div>

        {/* 12 Zodiac Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 140px), 1fr))',
            gap: 'clamp(0.8rem, 2.5vw, 1.4rem)'
          }}
        >
          {ZODIAC_SIGNS.map((sign) => (
            <div
              key={sign.id}
              onClick={() => handleSelectZodiac(sign)}
              style={{
                backgroundColor: 'var(--color-secondary)',
                border: '1px solid var(--color-border)',
                padding: '1.8rem 1.2rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-smooth)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.boxShadow = 'var(--color-gold-light) 0 10px 25px';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
              }}
            >
              {/* Glyph Symbol */}
              <div
                style={{
                  fontSize: '2.4rem',
                  color: 'var(--color-gold)',
                  marginBottom: '0.6rem',
                  lineHeight: 1
                }}
              >
                {sign.symbol}
              </div>

              {/* Sign Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--color-text-dark)',
                  marginBottom: '0.2rem'
                }}
              >
                {sign.name}
              </h3>

              {/* Sanskrit Name */}
              <p
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--color-gold)',
                  fontWeight: '500',
                  marginBottom: '0.4rem'
                }}
              >
                {sign.sanskritName.split(' ')[0]}
              </p>

              {/* Dates */}
              <p
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1rem'
                }}
              >
                {sign.dates}
              </p>

              {/* Element Badge */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  backgroundColor: 'var(--color-warm-cream)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-dark)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}
              >
                {sign.element} Element
              </span>

              {/* Explore Link */}
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem'
                }}
              >
                Explore <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
