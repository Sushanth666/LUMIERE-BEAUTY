import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Sparkles, Heart, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Skincare', path: '/products/skincare' },
    { label: 'Makeup', path: '/products/makeup' },
    { label: 'Haircare', path: '/products/haircare' },
    { label: 'Fragrances', path: '/products/fragrance' },
    { label: 'Body Care', path: '/products/bodycare' },
    { label: 'Accessories', path: '/products/accessories' },
  ],
  Help: [
    { label: 'Beauty Quiz', path: '/quiz' },
    { label: 'Track Order', path: '/track' },
    { label: 'Returns & Exchanges', path: '/returns' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press', path: '/press' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
};

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

import LumiereLogo from '../common/LumiereLogo';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '0',
    }}>
      {/* Top section */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
      }}>
        {/* Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <LumiereLogo size={38} showSubtitle={true} />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Premium beauty products crafted with love and science. Discover your radiance with our curated collection.
          </p>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              <Mail size={14} color="#f43f5e" />
              <span>hello@lumiere.beauty</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              <Phone size={14} color="#f43f5e" />
              <span>+91 98765 43210</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              <MapPin size={14} color="#f43f5e" />
              <span>Mumbai, India</span>
            </div>
          </div>
          {/* Socials */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', textDecoration: 'none',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f43f5e'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#f43f5e'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-primary)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontWeight: '700',
              fontSize: '1rem', color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}>{section}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {links.map(link => (
                <li key={link.label}>
                  <Link to={link.path} style={{
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    fontSize: '0.875rem', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#f43f5e'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Get Beauty Tips
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: '1.6' }}>
            Subscribe for exclusive deals and expert beauty tips.
          </p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input
              type="email" placeholder="your@email.com"
              className="input-styled" style={{ fontSize: '0.85rem' }}
            />
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.85rem' }}>
              Subscribe
            </button>
          </form>
          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {['🌿 Cruelty Free', '✓ Dermatologist Tested', '🌱 Sustainable'].map(badge => (
              <span key={badge} style={{
                background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                borderRadius: '50px', padding: '4px 10px', fontSize: '0.7rem',
                color: 'var(--text-secondary)', fontWeight: '500',
              }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid var(--border-color)',
        padding: '1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '6px',
        color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center',
      }}>
        <span>© 2026 Lumière Beauty. Made with</span>
        <Heart size={12} fill="#f43f5e" color="#f43f5e" />
        <span>in India. All rights reserved.</span>
      </div>
    </footer>
  );
}
