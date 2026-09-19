import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export const HeroSlider = () => {
  const { setCurrentPage } = useShop();

  const slides = [
    {
      id: 1,
      image: '/assets/images/hero_slide_1.jpg',
      eyebrow: 'BSENCE HAUTE JOAILLERIE & WELLNESS',
      title: 'WEAR YOUR INTENTION',
      subtitle: 'Discover thoughtfully curated crystals, bracelets and spiritual pieces designed to complement your personal journey.',
      primaryBtn: { text: 'SHOP COLLECTION', action: () => setCurrentPage('shop') },
      secondaryBtn: { text: 'EXPLORE ZODIAC', action: () => setCurrentPage('zodiac-bracelets') }
    },
    {
      id: 2,
      image: '/assets/images/hero_slide_2.jpg',
      eyebrow: 'STATEMENT ATELIER PIECES',
      title: 'CRYSTALS, REIMAGINED',
      subtitle: 'Elegant crystal jewelry inspired by astrology, numerology and timeless spiritual traditions.',
      primaryBtn: { text: 'SHOP RINGS', action: () => setCurrentPage('crystal-rings') },
      secondaryBtn: { text: 'DISCOVER MORE', action: () => setCurrentPage('lifestyle-bracelets') }
    },
    {
      id: 3,
      image: '/assets/images/hero_slide_3.jpg',
      eyebrow: 'VEDIC & WESTERN ASTROLOGY',
      title: 'FIND YOUR ZODIAC PIECE',
      subtitle: 'Explore crystal bracelets curated around the symbolism of your zodiac sign.',
      primaryBtn: { text: 'EXPLORE ZODIAC', action: () => setCurrentPage('zodiac-bracelets') },
      secondaryBtn: null
    },
    {
      id: 4,
      image: '/assets/images/hero_slide_4.jpg',
      eyebrow: 'SACRED ENERGIZED HERITAGE',
      title: 'ROOTED IN TRADITION',
      subtitle: 'Explore timeless spiritual pieces with a modern luxury aesthetic.',
      primaryBtn: { text: 'EXPLORE SPIRITUAL COLLECTION', action: () => setCurrentPage('rudraksha') },
      secondaryBtn: null
    },
    {
      id: 5,
      image: '/assets/images/hero_slide_5.jpg',
      eyebrow: 'SANCTUARY & HOME ALTAR',
      title: 'YOUR PERSONAL CRYSTAL COLLECTION',
      subtitle: 'From everyday bracelets to statement crystal pieces, discover something meaningful to you.',
      primaryBtn: { text: 'SHOP ALL', action: () => setCurrentPage('shop') },
      secondaryBtn: null
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 3-second automatic slide interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: '620px',
        maxHeight: '920px',
        overflow: 'hidden',
        backgroundColor: '#171717',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Slideshow"
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isActive ? 'scale(1)' : 'scale(1.04)',
              zIndex: isActive ? 2 : 1
            }}
          >
            {/* Background Image with Responsive Object Fit */}
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />

            {/* Gradient Overlay for Pristine Luxury Contrast */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(23, 23, 23, 0.72) 0%, rgba(23, 23, 23, 0.45) 50%, rgba(23, 23, 23, 0.2) 100%)'
              }}
            />

            {/* Content Container */}
            <div
              className="container"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                zIndex: 3
              }}
            >
              <div
                style={{
                  maxWidth: '680px',
                  color: '#FFFFFF',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 700ms 200ms ease, transform 700ms 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Eyebrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      fontWeight: '600'
                    }}
                  >
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Main Heading */}
                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                    fontWeight: '400',
                    lineHeight: '1.1',
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    marginBottom: '1.4rem',
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
                    lineHeight: '1.7',
                    color: '#F4EFE7',
                    marginBottom: '2.4rem',
                    fontWeight: '300',
                    maxWidth: '560px',
                    textShadow: '0 1px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  {slide.subtitle}
                </p>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  {slide.primaryBtn && (
                    <button
                      className="btn-gold"
                      onClick={slide.primaryBtn.action}
                      style={{ padding: '1.05rem 2.4rem' }}
                    >
                      {slide.primaryBtn.text}
                      <ArrowRight size={16} />
                    </button>
                  )}

                  {slide.secondaryBtn && (
                    <button
                      className="btn-secondary"
                      onClick={slide.secondaryBtn.action}
                      style={{
                        padding: '1.05rem 2.4rem',
                        color: '#FFFFFF',
                        borderColor: 'rgba(255, 255, 255, 0.4)',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      {slide.secondaryBtn.text}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators & Auto-play status */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: currentSlide === index ? '38px' : '10px',
              height: '4px',
              backgroundColor: currentSlide === index ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              borderRadius: '2px'
            }}
          />
        ))}
      </div>
    </section>
  );
};
