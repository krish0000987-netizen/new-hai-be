import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, Home, Shield, Compass, ArrowRight } from 'lucide-react';

export const PageCrystalChunks = () => {
  const { products } = useShop();
  const chunkProducts = products.filter((p) => p.category === 'chunks');

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
          src="/assets/images/cat_chunks.jpg"
          alt="Raw Crystal Chunks on White Italian Carrara Marble"
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
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.82) 0%, rgba(23, 23, 23, 0.4) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>GEOLOGICAL SANCTUARY SPECIMENS</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Raw Beauty. Natural Character.
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Uncut, untreated mineral clusters and museum-grade raw geodes sourced directly from Brazil, Madagascar, and Peru to elevate your living space.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial: "From Nature to Your Space" */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">INTERIOR WELLNESS & VASTU</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-text-dark)' }}>
                From Nature To Your Space
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                A substantial raw crystal cluster acts as an organic sculptural focal point in contemporary homes. Unlike cut and polished gemstones, raw minerals retain their jagged crystalline faces and geological inclusions, radiating raw earth beauty.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                In Indian Vastu Shastra, placing deep violet Amethyst clusters in the North-East or study area invites tranquil focus, while golden Citrine in the South-East wealth zone inspires optimistic enterprise.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>WORK DESK</span>
                <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>Golden Citrine Point</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>Inspires mental alertness and creative breakthroughs.</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>LIVING SANCTUARY</span>
                <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}>Amethyst Geode</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>Absorbs chaotic household fatigue with serene violet resonance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <div className="container" style={{ paddingTop: '4.5rem' }}>
        <div className="section-header">
          <span className="eyebrow">CURATED RAW SPECIMENS</span>
          <h2 className="section-title">Authentic Mineral Clusters</h2>
          <p className="section-desc">
            Complete with recorded geological weight, dimensions, and cleansing guidance.
          </p>
        </div>

        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {chunkProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
