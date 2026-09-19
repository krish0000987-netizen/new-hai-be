import React from 'react';
import { useShop } from '../context/ShopContext';
import { NUMEROLOGY_PROFILES } from '../data/numerology';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

export const NumerologySection = () => {
  const { setCurrentPage, setSelectedNumerologyNum } = useShop();

  const handleSelectNumber = (num) => {
    setSelectedNumerologyNum(num);
    setCurrentPage('numerology-bracelets');
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="section-padding bg-secondary" aria-labelledby="numerology-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">COSMIC NUMERICAL VIBRATIONS</span>
          <h2 id="numerology-heading" className="section-title">
            Find Your Number
          </h2>
          <p className="section-desc">
            Discover crystal bracelets inspired by your birth date and sacred Vedic numerological traditions, connecting your unique frequency with complementary gemstones.
          </p>
        </div>

        {/* 1 - 9 Number Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}
        >
          {numbers.map((num) => {
            const profile = NUMEROLOGY_PROFILES[num];
            return (
              <div
                key={num}
                onClick={() => handleSelectNumber(num)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  padding: '1.6rem 0.8rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all var(--transition-smooth)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
              >
                {/* Large Number Digit */}
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.6rem',
                    color: 'var(--color-gold)',
                    lineHeight: 1,
                    marginBottom: '0.4rem'
                  }}
                >
                  {num}
                </div>

                {/* Ruling Planet */}
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: 'var(--color-text-dark)',
                    marginBottom: '0.2rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {profile.rulingPlanet}
                </div>

                <div
                  style={{
                    fontSize: '0.62rem',
                    color: 'var(--color-text-light)',
                    marginBottom: '0.8rem'
                  }}
                >
                  Days: {profile.birthDays.slice(0, 2).join(', ')}...
                </div>

                <div
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)'
                  }}
                >
                  Explore →
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Calculator Callout Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-warm-cream)',
            border: '1px solid var(--color-border)',
            padding: '2.8rem 2rem',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto'
          }}
        >
          <Compass size={28} className="text-gold" style={{ margin: '0 auto 1rem auto' }} />
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              color: 'var(--color-text-dark)',
              marginBottom: '0.7rem'
            }}
          >
            Don't Know Your Birth Number?
          </h3>
          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--color-text-muted)',
              marginBottom: '1.8rem',
              maxWidth: '560px',
              margin: '0 auto 1.8rem auto',
              lineHeight: '1.6'
            }}
          >
            Use our bespoke interactive calculator on the Numerology page to discover your life-path frequency and suggested crystal talisman in seconds.
          </p>

          <button
            className="btn-gold"
            onClick={() => setCurrentPage('numerology-bracelets')}
            style={{ padding: '1rem 2.8rem' }}
          >
            FIND MY BRACELET <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
