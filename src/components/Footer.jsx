import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer = () => {
  const { setCurrentPage, setCategoryFilter } = useShop();
  const [activePolicy, setActivePolicy] = useState(null);

  const navigateTo = (page, category = null) => {
    if (category) setCategoryFilter(category);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const policies = {
    shipping: {
      title: 'Pan-India Shipping Policy',
      content: 'All BSence orders are dispatched via premium express air couriers (BlueDart, Delhivery, DTDC). Orders above ₹1,999 qualify for complimentary insured delivery. Once energized, your parcel is typically delivered within 2–4 business days across metro cities and 4–6 days for regional destinations. Every parcel is insured against loss or damage during transit.'
    },
    returns: {
      title: 'Returns & Exchange Policy',
      content: 'We offer a 7-day doorstep exchange policy for any items damaged in transit or fitting discrepancies. Because crystals are energized specifically for each patron prior to dispatch, items must be in their original unworn condition with security tag intact in their luxury box. Contact our Kolkata concierge at +91 90515 12315 to initiate a seamless return.'
    },
    privacy: {
      title: 'Privacy & Data Protection',
      content: 'BSence respects patron confidentiality. We employ 256-bit SSL encryption for all order transactions and never sell or exchange personal contact details or astrological birth details with third-party advertising networks.'
    },
    disclaimer: {
      title: 'Spiritual Wellness & Astrology Disclaimer',
      content: 'BSence products and descriptions are inspired by traditional spiritual, astrological, and numerological practices. Any descriptions of crystal properties, gemstones, or Rudraksha are provided for cultural and spiritual interest and are not intended as medical, psychological, legal, or financial guarantees.'
    }
  };

  return (
    <>
      <footer
        style={{
          backgroundColor: '#171717',
          color: '#FAF8F4',
          paddingTop: '5rem',
          paddingBottom: '2.5rem',
          borderTop: '1px solid #2B2B2B'
        }}
        role="contentinfo"
      >
        <div className="container">
          {/* 4 Column Top Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: 'clamp(1.8rem, 3.5vw, 3rem)',
              marginBottom: '3rem'
            }}
          >
            {/* Column 1: Brand & Kolkata Address */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  letterSpacing: '0.18em',
                  color: '#FFFFFF',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '0.4rem'
                }}
              >
                BSENCE
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  fontWeight: '600',
                  display: 'block',
                  marginBottom: '1.4rem'
                }}
              >
                HAUTE SPIRITUAL JOAILLERIE
              </span>

              <p
                style={{
                  fontSize: '0.86rem',
                  lineHeight: '1.7',
                  color: '#B0A8A0',
                  marginBottom: '1.4rem'
                }}
              >
                Discover the pure white luxury of hand-energized crystals, Vedic Rudraksha, and personalized zodiac jewelry from Kolkata.
              </p>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #383838',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FAF8F4',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #383838',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FAF8F4',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="https://wa.me/919051512315?text=Hello%20BSence,%20I%20would%20like%20to%20know%20more%20about%20your%20crystal%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Concierge"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #383838',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FAF8F4',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Shop Links */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: '#FFFFFF',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.04em'
                }}
              >
                Collections
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a
                    href="#/lifestyle-bracelets"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0', transition: 'color 0.2s ease' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('lifestyle-bracelets'); }}
                  >
                    Lifestyle Intention Bracelets
                  </a>
                </li>
                <li>
                  <a
                    href="#/zodiac-bracelets"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('zodiac-bracelets'); }}
                  >
                    12 Zodiac Bracelets
                  </a>
                </li>
                <li>
                  <a
                    href="#/numerology-bracelets"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('numerology-bracelets'); }}
                  >
                    Numerology Birth Numbers
                  </a>
                </li>
                <li>
                  <a
                    href="#/crystal-rings"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('crystal-rings'); }}
                  >
                    Luxury Crystal Rings
                  </a>
                </li>
                <li>
                  <a
                    href="#/rudraksha"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('rudraksha'); }}
                  >
                    Sacred Nepali Rudraksha
                  </a>
                </li>
                <li>
                  <a
                    href="#/crystal-chunks"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('crystal-chunks'); }}
                  >
                    Authentic Crystal Chunks
                  </a>
                </li>
                <li>
                  <a
                    href="#/charging-plates"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('charging-plates'); }}
                  >
                    The Selenite Charging Plate
                  </a>
                </li>
                <li>
                  <a
                    href="#/shop"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('shop', 'combos'); }}
                  >
                    Super Balanced Combos
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Care & Policies */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: '#FFFFFF',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.04em'
                }}
              >
                Patron Care
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a
                    href="#/about-contact"
                    style={{ fontSize: '0.85rem', color: '#B0A8A0' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('about-contact'); }}
                  >
                    Our Story & Kolkata Atelier
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('shipping')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', color: '#B0A8A0', cursor: 'pointer', textAlign: 'left' }}
                  >
                    Pan-India Insured Shipping
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('returns')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', color: '#B0A8A0', cursor: 'pointer', textAlign: 'left' }}
                  >
                    7-Day Doorstep Exchange
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('privacy')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', color: '#B0A8A0', cursor: 'pointer', textAlign: 'left' }}
                  >
                    Privacy & Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('disclaimer')}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', color: '#B0A8A0', cursor: 'pointer', textAlign: 'left' }}
                  >
                    Spiritual Content Disclaimer
                  </button>
                </li>
                <li>
                  <a
                    href="#/admin"
                    style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: '600' }}
                    onClick={(e) => { e.preventDefault(); navigateTo('admin'); }}
                  >
                    Admin Management Portal →
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact BSence Kolkata */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: '#FFFFFF',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.04em'
                }}
              >
                Visit Our Studio
              </h4>

              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#B0A8A0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                <MapPin size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF' }}>BSence Atelier</strong><br />
                  Satya Enclave, Shop No-3,<br />
                  Gobindo Nibas Rajarhat Road,<br />
                  Kolkata – 700059, West Bengal, India
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem', color: '#B0A8A0', fontSize: '0.85rem' }}>
                <Phone size={16} className="text-gold" />
                <a href="tel:+919051512315" style={{ color: '#FAF8F4', fontWeight: '500' }}>
                  +91 90515 12315
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem', color: '#B0A8A0', fontSize: '0.85rem' }}>
                <Mail size={16} className="text-gold" />
                <span>concierge@bsence.com</span>
              </div>

              <a
                href="https://wa.me/919051512315?text=Hello%20BSence,%20I%20would%20like%20to%20know%20more%20about%20your%20crystal%20products."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  color: '#25D366',
                  padding: '0.6rem 1rem',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  fontSize: '0.78rem',
                  fontWeight: '600'
                }}
              >
                <MessageCircle size={14} /> WhatsApp Concierge
              </a>
            </div>
          </div>

          {/* Bottom Bar with Copyright & Disclaimers */}
          <div
            style={{
              borderTop: '1px solid #2B2B2B',
              paddingTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.75rem',
              color: '#7D756D'
            }}
          >
            <div>
              © {new Date().getFullYear()} BSence Luxury D2C Brand. All rights reserved. Registered at Kolkata – 700059.
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Vedic Astrological Principles</span>
              <span>100% Natural Minerals</span>
              <span>Cleansed Prior To Dispatch</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activePolicy && (
        <div className="modal-overlay" onClick={() => setActivePolicy(null)}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              maxWidth: '560px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-modal)',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                color: 'var(--color-text-dark)',
                marginBottom: '1rem'
              }}
            >
              {policies[activePolicy].title}
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem'
              }}
            >
              {policies[activePolicy].content}
            </p>
            <button
              className="btn-primary"
              onClick={() => setActivePolicy(null)}
              style={{ width: '100%' }}
            >
              CLOSE WINDOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};
