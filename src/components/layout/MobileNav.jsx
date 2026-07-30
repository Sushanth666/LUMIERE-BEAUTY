import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Heart, Sparkles, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useApp } from '../../context/AppContext';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/products', icon: ShoppingBag, label: 'Shop' },
  { path: '/quiz', icon: Sparkles, label: 'Quiz' },
  { path: '/wishlist', icon: Heart, label: 'Wishlist' },
];

export default function MobileNav() {
  const { pathname } = useLocation();
  const { totalItems } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { openSearch } = useApp();

  const getBadge = (path) => {
    if (path === '/cart') return totalItems;
    if (path === '/wishlist') return wishlistCount;
    return 0;
  };

  return (
    <nav className="mobile-nav" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = pathname === path;
        const badge = getBadge(path);
        return (
          <Link key={path} to={path} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', position: 'relative', padding: '4px 12px' }}>
            <div style={{ position: 'relative' }}>
              <Icon size={22} color={isActive ? '#f43f5e' : 'var(--text-muted)'} fill={isActive && (path === '/wishlist') ? '#f43f5e' : 'none'} />
              {badge > 0 && (
                <span style={{ position: 'absolute', top: '-6px', right: '-8px', background: '#f43f5e', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '9px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{badge}</span>
              )}
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: isActive ? '700' : '500', color: isActive ? '#f43f5e' : 'var(--text-muted)' }}>{label}</span>
            {isActive && <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: '#f43f5e' }} />}
          </Link>
        );
      })}
      <button onClick={openSearch} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', padding: '4px 12px' }}>
        <Search size={22} color="var(--text-muted)" />
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '500' }}>Search</span>
      </button>
    </nav>
  );
}
