import { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Grid3X3, List, Search, Star } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products, categories, brands, skinTypes } from '../data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest First' },
  { value: 'discount', label: 'Best Discount' },
];

const PAGE_SIZE = 12;

function ListProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px',
        display: 'flex', gap: '1.5rem', padding: '1rem', transition: 'all 0.3s', alignItems: 'center',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(244,63,94,0.1)'; e.currentTarget.style.borderColor = 'rgba(244,63,94,0.2)'; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
      >
        <img src={product.images[0]} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{product.brand}</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{product.name}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '8px' }} className="line-clamp-2">{product.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= Math.round(product.rating) ? '#fbbf24' : 'none'} color={s <= Math.round(product.rating) ? '#fbbf24' : '#d1d5db'} />)}
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>({product.reviewCount?.toLocaleString('en-IN')})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: '800', color: '#f43f5e', fontSize: '1rem' }}>₹{product.price.toLocaleString('en-IN')}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
            <span style={{ fontSize: '0.75rem', background: '#dcfce7', color: '#16a34a', borderRadius: '50px', padding: '1px 6px', fontWeight: '700' }}>{product.discount}% off</span>
          </div>
        </div>
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }} className="btn-primary" style={{ flexShrink: 0, fontSize: '0.8rem', padding: '0.6rem 1rem' }}>
          <ShoppingBag size={14} /> Add
        </button>
      </div>
    </Link>
  );
}

