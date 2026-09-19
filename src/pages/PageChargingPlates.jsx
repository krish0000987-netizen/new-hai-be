import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, Moon, Sun, AlertTriangle, ArrowRight } from 'lucide-react';

export const PageChargingPlates = () => {
  const { products, setActiveModalProduct } = useShop();

  const chargingProducts = products.filter((p) => p.category === 'charging');
  const selenitePlate = products.find((p) => p.id === 'charging-selenite-plate') || chargingProducts[0];

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
          src="/assets/images/cat_charging.jpg"
          alt="Natural Selenite Crystal Charging Plate with Gemstone Bracelets on Indian Altar"
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
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>SACRED CLEANSING SANCTUARY</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Create Your Crystal Ritual
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300',
                marginBottom: '1.8rem'
              }}
            >
              Discover the luminous magic of natural Moroccan Selenite charging plates, crafted to hold, purify, and recharge your daily bracelets and rings.
            </p>

            <button
              className="btn-gold"
              onClick={() => selenitePlate && setActiveModalProduct(selenitePlate)}
              style={{ padding: '1rem 2.4rem' }}
            >
              ORDER SELENITE PLATE (₹2,499) <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 3-Step Ritual Guide */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">DAILY EVENING RITUAL</span>
            <h2 className="section-title">How To Use Your Charging Plate</h2>
            <p className="section-desc">
              Three simple steps to cleanse the emotional impressions absorbed by your bracelets during a busy day.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Step 1 */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-warm-cream)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto', color: 'var(--color-gold)', fontWeight: '700', fontSize: '1.2rem' }}>
                1
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Place Your Jewelry
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                At the end of your day, remove your crystal bracelets, rings, or pendants and rest them directly flat on the polished Selenite surface.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-warm-cream)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto', color: 'var(--color-gold)', fontWeight: '700', fontSize: '1.2rem' }}>
                2
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Overnight Recharge
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Allow them to rest undisturbed for 6 to 8 hours overnight. Natural Selenite transmits pure crystalline light, requiring zero cleansing itself.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-warm-cream)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto', color: 'var(--color-gold)', fontWeight: '700', fontSize: '1.2rem' }}>
                3
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Set Fresh Intention
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                In the morning, slip your bracelets back on with a refreshed state of mindfulness, ready to greet the day with purposeful energy.
              </p>
            </div>
          </div>

          {/* Selenite Water Warning Box */}
          <div style={{ marginTop: '3rem', backgroundColor: '#FFFFFF', border: '1px solid #E2A44B', padding: '1.4rem 1.8rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <AlertTriangle size={24} color="#B68D40" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', display: 'block', marginBottom: '2px' }}>
                CRITICAL SELENITE CARE NOTICE:
              </strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
                Selenite is a delicate gypsum crystal. <strong>Never wash or expose Selenite to water</strong>, as moisture will dissolve its pearlescent luster. Dust gently with a clean dry micro-fiber cloth only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <div className="container" style={{ paddingTop: '4.5rem' }}>
        <div className="section-header">
          <span className="eyebrow">CHARGING & ALTAR ACCESSORIES</span>
          <h2 className="section-title">The Sacred Accessories Collection</h2>
        </div>

        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {chargingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
