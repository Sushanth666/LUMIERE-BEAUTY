import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { searchProducts, products, categories } from '../data/products';

// Dynamically build trending searches from actual product data
const getTrendingSearches = () => {
  // Get tags from top-rated trending/bestseller/featured products
  const topProducts = products
    .filter(p => p.isTrending || p.badge === 'bestseller' || p.isFeatured)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 20);

  // Collect unique tags (skip generic ones)
  const genericTags = new Set(['clean beauty', 'skincare', 'makeup', 'haircare', 'fragrance', 'bodycare', 'accessories']);
  const tagSet = new Set();
  topProducts.forEach(p => {
    p.tags?.forEach(tag => {
      const t = tag.trim().toLowerCase();
      if (!genericTags.has(t) && t.length > 3) tagSet.add(tag.trim());
    });
  });

  // Add category names
  categories.forEach(c => tagSet.add(c.name));

  // Shuffle and pick 8
  const all = [...tagSet];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, 8);
};

const trendingSearches = getTrendingSearches();

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      setResults(searchProducts(query));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Search bar */}
      <div style={{ maxWidth: '600px', margin: '0 auto 2.5rem', position: 'relative' }}>
        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#f43f5e' }} />
        <input
          type="text" defaultValue={query}
          placeholder="Search products, brands, categories..."
          className="input-styled"
          style={{ paddingLeft: '48px', fontSize: '1rem', borderRadius: '50px', border: '2px solid var(--border-color)' }}
          onKeyDown={e => { if (e.key === 'Enter') setSearchParams({ q: e.target.value }); }}
          onChange={e => !e.target.value && setSearchParams({})}
        />
      </div>

      {query ? (
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Results for "<span className="gradient-text">{query}</span>"
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {results.length} {results.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
          {results.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                No results found
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Try different keywords or browse our categories
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {trendingSearches.map(term => (
                  <button key={term} onClick={() => setSearchParams({ q: term })} style={{
                    padding: '8px 18px', borderRadius: '50px',
                    background: 'var(--accent-light)', color: '#f43f5e',
                    border: '1px solid rgba(244,63,94,0.2)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500',
                  }}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="products-grid">
              {results.map(p => <ProductCard key={p.id} product={p} showCompare />)}
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            What are you looking for?
          </h2>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {trendingSearches.map(term => (
              <button key={term} onClick={() => setSearchParams({ q: term })} style={{
                padding: '8px 18px', borderRadius: '50px',
                background: 'var(--accent-light)', color: '#f43f5e',
                border: '1px solid rgba(244,63,94,0.2)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500',
              }}>
                🔥 {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
