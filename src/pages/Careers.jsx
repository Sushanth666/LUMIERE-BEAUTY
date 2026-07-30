import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Sparkles, Heart, Gift, Zap, ShieldCheck, CheckCircle2, ArrowRight, Upload, X, Search, Award } from 'lucide-react';
import toast from 'react-hot-toast';

const DEPARTMENTS = [
  { id: 'all', label: 'All Openings' },
  { id: 'rd', label: 'Formulation & R&D' },
  { id: 'marketing', label: 'Marketing & Brand' },
  { id: 'tech', label: 'Tech & E-Commerce' },
  { id: 'retail', label: 'Retail & Experience' },
];

const JOBS = [
  {
    id: 'j1',
    dept: 'rd',
    deptLabel: 'Formulation & R&D',
    title: 'Senior Skincare Chemist',
    location: 'Mumbai Lab (Hybrid)',
    type: 'Full-Time',
    experience: '4–6 Years',
    desc: 'Lead the development of next-generation botanical serum and peptide formulations in our state-of-the-art laboratory.',
  },
  {
    id: 'j2',
    dept: 'marketing',
    deptLabel: 'Marketing & Brand',
    title: 'Growth Marketing Manager',
    location: 'Remote / Mumbai',
    type: 'Full-Time',
    experience: '3–5 Years',
    desc: 'Drive customer acquisition and retention strategies across paid social, influencer partnerships, and performance marketing.',
  },
  {
    id: 'j3',
    dept: 'tech',
    deptLabel: 'Tech & E-Commerce',
    title: 'Full-Stack React Developer',
    location: 'Remote (India)',
    type: 'Full-Time',
    experience: '2–4 Years',
    desc: 'Build immersive digital beauty experiences, AI skin quiz recommendation engines, and seamless checkout flows.',
  },
  {
    id: 'j4',
    dept: 'retail',
    deptLabel: 'Retail & Experience',
    title: 'Flagship Store Lead Consultant',
    location: 'Bandra West, Mumbai',
    type: 'Full-Time',
    experience: '2–4 Years',
    desc: 'Curate luxury 1-on-1 skin consultation experiences and lead store operations at our premier Bandra concept boutique.',
  },
  {
    id: 'j5',
    dept: 'marketing',
    deptLabel: 'Marketing & Brand',
    title: 'Visual & Packaging Designer',
    location: 'Mumbai Office',
    type: 'Full-Time',
    experience: '3+ Years',
    desc: 'Craft sustainable glass bottle packaging, luxury unboxing experiences, and high-impact digital campaigns.',
  },
];

const PERKS = [
  { icon: Gift, title: '₹50k Beauty Allowance', desc: 'Annual stipend for all Lumière skincare, makeup, and wellness products.' },
  { icon: Clock, title: 'Flexible Work Culture', desc: 'Hybrid and remote options with flexible hours designed for work-life harmony.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Full medical coverage for you and dependents plus mental health support.' },
  { icon: Zap, title: 'Growth & Upskilling', desc: '₹1,00,000 annual budget for workshops, conferences, and certifications.' },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [applyJob, setApplyJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    cover: '',
  });

  const filteredJobs = JOBS.filter((job) => {
    const matchDept = selectedDept === 'all' || job.dept === selectedDept;
    const matchSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDept && matchSearch;
  });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!applicant.name.trim() || !applicant.email.trim()) {
      toast.error('Please enter your name and email');
      return;
    }
    setSubmitted(true);
    toast.success(`Application submitted for ${applyJob.title}! 🚀`);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Hero Header */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1.5rem 3.5rem',
        borderRadius: '32px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(139,92,246,0.08) 100%)',
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
          <Briefcase size={14} /> Join Team Lumière
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.12',
          marginBottom: '1.25rem',
        }}>
          Shape the Future of <br />
          <span className="gradient-text">Luxury Clean Beauty</span>
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          maxWidth: '650px',
          margin: '0 auto 2.5rem',
          lineHeight: '1.65',
        }}>
          We are a team of scientists, creators, and beauty visionaries building India's fastest-growing luxury clean e-commerce brand. Explore open positions below.
        </p>

        {/* Perks Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          maxWidth: '950px',
          margin: '0 auto',
        }}>
          {PERKS.map((p, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '1.25rem',
              textAlign: 'left',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--accent-light)',
                color: '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
              }}>
                <p.icon size={20} />
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>{p.title}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions Section */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)' }}>
              Open Positions ({filteredJobs.length})
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2px' }}>
              Find your next career move at Lumière Paris.
            </p>
          </div>

          {/* Search Bar */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-styled"
              style={{ paddingLeft: '40px', fontSize: '0.85rem', height: '42px' }}
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              style={{
                padding: '0.55rem 1.1rem',
                borderRadius: '50px',
                border: selectedDept === dept.id ? '1px solid #f43f5e' : '1px solid var(--border-color)',
                background: selectedDept === dept.id ? '#f43f5e' : 'var(--bg-card)',
                color: selectedDept === dept.id ? 'white' : 'var(--text-primary)',
                fontWeight: selectedDept === dept.id ? '700' : '500',
                fontSize: '0.83rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1.5rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              No Openings Found in this Department
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Try clearing your search filters or send your CV for future openings.
            </p>
            <button onClick={() => { setSelectedDept('all'); setSearchQuery(''); }} className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              View All Positions
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filteredJobs.map((job) => (
              <div key={job.id} style={{
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
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#f43f5e', background: 'var(--accent-light)', padding: '3px 10px', borderRadius: '50px', textTransform: 'uppercase' }}>
                      {job.deptLabel}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      {job.type}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                    {job.title}
                  </h3>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} color="#f43f5e" /> {job.location}
                    </span>
                    <span>•</span>
                    <span>Experience: {job.experience}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {job.desc}
                  </p>
                </div>

                <button
                  onClick={() => { setApplyJob(job); setSubmitted(false); }}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.75rem' }}
                >
                  Apply Now <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Application Modal / Drawer */}
      {applyJob && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 999, padding: '1.5rem',
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '28px',
            maxWidth: '540px',
            width: '100%',
            padding: '2rem',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
            <button
              onClick={() => setApplyJob(null)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--text-secondary)',
              }}
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Application Received!
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Thank you for applying for <strong>{applyJob.title}</strong>. Our Talent Acquisition team will review your profile and reach out to {applicant.email}.
                </p>
                <button onClick={() => setApplyJob(null)} className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}>
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Applying For Role
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {applyJob.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  {applyJob.deptLabel} • {applyJob.location}
                </p>

                <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Reddy"
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      className="input-styled"
                      style={{ fontSize: '0.85rem' }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="ananya@example.com"
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      className="input-styled"
                      style={{ fontSize: '0.85rem' }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                      LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourname"
                      value={applicant.portfolio}
                      onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })}
                      className="input-styled"
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                      Brief Cover Note / Why Lumière?
                    </label>
                    <textarea
                      placeholder="Tell us briefly about your background and interest..."
                      value={applicant.cover}
                      onChange={(e) => setApplicant({ ...applicant, cover: e.target.value })}
                      className="input-styled"
                      style={{ fontSize: '0.85rem', minHeight: '80px', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.85rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Submit Application <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
