import { useState } from 'react';
import { X, Mail, Lock, User, Phone, Eye, EyeOff, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, authMode, setAuthMode, login, signup } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [modalError, setModalError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    remember: true,
  });

  if (!isAuthModalOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setModalError('');
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleModeSwitch = (mode) => {
    setModalError('');
    setAuthMode(mode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalError('');
    if (authMode === 'login') {
      const res = login({ email: formData.email, password: formData.password });
      if (res && !res.success) {
        setModalError(res.error || 'Invalid credentials or account does not exist.');
      }
    } else {
      if (!formData.name.trim()) {
        setModalError('Please enter your full name');
        return;
      }
      const res = signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });
      if (res && !res.success) {
        setModalError(res.error || 'Could not create account.');
      }
    }
  };

  const fillDemoCredentials = () => {
    setModalError('');
    setFormData({
      name: 'Priya Sharma',
      email: 'priya@example.com',
      password: 'password123',
      phone: '+91 98765 43210',
      remember: true,
    });
  };

  return (
    <div className="drawer-overlay" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem', zIndex: 1000,
    }} onClick={closeAuthModal}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '28px',
        width: '100%',
        maxWidth: '460px',
        overflow: 'hidden',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.3)',
        border: '1px solid var(--border-color)',
        padding: '2.25rem',
        position: 'relative',
        animation: 'modalZoom 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }} onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={closeAuthModal} style={{
          position: 'absolute', top: '20px', right: '20px',
          background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
          borderRadius: '50%', width: '36px', height: '36px',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-primary)', transition: 'all 0.2s',
        }}>
          <X size={18} />
        </button>

        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(244,63,94,0.08)', padding: '4px 12px', borderRadius: '50px', marginBottom: '0.75rem' }}>
            <Sparkles size={14} color="#f43f5e" />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f43f5e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>LUMIÈRE BEAUTY CLUB</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: '700', color: 'var(--text-primary)' }}>
            {authMode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
            {authMode === 'login'
              ? 'Sign in to access your wishlist, saved orders & rewards'
              : 'Join Lumière to unlock 10% off your first order'}
          </p>
        </div>

        {/* Auth Mode Toggle Tabs */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          background: 'var(--bg-primary)', borderRadius: '50px',
          padding: '4px', marginBottom: '1.25rem',
          border: '1px solid var(--border-color)',
        }}>
          <button
            onClick={() => handleModeSwitch('login')}
            style={{
              padding: '0.6rem', borderRadius: '50px', border: 'none',
              fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
              background: authMode === 'login' ? 'linear-gradient(135deg, #f43f5e, #e11d48)' : 'transparent',
              color: authMode === 'login' ? 'white' : 'var(--text-secondary)',
              transition: 'all 0.3s ease',
              boxShadow: authMode === 'login' ? '0 4px 15px rgba(244,63,94,0.3)' : 'none',
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => handleModeSwitch('signup')}
            style={{
              padding: '0.6rem', borderRadius: '50px', border: 'none',
              fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
              background: authMode === 'signup' ? 'linear-gradient(135deg, #f43f5e, #e11d48)' : 'transparent',
              color: authMode === 'signup' ? 'white' : 'var(--text-secondary)',
              transition: 'all 0.3s ease',
              boxShadow: authMode === 'signup' ? '0 4px 15px rgba(244,63,94,0.3)' : 'none',
            }}
          >
            Register
          </button>
        </div>

        {/* Inline Notice / Alert Banner */}
        {modalError && (
          <div style={{
            background: modalError.toLowerCase().includes('account not found')
              ? 'rgba(244, 63, 94, 0.1)'
              : 'rgba(239, 68, 68, 0.12)',
            border: modalError.toLowerCase().includes('account not found')
              ? '1.5px solid #f43f5e'
              : '1.5px solid #ef4444',
            borderRadius: '14px',
            padding: '0.9rem 1rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            lineHeight: '1.4',
          }}>
            {modalError.toLowerCase().includes('account not found') ? (
              <Sparkles size={20} color="#f43f5e" style={{ flexShrink: 0, marginTop: '2px' }} />
            ) : (
              <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
            )}
            <div>
              <div style={{
                fontWeight: '700',
                marginBottom: '2px',
                color: modalError.toLowerCase().includes('account not found') ? '#f43f5e' : '#ef4444'
              }}>
                {modalError.toLowerCase().includes('account not found') ? 'Account Not Found' : 'Incorrect Password'}
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                {modalError.toLowerCase().includes('account not found')
                  ? `No account registered with "${formData.email}". Please create an account.`
                  : modalError}
              </div>
              {authMode === 'login' && modalError.toLowerCase().includes('account not found') && (
                <button
                  type="button"
                  onClick={() => handleModeSwitch('signup')}
                  style={{
                    background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
                    color: '#white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    marginTop: '8px',
                    cursor: 'pointer',
                    color: 'white',
                  }}
                >
                  Register Account Now
                </button>
              )}
            </div>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {authMode === 'signup' && (
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className="input-styled"
                  style={{ paddingLeft: '40px' }}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="input-styled"
                style={{ paddingLeft: '40px' }}
                required
              />
            </div>
          </div>

          {authMode === 'signup' && (
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                Phone Number (Optional)
              </label>
              <div style={{ position: 'relative' }}>
                <Phone size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="input-styled"
                  style={{ paddingLeft: '40px' }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-styled"
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {authMode === 'login' ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} />
                Remember me
              </label>
              <a href="#" onClick={e => { e.preventDefault(); alert('Please use demo password: password123'); }} style={{ color: '#f43f5e', textDecoration: 'none', fontWeight: '600' }}>
                Forgot Password?
              </a>
            </div>
          ) : (
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              By creating an account, you agree to our <a href="#" style={{ color: '#f43f5e' }}>Terms of Service</a> &amp; <a href="#" style={{ color: '#f43f5e' }}>Privacy Policy</a>.
            </p>
          )}

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.75rem' }}>
            {authMode === 'login' ? 'Sign In to Account' : 'Create Lumière Account'} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
