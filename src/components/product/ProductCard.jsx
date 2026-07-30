import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, BarChart2, Sparkles, Flame, Crown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useApp } from '../../context/AppContext';

export default function ProductCard({ product, showCompare = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [heartAnimating, setHeartAnimating] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCompare } = useApp();

  const wishlisted = isWishlisted(product.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHeartAnimating(true);
    toggleWishlist(product);
    setTimeout(() => setHeartAnimating(false), 400);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCompare(product);
  };

  const savingsAmount = product.originalPrice && product.originalPrice > product.price
    ? product.originalPrice - product.price
    : 0;

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        className="product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          height: '100%', display: 'flex', flexDirection: 'column',
          position: 'relative',
          borderRadius: '22px',
          background: 'var(--bg-card)',
          border: isHovered ? '1px solid rgba(244, 63, 94, 0.4)' : '1px solid var(--border-color)',
          boxShadow: isHovered
            ? '0 20px 50px rgba(244, 63, 94, 0.18), 0 0 0 1px rgba(244, 63, 94, 0.2)'
            : '0 4px 20px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'translateY(-8px)' : 'none',
          overflow: 'hidden',
        }}
      >
        {/* Shimmer line accent on top on hover */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, #f43f5e, #fbbf24, #e11d48)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 3,
        }} />

        {/* Image Container */}
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', background: 'var(--bg-primary)' }}>
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            }}
          />

          {/* Luxury Floating Badges */}
          <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 2 }}>
            {product.badge && (
              <span className={`badge badge-${product.badge}`} style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                padding: '0.35rem 0.8rem',
                borderRadius: '50px',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              }}>
                {product.badge === 'bestseller' ? (
                  <><Crown size={12} style={{ marginRight: '3px' }} /> BEST SELLER</>
                ) : product.badge === 'new' ? (
                  <><Sparkles size={12} style={{ marginRight: '3px' }} /> NEW</>
                ) : product.badge === 'trending' ? (
                  <><Flame size={12} style={{ marginRight: '3px' }} /> TRENDING</>
                ) : product.badge === 'sale' ? (
                  `${product.discount}% OFF`
                ) : (
                  product.badge.toUpperCase()
                )}
              </span>
            )}
            {product.discount > 0 && product.badge !== 'sale' && (
              <span className="badge badge-discount" style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                padding: '0.35rem 0.75rem',
                borderRadius: '50px',
              }}>
                ⚡ -{product.discount}%
              </span>
            )}
          </div>

          {/* Action Overlay Buttons */}
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            display: 'flex', flexDirection: 'column', gap: '8px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(12px)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 2,
          }}>
            <button
              onClick={handleWishlist}
              className={heartAnimating ? 'heart-pop' : ''}
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: wishlisted ? '#f43f5e' : 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)', transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            >
              <Heart size={17} fill={wishlisted ? 'white' : 'none'} color={wishlisted ? 'white' : '#f43f5e'} />
            </button>

            {showCompare && (
              <button
                onClick={handleCompare}
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(8px)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)', transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                title="Add to Compare"
              >
                <BarChart2 size={16} color="#9c7b9e" />
              </button>
            )}
          </div>

          {/* Quick Add to Cart Bar */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '0.75rem',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 2,
          }}>
            <button onClick={handleAddToCart} className="btn-primary" style={{
              width: '100%', justifyContent: 'center', fontSize: '0.82rem',
              padding: '0.65rem 1rem',
              background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
              boxShadow: '0 6px 20px rgba(244,63,94,0.4)',
              borderRadius: '50px',
              fontWeight: '700',
              letterSpacing: '0.02em',
            }}>
              <ShoppingBag size={15} />
              Quick Add to Cart
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Brand Tag Chip */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: '700',
              color: '#e11d48',
              background: 'rgba(244,63,94,0.08)',
              padding: '2px 8px',
              borderRadius: '6px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {product.brand}
            </span>
            {/* Rating Star Chip */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '3px',
              background: '#fef3c7', padding: '2px 7px', borderRadius: '12px',
              border: '1px solid rgba(245, 158, 11, 0.25)',
            }}>
              <Star size={11} fill="#f59e0b" color="#f59e0b" />
              <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#b45309' }}>{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: '600',
            fontSize: '0.96rem', color: 'var(--text-primary)',
            lineHeight: '1.35', flex: 1, marginTop: '2px',
          }} className="line-clamp-2">
            {product.name}
          </h3>

          {/* Shades preview */}
          {product.shades && product.shades.length > 0 && (
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center', margin: '2px 0' }}>
              {product.shades.slice(0, 5).map(shade => (
                <div key={shade.name} title={shade.name} style={{
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: shade.color, border: '1.5px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                }} />
              ))}
              {product.shades.length > 5 && (
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>+{product.shades.length - 5}</span>
              )}
            </div>
          )}

          {/* Price & Savings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto', flexWrap: 'wrap', paddingTop: '4px' }}>
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#f43f5e' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>

            {savingsAmount > 0 && (
              <>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="savings-tag">
                  Save ₹{savingsAmount.toLocaleString('en-IN')}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
