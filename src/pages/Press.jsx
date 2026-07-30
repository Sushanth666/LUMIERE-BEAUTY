import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Newspaper, Download, Mail, Sparkles, ExternalLink, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const MEDIA_LOGOS = [
  { name: 'VOGUE', quote: 'Reinventing Indian luxury beauty with clean Paris formulations.' },
  { name: 'ELLE', quote: 'The Radiance Glow Serum is our top skincare holy grail of 2026.' },
  { name: 'BAZAAR', quote: 'Lumière brings Parisian elegance directly to your vanity.' },
  { name: 'COSMOPOLITAN', quote: 'The velvet matte lipsticks you will want in every single shade.' },
  { name: 'GRAZIA', quote: 'Leading the clean beauty revolution with 100% transparent ingredients.' },
];

const PRESS_ARTICLES = [
  {
    id: 'p1',
    outlet: 'VOGUE India',
    date: 'January 2026',
    category: 'brand',
    title: 'How Lumière Paris Built India’s Most Coveted Clean Beauty Platform',
    excerpt: 'Combining French botanical expertise with dermatologist-proven actives, Lumière has transformed modern skincare rituals for half a million beauty lovers.',
    readTime: '4 min read',
  },
  {
    id: 'p2',
    outlet: 'ELLE Magazine',
    date: 'February 2026',
    category: 'reviews',
    title: 'Best New Skincare Launch: The Radiance Vitamin C 20% Glow Serum',
    excerpt: 'Tested over 30 days by ELLE beauty editors: why this amber dropper bottle delivers unmatchable skin luminosity without irritation.',
    readTime: '3 min read',
  },
  {
    id: 'p3',
    outlet: 'Harper’s BAZAAR',
    date: 'March 2026',
    category: 'founder',
    title: 'In Conversation With Founder Priya Sharma on Eco-Luxe Aesthetics',
    excerpt: 'A deep dive into sustainable glass packaging, ethical botanical harvesting in Grasse, and the launch of the Bandra flagship concept store.',
    readTime: '6 min read',
  },
  {
    id: 'p4',
    outlet: 'COSMOPOLITAN',
    date: 'April 2026',
    category: 'reviews',
    title: '10 Velvet Matte Lipsticks That Last Through Dinner & Beyond',
    excerpt: 'Lumière Velvet Lipstick takes the top spot for its non-drying formula, rich pigment payoff, and comfortable 12-hour wear.',
    readTime: '5 min read',
  },
  {
    id: 'p5',
    outlet: 'GRAZIA Beauty Awards',
    date: 'May 2026',
    category: 'awards',
    title: 'Lumière Named Clean Beauty Brand of the Year 2026',
    excerpt: 'Awarded for 100% cruelty-free formulations, zero harmful additives, and groundbreaking AI shade matching technology.',
    readTime: '3 min read',
  },
];

const PRESS_KITS = [
  { title: 'Brand Guidelines & Logo Assets', size: '24 MB • SVG & PNG Pack', desc: 'Vector logos, brand colors, typography guidelines' },
  { title: 'High-Res Product Photography', size: '140 MB • 4K Studio Shots', desc: 'High-resolution PNG product shots with transparent backdrops' },
  { title: 'Executive Bios & Founder Photos', size: '18 MB • Headshots & Bios', desc: 'Official founder bios and executive leadership photography' },
];

