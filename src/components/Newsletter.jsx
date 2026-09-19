import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-border)',
        padding: '5rem 0'
      }}
      aria-labelledby="newsletter-heading"
    >
      <div className="container">
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <Sparkles size={22} className="text-gold" style={{ margin: '0 auto 0.8rem auto' }} />
          <span className="eyebrow">EXCLUSIVE PRIVILEGES</span>
          <h2
            id="newsletter-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              color: 'var(--color-text-dark)',
              marginBottom: '0.8rem',
              lineHeight: 1.2
            }}
          >
            Enter The World Of BSence
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-muted)',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}
          >
            Receive new collection announcements, sacred mineral stories, Vedic astrological insights, and exclusive private offers directly to your inbox.
          </p>

          {isSubmitted ? (
            <div
              style={{
                backgroundColor: 'var(--color-warm-cream)',
                border: '1px solid var(--color-gold-hairline)',
                padding: '1.2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--color-text-dark)',
                fontSize: '0.9rem'
              }}
            >
              <CheckCircle2 size={20} className="text-gold" />
              <span>Thank you for joining our private circle. Your welcome code <strong>BSENCE10</strong> is active.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                maxWidth: '520px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '1rem 1.4rem',
                  border: '1px solid var(--color-border)',
                  borderRight: 'none',
                  fontSize: '0.9rem',
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-text-dark)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '1rem 2.2rem', whiteSpace: 'nowrap' }}
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p style={{ fontSize: '0.72rem', color: 'var(--color-text-light)', marginTop: '1rem' }}>
            We honor your privacy. Unsubscribe seamlessly at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
