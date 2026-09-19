import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, Heart, ArrowRight, ShieldCheck, Tag, Sparkles, ShoppingBag } from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQty,
    subtotal,
    shipping,
    freeShippingThreshold,
    freeShippingProgress,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponError,
    discountAmount,
    finalTotal,
    toggleWishlist,
    setIsCheckoutOpen,
    setCurrentPage
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Shopping Bag"
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.4rem 1.6rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={18} className="text-gold" />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', letterSpacing: '0.04em', margin: 0 }}>
              Your Sanctuary Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="icon-btn"
            aria-label="Close Bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div style={{ padding: '0.9rem 1.6rem', backgroundColor: 'var(--color-secondary)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '0.4rem', fontWeight: '500' }}>
            <span>
              {subtotal >= freeShippingThreshold
                ? '✨ You have unlocked Complimentary Express Shipping!'
                : `Add ₹${(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more for Complimentary Delivery`}
            </span>
            <span>{freeShippingProgress}%</span>
          </div>
          <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--color-border)', borderRadius: '2px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${freeShippingProgress}%`,
                height: '100%',
                backgroundColor: 'var(--color-gold)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.2rem 1.6rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <Sparkles size={36} className="text-gold" style={{ margin: '0 auto 1rem auto', opacity: 0.7 }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Your bag is currently empty
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Discover our energized crystal bracelets, statement rings, and sacred Rudraksha pieces.
              </p>
              <button
                className="btn-primary"
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentPage('shop');
                }}
              >
                EXPLORE CATALOG
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant}`}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.2rem',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      width: '74px',
                      height: '86px',
                      backgroundColor: 'var(--color-secondary)',
                      border: '1px solid var(--color-border)',
                      flexShrink: 0,
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                      {item.product.name}
                    </h4>
                    <p style={{ fontSize: '0.72rem', color: 'var(--color-gold)', marginBottom: '0.4rem', fontWeight: '500' }}>
                      Fit: {item.variant}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {/* Quantity Stepper */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--color-border)',
                          backgroundColor: 'var(--color-secondary)'
                        }}
                      >
                        <button
                          onClick={() => updateCartQty(item.product.id, item.variant, -1)}
                          style={{ width: '26px', height: '26px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
                        >
                          -
                        </button>
                        <span style={{ width: '26px', textAlign: 'center', fontSize: '0.78rem', fontWeight: '600' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.product.id, item.variant, 1)}
                          style={{ width: '26px', height: '26px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total */}
                      <span style={{ fontWeight: '600', fontSize: '0.92rem' }}>
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Secondary Actions */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.6rem' }}>
                      <button
                        onClick={() => {
                          removeFromCart(item.product.id, item.variant);
                          toggleWishlist(item.product.id);
                        }}
                        style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: 'var(--color-text-muted)', cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        Move to Wishlist
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: 'var(--color-error)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer / Checkout Summary */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '1.4rem 1.6rem',
              borderTop: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-secondary)'
            }}
          >
            {/* Coupon Code Input */}
            <div style={{ marginBottom: '1rem' }}>
              {appliedCoupon ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0.8rem',
                    backgroundColor: 'var(--color-warm-cream)',
                    border: '1px dashed var(--color-gold)',
                    fontSize: '0.78rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Tag size={13} className="text-gold" />
                    <span><strong>{appliedCoupon.code}</strong> ({appliedCoupon.label})</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    style={{ background: 'none', border: 'none', color: 'var(--color-error)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600' }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex' }}>
                  <input
                    type="text"
                    placeholder="Coupon (e.g. BSENCE10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.55rem 0.8rem',
                      fontSize: '0.78rem',
                      border: '1px solid var(--color-border)',
                      borderRight: 'none',
                      backgroundColor: '#FFFFFF',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-secondary"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.75rem' }}
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && (
                <p style={{ color: 'var(--color-error)', fontSize: '0.7rem', marginTop: '4px' }}>
                  {couponError}
                </p>
              )}
            </div>

            {/* Subtotal Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)' }}>
                  <span>Privilege Savings</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Insured Pan-India Shipping</span>
                <span>{shipping === 0 ? <strong style={{ color: 'var(--color-success)' }}>COMPLIMENTARY</strong> : `₹${shipping}`}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: '600', borderTop: '1px solid var(--color-border)', paddingTop: '0.6rem', marginTop: '0.3rem' }}>
                <span>Final Investment</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              className="btn-primary"
              onClick={handleProceedToCheckout}
              style={{ width: '100%', padding: '1.05rem' }}
            >
              PROCEED TO SECURE CHECKOUT <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