export default function Press() {
  const [activeTab, setActiveTab] = useState('all');
  const [prForm, setPrForm] = useState({ name: ' ', publication: '', email: '', message: '' });
  const [prSubmitted, setPrSubmitted] = useState(false);

  const filteredArticles = activeTab === 'all'
    ? PRESS_ARTICLES
    : PRESS_ARTICLES.filter(a => a.category === activeTab);

  const handlePrSubmit = (e) => {
    e.preventDefault();
    if (!prForm.email.trim() || !prForm.publication.trim()) {
      toast.error('Please complete all required fields');
      return;
    }
    setPrSubmitted(true);
    toast.success('Press inquiry sent! Our PR team will get back to you within 24 hours. 📰');
  };

  const handleDownload = (title) => {
    toast.success(`Downloading ${title}...`);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Hero Header */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1.5rem 3.5rem',
        borderRadius: '32px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(251,191,36,0.08) 100%)',
        border: '1px solid var(--border-color)',
        marginBottom: '3rem',
      }}>
        <span style={{
          fontSize: '0.78rem',
          fontWeight: '800',
          color: '#f43f5e',
          background: 'var(--accent-light)',
          padding: '0.4rem 1.1rem',
          borderRadius: '50px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '1.25rem',
        }}>
          <Newspaper size={14} /> Press &amp; Media Room
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.12',
          marginBottom: '1.25rem',
        }}>
          Lumière in the <span className="gradient-text">Spotlight</span>
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: '1.65',
        }}>
          Discover what top beauty editors, fashion publications, and industry experts are saying about Lumière Paris.
        </p>
      </div>

      {/* Media Quotes Carousel Bar */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
        }}>
          {MEDIA_LOGOS.map((item, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '22px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: '900',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}>
                {item.name}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontStyle: 'italic' }}>
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Press Coverage Articles Section */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)' }}>
              Latest Press Features
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2px' }}>
              Selected articles, reviews, and editorial mentions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'all', label: 'All Features' },
              { id: 'reviews', label: 'Product Reviews' },
              { id: 'brand', label: 'Brand Stories' },
              { id: 'awards', label: 'Awards' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  border: activeTab === tab.id ? '1px solid #f43f5e' : '1px solid var(--border-color)',
                  background: activeTab === tab.id ? '#f43f5e' : 'var(--bg-card)',
                  color: activeTab === tab.id ? 'white' : 'var(--text-primary)',
                  fontWeight: activeTab === tab.id ? '700' : '500',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredArticles.map(art => (
            <div key={art.id} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#f43f5e', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                    {art.outlet}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {art.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.35', marginBottom: '0.75rem' }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {art.excerpt}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{art.readTime}</span>
                <button
                  onClick={() => toast.success(`Opening article from ${art.outlet}`)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f43f5e', fontSize: '0.82rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Read Story <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Press Kit & Media Inquiry Form Split Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '2.5rem', alignItems: 'start' }} className="press-layout">
        {/* Left: Press Kits */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '28px',
          padding: '2.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--accent-light)', color: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Download size={20} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>
              Media Kits &amp; Brand Assets
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
            Download high-resolution logos, product imagery, and official brand press releases for editorial use.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PRESS_KITS.map((kit, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                background: 'var(--bg-primary)',
                borderRadius: '18px',
                border: '1px solid var(--border-color)',
              }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>{kit.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{kit.desc} • {kit.size}</p>
                </div>
                <button
                  onClick={() => handleDownload(kit.title)}
                  className="btn-ghost"
                  style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
                >
                  <Download size={14} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: PR Contact Form */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '28px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Media &amp; PR Inquiries
          </h3>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            For press samples, interview requests with our founders, or media accreditation, reach out directly below.
          </p>

          {prSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={30} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Inquiry Sent!</h4>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Our PR Relations team will get back to your media team shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePrSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                  Publication / Outlet *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vogue India, ELLE, Freelance"
                  value={prForm.publication}
                  onChange={(e) => setPrForm({ ...prForm, publication: e.target.value })}
                  className="input-styled"
                  style={{ fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                  Work Email Address *
                </label>
                <input
                  type="email"
                  placeholder="press@publication.com"
                  value={prForm.email}
                  onChange={(e) => setPrForm({ ...prForm, email: e.target.value })}
                  className="input-styled"
                  style={{ fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                  Inquiry Details *
                </label>
                <textarea
                  placeholder="Product samples request, interview, or brand feature details..."
                  value={prForm.message}
                  onChange={(e) => setPrForm({ ...prForm, message: e.target.value })}
                  className="input-styled"
                  style={{ fontSize: '0.85rem', minHeight: '90px', resize: 'vertical' }}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.88rem', padding: '0.8rem', marginTop: '0.5rem' }}>
                Submit PR Request <ArrowRight size={15} />
              </button>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                Or direct email: <a href="mailto:press@lumiere.beauty" style={{ color: '#f43f5e', fontWeight: '600' }}>press@lumiere.beauty</a>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .press-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
