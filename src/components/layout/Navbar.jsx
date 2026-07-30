import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Sun, Moon, Menu, X, ChevronDown, Sparkles, BarChart2, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import MiniCart from './MiniCart';
import SearchOverlay from './SearchOverlay';
import LumiereLogo from '../common/LumiereLogo';
import { getAvatarGradient } from '../../utils/avatar';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/products', hasDropdown: true, dropdown: [
    { label: 'All Products', path: '/products' },
    { label: 'Skincare', path: '/products/skincare' },
    { label: 'Makeup', path: '/products/makeup' },
    { label: 'Haircare', path: '/products/haircare' },
    { label: 'Fragrances', path: '/products/fragrance' },
    { label: 'Body Care', path: '/products/bodycare' },
    { label: 'Accessories', path: '/products/accessories' },
  ]},
  { label: 'Beauty Quiz', path: '/quiz' },
  { label: 'Wishlist', path: '/wishlist' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { totalItems } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { toggleTheme, isDark } = useTheme();
  const { openSearch, compareList, setIsCompareOpen, openMiniCart: openMiniCartFromApp } = useApp();
  const { currentUser, openAuthModal } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'shadow-md' : ''}`} style={{ transition: 'box-shadow 0.3s' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
            {/* Logo */}
            <LumiereLogo size={42} showSubtitle={true} />

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
              {navLinks.map(link => (
                <div key={link.path} style={{ position: 'relative' }}
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      textDecoration: 'none',
                      color: location.pathname === link.path ? '#f43f5e' : 'var(--text-primary)',
                      fontWeight: location.pathname === link.path ? '600' : '500',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      padding: '4px 0',
                      borderBottom: location.pathname === link.path ? '2px solid #f43f5e' : '2px solid transparent',
                    }}
                    onMouseEnter={e => { if (location.pathname !== link.path) e.target.style.color = '#f43f5e'; }}
                    onMouseLeave={e => { if (location.pathname !== link.path) e.target.style.color = 'var(--text-primary)'; }}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </Link>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div ref={dropdownRef} style={{
                      position: 'absolute', top: '100%', left: '-1rem',
                      background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                      borderRadius: '16px', padding: '0.75rem',
                      minWidth: '200px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                      zIndex: 200, marginTop: '8px',
                      animation: 'fadeInUp 0.15s ease',
                    }}>
                      {link.dropdown.map(item => (
                        <Link key={item.path} to={item.path} style={{
                          display: 'block', padding: '0.6rem 1rem',
                          textDecoration: 'none', color: 'var(--text-primary)',
                          borderRadius: '10px', fontSize: '0.875rem',
                          transition: 'all 0.2s',
                          fontWeight: '500',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Search – hidden on mobile (bottom nav has search) */}
              <button onClick={openSearch} className="hidden-mobile" style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', borderRadius: '50%', color: 'var(--text-primary)',
                transition: 'all 0.2s', display: 'flex', alignItems: 'center',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <Search size={20} />
              </button>

              {/* Compare Products – hidden on mobile */}
              <button
                onClick={() => setIsCompareOpen(true)}
                title="Compare Products"
                className="hidden-mobile"
                style={{
                  position: 'relative',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px', borderRadius: '50%', color: 'var(--text-primary)',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <BarChart2 size={20} color={compareList && compareList.length > 0 ? '#f43f5e' : 'currentColor'} />
                {compareList && compareList.length > 0 && (
                  <span style={{
                    position: 'absolute', top: '2px', right: '2px',
                    background: '#f43f5e', color: 'white',
                    borderRadius: '50%', width: '16px', height: '16px',
                    fontSize: '10px', fontWeight: '700',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{compareList.length}</span>
                )}
              </button>

              {/* Theme Toggle */}
              <button onClick={toggleTheme} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', borderRadius: '50%', color: 'var(--text-primary)',
                transition: 'all 0.2s', display: 'flex', alignItems: 'center',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Cart */}
              <button onClick={openMiniCartFromApp} style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
                border: 'none', cursor: 'pointer',
                padding: '8px 16px', borderRadius: '50px', color: 'white',
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '0.85rem', fontWeight: '600',
                transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(244,63,94,0.3)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(244,63,94,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(244,63,94,0.3)'; }}
              >
                <ShoppingBag size={16} />
                <span className="hidden-mobile">{totalItems > 0 ? `Cart (${totalItems})` : 'Cart'}</span>
              </button>

              {/* User Profile Account Icon (LAST ICON) */}
              {currentUser ? (
                <button
                  onClick={() => navigate('/profile')}
                  title={`Account: ${currentUser.name}`}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: getAvatarGradient(currentUser.name),
                    border: 'none', cursor: 'pointer', color: 'white',
                    fontWeight: '700', fontSize: '0.9rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {currentUser.name.charAt(0).toUpperCase()}
                </button>
              ) : (
                <button
                  onClick={() => openAuthModal('login')}
                  title="Sign In / Register"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '8px', borderRadius: '50%', color: 'var(--text-primary)',
                    transition: 'all 0.2s', display: 'flex', alignItems: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  <User size={20} />
                </button>
              )}

              {/* Mobile hamburger – hidden on mobile (bottom MobileNav handles it) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hidden-mobile"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px', borderRadius: '8px', color: 'var(--text-primary)',
                  display: 'flex',
                }}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            padding: '1rem 1.5rem 1.5rem',
            animation: 'fadeInUp 0.2s ease',
          }}>
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} style={{
                display: 'block', padding: '0.75rem 0',
                textDecoration: 'none', color: location.pathname === link.path ? '#f43f5e' : 'var(--text-primary)',
                fontWeight: '500', borderBottom: '1px solid var(--border-color)',
                fontSize: '1rem',
              }}>
                {link.label}
              </Link>
            ))}
            <Link to="/cart" style={{
              display: 'block', padding: '0.75rem 0',
              textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500',
            }}>
              Cart
            </Link>
          </div>
        )}
      </nav>

      {/* Mini Cart Drawer */}
      <MiniCart />

      {/* Search Overlay */}
      <SearchOverlay />

    </>
  );
}
