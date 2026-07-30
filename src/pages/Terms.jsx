import { FileText, ShieldAlert, Scale, CheckCircle2, Mail, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TERMS_SECTIONS = [
  {
    id: 'acceptance',
    icon: Scale,
    title: '1. Acceptance of Terms & Eligibility',
    content: `By accessing, browsing, or making a purchase on the Lumière Beauty e-commerce platform (located at www.lumiere.beauty or local application instances), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
• You must be at least 18 years of age or accessing under the supervision of a parent/legal guardian.
• If you do not agree to these terms, please discontinue using our site and services immediately.`,
  },
  {
    id: 'products',
    icon: FileText,
    title: '2. Products, Formulations & Pricing',
    content: `We strive to display our cosmetic colors, shade representations, and product descriptions as accurately as possible:
• Shade Variations: Due to differences in screen calibration, monitor settings, and natural lighting, actual product colors may vary slightly.
• Pricing: All prices listed on the site are in Indian Rupees (INR ₹) and include applicable taxes (GST) unless stated otherwise.
• Price Adjustments: Lumière reserves the right to modify product prices, promotional discounts, or discontinue items without prior notice.`,
  },
  {
    id: 'orders',
    icon: CheckCircle2,
    title: '3. Orders, Payment & Account Security',
    content: `When you place an order with Lumière Beauty:
• Order Confirmation: Your receipt of an electronic order confirmation does not signify our final acceptance of your order.
• Payment Processing: Payments are processed through secure 256-bit encrypted payment gateways. We do not store raw card numbers.
• Account Integrity: You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your profile.`,
  },
  {
    id: 'intellectual',
    icon: ShieldAlert,
    title: '4. Intellectual Property & Brand Rights',
    content: `All content included on this platform—such as trademarks, logos, high-resolution product imagery, custom SVG graphics, UI designs, code, and text—is the exclusive property of Lumière Beauty Pvt Ltd and protected under international copyright and trademark laws.
• Unauthorized copying, reproduction, re-distribution, or commercial exploitation of any site content is strictly prohibited.`,
  },
  {
    id: 'liability',
    icon: Scale,
    title: '5. Limitation of Liability & Patch Testing',
    content: `Lumière cosmetics and skincare products are formulated to the highest safety and dermatological standards:
• Patch Test Advice: Because individual skin reactions vary, we strongly recommend performing a 24-hour patch test before full application of any active skincare or cosmetic product.
• Liability Cap: To the maximum extent permitted by law, Lumière Beauty shall not be liable for indirect, incidental, or consequential damages resulting from improper product storage, usage, or allergic sensitivity.`,
  },
  {
    id: 'governing',
    icon: FileText,
    title: '6. Governing Law & Jurisdiction',
    content: `These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of India.
• Any legal action, dispute, or claim arising out of your use of our platform shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.`,
  },
];

export default function Terms() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Hero Header */}
      <div style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem 3rem',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(244,63,94,0.06) 0%, rgba(139,92,246,0.06) 100%)',
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
          <Scale size={14} /> Legal Terms &amp; Conditions
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          lineHeight: '1.15',
          marginBottom: '1rem',
        }}>
          Terms of Service
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto 1.5rem',
          lineHeight: '1.6',
        }}>
          Please read these terms carefully before accessing or using our beauty e-commerce platform.
        </p>

        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
          Effective Date: January 1, 2026 • Version 2.4
        </span>
      </div>

      {/* Main Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }} className="terms-layout">
        {/* Clauses List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {TERMS_SECTIONS.map((sec) => (
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

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '90px' }}>
          {/* Legal Help Card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '1.75rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Legal Assistance
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              Have questions regarding our terms, copyright, or merchant policies? Contact our legal counsel:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.83rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f43f5e', fontWeight: '600' }}>
                <Mail size={16} /> legal@lumiere.beauty
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                Lumière Beauty Legal Department<br />
                Bandra West, Mumbai 400050
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '1.5rem',
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Essential Policies
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <Link to="/privacy" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Privacy Policy</span>
                <ArrowRight size={14} color="#f43f5e" />
              </Link>
              <Link to="/returns" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Returns &amp; Refund Policy</span>
                <ArrowRight size={14} color="#f43f5e" />
              </Link>
              <Link to="/faq" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Frequently Asked Questions</span>
                <ArrowRight size={14} color="#f43f5e" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .terms-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
