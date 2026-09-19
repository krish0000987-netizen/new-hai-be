import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';

export const PageCrystalRings = () => {
  const { products, setActiveModalProduct } = useShop();
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  const ringProducts = products.filter((p) => p.category === 'rings');

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial High-Jewelry Hero */}
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
          src="/assets/images/hero_slide_2.jpg"
          alt="Macro Photography of Raw Amethyst Statement Ring on Carved Marble"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.88
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.85) 0%, rgba(23, 23, 23, 0.4) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>THE HIGH JEWELRY ATELIER</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 4.4vw, 4.2rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Luxury Crystal Rings
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
              Natural geological beauty, contemporary design, and personal symbolic meaning forged in 18k champagne gold vermeil.
            </p>

            <button
              onClick={() => setSizeModalOpen(true)}
              className="btn-secondary"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                backdropFilter: 'blur(8px)',
                padding: '0.8rem 1.8rem',
                fontSize: '0.78rem'
              }}
            >
              <Ruler size={14} /> Open Ring Sizing Guide
            </button>
          </div>
        </div>
      </section>

      {/* Atelier Craftsmanship Feature Strip */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.3rem' }}>18K GOLD VERMEIL</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', margin: 0, fontWeight: '500' }}>
                Heavy 2.5 micron dipping over solid 925 sterling silver
              </p>
            </div>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.3rem' }}>RAW UNHEATED CRYSTALS</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', margin: 0, fontWeight: '500' }}>
                Hand-cleaved Brazilian Amethyst, Rose Quartz & Citrine
              </p>
            </div>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.3rem' }}>COMFORT ARCHITECTURE</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', margin: 0, fontWeight: '500' }}>
                Hand-hammered textured bezels with smooth internal contours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Showcase */}
      <div className="container" style={{ paddingTop: '4rem' }}>
        <div className="section-header">
          <span className="eyebrow">STATEMENT & SOLITAIRE PIECES</span>
          <h2 className="section-title">The Ring Collection</h2>
          <p className="section-desc">
            Each creation is an exclusive one-of-a-kind treasure, celebrating the raw organic geometry that nature took millennia to crystallize.
          </p>
        </div>

        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {ringProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Ring Size Guide Modal */}
      {sizeModalOpen && (
        <div className="modal-overlay" onClick={() => setSizeModalOpen(false)}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              maxWidth: '620px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-modal)',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.8rem' }}>
              BSence Ring Sizing Guide
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Most BSence statement rings feature a discreet, comfort-fit adjustable band fitting standard Indian ring sizes 12 through 18.
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', marginBottom: '2rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-secondary)', borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
                  <th style={{ padding: '0.6rem 0.8rem' }}>Indian Size</th>
                  <th style={{ padding: '0.6rem 0.8rem' }}>US Size</th>
                  <th style={{ padding: '0.6rem 0.8rem' }}>Inside Diameter (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.6rem 0.8rem' }}>12 (Small)</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>US 6.0</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>16.5 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.6rem 0.8rem' }}>14 (Medium)</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>US 7.0</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>17.3 mm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.6rem 0.8rem' }}>16 (Large)</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>US 8.0</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>18.1 mm</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.6rem 0.8rem' }}>Universal Fit</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>Adjustable</td>
                  <td style={{ padding: '0.6rem 0.8rem' }}>Gently expands / contracts</td>
                </tr>
              </tbody>
            </table>

            <button
              className="btn-primary"
              onClick={() => setSizeModalOpen(false)}
              style={{ width: '100%' }}
            >
              GOT IT, CLOSE GUIDE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
