import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';

export default function MiniCart() {
  const { items, removeFromCart, updateQuantity, subtotal, total, shippingCost, discount, totalItems, coupon } = useCart();
  const { isMiniCartOpen, closeMiniCart } = useApp();

  if (!isMiniCartOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={closeMiniCart} />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '100%', maxWidth: '420px',
        background: 'var(--bg-card)',
        zIndex: 250, boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
        display: 'flex', flexDirection: 'column',
        animation: 'slideInRight 0.3s ease',
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem', borderBottom: '1px solid var(--border-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="#f43f5e" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              Shopping Cart
            </span>
            {totalItems > 0 && (
              <span style={{
                background: '#f43f5e', color: 'white',
                borderRadius: '50px', padding: '2px 10px', fontSize: '0.75rem', fontWeight: '700',
              }}>{totalItems} items</span>
            )}
          </div>
          <button onClick={closeMiniCart} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px', borderRadius: '50%', color: 'var(--text-secondary)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--border-color)'; e.currentTarget.style.color = '#f43f5e'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free shipping bar */}
        {subtotal < 999 && (
          <div style={{ padding: '0.75rem 1.5rem', background: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '0.8rem', color: '#f43f5e', fontWeight: '500', textAlign: 'center' }}>
              Add <strong>₹{(999 - subtotal).toLocaleString('en-IN')}</strong> more for FREE shipping! 🚚
            </p>
            <div className="progress-bar" style={{ marginTop: '6px' }}>
              <div className="progress-fill" style={{ width: `${Math.min((subtotal / 999) * 100, 100)}%` }} />
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Your cart is empty</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Add some beautiful products!</p>
              <Link to="/products" onClick={closeMiniCart} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.85rem' }}>
                Shop Now
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map((item) => (
                <div key={`${item.id}-${item.shade}`} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '1rem', background: 'var(--bg-primary)',
                  borderRadius: '16px', border: '1px solid var(--border-color)',
                  transition: 'all 0.2s',
                }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0,
                  }}>
                    <img src={item.images[0]} alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '2px' }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{item.brand}</p>
                    {item.shade && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: item.shade.color }} />
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{item.shade.name}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontWeight: '700', color: '#f43f5e', fontSize: '0.95rem' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.shade)} style={{
                          background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                          borderRadius: '50%', width: '24px', height: '24px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          cursor: 'pointer', color: 'var(--text-primary)',
                        }}>
                          <Minus size={12} />
                        </button>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)', minWidth: '20px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.shade)} style={{
                          background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                          borderRadius: '50%', width: '24px', height: '24px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          cursor: 'pointer', color: 'var(--text-primary)',
                        }}>
                          <Plus size={12} />
                        </button>
                        <button onClick={() => removeFromCart(item.id, item.shade)} style={{
                          background: 'none', border: 'none', cursor: 'pointer',
                          color: '#ef4444', padding: '4px', marginLeft: '4px',
                        }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Subtotal</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#10b981', fontSize: '0.875rem' }}>Coupon ({coupon?.code})</span>
                  <span style={{ fontWeight: '600', color: '#10b981' }}>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Shipping</span>
                <span style={{ fontWeight: '600', color: shippingCost === 0 ? '#10b981' : 'var(--text-primary)' }}>
                  {shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Total</span>
                <span style={{ fontWeight: '800', color: '#f43f5e', fontSize: '1.1rem' }}>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <Link to="/checkout" onClick={closeMiniCart} className="btn-primary" style={{
              width: '100%', textDecoration: 'none', justifyContent: 'center', marginBottom: '8px',
            }}>
              Checkout <ArrowRight size={16} />
            </Link>
            <Link to="/cart" onClick={closeMiniCart} className="btn-ghost" style={{
              width: '100%', textDecoration: 'none', justifyContent: 'center', textAlign: 'center',
            }}>
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
