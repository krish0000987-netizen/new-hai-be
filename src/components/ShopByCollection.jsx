import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight } from 'lucide-react';

export const ShopByCollection = () => {
  const { setCurrentPage, setCategoryFilter } = useShop();

  const collections = [
    {
      id: 'lifestyle-bracelets',
      name: 'Lifestyle Bracelets',
      desc: 'Formulated around everyday intentions: Money, Calm, Protection, Confidence & Love.',
      image: '/assets/images/cat_lifestyle.jpg',
      page: 'lifestyle-bracelets',
      category: 'bracelets'
    },
    {
      id: 'zodiac-bracelets',
      name: 'Zodiac Bracelets',
      desc: 'Harmonizing sacred planetary energies and elemental symbolism for all 12 signs.',
      image: '/assets/images/hero_slide_3.jpg',
      page: 'zodiac-bracelets',
      category: 'zodiac'
    },
    {
      id: 'numerology-bracelets',
      name: 'Numerology Bracelets',
      desc: 'Birth number resonance (1–9) pairing cosmic frequencies with genuine gemstones.',
      image: '/assets/images/hero_slide_1.jpg',
      page: 'numerology-bracelets',
      category: 'numerology'
    },
    {
      id: 'crystal-rings',
      name: 'Luxury Crystal Rings',
      desc: 'Handcrafted statement cocktail rings and raw solitaires in 18k gold vermeil.',
      image: '/assets/images/hero_slide_2.jpg',
      page: 'crystal-rings',
      category: 'rings'
    },
    {
      id: 'rudraksha',
      name: 'Sacred Rudraksha',
      desc: 'Authentic Nepali 5 Mukhi beads and silver-capped malas energized in Kolkata.',
      image: '/assets/images/hero_slide_4.jpg',
      page: 'rudraksha',
      category: 'rudraksha'
    },
    {
      id: 'crystal-chunks',
      name: 'Authentic Crystal Chunks',
      desc: 'Raw Brazilian geodes, Madagascar Rose Quartz, and natural mineral specimens.',
      image: '/assets/images/cat_chunks.jpg',
      page: 'crystal-chunks',
      category: 'chunks'
    }
  ];

  const handleExplore = (col) => {
    setCategoryFilter(col.category);
    setCurrentPage(col.page);
  };

  return (
    <section className="section-padding bg-secondary" aria-labelledby="collections-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">CURATED EDITORIAL WORLDS</span>
          <h2 id="collections-heading" className="section-title">
            Shop By Collection
          </h2>
          <p className="section-desc">
            Explore our thoughtfully categorized realms of natural crystal jewelry, sacred Indian spiritual artifacts, and astrological adornments.
          </p>
        </div>

        {/* Collections Grid (6 cards) */}
        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => handleExplore(col)}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1.18',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--color-border)',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-card)',
                transition: 'all var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Image */}
              <img
                src={col.image}
                alt={col.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(23, 23, 23, 0.88) 0%, rgba(23, 23, 23, 0.35) 45%, rgba(23, 23, 23, 0.05) 100%)'
                }}
              />

              {/* Content Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                  color: '#FFFFFF'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    color: '#FFFFFF',
                    marginBottom: '0.45rem',
                    letterSpacing: '0.02em'
                  }}
                >
                  {col.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#F4EFE7',
                    lineHeight: '1.5',
                    marginBottom: '1.2rem',
                    fontWeight: '300'
                  }}
                >
                  {col.desc}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)'
                  }}
                >
                  Explore Collection <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
