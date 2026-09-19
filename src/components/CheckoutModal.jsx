import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ShieldCheck, Lock, CreditCard, Smartphone, Building2, Truck, ArrowRight, Sparkles } from 'lucide-react';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    shipping,
    discountAmount,
    finalTotal,
    placeOrder,
    setCurrentPage
  } = useShop();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700059',
    country: 'India',
    notes: '',
    paymentMethod: 'upi',
    upiApp: 'Google Pay'
  });

  const [orderComplete, setOrderComplete] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder({
        customer: `${formData.firstName} ${formData.lastName}`.trim() || 'Patron',
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        paymentMethod: formData.paymentMethod.toUpperCase()
      });

      setIsSubmitting(false);
      setOrderComplete(order);

      // Trigger celebratory gold confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C7A76A', '#FAF8F4', '#171717', '#3D7B54']
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1200);
  };

  const INDIAN_STATES = [
    'West Bengal', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu',
    'Gujarat', 'Uttar Pradesh', 'Rajasthan', 'Telangana', 'Kerala',
    'Haryana', 'Punjab', 'Madhya Pradesh', 'Bihar', 'Odisha', 'Assam'
  ];

  return (
    <div className="modal-overlay" onClick={() => !orderComplete && setIsCheckoutOpen(false)}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '94vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-modal)',
          border: '1px solid var(--color-border)',
          position: 'relative',
          padding: 'clamp(1.5rem, 4vw, 3rem)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Lock size={16} className="text-gold" />
              <span className="eyebrow" style={{ margin: 0 }}>256-BIT ENCRYPTED CHECKOUT</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-text-dark)', margin: 0 }}>
              {orderComplete ? 'Sacred Order Confirmed' : 'BSence Private Order Dispatch'}
            </h2>
          </div>
          {!orderComplete && (
            <button className="icon-btn" onClick={() => setIsCheckoutOpen(false)}>
              <X size={22} />
            </button>
          )}
        </div>

        {orderComplete ? (
          /* Order Confirmation View */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-warm-cream)',
                border: '2px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <Sparkles size={36} className="text-gold" />
            </div>

            <span className="eyebrow">ORDER ID: {orderComplete.id}</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '0.8rem' }}>
              May This Piece Bring Intention & Light
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto 2rem auto', lineHeight: '1.8' }}>
              Thank you, <strong>{orderComplete.customer}</strong>. Your sacred parcel has been logged for our Kolkata studio cleansing ritual and will be dispatched to <strong>{orderComplete.city}, {orderComplete.pincode}</strong> via insured express delivery.
            </p>

            {/* Order Summary Box */}
            <div style={{ backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-border)', padding: '1.5rem', maxWidth: '520px', margin: '0 auto 2.5rem auto', textAlign: 'left' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.4rem' }}>
                Dispatch Summary
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <span>Items Ordered:</span>
                <span>{orderComplete.items.length} item(s)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <span>Payment Mode:</span>
                <span>{orderComplete.paymentMethod}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: '600', marginTop: '0.6rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.6rem' }}>
                <span>Total Amount:</span>
                <span>₹{orderComplete.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  setOrderComplete(null);
                  setIsCheckoutOpen(false);
                  setCurrentPage('shop');
                }}
              >
                RETURN TO SANCTUARY
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Input Form & Order Review */
          <form onSubmit={handleSubmitOrder}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {/* Shipping Address Column */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '1.2rem' }}>
                  1. Dispatch Address
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                      placeholder="Ananya"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                      placeholder="Mukherjee"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>Mobile (for Dispatch SMS) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                      placeholder="+91 98300 00000"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                      placeholder="ananya@example.com"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>Street Address / Flat / Floor *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                    placeholder="Flat 4B, Heritage Court, Rajarhat Road"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '0.8rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                    >
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>PIN Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: '600' }}>Special Energization or Packing Note</label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Gift for birthday / request custom wrist size"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-secondary)' }}
                  />
                </div>
              </div>

              {/* Payment Method & Order Summary Column */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '1.2rem' }}>
                  2. Payment Preference
                </h3>

                {/* Payment Options Radio Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.8rem' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.9rem 1rem',
                      border: '1px solid',
                      borderColor: formData.paymentMethod === 'upi' ? 'var(--color-gold)' : 'var(--color-border)',
                      backgroundColor: formData.paymentMethod === 'upi' ? 'var(--color-warm-cream)' : 'var(--color-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                    />
                    <Smartphone size={18} className="text-gold" />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block' }}>Instant UPI / QR (Google Pay, PhonePe, Paytm)</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Zero transaction fees • Instant verification</span>
                    </div>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.9rem 1rem',
                      border: '1px solid',
                      borderColor: formData.paymentMethod === 'card' ? 'var(--color-gold)' : 'var(--color-border)',
                      backgroundColor: formData.paymentMethod === 'card' ? 'var(--color-warm-cream)' : 'var(--color-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <CreditCard size={18} className="text-gold" />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block' }}>Credit & Debit Cards</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Visa, MasterCard, RuPay, Amex</span>
                    </div>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.9rem 1rem',
                      border: '1px solid',
                      borderColor: formData.paymentMethod === 'cod' ? 'var(--color-gold)' : 'var(--color-border)',
                      backgroundColor: formData.paymentMethod === 'cod' ? 'var(--color-warm-cream)' : 'var(--color-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <Truck size={18} className="text-gold" />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block' }}>Cash on Delivery (Pan-India)</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Pay cash or UPI upon parcel arrival</span>
                    </div>
                  </label>
                </div>

                {/* Mini Order Summary */}
                <div style={{ backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-border)', padding: '1.4rem', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.4rem' }}>
                    Order Summary ({cart.length} unique items)
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', maxHeight: '140px', overflowY: 'auto' }}>
                    {cart.map((item) => (
                      <div key={`${item.product.id}-${item.variant}`} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                        <span style={{ maxWidth: '210px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.quantity}x {item.product.name}
                        </span>
                        <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--color-success)' }}>
                      <span>Privilege Discount</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    <span>Insured Shipping</span>
                    <span>{shipping === 0 ? 'COMPLIMENTARY' : `₹${shipping}`}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: '600', borderTop: '1px solid var(--color-border)', paddingTop: '0.8rem', marginTop: '0.6rem' }}>
                    <span>Total Payable</span>
                    <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '1.1rem' }}
                >
                  {isSubmitting ? 'SECURELY DISPATCHING...' : `CONFIRM ORDER (₹${finalTotal.toLocaleString('en-IN')})`}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
