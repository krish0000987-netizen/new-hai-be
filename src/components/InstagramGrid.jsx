import React from 'react';
import { ExternalLink } from 'lucide-react';

const InstagramIcon = ({ size = 20, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramGrid = () => {
  const images = [
    { src: '/assets/images/hero_slide_1.jpg', label: 'Citrine & Pyrite on Italian Carrara Marble' },
    { src: '/assets/images/hero_slide_2.jpg', label: 'Raw Amethyst Atelier Cocktail Ring' },
    { src: '/assets/images/hero_slide_3.jpg', label: 'Zodiac Gemstones & Astrological Alignments' },
    { src: '/assets/images/hero_slide_4.jpg', label: 'Sacred Nepali Rudraksha & Brass Diya' },
    { src: '/assets/images/hero_slide_5.jpg', label: 'Selenite Plate & Aventurine Healing Ritual' },
    { src: '/assets/images/cat_lifestyle.jpg', label: 'Chikankari Elegance & Stacked Pyrite Wristwear' }
  ];

  return (
    <section className="section-padding bg-secondary" aria-labelledby="instagram-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
            <InstagramIcon size={15} className="text-gold" />
            <span className="eyebrow" style={{ margin: 0 }}>@BSENCE.OFFICIAL</span>
          </div>
          <h2 id="instagram-heading" className="section-title">
            Follow The BSence Journey
          </h2>
          <p className="section-desc">
            Visual chronicles from our Kolkata design sanctuary—daily crystal rituals, sacred alignments, and behind-the-scenes energization.
          </p>
        </div>

        {/* 6-Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: 'clamp(0.6rem, 2vw, 1rem)',
            marginBottom: '3rem'
          }}
        >
          {images.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.insta-overlay');
                const img = e.currentTarget.querySelector('img');
                if (overlay) overlay.style.opacity = '1';
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.insta-overlay');
                const img = e.currentTarget.querySelector('img');
                if (overlay) overlay.style.opacity = '0';
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                loading="lazy"
              />

              {/* Hover overlay with Instagram icon */}
              <div
                className="insta-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(23, 23, 23, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                  color: '#FFFFFF',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  textAlign: 'center'
                }}
              >
                <InstagramIcon size={24} style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }} />
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.9rem 2.5rem' }}
          >
            FOLLOW US ON INSTAGRAM <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