export default function Products() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    categories: category ? [category] : [],
    brands: [],
    priceMin: 0, priceMax: 10000,
    rating: 0, skinTypes: [],
    badge: searchParams.get('filter') || '',
  });
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    if (category) {
      setFilters(f => ({ ...f, categories: [category] }));
    } else {
      setFilters(f => ({ ...f, categories: [] }));
    }
    setPage(1);
  }, [category]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    if (filters.categories.length) result = result.filter(p => filters.categories.includes(p.category));
    if (filters.brands.length) result = result.filter(p => filters.brands.includes(p.brand));
    if (filters.skinTypes.length) result = result.filter(p => p.skinType && filters.skinTypes.includes(p.skinType));
    if (filters.badge === 'new') result = result.filter(p => p.isNewArrival);
    else if (filters.badge) result = result.filter(p => p.badge === filters.badge);
    result = result.filter(p => p.price >= filters.priceMin && p.price <= filters.priceMax);
    if (filters.rating > 0) result = result.filter(p => p.rating >= filters.rating);

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'newest': result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0)); break;
      case 'discount': result.sort((a, b) => b.discount - a.discount); break;
    }
    return result;
  }, [filters, sort, search]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  const toggleFilter = (type, value) => {
    setFilters(f => {
      const arr = f[type];
      return { ...f, [type]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
    });
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({ categories: category ? [category] : [], brands: [], priceMin: 0, priceMax: 10000, rating: 0, skinTypes: [], badge: '' });
    setSearch('');
    setPage(1);
  };

  const activeFilterCount = filters.categories.filter(c => !category || c !== category).length
    + filters.brands.length + filters.skinTypes.length
    + (filters.rating > 0 ? 1 : 0) + (filters.badge ? 1 : 0)
    + (filters.priceMax < 10000 ? 1 : 0);

  const currentCategory = categories.find(c => c.id === category);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link to="/products" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Shop</Link>
        {category && (
          <>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: '500', textTransform: 'capitalize' }}>{category}</span>
          </>
        )}
      </nav>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          {currentCategory ? <span>{currentCategory.icon} {currentCategory.name}</span> : <span>All <span className="gradient-text">Products</span></span>}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{filtered.length} products found</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }} className="products-layout">
        {/* Filters Sidebar */}
        <aside style={{
          position: 'sticky', top: '90px', height: 'fit-content',
          background: 'var(--bg-card)', borderRadius: '20px',
          border: '1px solid var(--border-color)', padding: '1.5rem',
        }} className="filter-sidebar">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem' }}>
              <SlidersHorizontal size={16} color="#f43f5e" /> Filters
              {activeFilterCount > 0 && (
                <span style={{ background: '#f43f5e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', fontSize: '0.7rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{activeFilterCount}</span>
              )}
            </h3>
            {activeFilterCount > 0 && <button onClick={clearFilters} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f43f5e', fontSize: '0.8rem', fontWeight: '600' }}>Clear All</button>}
          </div>

          {/* Search */}
          <div className="filter-section">
            <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Search</h4>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search products..." className="input-styled" style={{ paddingLeft: '32px', fontSize: '0.85rem' }} />
            </div>
          </div>

          {/* Categories */}
          {!category && (
            <div className="filter-section">
              <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Category</h4>
              {categories.map(cat => (
                <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px' }}>
                  <input type="checkbox" checked={filters.categories.includes(cat.id)} onChange={() => toggleFilter('categories', cat.id)} style={{ accentColor: '#f43f5e', width: '15px', height: '15px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{cat.icon} {cat.name}</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)' }}>({cat.count})</span>
                </label>
              ))}
            </div>
          )}

          {/* Brands */}
          <div className="filter-section">
            <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Brand</h4>
            {brands.map(brand => (
              <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px' }}>
                <input type="checkbox" checked={filters.brands.includes(brand)} onChange={() => toggleFilter('brands', brand)} style={{ accentColor: '#f43f5e', width: '15px', height: '15px' }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{brand}</span>
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="filter-section">
            <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Price: ₹{filters.priceMin} – ₹{filters.priceMax.toLocaleString('en-IN')}
            </h4>
            <input type="range" min={0} max={10000} step={100} value={filters.priceMax}
              onChange={e => { setFilters(f => ({ ...f, priceMax: +e.target.value })); setPage(1); }} />
          </div>

          {/* Rating */}
          <div className="filter-section">
            <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Min Rating</h4>
            {[4.5, 4, 3.5, 3].map(r => (
              <label key={r} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px' }}>
                <input type="radio" name="rating" checked={filters.rating === r} onChange={() => { setFilters(f => ({ ...f, rating: r })); setPage(1); }} style={{ accentColor: '#f43f5e' }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>⭐ {r}+</span>
              </label>
            ))}
            {filters.rating > 0 && <button onClick={() => { setFilters(f => ({ ...f, rating: 0 })); setPage(1); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f43f5e', fontSize: '0.8rem', padding: 0, marginTop: '4px' }}>Clear</button>}
          </div>

          {/* Skin Type */}
          <div>
            <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Skin Type</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {skinTypes.map(type => (
                <button key={type} onClick={() => toggleFilter('skinTypes', type)} style={{
                  padding: '4px 12px', borderRadius: '50px', border: '1px solid',
                  borderColor: filters.skinTypes.includes(type) ? '#f43f5e' : 'var(--border-color)',
                  background: filters.skinTypes.includes(type) ? 'var(--accent-light)' : 'transparent',
                  color: filters.skinTypes.includes(type) ? '#f43f5e' : 'var(--text-secondary)',
                  fontSize: '0.78rem', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s',
                }}>{type}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Area */}
        <main>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> products
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '4px', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '3px' }}>
                <button onClick={() => setViewMode('grid')} style={{ padding: '4px 8px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: viewMode === 'grid' ? '#f43f5e' : 'transparent', color: viewMode === 'grid' ? 'white' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Grid3X3 size={14} />
                </button>
                <button onClick={() => setViewMode('list')} style={{ padding: '4px 8px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: viewMode === 'list' ? '#f43f5e' : 'transparent', color: viewMode === 'list' ? 'white' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <List size={14} />
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <select value={sort} onChange={e => setSort(e.target.value)} className="input-styled" style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', paddingRight: '2.5rem', fontSize: '0.85rem', width: 'auto', cursor: 'pointer' }}>
                  {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
              {filters.brands.map(b => (
                <span key={b} onClick={() => toggleFilter('brands', b)} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--accent-light)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.2)', borderRadius: '50px', padding: '4px 12px', fontSize: '0.78rem', fontWeight: '500', cursor: 'pointer' }}>
                  {b} <X size={12} />
                </span>
              ))}
              {filters.skinTypes.map(t => (
                <span key={t} onClick={() => toggleFilter('skinTypes', t)} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--accent-light)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.2)', borderRadius: '50px', padding: '4px 12px', fontSize: '0.78rem', fontWeight: '500', cursor: 'pointer' }}>
                  {t} <X size={12} />
                </span>
              ))}
              {filters.rating > 0 && (
                <span onClick={() => setFilters(f => ({ ...f, rating: 0 }))} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--accent-light)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.2)', borderRadius: '50px', padding: '4px 12px', fontSize: '0.78rem', fontWeight: '500', cursor: 'pointer' }}>
                  ⭐ {filters.rating}+ <X size={12} />
                </span>
              )}
            </div>
          )}

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No products found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Try adjusting your filters</p>
              <button onClick={clearFilters} className="btn-primary">Clear Filters</button>
            </div>
          ) : (
            <>
              <div className={viewMode === 'grid' ? 'products-grid' : ''} style={viewMode === 'list' ? { display: 'flex', flexDirection: 'column', gap: '1rem' } : {}}>
                {paginated.map(product => (
                  viewMode === 'list'
                    ? <ListProductCard key={product.id} product={product} />
                    : <ProductCard key={product.id} product={product} showCompare />
                ))}
              </div>
              {hasMore && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button onClick={() => setPage(p => p + 1)} className="btn-secondary">
                    Load More ({filtered.length - paginated.length} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-layout { grid-template-columns: 1fr !important; }
          .filter-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
