import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { NUMEROLOGY_PROFILES, calculateNumerologyNumber } from '../data/numerology';
import { ProductCard } from '../components/ProductCard';
import { Calendar, Sparkles, ArrowRight, ShieldCheck, Compass, Info } from 'lucide-react';

export const PageNumerologyBracelets = () => {
  const { products, selectedNumerologyNum, setSelectedNumerologyNum, setActiveModalProduct } = useShop();

  const [birthDate, setBirthDate] = useState('1996-08-19');
  const [calculationMode, setCalculationMode] = useState('day'); // 'day' (Mulank) or 'lifepath' (Bhagyank)
  const [activeNumber, setActiveNumber] = useState(selectedNumerologyNum || 1);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (birthDate) {
      const computed = calculateNumerologyNumber(birthDate, calculationMode);
      setActiveNumber(computed);
      setSelectedNumerologyNum(computed);
      setHasCalculated(true);
    }
  };

  const profile = NUMEROLOGY_PROFILES[activeNumber] || NUMEROLOGY_PROFILES[1];
  const matchedProduct = products.find((p) => p.id === profile.braceletId) || products[0];

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial Hero */}
      <section
        style={{
          position: 'relative',
          height: '56vh',
          minHeight: '420px',
          overflow: 'hidden',
          backgroundColor: '#171717',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src="/assets/images/hero_slide_1.jpg"
          alt="Numerology Crystal Bracelets with Sacred Number Symbolism"
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
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.82) 0%, rgba(23, 23, 23, 0.45) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>VEDIC ANK JYOTISH HERITAGE</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Discover Your Number
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Every birth date carries a root numerical vibration that aligns with specific planetary energies and mineral resonances.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Birth-Number Calculator Box */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
              maxWidth: '780px',
              margin: '0 auto',
              padding: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Compass size={32} className="text-gold" style={{ margin: '0 auto 0.8rem auto' }} />
              <span className="eyebrow">INTERACTIVE COSMIC CALCULATOR</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text-dark)', marginBottom: '0.4rem' }}>
                Calculate Your Sacred Birth Number
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Enter your date of birth to reveal your single-digit root vibration (1 through 9).
              </p>
            </div>

            <form onSubmit={handleCalculate}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '0.4rem' }}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-secondary)',
                      color: 'var(--color-text-dark)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '0.4rem' }}>
                    Calculation Method
                  </label>
                  <select
                    value={calculationMode}
                    onChange={(e) => setCalculationMode(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-secondary)',
                      color: 'var(--color-text-dark)',
                      outline: 'none'
                    }}
                  >
                    <option value="day">Birth Day Only (Mulank / Root Number)</option>
                    <option value="lifepath">Full Date Life Path (Bhagyank / Destiny Number)</option>
                  </select>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '1rem 3rem' }}
                >
                  DISCOVER MY NUMBER <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Manual 1-9 Number Selector Bar */}
      <section style={{ backgroundColor: 'var(--color-secondary)', borderBottom: '1px solid var(--color-border)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600', color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>
              Manual Select:
            </span>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setActiveNumber(num);
                  setSelectedNumerologyNum(num);
                }}
                style={{
                  width: '42px',
                  height: '42px',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-heading)',
                  border: '1px solid',
                  borderColor: activeNumber === num ? 'var(--color-gold)' : 'var(--color-border)',
                  backgroundColor: activeNumber === num ? 'var(--color-text-dark)' : '#FFFFFF',
                  color: activeNumber === num ? '#FFFFFF' : 'var(--color-text-dark)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Revealed Number Profile & Bracelet Match */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              padding: 'clamp(1.2rem, 3.5vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: Numerology Profile Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '4.5rem', color: 'var(--color-gold)', lineHeight: 1 }}>
                  {profile.number}
                </span>
                <div>
                  <span className="eyebrow" style={{ margin: 0 }}>RULING PLANET: {profile.rulingPlanet.toUpperCase()}</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text-dark)', margin: 0 }}>
                    {profile.title}
                  </h2>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-serif-sub)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--color-gold)', marginBottom: '1.2rem' }}>
                Governed by {profile.rulingPlanetSanskrit} • Associated Birth Days: {profile.birthDays.join(', ')}
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {profile.traditionalLore}
              </p>

              {/* Keywords */}
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  Core Archetype Keywords:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {profile.keywords.map((kw) => (
                    <span
                      key={kw}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        padding: '4px 10px',
                        backgroundColor: 'var(--color-secondary)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-dark)'
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Affirmation Card */}
              <div style={{ backgroundColor: 'var(--color-warm-cream)', border: '1px solid var(--color-border)', padding: '1.2rem', marginBottom: '2rem' }}>
                <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>DAILY MANTRA AFFIRMATION</span>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-text-dark)', margin: 0, fontStyle: 'italic' }}>
                  "{profile.affirmation}"
                </p>
              </div>

              <button
                className="btn-primary"
                onClick={() => setActiveModalProduct(matchedProduct)}
                style={{ padding: '1rem 2.4rem' }}
              >
                CLAIM NUMBER {profile.number} BRACELET <ArrowRight size={15} />
              </button>
            </div>

            {/* Right: Matched Product */}
            <div>
              <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                RECOMMENDED MINERAL TALISMAN
              </span>
              <div style={{ maxWidth: '380px', margin: '0 auto' }}>
                <ProductCard product={matchedProduct} />
              </div>
            </div>
          </div>

          {/* Spiritual Disclaimer */}
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.2rem 1.6rem',
              backgroundColor: 'var(--color-warm-cream)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Info size={20} className="text-gold" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.6' }}>
              <strong>Spiritual Notice:</strong> Numerology is a traditional belief system rooted in cultural folklore and symbolic correspondences. Descriptions provided herein are meant for personal reflection, symbolic joy, and cultural appreciation, and are not intended as scientific predictions or guarantees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
