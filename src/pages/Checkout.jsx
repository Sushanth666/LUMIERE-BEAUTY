import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, CreditCard, Smartphone, Building2, Truck, MapPin, User, Mail, Phone, ChevronRight, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const STEPS = ['Information', 'Delivery', 'Payment', 'Confirmation'];

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '',
  address: '', city: '', state: '', pincode: '',
  deliveryOption: 'standard',
  paymentMethod: 'card',
  cardNumber: '', cardExpiry: '', cardCVV: '', cardName: '',
  upiId: '',
};

export default function Checkout() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId] = useState(() => 'LUM' + Math.random().toString(36).substr(2, 8).toUpperCase());
  const { items, subtotal, total, discount, shippingCost, clearCart, coupon } = useCart();
  const navigate = useNavigate();

  const update = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: '' }));
  };

  const validate = (step) => {
    const errs = {};
    if (step === 0) {
      if (!form.firstName.trim()) errs.firstName = 'Required';
      if (!form.lastName.trim()) errs.lastName = 'Required';
      if (!form.email.includes('@')) errs.email = 'Valid email required';
      if (form.phone.length < 10) errs.phone = 'Valid phone required';
      if (!form.address.trim()) errs.address = 'Required';
      if (!form.city.trim()) errs.city = 'Required';
      if (!form.state.trim()) errs.state = 'Required';
      if (form.pincode.length < 6) errs.pincode = 'Valid pincode required';
    }
    if (step === 2) {
      if (form.paymentMethod === 'card') {
        if (form.cardNumber.replace(/\s/g, '').length < 16) errs.cardNumber = 'Valid card number required';
        if (!form.cardExpiry.includes('/')) errs.cardExpiry = 'MM/YY format required';
        if (form.cardCVV.length < 3) errs.cardCVV = 'Valid CVV required';
        if (!form.cardName.trim()) errs.cardName = 'Required';
      }
      if (form.paymentMethod === 'upi' && form.upiId.length < 5) errs.upiId = 'Valid UPI ID required';
    }
    return errs;
  };

  const next = () => {
    const errs = validate(step);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (step === 2) {
      setOrderPlaced(true);
      clearCart();
    } else {
      setStep(s => s + 1);
    }
  };

  const inputStyle = (key) => ({
    ...{},
    border: `1.5px solid ${errors[key] ? '#ef4444' : 'var(--border-color)'}`,
    borderRadius: '12px', padding: '0.75rem 1rem',
    color: 'var(--text-primary)', background: 'var(--bg-card)',
    fontSize: '0.9rem', width: '100%', outline: 'none', transition: 'all 0.3s',
    fontFamily: 'var(--font-body)',
  });

  const handleInputFocus = (e) => { e.target.style.borderColor = '#f43f5e'; e.target.style.boxShadow = '0 0 0 3px rgba(244,63,94,0.1)'; };
  const handleInputBlur = (e, key) => { e.target.style.borderColor = errors[key] ? '#ef4444' : 'var(--border-color)'; e.target.style.boxShadow = 'none'; };

  if (orderPlaced) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 2rem', boxShadow: '0 0 40px rgba(16,185,129,0.3)',
            animation: 'bounce-subtle 2s ease-in-out infinite',
          }}>
            <Check size={44} color="white" strokeWidth={3} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Order Confirmed! 🎉
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Thank you, {form.firstName}! Your order has been placed.
          </p>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1rem', margin: '1.5rem 0', border: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Order ID</p>
            <p style={{ fontWeight: '800', fontSize: '1.2rem', color: '#f43f5e', letterSpacing: '0.05em' }}>{orderId}</p>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            A confirmation email has been sent to <strong>{form.email}</strong>.<br />
            Expected delivery: 5–7 business days.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Continue Shopping</Link>
            <Link to="/products" className="btn-ghost" style={{ textDecoration: 'none' }}>Explore More</Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Your cart is empty</p>
        <Link to="/products" className="btn-primary" style={{ textDecoration: 'none' }}>Start Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2rem' }}>
        Checkout
      </h1>

      {/* Step Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', overflowX: 'auto', padding: '0.5rem 0' }} className="no-scrollbar">
        {STEPS.map((s, i) => (
          <>
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              <div className={`step-circle ${i < step ? 'completed' : i === step ? 'active' : 'pending'}`}>
                {i < step ? <Check size={16} /> : <span>{i + 1}</span>}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '500', color: i <= step ? 'var(--text-primary)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>{s}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div key={`line-${i}`} className={`step-line ${i < step ? 'completed' : ''}`} style={{ flex: 1, margin: '0 8px', marginBottom: '20px' }} />
            )}
          </>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }} className="checkout-layout">
        {/* ===== LEFT: Form ===== */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem' }}>

          {/* STEP 0: Information */}
          {step === 0 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={18} color="#f43f5e" /> Customer Information
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>First Name *</label>
                  <input style={inputStyle('firstName')} value={form.firstName} onChange={e => update('firstName', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'firstName')} placeholder="Priya" />
                  {errors.firstName && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.firstName}</p>}
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Last Name *</label>
                  <input style={inputStyle('lastName')} value={form.lastName} onChange={e => update('lastName', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'lastName')} placeholder="Sharma" />
                  {errors.lastName && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.lastName}</p>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}><Mail size={12} style={{ display: 'inline', marginRight: '4px' }} />Email *</label>
                  <input type="email" style={inputStyle('email')} value={form.email} onChange={e => update('email', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'email')} placeholder="priya@example.com" />
                  {errors.email && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email}</p>}
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}><Phone size={12} style={{ display: 'inline', marginRight: '4px' }} />Phone *</label>
                  <input type="tel" style={inputStyle('phone')} value={form.phone} onChange={e => update('phone', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'phone')} placeholder="+91 98765 43210" />
                  {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.phone}</p>}
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', margin: '1.5rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#f43f5e" /> Delivery Address
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Street Address *</label>
                <input style={inputStyle('address')} value={form.address} onChange={e => update('address', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'address')} placeholder="123, MG Road, Apartment 4B" />
                {errors.address && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.address}</p>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>City *</label>
                  <input style={inputStyle('city')} value={form.city} onChange={e => update('city', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'city')} placeholder="Mumbai" />
                  {errors.city && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.city}</p>}
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>State *</label>
                  <input style={inputStyle('state')} value={form.state} onChange={e => update('state', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'state')} placeholder="Maharashtra" />
                  {errors.state && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.state}</p>}
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Pincode *</label>
                  <input style={inputStyle('pincode')} value={form.pincode} onChange={e => update('pincode', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'pincode')} placeholder="400001" maxLength={6} />
                  {errors.pincode && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.pincode}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: Delivery */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={18} color="#f43f5e" /> Delivery Options
              </h2>
              {[
                { id: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'FREE (orders ₹999+)' },
                { id: 'express', label: 'Express Delivery', desc: '2-3 business days', price: '₹199' },
                { id: 'overnight', label: 'Overnight Delivery', desc: '1 business day', price: '₹399' },
              ].map(opt => (
                <label key={opt.id} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                  padding: '1.25rem', border: `2px solid ${form.deliveryOption === opt.id ? '#f43f5e' : 'var(--border-color)'}`,
                  borderRadius: '16px', marginBottom: '0.75rem', transition: 'all 0.2s',
                  background: form.deliveryOption === opt.id ? 'var(--accent-light)' : 'transparent',
                }}>
                  <input type="radio" name="delivery" value={opt.id} checked={form.deliveryOption === opt.id}
                    onChange={() => update('deliveryOption', opt.id)} style={{ accentColor: '#f43f5e', width: '18px', height: '18px' }} />
                  <Truck size={20} color={form.deliveryOption === opt.id ? '#f43f5e' : 'var(--text-muted)'} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>{opt.label}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{opt.desc}</p>
                  </div>
                  <span style={{ fontWeight: '700', color: form.deliveryOption === opt.id ? '#f43f5e' : 'var(--text-primary)', fontSize: '0.9rem' }}>
                    {opt.price}
                  </span>
                </label>
              ))}
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '6px' }}>Delivering to:</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {form.firstName} {form.lastName}<br />
                  {form.address}, {form.city}, {form.state} - {form.pincode}
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Payment */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={18} color="#f43f5e" /> Secure Payment
              </h2>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'card', label: 'Credit/Debit Card', icon: <CreditCard size={18} /> },
                  { id: 'upi', label: 'UPI', icon: <Smartphone size={18} /> },
                  { id: 'cod', label: 'Cash on Delivery', icon: <Building2 size={18} /> },
                ].map(method => (
                  <button key={method.id} onClick={() => update('paymentMethod', method.id)} style={{
                    flex: 1, minWidth: '120px', padding: '1rem', borderRadius: '14px',
                    border: `2px solid ${form.paymentMethod === method.id ? '#f43f5e' : 'var(--border-color)'}`,
                    background: form.paymentMethod === method.id ? 'var(--accent-light)' : 'var(--bg-card)',
                    cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                    transition: 'all 0.2s', color: form.paymentMethod === method.id ? '#f43f5e' : 'var(--text-secondary)',
                  }}>
                    {method.icon}
                    <span style={{ fontSize: '0.78rem', fontWeight: '600' }}>{method.label}</span>
                  </button>
                ))}
              </div>

              {form.paymentMethod === 'card' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Card Number *</label>
                    <input style={inputStyle('cardNumber')} value={form.cardNumber} onChange={e => update('cardNumber', e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim())} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'cardNumber')} placeholder="1234 5678 9012 3456" maxLength={19} />
                    {errors.cardNumber && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.cardNumber}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Cardholder Name *</label>
                    <input style={inputStyle('cardName')} value={form.cardName} onChange={e => update('cardName', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'cardName')} placeholder="PRIYA SHARMA" />
                    {errors.cardName && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.cardName}</p>}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Expiry *</label>
                      <input style={inputStyle('cardExpiry')} value={form.cardExpiry} onChange={e => update('cardExpiry', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'cardExpiry')} placeholder="MM/YY" maxLength={5} />
                      {errors.cardExpiry && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.cardExpiry}</p>}
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>CVV *</label>
                      <input type="password" style={inputStyle('cardCVV')} value={form.cardCVV} onChange={e => update('cardCVV', e.target.value.replace(/\D/g, ''))} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'cardCVV')} placeholder="•••" maxLength={4} />
                      {errors.cardCVV && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.cardCVV}</p>}
                    </div>
                  </div>
                </div>
              )}

              {form.paymentMethod === 'upi' && (
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>UPI ID *</label>
                  <input style={inputStyle('upiId')} value={form.upiId} onChange={e => update('upiId', e.target.value)} onFocus={handleInputFocus} onBlur={e => handleInputBlur(e, 'upiId')} placeholder="priya@paytm" />
                  {errors.upiId && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.upiId}</p>}
                </div>
              )}

              {form.paymentMethod === 'cod' && (
                <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '14px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💵</p>
                  <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Cash on Delivery Selected</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Pay ₹{total.toLocaleString('en-IN')} when your order arrives.</p>
                  <p style={{ fontSize: '0.8rem', color: '#f59e0b', marginTop: '8px' }}>⚠️ COD orders may take 1-2 extra days for processing</p>
                </div>
              )}

              {/* Security note */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1.5rem', padding: '0.75rem 1rem', background: '#dcfce7', borderRadius: '12px' }}>
                <Lock size={14} color="#16a34a" />
                <p style={{ fontSize: '0.78rem', color: '#16a34a', fontWeight: '500' }}>
                  Your payment information is encrypted and secure. We never store card details.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'space-between' }}>
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-ghost">
                ← Back
              </button>
            )}
            <button onClick={next} className="btn-primary" style={{ marginLeft: 'auto' }}>
              {step === 2 ? '🎉 Place Order' : `Next: ${STEPS[step + 1]} →`}
            </button>
          </div>
        </div>

        {/* ===== RIGHT: Order Summary ===== */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '1.5rem', height: 'fit-content', position: 'sticky', top: '90px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Order Summary
          </h3>
          <div style={{ maxHeight: '280px', overflowY: 'auto', marginBottom: '1rem' }} className="no-scrollbar">
            {items.map(item => (
              <div key={`${item.id}-${item.shade?.name}`} style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <img src={item.images[0]} alt={item.name} style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '10px' }} />
                  <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#f43f5e', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '0.65rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.quantity}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: '600', fontSize: '0.8rem', color: 'var(--text-primary)', lineHeight: '1.3' }} className="line-clamp-2">{item.name}</p>
                  {item.shade && <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{item.shade.name}</p>}
                </div>
                <p style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', flexShrink: 0 }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Subtotal</span>
              <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.85rem' }}>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#10b981', fontSize: '0.85rem' }}>Discount</span>
                <span style={{ fontWeight: '600', color: '#10b981', fontSize: '0.85rem' }}>-₹{discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Shipping</span>
              <span style={{ fontWeight: '600', color: shippingCost === 0 ? '#10b981' : 'var(--text-primary)', fontSize: '0.85rem' }}>
                {shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '4px' }}>
              <span style={{ fontWeight: '800', color: 'var(--text-primary)' }}>Total</span>
              <span style={{ fontWeight: '800', color: '#f43f5e', fontSize: '1.1rem' }}>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .checkout-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
