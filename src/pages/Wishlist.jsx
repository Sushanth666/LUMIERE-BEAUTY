import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';

export default function Wishlist() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  const suggestedProducts = products.filter(p => !items.find(i => i.id === p.id)).slice(0, 4);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
        <Heart size={28} color="#f43f5e" fill="#f43f5e" />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--text-primary)' }}>
          My Wishlist
        </h1>
        {items.length > 0 && (
          <span style={{ background: 'var(--accent-light)', color: '#f43f5e', borderRadius: '50px', padding: '4px 14px', fontSize: '0.85rem', fontWeight: '700' }}>
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>💔</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Your Wishlist is Empty
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Save your favorite products and come back to them anytime.
          </p>
          <Link to="/products" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1rem' }}>
            Discover Products <ArrowRight size={16} />
          </Link>

          {suggestedProducts.length > 0 && (
            <div style={{ marginTop: '4rem', textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                You Might Love These
              </h3>
              <div className="products-grid">
                {suggestedProducts.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {items.map(item => (
              <div key={item.id} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                borderRadius: '20px', overflow: 'hidden', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(244,63,94,0.1)'; e.currentTarget.style.borderColor = 'rgba(244,63,94,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                <div style={{ position: 'relative' }}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.images[0]} alt={item.name}
                      style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
                  </Link>
                  <button onClick={() => removeFromWishlist(item.id)} style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: 'rgba(255,255,255,0.95)', border: 'none',
                    borderRadius: '50%', width: '36px', height: '36px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#fee2e2'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.95)'; }}
                    title="Remove from Wishlist"
                  >
                    <Trash2 size={15} color="#ef4444" />
                  </button>
                  {item.badge && (
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className={`badge badge-${item.badge}`}>
                        {item.badge === 'bestseller' ? 'Best Seller' : item.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{item.brand}</p>
                  <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '0.75rem' }} className="line-clamp-2">
                      {item.name}
                    </h3>
                  </Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: '800', fontSize: '1rem', color: '#f43f5e' }}>₹{item.price.toLocaleString('en-IN')}</span>
                    {item.originalPrice > item.price && (
                      <>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₹{item.originalPrice.toLocaleString('en-IN')}</span>
                        <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#16a34a', borderRadius: '50px', padding: '1px 6px', fontWeight: '700' }}>{item.discount}% off</span>
                      </>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleMoveToCart(item)} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.6rem 0.75rem' }}>
                      <ShoppingBag size={13} /> Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Save items you love — they'll be here when you're ready!
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => items.forEach(item => handleMoveToCart(item))} className="btn-primary" style={{ fontSize: '0.875rem' }}>
                <ShoppingBag size={14} /> Move All to Cart
              </button>
              <Link to="/products" className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
