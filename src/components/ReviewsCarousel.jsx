import React, { useState } from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

export const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section className="section-padding bg-white" aria-labelledby="reviews-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">PATRON EXPERIENCES</span>
          <h2 id="reviews-heading" className="section-title">
            Words From Our Patrons
          </h2>
          <p className="section-desc">
            Discover why connoisseurs across Kolkata, Mumbai, Delhi, and Bangalore cherish BSence for authentic minerals and luxurious presentation.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            backgroundColor: 'var(--color-secondary)',
            border: '1px solid var(--color-border)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            position: 'relative',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <Quote
            size={42}
            style={{
              position: 'absolute',
              top: '24px',
              right: '28px',
              color: 'var(--color-gold-hairline)',
              opacity: 0.6
            }}
          />

          {/* Stars */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '1.2rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#C7A76A" stroke="#C7A76A" />
            ))}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--color-text-dark)',
              marginBottom: '1rem',
              lineHeight: 1.3
            }}
          >
            "{current.title}"
          </h3>

          {/* Comment */}
          <p
            style={{
              fontSize: '1.02rem',
              lineHeight: '1.8',
              color: 'var(--color-text-muted)',
              marginBottom: '2rem',
              fontStyle: 'normal'
            }}
          >
            {current.comment}
          </p>

          {/* Author & Product Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-warm-cream)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--color-gold)'
                }}
              >
                {current.avatarText}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--color-text-dark)' }}>
                    {current.author}
                  </span>
                  {current.verified && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', fontSize: '0.72rem', color: 'var(--color-success)', fontWeight: '500' }}>
                      <CheckCircle2 size={12} /> Verified Patron
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
                  {current.location} • Purchased: <em>{current.productName}</em>
                </p>
              </div>
            </div>

            {/* Prev / Next Controls */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={prevReview}
                className="icon-btn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF'
                }}
                aria-label="Previous Review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextReview}
                className="icon-btn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF'
                }}
                aria-label="Next Review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
