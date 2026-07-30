import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Minus, Plus, ChevronRight, Share2, Check, Shield, Truck, RotateCcw, ZoomIn, X } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import StarRating from '../components/ui/StarRating';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useApp } from '../context/AppContext';
import { products, getRelatedProducts, reviews } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedShade, setSelectedShade] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [heartAnimating, setHeartAnimating] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToRecentlyViewed } = useApp();

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
      window.scrollTo(0, 0);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😢</div>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1rem' }}>Product not found</h2>
        <Link to="/products" className="btn-primary" style={{ textDecoration: 'none' }}>Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedShade, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedShade, quantity);
    navigate('/checkout');
  };

  const handleWishlist = () => {
    setHeartAnimating(true);
    toggleWishlist(product);
    setTimeout(() => setHeartAnimating(false), 400);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };

  const productReviews = reviews.filter((_, i) => i % 2 === 0);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
        <ChevronRight size={12} />
        <Link to="/products" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Shop</Link>
        <ChevronRight size={12} />
        <Link to={`/products/${product.category}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', textTransform: 'capitalize' }}>{product.category}</Link>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{product.name}</span>
      </nav>

      {/* Main Product */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem' }} className="product-detail-grid">
        {/* ===== LEFT: Images ===== */}
        <div>
          {/* Main Image */}
          <div
            style={{
              position: 'relative', borderRadius: '24px', overflow: 'hidden',
              aspectRatio: '1/1', background: 'var(--bg-secondary)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              border: '1px solid var(--border-color)',
            }}
            onClick={() => setIsZoomed(!isZoomed)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transform: isZoomed ? 'scale(2)' : 'scale(1)',
                transition: isZoomed ? 'none' : 'transform 0.3s ease',
              }}
            />
            <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
              <button style={{
                background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ZoomIn size={16} color="#1a1a2e" />
              </button>
            </div>
            {product.badge && (
              <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                <span className={`badge badge-${product.badge}`}>{product.badge === 'bestseller' ? '🏆 Best Seller' : product.badge === 'new' ? '✨ New' : product.badge === 'trending' ? '🔥 Trending' : product.badge}</span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '1rem', flexWrap: 'wrap' }}>
              {product.images.map((img, i) => (
                <img key={i} src={img} alt={`${product.name} ${i + 1}`}
                  className={`thumb ${selectedImage === i ? 'active' : ''}`}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ===== RIGHT: Info ===== */}
        <div>
          {/* Brand & Share */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <Link to={`/products?brand=${product.brand}`} style={{ fontSize: '0.8rem', fontWeight: '700', color: '#f43f5e', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {product.brand}
            </Link>
            <button style={{ background: 'none', border: '1px solid var(--border-color)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Share2 size={14} />
            </button>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.2', marginBottom: '1rem' }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
            <StarRating rating={product.rating} size={16} />
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{product.rating}</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{product.reviewCount.toLocaleString('en-IN')} reviews</span>
            <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: '600' }}>In Stock</span>
          </div>

          {/* Price & Savings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: '#f43f5e' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="badge badge-discount" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
                  ⚡ -{product.discount}% OFF
                </span>
                <span className="savings-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  💰 Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </>
            )}
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {product.description}
          </p>

          {/* Shade Selector */}
          {product.shades && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Shade: <span style={{ color: '#f43f5e' }}>{selectedShade?.name || 'Select a shade'}</span>
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.shades.map(shade => (
                  <div key={shade.name} title={shade.name}
                    className={`shade-dot ${selectedShade?.name === shade.name ? 'active' : ''}`}
                    style={{ background: shade.color }}
                    onClick={() => setSelectedShade(shade)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size info */}
          {product.size && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500' }}>Size:</span>
              <span style={{
                border: '1px solid var(--border-color)', borderRadius: '8px',
                padding: '4px 12px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)',
              }}>{product.size}</span>
            </div>
          )}

          {/* Quantity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>Quantity:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{
                background: 'var(--bg-secondary)', border: 'none', padding: '10px 14px',
                cursor: 'pointer', color: 'var(--text-primary)',
              }}>
                <Minus size={14} />
              </button>
              <span style={{ padding: '10px 16px', fontWeight: '700', color: 'var(--text-primary)', minWidth: '50px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button onClick={() => setQuantity(q => q + 1)} style={{
                background: 'var(--bg-secondary)', border: 'none', padding: '10px 14px',
                cursor: 'pointer', color: 'var(--text-primary)',
              }}>
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={handleAddToCart} className="btn-primary" style={{ flex: 1, justifyContent: 'center', minWidth: '160px', fontSize: '0.9rem' }}>
              {addedToCart ? <><Check size={16} /> Added!</> : <><ShoppingBag size={16} /> Add to Cart</>}
            </button>
            <button onClick={handleBuyNow} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', minWidth: '160px', fontSize: '0.9rem' }}>
              Buy Now
            </button>
            <button onClick={handleWishlist} className={heartAnimating ? 'heart-pop' : ''} style={{
              background: wishlisted ? '#fff1f2' : 'var(--bg-secondary)',
              border: `1px solid ${wishlisted ? '#f43f5e' : 'var(--border-color)'}`,
              borderRadius: '50px', padding: '0.75rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}>
              <Heart size={18} fill={wishlisted ? '#f43f5e' : 'none'} color={wishlisted ? '#f43f5e' : 'var(--text-secondary)'} />
            </button>
          </div>

          {/* Skin Type & Tags */}
          {(product.skinType || product.tags) && (
            <div style={{ marginBottom: '1.5rem' }}>
              {product.skinType && (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Suitable for: </span>
                  {product.skinType} skin
                </p>
              )}
              {product.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {product.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                      borderRadius: '50px', padding: '3px 10px', fontSize: '0.75rem', color: 'var(--text-secondary)',
                    }}>#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Trust badges */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            {[
              { icon: <Truck size={16} color="#f43f5e" />, text: 'Free delivery on ₹999+' },
              { icon: <Shield size={16} color="#f43f5e" />, text: '100% Authentic' },
              { icon: <RotateCcw size={16} color="#f43f5e" />, text: '30-day returns' },
            ].map(b => (
              <div key={b.text} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textAlign: 'center' }}>
                {b.icon}
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TABS ===== */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem', overflowX: 'auto' }} className="no-scrollbar">
          {['description', 'ingredients', 'reviews', 'howto'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '1rem 1.5rem', border: 'none', background: 'none',
              cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600',
              color: activeTab === tab ? '#f43f5e' : 'var(--text-secondary)',
              borderBottom: `2px solid ${activeTab === tab ? '#f43f5e' : 'transparent'}`,
              transition: 'all 0.2s', whiteSpace: 'nowrap', textTransform: 'capitalize',
            }}>
              {tab === 'howto' ? 'How to Use' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'description' && (
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>{product.description}</p>
            {product.skinType && (
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                <strong>Skin Type:</strong> {product.skinType}
              </p>
            )}
          </div>
        )}

        {activeTab === 'ingredients' && (
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              {product.ingredients || 'Ingredient list not available. Please check the product packaging.'}
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            {/* Rating summary */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: '800', color: '#f43f5e', lineHeight: 1 }}>{product.rating}</p>
                <StarRating rating={product.rating} size={18} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>{product.reviewCount.toLocaleString('en-IN')} reviews</p>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                {[5,4,3,2,1].map(star => {
                  const pct = star === 5 ? 68 : star === 4 ? 22 : star === 3 ? 7 : star === 2 ? 2 : 1;
                  return (
                    <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', width: '20px' }}>{star}★</span>
                      <div className="progress-bar" style={{ flex: 1 }}>
                        <div className="progress-fill" style={{ width: `${pct}%` }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', width: '30px' }}>{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {productReviews.map(r => (
                <div key={r.id} className="review-card">
                  <StarRating rating={r.rating} size={13} />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', margin: '0.75rem 0', fontStyle: 'italic' }}>"{r.comment}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={r.avatar} alt={r.name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <p style={{ fontWeight: '700', fontSize: '0.8rem', color: 'var(--text-primary)' }}>{r.name}</p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{r.date}</p>
                    </div>
                    {r.verified && <span style={{ marginLeft: 'auto', fontSize: '0.65rem', background: '#dcfce7', color: '#16a34a', borderRadius: '50px', padding: '2px 8px', fontWeight: '600' }}>✓ Verified</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'howto' && (
          <div style={{ maxWidth: '700px' }}>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
              <li>Cleanse your face/skin before application.</li>
              <li>Apply a small amount to the desired area.</li>
              <li>Blend gently using circular motions or fingertips.</li>
              <li>Allow to absorb fully before applying other products.</li>
              <li>Use as directed – morning, evening, or as needed.</li>
              <li>For best results, use consistently for 4–6 weeks.</li>
            </ol>
          </div>
        )}
      </div>

      {/* ===== RELATED PRODUCTS ===== */}
      {relatedProducts.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            You Might Also <span className="gradient-text">Love</span>
          </h2>
          <div className="products-grid">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
