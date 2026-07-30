import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Heart, Headphones, Globe, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: 'Email Customer Care',
    detail: 'hello@lumiere.beauty',
    subText: 'Average response time: under 2 hours',
    action: 'mailto:hello@lumiere.beauty',
    actionText: 'Send an Email',
    color: '#f43f5e',
    bg: 'rgba(244,63,94,0.08)',
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    detail: '+91 98765 43210',
    subText: 'Mon–Sat: 9:00 AM – 8:00 PM IST',
    action: 'tel:+919876543210',
    actionText: 'Call Support',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: MapPin,
    title: 'Flagship Boutique',
    detail: 'Bandra West, Mumbai',
    subText: 'Plot 42, Linking Road, Mumbai 400050',
    action: '#map',
    actionText: 'Get Directions',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: Headphones,
    title: 'Virtual Consultation',
    detail: '1-on-1 Skin Expert',
    subText: 'Book a free 15-min video consultation',
    action: '/quiz',
    actionText: 'Take Beauty Quiz',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    toast.success('Message sent! Our Beauty Care team will respond shortly. 🌸');
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(217,119,6,0.08) 100%)',
        border: '1px solid var(--border-color)',
        marginBottom: '3rem',
      }}>
        <span style={{
          fontSize: '0.78rem',
          fontWeight: '800',
          color: '#f43f5e',
          background: 'var(--accent-light)',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '1rem',
        }}>
          <Sparkles size={14} /> Always Connected With You
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.15',
          marginBottom: '1rem',
        }}>
          We'd Love to Hear From You
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          maxWidth: '620px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Whether you need personalized skincare advice, order assistance, or press inquiries, our beauty advisors are ready to assist you.
        </p>

        {/* Quick Contact Channel Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}>
          {CONTACT_CHANNELS.map((ch, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '22px',
              padding: '1.5rem',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: ch.bg,
                color: ch.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <ch.icon size={22} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {ch.title}
              </h3>
              <p style={{ fontSize: '1.05rem', fontWeight: '800', color: '#f43f5e', marginBottom: '4px' }}>
                {ch.detail}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                {ch.subText}
              </p>
              {ch.action.startsWith('/') ? (
                <Link to={ch.action} style={{ color: ch.color, fontSize: '0.82rem', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {ch.actionText} <ArrowRight size={14} />
                </Link>
              ) : (
                <a href={ch.action} style={{ color: ch.color, fontSize: '0.82rem', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {ch.actionText} <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '2.5rem', alignItems: 'start' }} className="contact-layout">
        {/* Left Column: Interactive Contact Form */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}>
            Send Us a Message
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Fill out the form below and our beauty customer team will respond within 2 hours.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Thank You, {formData.name}!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                Your message regarding <strong>"{formData.subject.toUpperCase()}"</strong> has been received. A copy was sent to {formData.email}.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' }); }}
                className="btn-ghost"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-styled"
                    style={{ fontSize: '0.88rem' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="priya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-styled"
                    style={{ fontSize: '0.88rem' }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-styled"
                    style={{ fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-styled"
                    style={{ fontSize: '0.88rem', cursor: 'pointer' }}
                  >
                    <option value="general">General Beauty Inquiry</option>
                    <option value="order">Order Status &amp; Delivery</option>
                    <option value="skincare">Skincare / Shade Recommendation</option>
                    <option value="return">Return or Refund Request</option>
                    <option value="press">Press, PR &amp; Collaborations</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Your Message *
                </label>
                <textarea
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-styled"
                  style={{ fontSize: '0.88rem', minHeight: '130px', resize: 'vertical' }}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                  fontSize: '1rem',
                  padding: '0.9rem',
                  borderRadius: '50px',
                  marginTop: '0.5rem',
                }}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Store Location & Info Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Flagship Store Card */}
          <div id="map" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              📍 Flagship Boutique Location
            </h3>
            
            {/* Visual Store Banner */}
            <div style={{
              height: '140px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #881337 0%, #be123c 50%, #f43f5e 100%)',
              color: 'white',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.25rem',
            }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.15, fontSize: '7rem' }}>🌸</div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fecdd3' }}>LUMIÈRE PARIS</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '800' }}>Mumbai Concept Store</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#f43f5e" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Plot 42, Linking Road, Bandra West, Mumbai, Maharashtra 400050</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} color="#f43f5e" style={{ flexShrink: 0 }} />
                <span>Open Everyday: 10:30 AM – 9:00 PM IST</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#f43f5e" style={{ flexShrink: 0 }} />
                <span>+91 (022) 2640-8899</span>
              </div>
            </div>
          </div>

          {/* Direct Self-Service Links */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '1.75rem',
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Looking for Immediate Help?
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/track" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                <span>📦 Track Your Order Status</span>
                <ArrowRight size={15} color="#f43f5e" />
              </Link>
              <Link to="/returns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                <span>🔄 30-Day Returns &amp; Exchanges</span>
                <ArrowRight size={15} color="#f43f5e" />
              </Link>
              <Link to="/faq" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                <span>❓ Browse Frequently Asked Questions</span>
                <ArrowRight size={15} color="#f43f5e" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
