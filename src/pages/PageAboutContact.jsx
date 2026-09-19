import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const PageAboutContact = () => {
  const { showToast } = useShop();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      showToast('Thank you for contacting BSence. Our Kolkata concierge will reply within 24 hours ✨');
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Editorial Hero */}
      <section
        style={{
          position: 'relative',
          height: '62vh',
          minHeight: '460px',
          overflow: 'hidden',
          backgroundColor: '#171717',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src="/assets/images/cat_lifestyle.jpg"
          alt="BSence Design Sanctuary in Kolkata"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.88
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.82) 0%, rgba(23, 23, 23, 0.45) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '640px', color: '#FFFFFF' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>THE ATELIER HERITAGE</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              The Story Of BSence
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#F4EFE7',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Born in Kolkata to harmonize ancient Indian spiritual heritage, Vedic mineral lore, and contemporary high-jewelry design.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">OUR PHILOSOPHY</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--color-text-dark)', marginBottom: '1.5rem', lineHeight: '1.25' }}>
              Where Sacred Minerals Meet <br />
              <span className="font-serif-italic text-gold">Mindful Modern Living</span>
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.9', color: 'var(--color-text-muted)', marginBottom: '1.8rem' }}>
              BSence was founded on a simple yet profound realization: in an era of relentless digital noise, individuals long for tangible anchors of calm, purpose, and spiritual connection. We saw a landscape dominated by either generic, mass-produced trinkets or inaccessible fine jewelry disconnected from authentic spiritual origins.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.9', color: 'var(--color-text-muted)' }}>
              From our flagship studio in Kolkata, we source certified raw crystals from verified global deposits, paired with authentic Nepali Rudraksha beads and 18k gold vermeil hardware. Every single piece is ritually cleansed, blessed with pure Gangajal, and charged upon Moroccan Selenite before being dispatched in our signature keepsake white box.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach (3 Pillars) */}
      <section style={{ backgroundColor: 'var(--color-warm-cream)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">UNCOMPROMISED EXCELLENCE</span>
            <h2 className="section-title">Our Approach</h2>
            <p className="section-desc">Three guiding pillars that define every BSence creation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(1.2rem, 3vw, 2rem)' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem 2rem', boxShadow: 'var(--shadow-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '0.8rem' }}>01</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Thoughtfully Selected</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Every gemstone is selected with rigorous attention to natural color saturation, crystalline termination, and authentic mineral density—never synthetic glass or plastic.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem 2rem', boxShadow: 'var(--shadow-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '0.8rem' }}>02</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Prepared With Care</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Crystals and Rudraksha are cleansed and energized according to authentic Kolkata studio practices, utilizing sacred organic dhoop, sound vibrations, and pure intention.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem 2rem', boxShadow: 'var(--shadow-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '0.8rem' }}>03</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Beautifully Presented</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Every order arrives in our pure white luxury rigid gift box with gold foil stamping, a protective velvet pouch, and a handwritten certificate of energization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit BSence & Contact Form Section */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(2rem, 4vw, 4rem)' }}>
            {/* Left: Store Information & Live CTAs */}
            <div>
              <span className="eyebrow">VISIT OUR KOLKATA ATELIER</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', marginBottom: '1.5rem', color: 'var(--color-text-dark)' }}>
                Visit BSence
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={22} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '1rem', color: 'var(--color-text-dark)', display: 'block' }}>Kolkata Flagship Sanctuary</strong>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.6' }}>
                      Satya Enclave, Shop No-3,<br />
                      Gobindo Nibas Rajarhat Road,<br />
                      Kolkata – 700059, West Bengal, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone size={20} className="text-gold" />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', display: 'block' }}>Concierge Hotline:</strong>
                    <a href="tel:+919112893227" style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>
                      +91 91128 93227
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Mail size={20} className="text-gold" />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', display: 'block' }}>Direct Email:</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>concierge@bsence.com</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Clock size={20} className="text-gold" />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-dark)', display: 'block' }}>Atelier Hours:</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>Monday – Saturday: 10:30 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp and Call Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
                <a
                  href="https://wa.me/919112893227?text=Hello%20BSence,%20I%20would%20like%20to%20know%20more%20about%20your%20crystal%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <MessageCircle size={16} /> WhatsApp Concierge
                </a>

                <a
                  href="tel:+919112893227"
                  className="btn-secondary"
                >
                  <Phone size={16} /> Call Store Directly
                </a>
              </div>

              {/* Interactive Visual Map Card */}
              <div
                style={{
                  height: '220px',
                  backgroundColor: 'var(--color-secondary)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <MapPin size={32} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', margin: 0 }}>
                  Satya Enclave • Rajarhat Road
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  Kolkata, West Bengal – 700059
                </p>
                <a
                  href="https://maps.google.com/?q=Gobindo+Nibas+Rajarhat+Road+Kolkata+700059"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-gold)', marginTop: '0.6rem', textDecoration: 'underline' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              style={{
                backgroundColor: 'var(--color-secondary)',
                border: '1px solid var(--color-border)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '0.4rem', color: 'var(--color-text-dark)' }}>
                Write To Our Concierge
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Inquire about custom bracelet sizing, corporate gifts, or personalized astrological recommendations.
              </p>

              {submitted ? (
                <div style={{ backgroundColor: 'var(--color-warm-cream)', border: '1px solid var(--color-gold)', padding: '2rem', textAlign: 'center' }}>
                  <CheckCircle2 size={32} className="text-gold" style={{ margin: '0 auto 0.8rem auto' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Message Received</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Our Kolkata atelier team will reach out to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                      placeholder="Ananya Mukherjee"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '4px' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                        placeholder="+91 98300 00000"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '4px' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                        placeholder="ananya@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '4px' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                      placeholder="e.g. Custom Size Request or Zodiac Inquiries"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '4px' }}>
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                      placeholder="Please let us know how we can assist your crystal journey..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: '1rem', width: '100%' }}
                  >
                    SEND MESSAGE <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
