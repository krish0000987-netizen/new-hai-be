import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export const LuxuryRingsEditorial = () => {
  const { setCurrentPage } = useShop();

  return (
    <section
      style={{
        backgroundColor: 'var(--color-warm-cream)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
      aria-labelledby="rings-editorial-heading"
    >
      <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Macro Ring Photography */}
          <div
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '320px',
              overflow: 'hidden'
            }}
          >
            <img
              src="/assets/images/hero_slide_2.jpg"
              alt="Luxury Crystal Statement Rings on Carved Marble"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '0.8rem 1.4rem',
                border: '1px solid var(--color-border)'
              }}
            >
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '600' }}>
                ATELIER CRAFTSMANSHIP
              </span>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--color-text-dark)', margin: 0 }}>
                18k Gold Vermeil & Natural Raw Crystals
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div
            style={{
              padding: 'clamp(1.5rem, 5vw, 5rem)',
              backgroundColor: 'var(--color-warm-cream)'
            }}
          >
            <span className="eyebrow">THE HIGH ATELIER</span>
            <h2
              id="rings-editorial-heading"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                lineHeight: '1.2',
                marginBottom: '1.5rem',
                letterSpacing: '0.02em',
                color: 'var(--color-text-dark)'
              }}
            >
              A Little Luxury. <br />
              <span className="font-serif-italic text-gold">A Personal Symbol.</span>
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                maxWidth: '520px'
              }}
            >
              Discover our collection of statement crystal rings designed to bring natural geological beauty, sacred symbolism, and contemporary Indian elegance together. Each ring highlights raw, unheated crystalline points set in hand-hammered gold bezels.
            </p>

            {/* Highlights List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Check size={16} className="text-gold" />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>Ethically Sourced Minerals</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Check size={16} className="text-gold" />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>Adjustable Comfort Bands</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Check size={16} className="text-gold" />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>Hypoallergenic Vermeil</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Check size={16} className="text-gold" />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>Pre-Energized In Studio</span>
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => setCurrentPage('crystal-rings')}
              style={{ padding: '1.1rem 2.6rem' }}
            >
              SHOP CRYSTAL RINGS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
