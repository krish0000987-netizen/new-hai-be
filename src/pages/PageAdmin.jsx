import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Package, ShoppingBag, Users, Tag, TrendingUp, Check, AlertCircle, Edit, Trash2, Plus, ArrowRight } from 'lucide-react';

export const PageAdmin = () => {
  const { products, orders, updateProductPrice, toggleProductStock, showToast } = useShop();

  const [activeTab, setActiveTab] = useState('orders');
  const [editingProduct, setEditingProduct] = useState(null);
  const [editPrice, setEditPrice] = useState('');
  const [editOrigPrice, setEditOrigPrice] = useState('');

  // Total sales calculation
  const totalRevenue = orders.reduce((sum, ord) => sum + ord.total, 0);

  const handleStartEdit = (product) => {
    setEditingProduct(product);
    setEditPrice(product.price);
    setEditOrigPrice(product.originalPrice);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (editingProduct && editPrice && editOrigPrice) {
      updateProductPrice(editingProduct.id, Number(editPrice), Number(editOrigPrice));
      setEditingProduct(null);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-secondary)', minHeight: '85vh', padding: '3.5rem 0 5rem 0' }}>
      <div className="container">
        {/* Admin Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <span className="eyebrow">BSENCE OPERATIONS SANCTUARY</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--color-text-dark)', margin: 0 }}>
              Atelier Management Portal
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              Live inventory controls, Pan-India order dispatch, and customer management.
            </p>
          </div>

          {/* Quick Metrics Pills */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '0.8rem 1.4rem', textAlign: 'right' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Processed</span>
              <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>₹{totalRevenue.toLocaleString('en-IN')}</strong>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '0.8rem 1.4rem', textAlign: 'right' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Active Orders</span>
              <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--color-gold)' }}>{orders.length}</strong>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
          {[
            { id: 'orders', label: `Orders (${orders.length})`, icon: ShoppingBag },
            { id: 'products', label: `Inventory Products (${products.length})`, icon: Package },
            { id: 'coupons', label: 'Coupons & Privileges', icon: Tag }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.4rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-gold)' : 'var(--color-border)',
                  backgroundColor: isSelected ? 'var(--color-text-dark)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-text-dark)',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} className={isSelected ? 'text-gold' : ''} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Orders Pipeline */}
        {activeTab === 'orders' && (
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem 1.2rem' }}>Order ID</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Date</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Patron Name</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Location</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Items Summary</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Amount</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Payment</th>
                  <th style={{ padding: '1rem 1.2rem' }}>Dispatch Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <td style={{ padding: '1rem 1.2rem', fontWeight: '600', color: 'var(--color-gold)' }}>
                      {order.id}
                    </td>
                    <td style={{ padding: '1rem 1.2rem', color: 'var(--color-text-muted)' }}>
                      {order.date}
                    </td>
                    <td style={{ padding: '1rem 1.2rem' }}>
                      <strong>{order.customer}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>{order.phone}</div>
                    </td>
                    <td style={{ padding: '1rem 1.2rem', color: 'var(--color-text-muted)' }}>
                      {order.city}, {order.pincode}
                    </td>
                    <td style={{ padding: '1rem 1.2rem' }}>
                      {order.items.map((it, idx) => (
                        <div key={idx} style={{ fontSize: '0.78rem' }}>
                          {it.qty}x {it.name.slice(0, 32)}...
                        </div>
                      ))}
                    </td>
                    <td style={{ padding: '1rem 1.2rem', fontWeight: '600' }}>
                      ₹{order.total.toLocaleString('en-IN')}
                    </td>
                    <td style={{ padding: '1rem 1.2rem' }}>
                      <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--color-secondary)', padding: '2px 8px', border: '1px solid var(--color-border)' }}>
                        {order.paymentMethod}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.2rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: order.status === 'Delivered' ? 'var(--color-success)' : 'var(--color-gold)', backgroundColor: 'var(--color-warm-cream)', padding: '4px 10px', border: '1px solid var(--color-gold-hairline)' }}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Products Catalog & Pricing */}
        {activeTab === 'products' && (
          <div>
            {/* Edit Modal Popup */}
            {editingProduct && (
              <div className="modal-overlay" onClick={() => setEditingProduct(null)}>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    maxWidth: '480px',
                    width: '100%',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-modal)',
                    border: '1px solid var(--color-border)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    Adjust Pricing: {editingProduct.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                    Changes reflect live in the storefront and cart immediately.
                  </p>

                  <form onSubmit={handleSaveEdit}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>
                        Selling Price (₹ INR) *
                      </label>
                      <input
                        type="number"
                        required
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)' }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>
                        Original / Strikey Price (₹ INR) *
                      </label>
                      <input
                        type="number"
                        required
                        value={editOrigPrice}
                        onChange={(e) => setEditOrigPrice(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)' }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                        SAVE PRICE
                      </button>
                      <button type="button" className="btn-secondary" onClick={() => setEditingProduct(null)} style={{ flex: 1 }}>
                        CANCEL
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
                    <th style={{ padding: '1rem 1.2rem' }}>Product</th>
                    <th style={{ padding: '1rem 1.2rem' }}>Category</th>
                    <th style={{ padding: '1rem 1.2rem' }}>Selling Price</th>
                    <th style={{ padding: '1rem 1.2rem' }}>Original Price</th>
                    <th style={{ padding: '1rem 1.2rem' }}>Discount</th>
                    <th style={{ padding: '1rem 1.2rem' }}>Stock Status</th>
                    <th style={{ padding: '1rem 1.2rem' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((prod) => (
                    <tr key={prod.id} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                      <td style={{ padding: '1rem 1.2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <img src={prod.images[0]} alt={prod.name} style={{ width: '40px', height: '46px', objectFit: 'cover' }} />
                          <div>
                            <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem' }}>{prod.name}</strong>
                            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>{prod.crystalType}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem 1.2rem', textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                        {prod.category}
                      </td>
                      <td style={{ padding: '1rem 1.2rem', fontWeight: '600' }}>
                        ₹{prod.price.toLocaleString('en-IN')}
                      </td>
                      <td style={{ padding: '1rem 1.2rem', color: 'var(--color-text-muted)' }}>
                        ₹{prod.originalPrice.toLocaleString('en-IN')}
                      </td>
                      <td style={{ padding: '1rem 1.2rem', color: 'var(--color-success)', fontWeight: '600' }}>
                        {prod.discountPercent}% OFF
                      </td>
                      <td style={{ padding: '1rem 1.2rem' }}>
                        <button
                          onClick={() => toggleProductStock(prod.id)}
                          style={{
                            background: 'none',
                            border: '1px solid',
                            borderColor: prod.inStock ? 'var(--color-success)' : 'var(--color-error)',
                            color: prod.inStock ? 'var(--color-success)' : 'var(--color-error)',
                            padding: '3px 8px',
                            fontSize: '0.72rem',
                            cursor: 'pointer',
                            fontWeight: '600'
                          }}
                        >
                          {prod.inStock ? 'In Stock' : 'Out of Stock'}
                        </button>
                      </td>
                      <td style={{ padding: '1rem 1.2rem' }}>
                        <button
                          className="btn-secondary"
                          onClick={() => handleStartEdit(prod)}
                          style={{ padding: '0.4rem 0.8rem', fontSize: '0.72rem' }}
                        >
                          <Edit size={12} /> Edit Price
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Coupons */}
        {activeTab === 'coupons' && (
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: '2.5rem', boxShadow: 'var(--shadow-card)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
              Active Privilege Codes
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', border: '1px dashed var(--color-gold)', backgroundColor: 'var(--color-warm-cream)' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', display: 'block' }}>BSENCE10</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: '600' }}>10% Inaugural Discount</span>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Valid sitewide on all crystal jewelry and Rudraksha with no minimum basket value.
                </p>
              </div>

              <div style={{ padding: '1.5rem', border: '1px dashed var(--color-gold)', backgroundColor: 'var(--color-warm-cream)' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', display: 'block' }}>KOLKATA500</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: '600' }}>Flat ₹500 Privilege</span>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Valid on orders above ₹2,500 across all 19,000+ Indian pincodes.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
