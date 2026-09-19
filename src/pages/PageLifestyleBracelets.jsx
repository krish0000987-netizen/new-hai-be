import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, Coins, Moon, BookOpen, Shield, Flame, Heart, ArrowRight } from 'lucide-react';

export const PageLifestyleBracelets = () => {
  const { products } = useShop();
  const [selectedIntention, setSelectedIntention] = useState('all');

  const intentionTabs = [
    { id: 'all', label: 'All Intentions', icon: Sparkles },
    { id: 'money', label: 'Money & Wealth', icon: Coins, desc: 'Natural Pyrite and Citrine stones traditionally associated with commercial vitality and abundance mindset.' },
    { id: 'calm', label: 'Stress & Calm', icon: Moon, desc: 'Brazilian Amethyst and Lavender Jade designed to evoke tranquility and soothe restless thoughts.' },
    { id: 'focus', label: 'Study & Focus', icon: BookOpen, desc: 'Tiger Eye and Sodalite beads historically valued for mental sharpness and analytical clarity.' },
    { id: 'protection', label: 'Protection & Shield', icon: Shield, desc: 'Black Tourmaline and Hematite talismans traditionally worn for grounding personal boundaries.' },
    { id: 'confidence', label: 'Confidence & Charisma', icon: Flame, desc: 'Fiery Carnelian and Golden Sunstone stones celebrated for expressive warmth and willpower.' },
    { id: 'love', label: 'Love & Harmony', icon: Heart, desc: 'Madagascar Rose Quartz and Rhodochrosite nurturing unconditional compassion and self-acceptance.' }
  ];

  const braceletProducts = products.filter((p) => p.category === 'bracelets' || p.category === 'combos');

  const displayedProducts = selectedIntention === 'all'
    ? braceletProducts
    : braceletProducts.filter((p) => p.intention === selectedIntention || selectedIntention === 'all');

  const activeIntentionObj = intentionTabs.find((t) => t.id === selectedIntention);

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial Hero Banner */}
      <section
        style={{
          position: 'relative',
          height: '58vh',
          minHeight: '440px',
          overflow: 'hidden',
          backgroundColor: '#171717',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src="/assets/images/cat_lifestyle.jpg"
          alt="Lifestyle Crystal Bracelets worn on Indian wrist"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.82
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.8) 0%, rgba(23, 23, 23, 0.45) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>SACRED WRIST RITUALS</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Lifestyle Bracelets
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Crystal-inspired bracelets designed around everyday intentions, personal symbolism, and natural mineral energy.
            </p>
          </div>
        </div>
      </section>

      {/* Intention Selector Bar */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <span className="eyebrow">PERSONAL FOCUS</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: 0 }}>
              Choose Your Intention
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.8rem'
            }}
          >
            {intentionTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedIntention === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedIntention(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.82rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--color-gold)' : 'var(--color-border)',
                    backgroundColor: isSelected ? 'var(--color-text-dark)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-dark)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <Icon size={15} className={isSelected ? 'text-gold' : ''} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeIntentionObj && activeIntentionObj.desc && (
            <p
              style={{
                textAlign: 'center',
                maxWidth: '680px',
                margin: '1.5rem auto 0 auto',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}
            >
              {activeIntentionObj.desc}
            </p>
          )}
        </div>
      </section>

      {/* Wrist Wearing Wisdom Editorial Card */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--color-secondary)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              padding: 'clamp(1.2rem, 3vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: 'clamp(1.2rem, 2.5vw, 2rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="eyebrow">VEDIC WRIST TRADITIONS</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                Left Wrist vs. Right Wrist
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                In ancient Indian yogic and energetic traditions, the hands serve opposite conduits of consciousness.
              </p>
            </div>

            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '1.5rem' }}>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)', marginBottom: '0.2rem' }}>
                Left Wrist • Receptive (Inner Being)
              </strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                Wear on the left to absorb subtle calming energies, foster emotional healing, and internalize positive intentions like love and tranquility.
              </p>
            </div>

            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '1.5rem' }}>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)', marginBottom: '0.2rem' }}>
                Right Wrist • Projective (Action & Shield)
              </strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                Wear on the right to project confidence, manifest commercial outcomes (Pyrite), and establish protective energetic boundaries (Nazar / Tourmaline).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">
            Curated Intention Bracelets
          </h2>
          <p className="section-desc">
            Strung on reinforced double-stretch cord with natural untreated minerals and 18k gold vermeil hardware.
          </p>
        </div>

        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
