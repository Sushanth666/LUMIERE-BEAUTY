import { X, Trash2, ShoppingBag, Star, Check, Award, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useCart } from '../../context/CartContext';
import { products as allProducts } from '../../data/products';
import { Link } from 'react-router-dom';

export default function CompareModal() {
  const { isCompareOpen, setIsCompareOpen, compareList, addToCompare, removeFromCompare, clearCompare } = useApp();
  const { addToCart } = useCart();

  if (!isCompareOpen) return null;

  // Sample bestsellers to populate if list is empty/1 item
  const sampleProducts = allProducts.filter(p => !compareList.some(item => item.id === p.id)).slice(0, 3);

  // Recommendation logic
  const highestRated = compareList.length > 0 ? [...compareList].sort((a, b) => b.rating - a.rating)[0] : null;
  const bestValue = compareList.length > 0 ? [...compareList].sort((a, b) => (b.discount || 0) - (a.discount || 0))[0] : null;

  return (
    <div className="drawer-overlay" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem', zIndex: 1000,
    }} onClick={() => setIsCompareOpen(false)}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '960px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.28)',
        border: '1px solid var(--border-color)',
        padding: '2rem',
        position: 'relative',
        animation: 'modalZoom 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }} onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-bestseller" style={{ fontSize: '0.72rem' }}>
                ⚖️ DETAILED PRODUCT COMPARISON &amp; RECOMMENDATIONS
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '700', marginTop: '6px' }}>
              Compare <span className="gradient-text">Products &amp; Recommendations</span>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {compareList.length > 0 && (
              <button onClick={clearCompare} className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem', color: '#f43f5e' }}>
                <Trash2 size={13} /> Clear Comparison
              </button>
            )}
            <button onClick={() => setIsCompareOpen(false)} style={{
              background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
              borderRadius: '50%', width: '36px', height: '36px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-primary)',
            }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Quick Add Suggestions if empty or 1 item */}
        {compareList.length < 3 && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.05), rgba(156, 123, 158, 0.05))',
            borderRadius: '16px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
            border: '1px stroke rgba(244, 63, 94, 0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <p style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={15} color="#f43f5e" /> Add Bestsellers to Compare ({compareList.length}/3 selected)
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Click below to instantly compare top-rated Lumière formulas side-by-side.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {sampleProducts.map(sp => (
                <button
                  key={sp.id}
                  onClick={() => addToCompare(sp)}
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                    borderRadius: '50px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: '600',
                    cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#f43f5e'; e.currentTarget.style.color = '#f43f5e'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  + Add {sp.name.replace('Lumière ', '')}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {compareList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>⚖️</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              No Products Selected for Comparison
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
              Select up to 3 products by clicking the compare icon (<span style={{ color: '#f43f5e', fontWeight: '700' }}>📊</span>) on product cards to view detailed ingredient breakdowns, price savings, ratings, and AI recommendation verdicts.
            </p>
            <Link to="/products" onClick={() => setIsCompareOpen(false)} className="btn-primary" style={{ textDecoration: 'none' }}>
              Browse Product Catalog
            </Link>
          </div>
        ) : (
          <>
            {/* Compare Grid Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${compareList.length}, 1fr)`,
              gap: '1.25rem',
              marginBottom: '2rem',
            }}>
              {compareList.map(item => {
                const isTopRated = highestRated && highestRated.id === item.id;
                const isBestVal = bestValue && bestValue.id === item.id && item.discount > 20;

                return (
                  <div key={item.id} style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '20px',
                    padding: '1.25rem',
                    border: isTopRated ? '2px solid #f59e0b' : '1px solid var(--border-color)',
                    boxShadow: isTopRated ? '0 10px 30px rgba(245, 158, 11, 0.15)' : '0 4px 15px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}>
                    {/* Remove button */}
                    <button onClick={() => removeFromCompare(item.id)} style={{
                      position: 'absolute', top: '10px', right: '10px',
                      background: 'rgba(244,63,94,0.1)', border: 'none',
                      borderRadius: '50%', width: '28px', height: '28px',
                      cursor: 'pointer', color: '#f43f5e',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      zIndex: 2,
                    }} title="Remove from comparison">
                      <X size={14} />
                    </button>

                    {/* Recommendation Badge Overlay */}
                    {isTopRated ? (
                      <span className="badge badge-bestseller" style={{ fontSize: '0.68rem', marginBottom: '8px', alignSelf: 'flex-start' }}>
                        👑 HIGHEST RATED FORMULA
                      </span>
                    ) : isBestVal ? (
                      <span className="badge badge-discount" style={{ fontSize: '0.68rem', marginBottom: '8px', alignSelf: 'flex-start' }}>
                        ⚡ BEST SAVINGS VALUE
                      </span>
                    ) : (
                      <span style={{
                        fontSize: '0.68rem', fontWeight: '700', color: '#8b5cf6',
                        background: 'rgba(139, 92, 246, 0.1)', padding: '2px 8px', borderRadius: '6px',
                        marginBottom: '8px', alignSelf: 'flex-start',
                      }}>
                        ✨ POPULAR CHOICE
                      </span>
                    )}

                    {/* Image */}
                    <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '14px', overflow: 'hidden', marginBottom: '1rem', background: '#fff' }}>
                      <img src={item.images[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Brand & Name */}
                    <span style={{ fontSize: '0.68rem', fontWeight: '700', color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {item.brand}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: '700', margin: '4px 0 8px', lineHeight: '1.3' }}>
                      {item.name}
                    </h4>

                    {/* Price & Savings */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#f43f5e' }}>
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice > item.price && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      {item.discount > 0 && (
                        <span className="savings-tag" style={{ fontSize: '0.68rem' }}>
                          Save ₹{(item.originalPrice - item.price).toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1rem', background: '#fef3c7', padding: '3px 8px', borderRadius: '8px', width: 'fit-content' }}>
                      <Star size={11} fill="#f59e0b" color="#f59e0b" />
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#b45309' }}>{item.rating}</span>
                      <span style={{ fontSize: '0.7rem', color: '#92400e' }}>({item.reviewCount} reviews)</span>
                    </div>

                    {/* Add to Cart CTA */}
                    <button onClick={() => { addToCart(item); setIsCompareOpen(false); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.6rem 1rem', marginTop: 'auto' }}>
                      <ShoppingBag size={14} /> Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Detailed Feature Comparison Table */}
            <div style={{
              background: 'var(--bg-primary)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              marginBottom: '1.5rem',
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="#f43f5e" /> Detailed Feature Comparison
              </h3>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                      <th style={{ padding: '0.75rem', color: 'var(--text-secondary)', width: '25%' }}>Feature</th>
                      {compareList.map(item => (
                        <th key={item.id} style={{ padding: '0.75rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>🧴 Skin Type Suitability</td>
                      {compareList.map(item => (
                        <td key={item.id} style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                          {item.skinType || 'All Skin Types'}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>💧 Net Volume / Size</td>
                      {compareList.map(item => (
                        <td key={item.id} style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>
                          {item.size || item.volume || 'Standard'}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>🌿 Key Active Ingredients</td>
                      {compareList.map(item => (
                        <td key={item.id} style={{ padding: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.4' }}>
                          {item.ingredients || 'Natural Botanical Extracts & Vitamin E'}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>🎯 Targeted Benefits</td>
                      {compareList.map(item => (
                        <td key={item.id} style={{ padding: '0.75rem' }}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {(item.tags || ['brightening', 'hydrating']).map(tag => (
                              <span key={tag} style={{ background: 'rgba(244,63,94,0.08)', color: '#e11d48', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', textTransform: 'capitalize' }}>
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>🏆 Recommendation Verdict</td>
                      {compareList.map(item => (
                        <td key={item.id} style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                          {item.category === 'skincare'
                            ? 'Recommended for daily skin barrier hydration & glow.'
                            : item.category === 'makeup'
                            ? 'Recommended for long-wearing, pigmented beauty finish.'
                            : item.category === 'haircare'
                            ? 'Recommended for scalp nourishment & frizz repair.'
                            : 'Recommended for luxury daily fragrance & body care routine.'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Smart Summary Analysis Banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(244, 63, 94, 0.08))',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '16px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <ShieldCheck size={32} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                  Lumière Recommendation Summary
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  All formulas are 100% Cruelty-Free, Dermatologist-Tested, and Paraben-Free. Choose <strong>{highestRated?.name}</strong> for highest customer satisfaction rating ({highestRated?.rating}★) or <strong>{bestValue?.name}</strong> for maximum discount savings.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
