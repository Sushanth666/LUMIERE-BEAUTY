import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Leaf, Award, Compass, ArrowRight, Users, CheckCircle2, Star, Droplet } from 'lucide-react';

const BRAND_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Dermatologist Formulated',
    desc: 'Every product is backed by clinical studies, non-comedogenic testing, and active ingredients that deliver visible skin transformation.',
    color: '#f43f5e',
    bg: 'rgba(244,63,94,0.08)',
  },
  {
    icon: Leaf,
    title: '100% Clean & Cruelty-Free',
    desc: 'Zero parabens, sulfates, phthalates, or harsh chemicals. We are proudly Leaping Bunny certified and 100% vegan.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Droplet,
    title: 'Ethically Sourced Botanicals',
    desc: 'We harvest rose extracts from Grasse, argan oils from Morocco, and rare herbs directly from eco-certified fair-trade farms.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
  },
  {
    icon: Award,
    title: 'Eco-Luxe Sustainability',
    desc: 'Packaged in recyclable amber glass containers and biodegradable outer cartons to protect both your skin and the planet.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
];

const MILESTONES = [
  { year: '2022', title: 'The Paris & Mumbai Vision', desc: 'Lumière was founded with a single mission: blending French botanical elegance with Indian skin climate requirements.' },
  { year: '2023', title: 'Radiance Serum Breakthrough', desc: 'Launched our flagship Vitamin C Radiance Glow Serum, reaching over 50,000 glowing customers in the first 6 months.' },
  { year: '2024', title: 'Expanding Luxe Beauty', desc: 'Introduced our Velvet Matte lipsticks, luxury EDP fragrances, and Keratin hair therapies.' },
  { year: '2025', title: 'Flagship Store & AI Engine', desc: 'Opened our flagship concept boutique in Bandra West, Mumbai and integrated our proprietary AI Skin Quiz.' },
  { year: '2026', title: '#1 Luxury Clean Brand', desc: 'Recognized as India’s leading luxury clean e-commerce platform with 500k+ satisfied beauty enthusiasts.' },
];

const STATS = [
  { value: '500k+', label: 'Delighted Customers' },
  { value: '32+', label: 'Luxe Formulations' },
  { value: '4.9 ★', label: 'Average Rating' },
  { value: '100%', label: 'Vegan & Cruelty Free' },
];

const TEAM = [
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & Creative Director',
    image: '/assets/images/reviews/avatar1.png',
    bio: 'Former Paris beauty curator with 12+ years in luxury cosmetics formulation and brand aesthetics.',
  },
  {
    name: 'Dr. Elena Vance',
    role: 'Lead Dermatologist & Scientist',
    image: '/assets/images/reviews/avatar2.png',
    bio: 'PhD in Cellular Dermatology with 15 published clinical studies on skin barrier restoration.',
  },
];

export default function About() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Hero Banner */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1.5rem 3.5rem',
        borderRadius: '32px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(251,191,36,0.08) 100%)',
        border: '1px solid var(--border-color)',
        marginBottom: '3.5rem',
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
          <Sparkles size={14} /> The Lumière Story
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.12',
          marginBottom: '1.25rem',
        }}>
          Where Botanical Science Meets <br />
          <span className="gradient-text">Pure Elegance</span>
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          maxWidth: '680px',
          margin: '0 auto 2.5rem',
          lineHeight: '1.65',
        }}>
          Lumière Paris was born from a passion for conscious, high-efficacy beauty. We craft luxury skincare, makeup, haircare, and fragrances designed to bring out your natural glow without compromise.
        </p>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          maxWidth: '850px',
          margin: '0 auto',
        }}>
          {STATS.map((st, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '1.25rem 1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#f43f5e', marginBottom: '2px' }}>
                {st.value}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                {st.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Pillars Section */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Our Core Beauty Commitments
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto' }}>
            Built on transparency, efficacy, and ethical craftsmanship in every formula.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {BRAND_PILLARS.map((p, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              padding: '1.75rem',
              transition: 'all 0.3s ease',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '16px',
                background: p.bg,
                color: p.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <p.icon size={24} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Journey Timeline */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '30px',
        padding: '3rem 2rem',
        marginBottom: '4rem',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Milestones &amp; Evolution
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
            The Lumière Journey
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {MILESTONES.map((m, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
              padding: '1.25rem 1.5rem',
              background: 'var(--bg-primary)',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: '900',
                color: '#f43f5e',
                background: 'var(--accent-light)',
                padding: '0.4rem 0.9rem',
                borderRadius: '12px',
                flexShrink: 0,
              }}>
                {m.year}
              </span>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Science Team */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Meet the Visionaries
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            The experts behind our award-winning formulations.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '750px',
          margin: '0 auto',
        }}>
          {TEAM.map((member, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 1.25rem',
                border: '3px solid #f43f5e',
                boxShadow: '0 6px 20px rgba(244,63,94,0.25)',
              }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                {member.role}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
        borderRadius: '30px',
        padding: '3.5rem 2rem',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      }}>
        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>✨</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
          Experience the Lumière Difference
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          Ready to elevate your beauty ritual? Explore our curated collection or take our personalized skin quiz.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/products"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              fontSize: '0.95rem',
              padding: '0.85rem 1.75rem',
              background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
              borderRadius: '50px',
            }}
          >
            Explore Catalog <ArrowRight size={16} />
          </Link>
          <Link
            to="/quiz"
            className="btn-ghost"
            style={{
              textDecoration: 'none',
              fontSize: '0.95rem',
              padding: '0.85rem 1.75rem',
              color: 'white',
              borderColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50px',
            }}
          >
            Take Skin Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
