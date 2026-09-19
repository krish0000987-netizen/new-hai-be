import React from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setActiveModalProduct
  } = useShop();

  const isFavorited = isInWishlist(product.id);
  const primaryImg = product.images[0] || '/assets/images/hero_slide_1.jpg';
  const secondaryImg = product.images[1] || primaryImg;

  return (
    <article className="product-card" aria-label={product.name}>
      {/* Image Container */}
      <div
        className="product-image-container"
        onClick={() => setActiveModalProduct(product)}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={primaryImg}
          alt={product.name}
          className="product-img-primary"
          loading="lazy"
        />
        <img
          src={secondaryImg}
          alt={`${product.name} alternate view`}
          className="product-img-secondary"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`product-badge ${product.badge.includes('Bestseller') || product.badge.includes('Atelier') ? 'gold' : ''}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          className={`product-wishlist-btn ${isFavorited ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={16} fill={isFavorited ? '#E24B4B' : 'none'} color={isFavorited ? '#E24B4B' : '#171717'} />
        </button>

        {/* Quick Action Floating Bar */}
        <div className="product-quick-actions" onClick={(e) => e.stopPropagation()}>
          <button
            className="btn-secondary"
            style={{ flex: 1, padding: '0.65rem 0.8rem', fontSize: '0.72rem', backgroundColor: '#FFFFFF' }}
            onClick={() => setActiveModalProduct(product)}
          >
            <Eye size={14} /> Quick View
          </button>
          <button
            className="btn-primary"
            style={{ flex: 1, padding: '0.65rem 0.8rem', fontSize: '0.72rem' }}
            onClick={() => addToCart(product, 1, product.wristSizes ? product.wristSizes[0] : 'Standard')}
          >
            <ShoppingBag size={14} /> Add to Bag
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="product-info">
        <span className="product-category">
          {product.category.toUpperCase()} {product.intention ? `• ${product.intention.toUpperCase()}` : ''}
        </span>

        <h3
          className="product-name"
          onClick={() => setActiveModalProduct(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="product-rating">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? '#C7A76A' : 'none'}
                stroke="#C7A76A"
              />
            ))}
          </div>
          <span style={{ fontWeight: '600', fontSize: '0.75rem', color: 'var(--color-text-dark)' }}>
            {product.rating}
          </span>
          <span className="product-reviews-count">({product.reviewCount})</span>
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="product-original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="product-discount-tag">{product.discountPercent}% OFF</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
