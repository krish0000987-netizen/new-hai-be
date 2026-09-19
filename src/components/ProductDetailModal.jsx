import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, Heart, ShoppingBag, MessageCircle, Truck, ShieldCheck, RefreshCw, ChevronDown, ChevronUp, Share2, Check } from 'lucide-react';

export const ProductDetailModal = () => {
  const {
    activeModalProduct,
    setActiveModalProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCartOpen,
    setIsCheckoutOpen
  } = useShop();

  if (!activeModalProduct) return null;

  const product = activeModalProduct;
  const isFavorited = isInWishlist(product.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product.wristSizes ? product.wristSizes[0] : 'Standard Fit'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [copied, setCopied] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariant);
    setActiveModalProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi BSence, I'm interested in ${product.name} (₹${product.price}). Please share more details.`
  );

  return (
    <div className="modal-overlay" onClick={() => setActiveModalProduct(null)}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          maxWidth: '1080px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-modal)',
          border: '1px solid var(--color-border)',
          position: 'relative',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveModalProduct(null)}
          className="icon-btn"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            boxShadow: 'var(--shadow-subtle)'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Top Product Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.2rem, 3vw, 2.5rem)',
            padding: 'clamp(1rem, 3.5vw, 2.5rem)'
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            {/* Main Featured Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1.1',
                backgroundColor: 'var(--color-secondary)',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '1px solid var(--color-border)'
              }}
            >
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {product.badge && (
                <span className="product-badge gold" style={{ top: '14px', left: '14px' }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: '72px',
                      height: '72px',
                      border: '1px solid',
                      borderColor: activeImageIndex === idx ? 'var(--color-gold)' : 'var(--color-border)',
                      padding: 0,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      backgroundColor: 'var(--color-secondary)'
                    }}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Purchasing Details */}
          <div>
            <span className="eyebrow">{product.category.toUpperCase()} COLLECTION</span>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                color: 'var(--color-text-dark)',
                marginBottom: '0.4rem',
                lineHeight: '1.25'
              }}
            >
              {product.name}
            </h1>

            <p style={{ fontFamily: 'var(--font-serif-sub)', fontStyle: 'italic', color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>
              {product.subtitle}
            </p>

            {/* Reviews & Social Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C7A76A" stroke="#C7A76A" />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>
                {product.rating} / 5.0
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                ({product.reviewCount} verified patrons)
              </span>
            </div>

            {/* Pricing */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.2rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span style={{ fontSize: '1.05rem', color: 'var(--color-text-light)', textDecoration: 'line-through' }}>
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-success)', fontWeight: '600', backgroundColor: 'rgba(61, 123, 84, 0.1)', padding: '2px 8px' }}>
                    Save {product.discountPercent}%
                  </span>
                </>
              )}
            </div>

            {/* Short Description */}
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {product.shortDesc}
            </p>

            {/* Variant / Size Selection */}
            {product.wristSizes && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', color: 'var(--color-text-dark)' }}>
                    Select Size: <span style={{ color: 'var(--color-gold)' }}>{selectedVariant}</span>
                  </label>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textDecoration: 'underline', cursor: 'pointer' }}>
                    Sizing Guide
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {product.wristSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedVariant(size)}
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.78rem',
                        border: '1px solid',
                        borderColor: selectedVariant === size ? 'var(--color-text-dark)' : 'var(--color-border)',
                        backgroundColor: selectedVariant === size ? 'var(--color-text-dark)' : 'var(--color-secondary)',
                        color: selectedVariant === size ? '#FFFFFF' : 'var(--color-text-dark)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add To Cart CTA */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'stretch' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-secondary)'
                }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '38px', height: '100%', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  -
                </button>
                <span style={{ width: '38px', textAlign: 'center', fontWeight: '600', fontSize: '0.9rem' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '38px', height: '100%', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  +
                </button>
              </div>

              <button
                className="btn-primary"
                onClick={handleAddToCart}
                style={{ flex: 1, padding: '1rem' }}
              >
                <ShoppingBag size={16} /> ADD TO CART
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className="icon-btn"
                style={{
                  border: '1px solid var(--color-border)',
                  width: '50px',
                  backgroundColor: isFavorited ? 'rgba(226, 75, 75, 0.08)' : 'var(--color-secondary)'
                }}
                aria-label="Toggle Wishlist"
              >
                <Heart size={18} fill={isFavorited ? '#E24B4B' : 'none'} color={isFavorited ? '#E24B4B' : '#171717'} />
              </button>
            </div>

            {/* Buy Now & WhatsApp Direct Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.8rem' }}>
              <button
                className="btn-gold"
                onClick={handleBuyNow}
                style={{ width: '100%', padding: '0.95rem' }}
              >
                BUY IT NOW
              </button>

              <a
                href={`https://wa.me/919051512315?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #25D366',
                  color: '#128C7E',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                <MessageCircle size={17} color="#25D366" />
                Inquire or Order via WhatsApp
              </a>
            </div>

            {/* Quick Assurance Tags */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', padding: '1rem', backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
              <div>
                <ShieldCheck size={16} className="text-gold" style={{ margin: '0 auto 4px auto' }} />
                <span style={{ fontSize: '0.68rem', display: 'block', fontWeight: '500' }}>Cleansed & Energized</span>
              </div>
              <div>
                <Truck size={16} className="text-gold" style={{ margin: '0 auto 4px auto' }} />
                <span style={{ fontSize: '0.68rem', display: 'block', fontWeight: '500' }}>Free Insured Ship 1999+</span>
              </div>
              <div>
                <RefreshCw size={16} className="text-gold" style={{ margin: '0 auto 4px auto' }} />
                <span style={{ fontSize: '0.68rem', display: 'block', fontWeight: '500' }}>7-Day Doorstep Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div style={{ borderTop: '1px solid var(--color-border)', padding: '2rem clamp(1.5rem, 4vw, 3rem)' }}>
          {/* Tab Navigation */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem', marginBottom: '1.8rem' }}>
            {['details', 'symbolism', 'how-to-use', 'care', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: activeTab === tab ? 'var(--color-text-dark)' : 'var(--color-text-light)',
                  borderBottom: activeTab === tab ? '2px solid var(--color-gold)' : '2px solid transparent',
                  paddingBottom: '0.6rem',
                  cursor: 'pointer'
                }}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ minHeight: '120px' }}>
            {activeTab === 'details' && (
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.6rem' }}>Craftsmanship & Mineral Profile</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  {product.fullDesc}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem', fontSize: '0.82rem' }}>
                  {product.crystalType && <div><strong>Crystal Type:</strong> {product.crystalType}</div>}
                  {product.material && <div><strong>Material:</strong> {product.material}</div>}
                  {product.beadSize && <div><strong>Bead Spec:</strong> {product.beadSize}</div>}
                  {product.origin && <div><strong>Origin:</strong> {product.origin}</div>}
                  {product.dimensions && <div><strong>Dimensions:</strong> {product.dimensions}</div>}
                  {product.weight && <div><strong>Weight:</strong> {product.weight}</div>}
                </div>
              </div>
            )}

            {activeTab === 'symbolism' && (
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.6rem' }}>Traditional Vedic & Cultural Lore</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                  {product.traditionalSymbolism}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '1rem', fontStyle: 'italic' }}>
                  Note: Symbolic properties are documented from cultural traditions and personal mindfulness practices.
                </p>
              </div>
            )}

            {activeTab === 'how-to-use' && (
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.6rem' }}>Intention Ritual & Placement</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                  {product.howToUse}
                </p>
              </div>
            )}

            {activeTab === 'care' && (
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.6rem' }}>Preservation & Cleansing</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                  {product.careInstructions}
                </p>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.6rem' }}>Express Dispatch from Kolkata</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                  Every piece is ritually energized in our Kolkata studio within 24 hours of order placement and dispatched in an insured rigid keepsake box via BlueDart/Delhivery. Complimentary delivery across India for orders above ₹1,999.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Mobile Add To Cart Bar */}
        <div className="mobile-sticky-add-cart">
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--color-gold)', display: 'block', textTransform: 'uppercase', fontWeight: '600' }}>
              {selectedVariant}
            </span>
            <span style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          <button
            className="btn-primary"
            onClick={handleAddToCart}
            style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.78rem' }}
          >
            <ShoppingBag size={15} /> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
