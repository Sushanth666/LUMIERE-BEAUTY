import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, Tag, X, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import { products, coupons, shippingOptions } from '../data/products';

const recommendedProducts = products.filter(p => p.badge === 'bestseller').slice(0, 4);

export default function Cart() {
  const { items, removeFromCart, updateQuantity, subtotal, total, shippingCost, discount, coupon, applyCoupon, removeCoupon, setShipping, shipping } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const navigate = useNavigate();

  const handleCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    const couponData = coupons[code];
    if (!couponData) {
      setCouponError('Invalid coupon code');
      setCouponSuccess('');
      return;
    }
    if (subtotal < couponData.minOrder) {
      setCouponError(`Minimum order ₹${couponData.minOrder.toLocaleString('en-IN')} required`);
      setCouponSuccess('');
      return;
    }
    applyCoupon({ ...couponData, code });
    setCouponSuccess(`Coupon applied! ${couponData.description}`);
    setCouponError('');
  };

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🛒</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Your Cart is Empty
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          Looks like you haven't added anything to your cart yet. Discover our beautiful collection!
        </p>
        <Link to="/products" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1rem' }}>
          <ShoppingBag size={18} /> Continue Shopping
        </Link>
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            You Might Like
          </h3>
          <div className="products-grid">
            {recommendedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2rem' }}>
        Shopping Cart <span style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '400' }}>({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
      </h1>

      {/* Free shipping progress */}
      {subtotal < 999 && (
        <div style={{ background: 'var(--accent-light)', border: '1px solid rgba(244,63,94,0.2)', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.875rem', color: '#f43f5e', fontWeight: '500' }}>
              🚚 Add ₹{(999 - subtotal).toLocaleString('en-IN')} more for <strong>FREE shipping!</strong>
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{Math.round((subtotal/999)*100)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${Math.min((subtotal/999)*100, 100)}%` }} />
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem', alignItems: 'start' }} className="cart-layout">
        {/* Cart Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map(item => (
            <div key={`${item.id}-${item.shade?.name}`} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-color)',
              borderRadius: '20px', padding: '1.25rem',
              display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              transition: 'all 0.3s',
            }}>
              <Link to={`/product/${item.id}`} style={{ flexShrink: 0 }}>
                <img src={item.images[0]} alt={item.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '14px' }} />
              </Link>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.brand}</p>
                    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>{item.name}</h3>
                    </Link>
                  </div>
                  <button onClick={() => removeFromCart(item.id, item.shade)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--text-muted)', padding: '4px', borderRadius: '8px',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.color = '#ef4444'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                {item.shade && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: item.shade.color }} />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{item.shade.name}</span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: '50px', overflow: 'hidden' }}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.shade)} style={{
                      background: 'none', border: 'none', padding: '6px 12px', cursor: 'pointer', color: 'var(--text-primary)',
                    }}>
                      <Minus size={12} />
                    </button>
                    <span style={{ padding: '6px 12px', fontWeight: '700', color: 'var(--text-primary)', minWidth: '40px', textAlign: 'center' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.shade)} style={{
                      background: 'none', border: 'none', padding: '6px 12px', cursor: 'pointer', color: 'var(--text-primary)',
                    }}>
                      <Plus size={12} />
                    </button>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: '800', fontSize: '1.1rem', color: '#f43f5e' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    {item.quantity > 1 && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>₹{item.price.toLocaleString('en-IN')} each</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '1.5rem', position: 'sticky', top: '90px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Order Summary
          </h3>

          {/* Coupon */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Tag size={13} /> Coupon Code
            </label>
            {coupon ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1rem', background: '#dcfce7', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: '600', flex: 1 }}>
                  ✓ {coupon.code} applied
                </span>
                <button onClick={removeCoupon} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#16a34a' }}>
                  <X size={14} />
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input value={couponCode} onChange={e => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code" className="input-styled"
                    style={{ fontSize: '0.85rem' }}
                    onKeyDown={e => e.key === 'Enter' && handleCoupon()}
                  />
                  <button onClick={handleCoupon} className="btn-primary" style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                    Apply
                  </button>
                </div>
                {couponError && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{couponError}</p>}
                {couponSuccess && <p style={{ color: '#16a34a', fontSize: '0.75rem', marginTop: '4px' }}>{couponSuccess}</p>}
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '6px' }}>Try: BEAUTY20, WELCOME10, FLAT500</p>
              </>
            )}
          </div>

          {/* Shipping Option */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
              <Truck size={13} /> Shipping Method
            </label>
            {shippingOptions.map(opt => (
              (!opt.minOrder || subtotal >= opt.minOrder) && (
                <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px', padding: '10px 12px', border: `1px solid ${shipping?.id === opt.id ? '#f43f5e' : 'var(--border-color)'}`, borderRadius: '12px', background: shipping?.id === opt.id ? 'var(--accent-light)' : 'transparent', transition: 'all 0.2s' }}>
                  <input type="radio" name="shipping" checked={shipping?.id === opt.id}
                    onChange={() => setShipping(opt)} style={{ accentColor: '#f43f5e' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>{opt.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{opt.days}</p>
                  </div>
                  <span style={{ fontWeight: '700', color: opt.price === 0 ? '#10b981' : 'var(--text-primary)', fontSize: '0.875rem' }}>
                    {opt.price === 0 ? 'FREE' : `₹${opt.price}`}
                  </span>
                </label>
              )
            ))}
          </div>

          {/* Price breakdown */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Subtotal</span>
              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#10b981', fontSize: '0.875rem' }}>Discount</span>
                <span style={{ fontWeight: '600', color: '#10b981' }}>-₹{discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Shipping</span>
              <span style={{ fontWeight: '600', color: shippingCost === 0 ? '#10b981' : 'var(--text-primary)' }}>
                {shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
              <span style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--text-primary)' }}>Total</span>
              <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#f43f5e' }}>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button onClick={() => navigate('/checkout')} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', marginBottom: '0.75rem' }}>
            Proceed to Checkout <ArrowRight size={16} />
          </button>
          <Link to="/products" className="btn-ghost" style={{ width: '100%', textDecoration: 'none', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Recommended */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          Frequently Bought Together
        </h2>
        <div className="products-grid">
          {recommendedProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cart-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
