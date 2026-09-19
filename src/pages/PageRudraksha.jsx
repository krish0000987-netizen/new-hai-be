import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, ShieldCheck, Flame, Info, Check } from 'lucide-react';

export const PageRudraksha = () => {
  const { products } = useShop();
  const rudrakshaProducts = products.filter((p) => p.category === 'rudraksha');

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial Hero */}
      <section
        style={{
          position: 'relative',
          height: '65vh',
          minHeight: '480px',
          overflow: 'hidden',
          backgroundColor: '#171717',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src="/assets/images/hero_slide_4.jpg"
          alt="Authentic Nepali Rudraksha Mala with Brass Diya and Marigolds on Raw Silk"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.9
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.85) 0%, rgba(23, 23, 23, 0.45) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>SACRED VEDIC BOTANICALS</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Rooted In Tradition
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300',
                marginBottom: '1.5rem'
              }}
            >
              Explore traditional Rudraksha pieces presented through a contemporary luxury BSence aesthetic—energized in Kolkata according to sacred customs.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(8px)' }}>
              <ShieldCheck size={16} className="text-gold" />
              <span style={{ fontSize: '0.78rem', color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '500' }}>
                100% Guaranteed High-Altitude Nepali Origin
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Knowledge Section */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">VEDIC SCRIPTURAL HERITAGE</span>
            <h2 className="section-title">The Sacred Science of Rudraksha</h2>
            <p className="section-desc">
              Derived from the tears of Lord Shiva (Rudra + Aksha), these botanical seeds from the Elaeocarpus ganitrus tree have anchored spiritual practitioners for millennia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'clamp(1.2rem, 3vw, 2rem)' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--color-gold)' }}>
                1. Authentic Nepali vs. Indonesian
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                BSence curates authentic Nepali beads recognized by their deep grooved mukhi clefts, dense structural weight, and natural durability. Nepali beads naturally float then sink properly, confirming internal chamber integrity.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--color-gold)' }}>
                2. The 5 Mukhi (Panchamukhi)
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Governed by Kalagni Rudra and representing the five elements (Pancha Bhoota). Historically worn by seekers to calm the pulse, steady mental clarity, and provide equanimity in demanding social environments.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--color-gold)' }}>
                3. Kolkata Prana Prathistha
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Prior to dispatch, every Rudraksha is bathed in raw cow milk and Gangajal, anointed with pure Mysore sandalwood oil, and energized with Vedic Shiva mantras by our experienced studio priests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <div className="container" style={{ paddingTop: '4.5rem' }}>
        <div className="section-header">
          <span className="eyebrow">AUTHENTIC SACRED PIECES</span>
          <h2 className="section-title">The Rudraksha Catalog</h2>
          <p className="section-desc">
            Finished with 925 sterling silver caps and natural mineral combinations.
          </p>
        </div>

        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {rudrakshaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
