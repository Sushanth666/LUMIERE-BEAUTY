import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle2, Star, Sun, Moon } from 'lucide-react';
import toast from 'react-hot-toast';
import LumiereLogo from '../components/common/LumiereLogo';

export default function LoginPage() {
  const { login, signup, currentUser } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    remember: true,
  });

  // Calculate password strength for Signup mode
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: '', color: 'transparent', percent: 0 };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 1, label: 'Weak', color: '#ef4444', percent: 25 };
    if (score <= 3) return { score: 2, label: 'Medium', color: '#f59e0b', percent: 50 };
    if (score === 4) return { score: 3, label: 'Strong', color: '#10b981', percent: 75 };
    return { score: 4, label: 'Very Strong ✨', color: '#059669', percent: 100 };
  };

  const strength = getPasswordStrength(formData.password);

  // If already logged in, go to Home
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();

    if (authMode === 'login') {
      const success = login({ email: formData.email, password: formData.password });
      if (success) {
        navigate('/');
      }
    } else {
      if (!formData.name.trim()) {
        toast.error('Please enter your full name');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match. Please verify your confirm password.');
        return;
      }

      const success = signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });

      if (success) {
        toast.success(`🎉 Welcome to Lumière, ${formData.name}! Account created successfully.`, {
          duration: 3500,
          style: {
            borderRadius: '14px',
            background: '#0f172a',
            color: '#fff',
            fontWeight: '600',
            fontSize: '0.9rem',
            padding: '12px 18px',
          },
        });
        setTimeout(() => {
          navigate('/');
        }, 400);
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: isDark
        ? 'radial-gradient(ellipse at top left, #2d0b1e 0%, #12060c 50%, #0d0d1a 100%)'
        : 'linear-gradient(135deg, #fdf8f6 0%, #fff0f3 50%, #f7e9d7 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      padding: '2.5rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      color: isDark ? '#ffffff' : '#1e293b',
      transition: 'background 0.4s ease, color 0.4s ease',
    }}>


      {/* Dynamic ambient glowing light spheres */}
      <div style={{
        position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, rgba(212, 175, 55, 0.15) 45%, transparent 70%)'
          : 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, rgba(212, 175, 55, 0.1) 45%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(244, 63, 94, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Brand Header */}
      <div style={{ marginBottom: '1rem', textAlign: 'center', position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
        <LumiereLogo size={52} showSubtitle={true} textColor={isDark ? '#ffffff' : '#1e293b'} />
      </div>

      {/* Theme Toggle — centered below logo, never overlaps brand name */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '0.5rem 1.1rem',
          borderRadius: '50px',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(244, 63, 94, 0.25)',
          background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: isDark ? '#fef08a' : '#be123c',
          fontWeight: '600',
          fontSize: '0.8rem',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          boxShadow: isDark
            ? '0 4px 16px rgba(0, 0, 0, 0.35)'
            : '0 4px 16px rgba(244, 63, 94, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {isDark ? (
          <>
            <Sun size={16} color="#f59e0b" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon size={16} color="#9333ea" />
            <span>Dark Mode</span>
          </>
        )}
      </button>

      {/* Luxury Glassmorphism Card */}
      <div style={{
        width: '100%',
        maxWidth: '520px',
        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '28px',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(244, 63, 94, 0.2)',
        boxShadow: isDark
          ? '0 30px 90px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          : '0 30px 90px rgba(244, 63, 94, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        padding: '2.5rem 2.2rem',
        position: 'relative',
        zIndex: 2,
        transition: 'all 0.4s ease',
      }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            lineHeight: '1.2',
            color: isDark ? '#ffffff' : '#1e293b',
            marginBottom: '0.5rem',
          }}>
            {authMode === 'login' ? 'Welcome Back, Radiant' : 'Join The Luminary Club'}
          </h1>
          <p style={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748b', fontSize: '0.9rem' }}>
            {authMode === 'login'
              ? 'Access your saved routines, VIP points, and order history'
              : 'Unlock 10% off your first order & custom AI beauty diagnosis'}
          </p>
        </div>

        {/* Segmented Auth Mode Switcher */}
        <div style={{
          display: 'flex',
          background: isDark ? 'rgba(0, 0, 0, 0.35)' : '#f1f5f9',
          borderRadius: '16px',
          padding: '5px',
          marginBottom: '2rem',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
        }}>
          <button
            type="button"
            onClick={() => setAuthMode('login')}
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              background: authMode === 'login' ? 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)' : 'transparent',
              color: authMode === 'login' ? '#ffffff' : (isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b'),
              boxShadow: authMode === 'login' ? '0 8px 20px rgba(244, 63, 94, 0.35)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setAuthMode('signup')}
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              background: authMode === 'signup' ? 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)' : 'transparent',
              color: authMode === 'signup' ? '#ffffff' : (isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b'),
              boxShadow: authMode === 'signup' ? '0 8px 20px rgba(244, 63, 94, 0.35)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Register
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {authMode === 'signup' && (
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '600', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155', display: 'block', marginBottom: '6px' }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color={isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8'} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 46px',
                    borderRadius: '14px',
                    background: isDark ? 'rgba(0, 0, 0, 0.3)' : '#ffffff',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #cbd5e1',
                    color: isDark ? '#ffffff' : '#0f172a',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border 0.2s ease',
                  }}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: '600', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155', display: 'block', marginBottom: '6px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color={isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8'} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="priya@example.com"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 46px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(0, 0, 0, 0.3)' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #cbd5e1',
                  color: isDark ? '#ffffff' : '#0f172a',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border 0.2s ease',
                }}
                required
              />
            </div>
          </div>

          {authMode === 'signup' && (
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '600', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155', display: 'block', marginBottom: '6px' }}>
                Phone Number (Optional)
              </label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} color={isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8'} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 46px',
                    borderRadius: '14px',
                    background: isDark ? 'rgba(0, 0, 0, 0.3)' : '#ffffff',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #cbd5e1',
                    color: isDark ? '#ffffff' : '#0f172a',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: '600', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155', display: 'block', marginBottom: '6px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color={isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8'} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.85rem 46px 0.85rem 46px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(0, 0, 0, 0.3)' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #cbd5e1',
                  color: isDark ? '#ffffff' : '#0f172a',
                  fontSize: '0.92rem',
                  outline: 'none',
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#94a3b8',
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Password Strength Indicator (Signup Mode) */}
            {authMode === 'signup' && formData.password.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.76rem' }}>
                  <span style={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b' }}>Password Strength:</span>
                  <span style={{ fontWeight: '700', color: strength.color }}>{strength.label}</span>
                </div>
                <div style={{
                  height: '4px',
                  width: '100%',
                  background: isDark ? 'rgba(255, 255, 255, 0.1)' : '#e2e8f0',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${strength.percent}%`,
                    background: strength.color,
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                  }} />
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Field (Signup Mode) */}
          {authMode === 'signup' && (
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '600', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155', display: 'block', marginBottom: '6px' }}>
                Confirm Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color={isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8'} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '0.85rem 46px 0.85rem 46px',
                    borderRadius: '14px',
                    background: isDark ? 'rgba(0, 0, 0, 0.3)' : '#ffffff',
                    border: formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword
                      ? '1px solid #ef4444'
                      : (isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #cbd5e1'),
                    color: isDark ? '#ffffff' : '#0f172a',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#94a3b8',
                  }}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword && (
                <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                  ⚠️ Passwords do not match
                </span>
              )}
            </div>
          )}

          {authMode === 'login' ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748b' }}>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  style={{ accentColor: '#f43f5e', borderRadius: '4px' }}
                />
                Remember me
              </label>
              <a
                href="#"
                onClick={e => { e.preventDefault(); alert('Please use demo password: password123'); }}
                style={{ color: isDark ? '#fda4af' : '#e11d48', textDecoration: 'none', fontWeight: '600' }}
              >
                Forgot Password?
              </a>
            </div>
          ) : (
            <p style={{ fontSize: '0.78rem', color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b', lineHeight: '1.4' }}>
              By creating an account, you agree to Lumière's <Link to="/terms" style={{ color: isDark ? '#fda4af' : '#e11d48' }}>Terms</Link> &amp; <Link to="/privacy" style={{ color: isDark ? '#fda4af' : '#e11d48' }}>Privacy Policy</Link>.
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.95rem',
              borderRadius: '16px',
              border: 'none',
              background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              boxShadow: '0 10px 35px rgba(244, 63, 94, 0.45)',
              marginTop: '0.5rem',
              transition: 'transform 0.2s ease, boxShadow 0.2s ease',
            }}
          >
            {authMode === 'login' ? 'Sign In & Enter Store' : 'Create Account'}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>

      {/* Trust Badges Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.8rem',
        marginTop: '2.5rem', position: 'relative', zIndex: 2, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b' }}>
          <ShieldCheck size={16} color="#f59e0b" />
          <span>256-bit Encryption</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b' }}>
          <Star size={16} color="#f59e0b" />
          <span>50,000+ Luminary Members</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b' }}>
          <CheckCircle2 size={16} color="#059669" />
          <span>100% Satisfaction Guarantee</span>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8', position: 'relative', zIndex: 2 }}>
        © 2026 Lumière Beauty Lab. All rights reserved.
      </div>
    </div>
  );
}


