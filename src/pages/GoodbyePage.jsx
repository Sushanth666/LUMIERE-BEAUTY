import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import LumiereLogo from '../components/common/LumiereLogo';

export default function GoodbyePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark } = useTheme();

  const userName = location.state?.name || 'Beauty Lover';
  const DURATION = 5; // seconds

  const [countdown, setCountdown] = useState(DURATION);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Redirect after DURATION seconds
    const redirectTimer = setTimeout(() => {
      navigate('/login');
    }, DURATION * 1000);

    // Countdown tick every second
    const countTimer = setInterval(() => {
      setCountdown(prev => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    // Progress bar drains smoothly
    const startTime = Date.now();
    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.max(0, 100 - (elapsed / (DURATION * 1000)) * 100);
      setProgress(pct);
      if (pct <= 0) clearInterval(progressTimer);
    }, 30);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: isDark
        ? 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0c29 60%, #0d0d1a 100%)'
        : 'linear-gradient(135deg, #f0f0ff 0%, #ede9fe 50%, #fdf4ff 100%)',
      padding: '2rem',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,63,94,0.18) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        position: 'relative', zIndex: 2,
        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '32px',
        border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(139,92,246,0.2)',
        boxShadow: isDark
          ? '0 40px 100px rgba(0,0,0,0.5)'
          : '0 40px 100px rgba(139,92,246,0.15)',
        padding: '3.5rem 3rem',
        maxWidth: '460px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}>

        {/* Logo */}
        <LumiereLogo size={44} showSubtitle={false} textColor={isDark ? '#ffffff' : '#1e293b'} />

        {/* Waving hand */}
        <div style={{ fontSize: '4.5rem', animation: 'waveHand 1.2s ease-in-out infinite', lineHeight: 1 }}>
          👋
        </div>

        {/* Heading */}
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.2rem',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: isDark ? '#ffffff' : '#1e293b',
            marginBottom: '0.5rem',
            lineHeight: 1.2,
          }}>
            Goodbye, {userName}!
          </h1>
          <p style={{
            color: isDark ? 'rgba(255,255,255,0.65)' : '#64748b',
            fontSize: '1rem',
            lineHeight: 1.6,
            margin: 0,
          }}>
            You've been signed out successfully.<br />
            We hope to see you back soon ✨
          </p>
        </div>

        {/* Divider */}
        <div style={{
          width: '100%', height: '1px',
          background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(139,92,246,0.12)',
        }} />

        {/* Countdown + Progress */}
        <div style={{ width: '100%' }}>
          <p style={{
            fontSize: '0.88rem',
            color: isDark ? 'rgba(255,255,255,0.5)' : '#94a3b8',
            marginBottom: '10px',
            margin: '0 0 10px 0',
          }}>
            Redirecting to sign in in{' '}
            <span style={{ fontWeight: '800', color: isDark ? '#a5b4fc' : '#7c3aed', fontSize: '1rem' }}>
              {countdown}s
            </span>
          </p>

          {/* Progress bar */}
          <div style={{
            width: '100%', height: '7px',
            background: isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
            borderRadius: '999px', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #7c3aed, #f43f5e)',
              borderRadius: '999px',
              transition: 'width 30ms linear',
            }} />
          </div>
        </div>

        {/* Skip button */}
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '0.7rem 2rem',
            borderRadius: '50px',
            border: isDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(139,92,246,0.3)',
            background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(139,92,246,0.08)',
            color: isDark ? '#a5b4fc' : '#7c3aed',
            fontWeight: '700',
            fontSize: '0.88rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.target.style.background = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(139,92,246,0.16)';
            e.target.style.transform = 'scale(1.04)';
          }}
          onMouseLeave={e => {
            e.target.style.background = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(139,92,246,0.08)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Go to Sign In now →
        </button>
      </div>

      <style>{`
        @keyframes waveHand {
          0%, 100% { transform: rotate(0deg); }
          20%       { transform: rotate(-20deg); }
          40%       { transform: rotate(15deg); }
          60%       { transform: rotate(-15deg); }
          80%       { transform: rotate(10deg); }
        }
      `}</style>
    </div>
  );
}
