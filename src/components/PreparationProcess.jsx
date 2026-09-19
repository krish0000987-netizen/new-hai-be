import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const PreparationProcess = () => {
  const steps = [
    {
      num: '01',
      title: 'SELECT',
      tagline: 'Mineral Inspection',
      desc: 'Each crystal bead, Rudraksha mukhi, or raw chunk is individually scrutinized under magnification for symmetry, natural luster, and authenticity.',
      image: '/assets/images/hero_slide_1.jpg'
    },
    {
      num: '02',
      title: 'CLEANSE',
      tagline: 'Purification Bath',
      desc: 'Crystals undergo our signature studio cleansing ritual utilizing holy Gangajal, sacred organic dhoop, and soothing sound bath vibrations.',
      image: '/assets/images/cat_charging.jpg'
    },
    {
      num: '03',
      title: 'ENERGIZE',
      tagline: 'Sacred Prana Prathistha',
      desc: 'Energized according to BSence traditional Indian spiritual practices with sandalwood paste, positive intention chanting, and resting upon Moroccan Selenite.',
      image: '/assets/images/hero_slide_4.jpg'
    },
    {
      num: '04',
      title: 'PACK & DISPATCH',
      tagline: 'Artisanal Keepsake Packaging',
      desc: 'Lovingly nestled in our signature gold-embossed white gift boxes, wrapped in silk tissue with a personalized authenticity & energization certificate.',
      image: '/assets/images/combo_money_nazar.jpg'
    }
  ];

  return (
    <section className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">THE BSENCE PURITY COMMITMENT</span>
          <h2 id="process-heading" className="section-title">
            How We Prepare Your Order
          </h2>
          <p className="section-desc">
            We believe spiritual jewelry should carry pristine intention. Every parcel leaves our Kolkata atelier having undergone an intentional 4-step ritual.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(1.2rem, 3vw, 2rem)',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              style={{
                backgroundColor: 'var(--color-secondary)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                overflow: 'hidden',
                transition: 'all var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              {/* Step Image */}
              <div style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              {/* Step Content */}
              <div style={{ padding: '1.8rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      color: 'var(--color-gold)',
                      fontWeight: '400',
                      lineHeight: 1
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600'
                    }}
                  >
                    {step.tagline}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    color: 'var(--color-text-dark)',
                    marginBottom: '0.6rem'
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: '1.6'
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
