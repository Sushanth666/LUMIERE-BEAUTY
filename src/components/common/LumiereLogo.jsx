import { Link } from 'react-router-dom';

export function LumiereLogoIcon({ size = 42 }) {
  return (
    <div style={{
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      flexShrink: 0,
      filter: 'drop-shadow(0 4px 12px rgba(244, 63, 94, 0.35))',
      transition: 'transform 0.3s ease',
    }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lumiereBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2a5f"/>
            <stop offset="50%" stopColor="#e11d48"/>
            <stop offset="100%" stopColor="#881337"/>
          </linearGradient>

          <linearGradient id="lumiereGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2ab"/>
            <stop offset="50%" stopColor="#d4af37"/>
            <stop offset="100%" stopColor="#aa7c11"/>
          </linearGradient>
        </defs>

        {/* Outer Circular Gradient Shield */}
        <circle cx="50" cy="50" r="46" fill="url(#lumiereBg)"/>

        {/* Gold Filigree Ring */}
        <circle cx="50" cy="50" r="42" stroke="url(#lumiereGold)" strokeWidth="1.8" strokeDasharray="4 2" opacity="0.9"/>

        {/* Inner Diamond Star Emblems */}
        <g transform="translate(50 50)">
          {/* Main 4-point Primary Star */}
          <path d="M 0 -28 Q 0 0 28 0 Q 0 0 0 28 Q 0 0 -28 0 Q 0 0 0 -28 Z" fill="url(#lumiereGold)"/>

          {/* Secondary 4-point Diagonal Rays */}
          <path d="M 0 -18 Q 0 0 18 0 Q 0 0 0 18 Q 0 0 -18 0 Q 0 0 0 -18 Z" fill="url(#lumiereGold)" transform="rotate(45)" opacity="0.8"/>

          {/* Center Glowing Pearl */}
          <circle cx="0" cy="0" r="4.5" fill="#ffffff"/>
          <circle cx="0" cy="0" r="2" fill="#d4af37"/>
        </g>
      </svg>
    </div>
  );
}

export default function LumiereLogo({ size = 42, showSubtitle = true, textColor }) {
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} className="brand-logo-wrap">
      <LumiereLogoIcon size={size} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.45rem',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          lineHeight: '1.05',
          color: textColor || 'var(--text-primary)',
        }}>
          <span className="gradient-text">Lumière</span>
        </span>
        {showSubtitle && (
          <span style={{
            color: 'var(--text-secondary)',
            fontWeight: '600',
            fontSize: '0.72rem',
            letterSpacing: '3.5px',
            textTransform: 'uppercase',
            marginTop: '2px',
            opacity: 0.85,
            fontFamily: 'var(--font-body)',
          }}>
            BEAUTY
          </span>
        )}
      </div>
    </Link>
  );
}
