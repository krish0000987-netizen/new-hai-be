import React from 'react';
import { Sparkles, ShieldCheck, PackageCheck, Truck } from 'lucide-react';

export const TrustStrip = () => {
  const trustItems = [
    {
      icon: Sparkles,
      title: 'Cleansed & Energized',
      desc: 'Every crystal is prepared before dispatch according to traditional Vedic cleansing practices.'
    },
    {
      icon: ShieldCheck,
      title: 'Authentic Selection',
      desc: 'Thoughtfully curated untreated crystals & spiritual pieces of verified mineral authenticity.'
    },
    {
      icon: PackageCheck,
      title: 'Secure Luxury Packaging',
      desc: 'Carefully packed in signature rigid gift boxes with velvet pouches and sacred seals.'
    },
    {
      icon: Truck,
      title: 'Pan-India Insured Delivery',
      desc: 'Prompt, insured courier delivery covering 19,000+ pincodes across all Indian states.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--color-secondary)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '2.8rem 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(1.2rem, 3vw, 2.2rem)'
          }}
        >
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.1rem'
                }}
              >
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
                    flexShrink: 0,
                    color: 'var(--color-gold)'
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: '500',
                      marginBottom: '0.35rem',
                      color: 'var(--color-text-dark)'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.5'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
