import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, ChevronDown, ThumbsUp, ThumbsDown, Mail, Phone, MessageSquare, Sparkles, Truck, ShieldCheck, RotateCcw, Award } from 'lucide-react';
import toast from 'react-hot-toast';

const CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: '✨' },
  { id: 'shipping', label: 'Orders & Shipping', icon: '🚚' },
  { id: 'products', label: 'Products & Ingredients', icon: '🧴' },
  { id: 'returns', label: 'Returns & Refunds', icon: '🔄' },
  { id: 'account', label: 'Account & Rewards', icon: '👑' },
];

const FAQ_DATA = [
  {
    id: 'f1',
    category: 'shipping',
    question: 'How long will my order take to arrive?',
    answer: 'Standard shipping takes 3–5 business days across India. Express shipping arrives in 1–2 business days. Orders placed before 2 PM IST are dispatched on the same day!',
  },
  {
    id: 'f2',
    category: 'shipping',
    question: 'Do you offer free shipping?',
    answer: 'Yes! We provide 100% free shipping on all orders above ₹999. For orders under ₹999, a flat shipping fee of ₹99 applies.',
  },
  {
    id: 'f3',
    category: 'shipping',
    question: 'How can I track my shipment?',
    answer: 'You can easily track your order using our Track Order page at /track by entering your Order ID (e.g., ORD-98421) and email address.',
  },
  {
    id: 'f4',
    category: 'products',
    question: 'Are all Lumière products 100% authentic and dermatologist-tested?',
    answer: 'Absolutely. All Lumière formulations are dermatologist-tested, clinically proven, cruelty-free, and manufactured in ISO-certified laboratories.',
  },
  {
    id: 'f5',
    category: 'products',
    question: 'How do I choose the right products for my skin type?',
    answer: 'Try our interactive Beauty Quiz! In less than 2 minutes, our AI skincare match engine analyzes your skin concern and curates a customized beauty regimen.',
  },
  {
    id: 'f6',
    category: 'products',
    question: 'Are your formulations safe for sensitive skin and pregnant women?',
    answer: 'Most of our hydrating, niacinamide, and botanical products are safe. However, for products containing active Retinol or AHA/BHA, we recommend consulting your physician during pregnancy.',
  },
  {
    id: 'f7',
    category: 'returns',
    question: 'What is your return & exchange policy?',
    answer: 'We offer a 30-day hassle-free return policy. Unopened or lightly tested products qualify for a 100% refund or free exchange with zero doorstep pickup fees.',
  },
  {
    id: 'f8',
    category: 'returns',
    question: 'What if I order the wrong foundation shade?',
    answer: 'Our Shade Match Guarantee allows you to exchange any foundation or lipstick for a different shade free of charge within 14 days of delivery.',
  },
  {
    id: 'f9',
    category: 'returns',
    question: 'How quickly will I receive my refund?',
    answer: 'Lumière Store Credits are credited instantly upon doorstep pickup. Direct bank/card refunds are processed within 2–4 business days.',
  },
  {
    id: 'f10',
    category: 'account',
    question: 'How do I earn and redeem Lumière Rewards Points?',
    answer: 'You earn 10 points for every ₹100 spent. Points can be redeemed at checkout for instant order discounts (100 points = ₹50 off).',
  },
  {
    id: 'f11',
    category: 'account',
    question: 'Do I need an account to place an order?',
    answer: 'You can browse and shop easily after logging in with your account. Your login credentials, saved addresses, and order history are securely stored in your local profile.',
  },
  {
    id: 'f12',
    category: 'account',
    question: 'How can I reset my account password?',
    answer: 'You can update your password or account details anytime from your Profile Dashboard under Account Settings.',
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState('f1');
  const [feedback, setFeedback] = useState({});

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleFeedback = (id, type) => {
    setFeedback((prev) => ({ ...prev, [id]: type }));
    toast.success('Thank you for your feedback! 💖');
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Hero Header */}
      <div style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem 3rem',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.06) 0%, rgba(147,197,253,0.08) 100%)',
        border: '1px solid var(--border-color)',
        marginBottom: '2.5rem',
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
          <HelpCircle size={14} /> Help &amp; Support Center
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.15',
          marginBottom: '1rem',
        }}>
          Frequently Asked Questions
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: '1.6',
        }}>
          Have questions about your order, shipping, products, or returns? Search below or browse our quick help categories.
        </p>

        {/* Live Search Bar */}
        <div style={{
          position: 'relative',
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          <Search
            size={20}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search questions (e.g., shipping, returns, foundation, shade)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-styled"
            style={{
              paddingLeft: '50px',
              paddingRight: '20px',
              height: '54px',
              borderRadius: '50px',
              fontSize: '0.95rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
        paddingBottom: '0.75rem',
        marginBottom: '2rem',
        justifyContent: 'center',
      }} className="hide-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '50px',
                border: isActive ? '1px solid #f43f5e' : '1px solid var(--border-color)',
                background: isActive ? 'linear-gradient(135deg, #f43f5e, #e11d48)' : 'var(--bg-card)',
                color: isActive ? 'white' : 'var(--text-primary)',
                fontWeight: isActive ? '700' : '500',
                fontSize: '0.88rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 6px 20px rgba(244,63,94,0.3)' : 'none',
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Questions Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 1.5rem',
          background: 'var(--bg-card)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            No Matching Questions Found
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Try searching for another keyword or reach out to our Customer Support team.
          </p>
          <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const currentFeedback = feedback[faq.id];
            return (
              <div
                key={faq.id}
                style={{
                  background: 'var(--bg-card)',
                  border: isOpen ? '1px solid rgba(244,63,94,0.35)' : '1px solid var(--border-color)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 10px 30px rgba(244,63,94,0.08)' : '0 2px 10px rgba(0,0,0,0.02)',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: '700',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    gap: '1rem',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={20} color={isOpen ? '#f43f5e' : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--accent-light)' : 'var(--bg-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s',
                  }}>
                    <ChevronDown size={18} color={isOpen ? '#f43f5e' : 'var(--text-secondary)'} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem 3.4rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    borderTop: '1px stroke var(--border-color)',
                  }}>
                    <p style={{ marginBottom: '1rem' }}>{faq.answer}</p>

                    {/* Was this helpful? */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      paddingTop: '0.75rem',
                      borderTop: '1px dashed var(--border-color)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}>
                      <span>Was this answer helpful?</span>
                      <button
                        onClick={() => handleFeedback(faq.id, 'yes')}
                        style={{
                          background: currentFeedback === 'yes' ? '#dcfce7' : 'var(--bg-primary)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '50px',
                          padding: '4px 10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: currentFeedback === 'yes' ? '#16a34a' : 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                        }}
                      >
                        <ThumbsUp size={13} /> Yes
                      </button>
                      <button
                        onClick={() => handleFeedback(faq.id, 'no')}
                        style={{
                          background: currentFeedback === 'no' ? '#fee2e2' : 'var(--bg-primary)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '50px',
                          padding: '4px 10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: currentFeedback === 'no' ? '#ef4444' : 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                        }}
                      >
                        <ThumbsDown size={13} /> No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Still Have Questions Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
        borderRadius: '28px',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      }}>
        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>💬</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.75rem', color: '#ffffff' }}>
          Still Have Questions?
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          Our expert Beauty Advisors and Support team are here to help you 7 days a week!
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:support@lumiere.beauty"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
            }}
          >
            <Mail size={18} /> Email Beauty Care
          </a>
          <Link
            to="/returns"
            className="btn-ghost"
            style={{
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.8rem 1.5rem',
              color: 'white',
              borderColor: 'rgba(255,255,255,0.2)',
            }}
          >
            <RotateCcw size={18} /> Returns Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
