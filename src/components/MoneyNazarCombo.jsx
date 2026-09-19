import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const MoneyNazarCombo = () => {
  const { products, setActiveModalProduct } = useShop();

  const comboProduct = products.find((p) => p.id === 'combo-money-nazar');

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
      aria-labelledby="combo-heading"
    >
      <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Narrative */}
          <div
            style={{
              padding: 'clamp(1.5rem, 5vw, 5rem)',
              backgroundColor: 'var(--color-secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <Sparkles size={14} className="text-gold" />
              <span className="eyebrow" style={{ margin: 0 }}>SIGNATURE HARMONY DUO</span>
            </div>

            <h2
              id="combo-heading"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
                lineHeight: '1.15',
                marginBottom: '0.4rem',
                color: 'var(--color-text-dark)'
              }}
            >
              SUPER BALANCED COMBO
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-serif-sub)',
                fontStyle: 'italic',
                fontSize: '1.6rem',
                color: 'var(--color-gold)',
                marginBottom: '1.5rem'
              }}
            >
              Money + Nazar
            </p>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                maxWidth: '520px'
              }}
            >
              A thoughtfully paired bracelet combination inspired by traditional symbolism and modern Indian spiritual lifestyle. Unites the golden manifestive energy of Peruvian Pyrite with the protective grace of the handcrafted Nazar talisman.
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '1.85rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>
                ₹3,499
              </span>
              <span style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', textDecoration: 'line-through' }}>
                ₹4,999
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-success)', fontWeight: '600', padding: '3px 8px', background: 'rgba(61, 123, 84, 0.1)' }}>
                Save 30% • Complimentary Cleansing
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                className="btn-primary"
                onClick={() => comboProduct && setActiveModalProduct(comboProduct)}
                style={{ padding: '1.1rem 2.6rem' }}
              >
                SHOP THE COMBO <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Combo Photography */}
          <div
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '520px',
              overflow: 'hidden'
            }}
          >
            <img
              src="/assets/images/combo_money_nazar.jpg"
              alt="Super Balanced Combo: Money and Nazar Protection Bracelets on White Marble"
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
                top: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(8px)',
                padding: '0.6rem 1.2rem',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <ShieldCheck size={16} className="text-gold" />
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '600' }}>
                Insured Pan-India Dispatch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
