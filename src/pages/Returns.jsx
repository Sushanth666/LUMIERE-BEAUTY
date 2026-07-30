import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, ShieldCheck, Truck, RefreshCw, CheckCircle2, ChevronDown, HelpCircle, Package, ArrowRight, Upload, AlertCircle, FileText } from 'lucide-react';
import toast from 'react-hot-toast';

const POLICIES = [
  {
    id: 'skincare',
    title: 'Skincare & Body Products',
    icon: '🧴',
    badge: '30 Days Unopened / Lightly Tested',
    details: 'Unopened products can be returned within 30 days for a full refund. Gently tested items (less than 10% used) are eligible for store credit or exchange if skin irritation occurs.',
  },
  {
    id: 'makeup',
    title: 'Makeup & Cosmetics',
    icon: '💄',
    badge: 'Shade Match Guarantee',
    details: 'Ordered the wrong foundation or lipstick shade? Return it within 14 days for a free shade swap or 100% store credit. Opened eye products (mascaras, liquid liners) are non-returnable for hygiene reasons.',
  },
  {
    id: 'haircare',
    title: 'Haircare & Tools',
    icon: '💆',
    badge: '30 Days Trial',
    details: 'Haircare bottles and serums qualify for 30-day returns. Electronic styling tools (LED masks, rollers) include a 1-Year Lumière Replacement Warranty against manufacturing defects.',
  },
  {
    id: 'fragrance',
    title: 'Luxury Fragrances',
    icon: '🌸',
    badge: 'Sample Box Guarantee',
    details: 'Full-size perfume bottles must have original plastic seals intact. All fragrance orders include a free 2ml sample vial so you can test the scent before breaking the bottle seal!',
  },
];

const RETURN_STEPS = [
  { step: '01', title: 'Initiate Request', desc: 'Enter your Order ID below or go to Account Profile to select the item(s) you wish to return or exchange.', icon: FileText },
  { step: '02', title: 'Free Home Pickup', desc: 'Our courier partner will pick up the package from your doorstep within 24–48 hours at zero extra cost.', icon: Truck },
  { step: '03', title: 'Quality Check', desc: 'Upon arrival at our Lab Center, our beauty team performs a quick 15-minute authenticity check.', icon: ShieldCheck },
  { step: '04', title: 'Instant Refund', desc: 'Refunds are issued instantly to your original payment method or credited as Lumière Store Cash within 24 hours.', icon: RefreshCw },
];

const FAQS = [
  {
    q: 'How long do I have to return an item?',
    a: 'We offer a hassle-free 30-day return policy from the date of delivery for most skincare, haircare, and body products.',
  },
  {
    q: 'Are return shipping charges free?',
    a: 'Yes! Lumière covers 100% of doorstep pickup and reverse logistics costs across India.',
  },
  {
    q: 'What if I received a damaged or incorrect product?',
    a: 'Please upload a photo in the return request form or email us at support@lumiere.beauty within 48 hours. We dispatch a fresh replacement immediately without waiting for the return pickup.',
  },
  {
    q: 'How does the Shade Match Guarantee work?',
    a: 'If your foundation or concealer shade does not match your skin tone, you can request an exchange for a different shade free of charge!',
  },
  {
    q: 'When will I receive my refund?',
    a: 'Store credits are issued instantly after pickup confirmation. Bank/card refunds reflect within 2–4 business days depending on your bank.',
  },
];

export default function Returns() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('shade');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmitReturn = (e) => {
    e.preventDefault();
    if (!orderId.trim() || !email.trim()) {
      toast.error('Please enter your Order ID and Email Address');
      return;
    }
    setSubmitted(true);
    toast.success('Return request registered successfully!');
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Hero Header */}
      <div style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(251,191,36,0.08) 100%)',
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
          <RotateCcw size={14} /> 100% Risk-Free Beauty Guarantee
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.15',
          marginBottom: '1rem',
        }}>
          Returns &amp; Exchanges Portal
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          We want you to love everything you purchase from Lumière. If something isn't quite right, enjoy our effortless 30-day free returns and doorstep pickup.
        </p>

        {/* Feature Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}>
          {[
            { icon: RotateCcw, title: '30 Days Policy', desc: 'Generous 30-day window for all beauty items' },
            { icon: Truck, title: 'Free Doorstep Pickup', desc: 'Zero reverse shipping or pickup charges' },
            { icon: RefreshCw, title: 'Instant Store Credit', desc: 'Or 2-4 days back to your bank account' },
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'var(--accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f43f5e',
                flexShrink: 0,
              }}>
                <item.icon size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '2.5rem', alignItems: 'start' }} className="returns-layout">
        {/* Left Column: Process & Policies */}
        <div>
          {/* 4-Step Visual Process */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              How Returns Work in 4 Simple Steps
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {RETURN_STEPS.map((s) => (
                <div key={s.step} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  position: 'relative',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#f43f5e', fontFamily: 'var(--font-display)', opacity: 0.5 }}>{s.step}</span>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--accent-light)', color: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <s.icon size={18} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category Policy Cards */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Category-Specific Guidelines
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {POLICIES.map((p) => (
                <div key={p.id} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.6rem' }}>{p.icon}</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{p.title}</h3>
                  </div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: '#16a34a',
                    background: '#dcfce7',
                    padding: '3px 10px',
                    borderRadius: '50px',
                    marginBottom: '0.75rem',
                  }}>
                    ✓ {p.badge}
                  </span>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{p.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      padding: '1.2rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <HelpCircle size={18} color="#f43f5e" />
                      {faq.q}
                    </span>
                    <ChevronDown size={18} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem 3.1rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Instant Return Request Form Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '2rem',
          position: 'sticky',
          top: '90px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-light)', color: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={20} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              Start a Return or Exchange
            </h3>
          </div>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            Enter your order details below to instantly submit a free return or exchange request.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Request Submitted!</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                We've scheduled your free pickup for Order <strong>#{orderId.toUpperCase()}</strong>. Confirmation email sent to {email}.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Another Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitReturn} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Order ID *
                </label>
                <input
                  type="text"
                  placeholder="e.g. ORD-98421"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="input-styled"
                  style={{ fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="The email used for order"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-styled"
                  style={{ fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Reason for Return / Exchange *
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="input-styled"
                  style={{ fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  <option value="shade">Wrong Shade / Color Exchange</option>
                  <option value="damaged">Damaged or Broken Item</option>
                  <option value="incorrect">Received Wrong Product</option>
                  <option value="skin_reaction">Skin Reaction / Sensitivity</option>
                  <option value="changed_mind">Changed My Mind</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Additional Notes (Optional)
                </label>
                <textarea
                  placeholder="Tell us more about the issue..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-styled"
                  style={{ fontSize: '0.85rem', minHeight: '80px', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.85rem' }}>
                Submit Return Request <ArrowRight size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)', marginTop: '0.5rem' }}>
                <ShieldCheck size={18} color="#10b981" />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Instant pickup dispatch upon form verification.</span>
              </div>
            </form>
          )}

          {/* Need help footer */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Need immediate support?</p>
            <a href="mailto:support@lumiere.beauty" style={{ color: '#f43f5e', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none' }}>
              ✉️ Email support@lumiere.beauty
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .returns-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
