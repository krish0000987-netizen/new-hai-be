import React, { useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export const BsenceEditCarousel = () => {
  const { products, setCurrentPage } = useShop();
  const carouselRef = useRef(null);

  // Pick featured or popular items for The BSence Edit
  const editProducts = products.filter((p) => p.featured || p.bestSeller);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-white" aria-labelledby="bsence-edit-heading">
      <div className="container">
        {/* Section Header with Carousel Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <span className="eyebrow">ICONS OF INTENTION</span>
            <h2 id="bsence-edit-heading" className="section-title" style={{ marginBottom: '0.4rem' }}>
              The BSence Edit
            </h2>
            <p className="section-desc" style={{ maxWidth: '540px' }}>
              Our most celebrated creations—blending sacred Indian mineral lore, high-jewelry finishing, and authentic Kolkata energization.
            </p>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={scrollLeft}
              className="icon-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-secondary)'
              }}
              aria-label="Previous Featured Items"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="icon-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-secondary)'
              }}
              aria-label="Next Featured Items"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            gap: '1.8rem',
            overflowX: 'auto',
            paddingBottom: '1.5rem',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {editProducts.map((product) => (
            <div
              key={product.id}
              style={{
                flex: '0 0 320px',
                scrollSnapAlign: 'start'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            className="btn-secondary"
            onClick={() => setCurrentPage('shop')}
            style={{ padding: '1rem 3rem' }}
          >
            Explore Complete Catalog <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
