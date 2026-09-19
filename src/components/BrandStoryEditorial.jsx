import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, MapPin } from 'lucide-react';

export const BrandStoryEditorial = () => {
  const { setCurrentPage } = useShop();

  return (
    <section
      style={{
        backgroundColor: 'var(--color-warm-cream)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '5.5rem 0'
      }}
      aria-labelledby="brand-story-heading"
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Narrative */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}>
              <MapPin size={14} className="text-gold" />
              <span className="eyebrow" style={{ margin: 0 }}>BORN IN KOLKATA, INDIA</span>
            </div>

            <h2
              id="brand-story-heading"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.4vw, 3.2rem)',
                lineHeight: '1.2',
                marginBottom: '1.5rem',
                color: 'var(--color-text-dark)'
              }}
            >
              More Than A Jewel. <br />
              <span className="font-serif-italic text-gold">A Personal Ritual.</span>
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '1.4rem'
              }}
            >
              At <strong>BSence</strong>, we bridge the gap between sacred Vedic heritage and contemporary luxury jewelry. Rooted in our Kolkata studio at Satya Enclave, Rajarhat, we curate genuine crystalline treasures that resonate with your personal astrology, numerology, and aesthetic refinement.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2.4rem'
              }}
            >
              Every bracelet, cocktail ring, and Rudraksha piece is an intimate daily companion—a tactile reminder of your calm, your ambition, and your personal intentions.
            </p>

            <button
              className="btn-primary"
              onClick={() => setCurrentPage('about-contact')}
              style={{ padding: '1rem 2.8rem' }}
            >
              READ OUR STORY <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Column: Lifestyle Visual with Kolkata aesthetic */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <img
                src="/assets/images/cat_lifestyle.jpg"
                alt="BSence artisanal jewelry on Indian wrist"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            {/* Small Floating Seal */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                padding: '1rem 1.4rem',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '600', display: 'block' }}>
                PURITY STANDARD
              </span>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', margin: 0, color: 'var(--color-text-dark)' }}>
                Hand-Selected & Energized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
