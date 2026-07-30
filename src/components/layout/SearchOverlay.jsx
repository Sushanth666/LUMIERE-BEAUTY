import { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

import { products, categories } from '../../data/products';

// Extract meaningful keywords from product names that are guaranteed to return results
const buildTrendingSearches = () => {
  // Use category names (always return results)
  const catNames = categories.map(c => c.name); // e.g. "Skincare", "Makeup"

  // Extract common product-type keywords from top-rated products' names
  const keywordPatterns = [
    'Serum', 'Lipstick', 'Cleanser', 'Cream', 'Perfume', 'Toner',
    'Foundation', 'Mascara', 'Hair Mask', 'Moisturizer', 'Elixir',
    'Eye Cream', 'Sunscreen', 'Shampoo', 'Body Butter', 'Blush',
  ];

  // Only keep keywords that actually match at least one product
  const validKeywords = keywordPatterns.filter(kw =>
    products.some(p => p.name.toLowerCase().includes(kw.toLowerCase()))
  );

  // Combine: some category names + valid keywords, shuffled, pick 8
  const pool = [...catNames, ...validKeywords];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 8);
};

const trendingSearches = buildTrendingSearches();

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch, getSearchSuggestions } = useApp();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isSearchOpen) setQuery('');
  }, [isSearchOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuggestions(query.length >= 2 ? getSearchSuggestions(query) : []);
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      closeSearch();
    }
  };

  const handleSuggestionClick = (product) => {
    navigate(`/product/${product.id}`);
    closeSearch();
  };

  const handleTrendingClick = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
    closeSearch();
  };

  if (!isSearchOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={closeSearch} style={{ zIndex: 190 }} />
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'var(--bg-card)', zIndex: 200,
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        animation: 'fadeInUp 0.2s ease',
        padding: '1.5rem',
      }}>
        {/* Search Bar */}
        <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '700px', margin: '0 auto' }}>
          <Search size={22} color="#f43f5e" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for products, brands, categories..."
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: '1.2rem', color: 'var(--text-primary)',
              background: 'transparent', fontFamily: 'var(--font-body)',
            }}
          />
          <button type="button" onClick={closeSearch} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-secondary)', padding: '4px',
          }}>
            <X size={22} />
          </button>
        </form>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-color)', margin: '1rem 0', maxWidth: '700px', margin: '1rem auto' }} />

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Suggestions */}
          {suggestions.length > 0 ? (
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Suggestions
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {suggestions.map(product => (
                  <button key={product.id} onClick={() => handleSuggestionClick(product)} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '0.75rem 1rem', borderRadius: '12px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', width: '100%', transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-primary)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <img src={product.images[0]} alt={product.name}
                      style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }} />
                    <div>
                      <p style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{product.name}</p>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{product.brand} · {product.category}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <p style={{ fontWeight: '700', color: '#f43f5e' }}>₹{product.price.toLocaleString('en-IN')}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TrendingUp size={14} /> Trending Searches
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {trendingSearches.map(term => (
                  <button key={term} onClick={() => handleTrendingClick(term)} style={{
                    padding: '6px 16px', borderRadius: '50px',
                    background: 'var(--accent-light)', color: '#f43f5e',
                    border: '1px solid rgba(244,63,94,0.2)',
                    cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f43f5e'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
