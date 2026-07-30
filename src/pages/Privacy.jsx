import { Shield, Lock, Eye, Server, UserCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    id: 'collection',
    icon: Eye,
    title: '1. Information We Collect',
    content: `We collect information to provide better services to all our users. The types of information we collect include:
• Personal Identifiers: Name, email address, phone number, and delivery shipping addresses provided during account registration or checkout.
• Local Profile Data: Cart contents, wishlist items, skin quiz preferences, and dark/light theme preferences stored in your device’s local storage.
• Device & Technical Data: IP address, browser type, device information, and operating system used to access our platform.`,
  },
  {
    id: 'usage',
    icon: Server,
    title: '2. How We Use Your Information',
    content: `Your data is used strictly to enhance your shopping and skincare experience:
• Order Fulfillment: Processing payments, packing orders, generating invoices, and arranging courier doorstep delivery.
• Personalization: Recommending beauty products tailored to your skin type, shades, and quiz responses.
• Customer Support: Responding to your inquiries, return requests, and support tickets.
• Communication: Sending order confirmations, shipping updates, and optional promotional newsletters.`,
  },
  {
    id: 'storage',
    icon: Lock,
    title: '3. Local Storage & Security',
    content: `Lumière Beauty utilizes browser LocalStorage for ultra-fast, client-side data persistence:
• Per-Profile Isolation: Each logged-in account has its own isolated storage keys (e.g. beauty_cart_user@email.com).
• No Unnecessary Tracking Cookies: We do not sell your personal data or track your activity across third-party websites.
• Encryption Standard: All server transmissions are encrypted using 256-bit Transport Layer Security (TLS/SSL).`,
  },
  {
    id: 'sharing',
    icon: Shield,
    title: '4. Third-Party Data Sharing',
    content: `We never sell or rent your personal information to third-party advertisers. We only share necessary data with trusted service partners under strict confidentiality:
• Logistics Partners: Delivery courier services (BlueDart, Delhivery) to fulfill your doorstep package shipments.
• Payment Gateways: Secure PCI-DSS compliant payment gateways for processing credit cards, UPI, and net banking transactions.
• Legal Compliance: When required by law or valid legal requests from Indian authorities.`,
  },
  {
    id: 'rights',
    icon: UserCheck,
    title: '5. Your Rights & Data Control',
    content: `You have full authority over your personal data on Lumière Beauty:
• Access & Update: Modify your profile info, saved addresses, and preferences directly from your Account Dashboard at /profile.
• Data Erasure: Request permanent deletion of your account and order history by contacting our privacy team.
• Opt-Out: Unsubscribe from promotional communications at any time with a single click in any newsletter email.`,
  },
];

export default function Privacy() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Hero Header */}
      <div style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem 3rem',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.06) 0%, rgba(16,185,129,0.06) 100%)',
        border: '1px solid var(--border-color)',
        marginBottom: '3rem',
      }}>
        <span style={{
          fontSize: '0.78rem',
          fontWeight: '800',
          color: '#10b981',
          background: 'rgba(16,185,129,0.1)',
          padding: '0.4rem 1.1rem',
          borderRadius: '50px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '1.25rem',
        }}>
          <Shield size={14} /> 100% Data Transparency
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.15',
          marginBottom: '1rem',
        }}>
          Privacy Policy
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto 1.5rem',
          lineHeight: '1.6',
        }}>
          At Lumière Paris, protecting your privacy and personal data is fundamental to everything we build.
        </p>

        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
          Effective Date: January 1, 2026 • Last Updated: July 2026
        </span>
      </div>

      {/* Main Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }} className="privacy-layout">
        {/* Policy Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {SECTIONS.map((sec) => (
            <div
              key={sec.id}
              id={sec.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--accent-light)',
                  color: '#f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <sec.icon size={20} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  {sec.title}
                </h2>
              </div>

              <div style={{
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                lineHeight: '1.7',
                whiteSpace: 'pre-line',
              }}>
                {sec.content}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar: DPO & Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '90px' }}>
          {/* Privacy Officer Card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '1.75rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Data Protection Officer
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              For data erasure requests, privacy questions, or reporting compliance concerns:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.83rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f43f5e', fontWeight: '600' }}>
                <Mail size={16} /> privacy@lumiere.beauty
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                Attn: Privacy &amp; Legal Compliance Team<br />
                Lumière Beauty Pvt Ltd, Bandra West, Mumbai 400050
              </p>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '1.5rem',
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Related Policies
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <Link to="/terms" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Terms of Service</span>
                <ArrowRight size={14} color="#f43f5e" />
              </Link>
              <Link to="/returns" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Returns &amp; Refund Policy</span>
                <ArrowRight size={14} color="#f43f5e" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .privacy-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
