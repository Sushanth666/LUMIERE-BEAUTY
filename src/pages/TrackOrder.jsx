import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Package, Truck, Compass, CheckCircle2, ChevronRight, Mail, Hash, AlertCircle, Calendar, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrackOrder() {
  const { currentUser } = useAuth();
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  // Built-in demo orders lookup database
  const demoOrders = [
    {
      id: 'ORD-98421',
      email: 'priya@example.com',
      date: 'July 20, 2026',
      total: 3298,
      status: 'Delivered',
      currentStep: 4, // 0 to 4
      carrier: 'Lumière Premium Express (Delhivery)',
      trackingNumber: 'LUM-TRK-88219',
      estimatedDelivery: 'Delivered on July 23, 2026',
      address: '102 Rosewood Heights, Bandra West, Mumbai, Maharashtra 400050',
      items: [
        { name: 'Lumière Radiance Glow Serum', quantity: 1, price: 2499, image: '/assets/images/skincare/serum.png' },
        { name: 'Lumière Velvet Matte Lipstick', quantity: 1, price: 799, image: '/assets/images/makeup/lipstick.png' },
      ],
      timeline: [
        { title: 'Order Confirmed', description: 'Payment authorized & verified', date: 'July 20, 2026 • 10:14 AM', completed: true },
        { title: 'Processing in Lab', description: 'Formulation freshly packed & sealed', date: 'July 21, 2026 • 02:45 PM', completed: true },
        { title: 'Shipped & In Transit', description: 'Dispatched from Mumbai Logistics Hub', date: 'July 22, 2026 • 09:00 AM', completed: true },
        { title: 'Out for Delivery', description: 'Courier partner assigned for local delivery', date: 'July 23, 2026 • 11:30 AM', completed: true },
        { title: 'Delivered', description: 'Handed over directly to customer', date: 'July 23, 2026 • 03:22 PM', completed: true },
      ],
    },
    {
      id: 'ORD-97104',
      email: 'priya@example.com',
      date: 'June 15, 2026',
      total: 1899,
      status: 'Delivered',
      currentStep: 4,
      carrier: 'Lumière Premium Express (Delhivery)',
      trackingNumber: 'LUM-TRK-77104',
      estimatedDelivery: 'Delivered on June 18, 2026',
      address: '102 Rosewood Heights, Bandra West, Mumbai, Maharashtra 400050',
      items: [
        { name: 'Lumière Midnight Repair Cream', quantity: 1, price: 1899, image: '/assets/images/skincare/night_cream.png' },
      ],
      timeline: [
        { title: 'Order Confirmed', description: 'Payment authorized & verified', date: 'June 15, 2026 • 03:40 PM', completed: true },
        { title: 'Processing in Lab', description: 'Formulation freshly packed & sealed', date: 'June 16, 2026 • 11:15 AM', completed: true },
        { title: 'Shipped & In Transit', description: 'Dispatched from Mumbai Logistics Hub', date: 'June 17, 2026 • 08:30 AM', completed: true },
        { title: 'Out for Delivery', description: 'Courier partner assigned for local delivery', date: 'June 18, 2026 • 10:00 AM', completed: true },
        { title: 'Delivered', description: 'Handed over directly to customer', date: 'June 18, 2026 • 02:15 PM', completed: true },
      ],
    },
    {
      id: 'ORD-12345',
      email: 'guest@example.com',
      date: 'July 26, 2026',
      total: 2499,
      status: 'In Transit',
      currentStep: 2, // Confirmed, Processing, Shipped
      carrier: 'Lumière Standard Express (BlueDart)',
      trackingNumber: 'LUM-TRK-12345',
      estimatedDelivery: 'Estimated by July 29, 2026',
      address: 'Sector 5, Salt Lake, Kolkata, West Bengal 700091',
      items: [
        { name: 'Lumière Radiance Glow Serum', quantity: 1, price: 2499, image: '/assets/images/skincare/serum.png' },
      ],
      timeline: [
        { title: 'Order Confirmed', description: 'Payment authorized & verified', date: 'July 26, 2026 • 09:30 AM', completed: true },
        { title: 'Processing in Lab', description: 'Formulation freshly packed & sealed', date: 'July 26, 2026 • 04:00 PM', completed: true },
        { title: 'Shipped & In Transit', description: 'Dispatched from Mumbai Hub Hub', date: 'July 27, 2026 • 08:00 AM', completed: true },
        { title: 'Out for Delivery', description: 'In transit to Kolkata Delivery Center', date: 'Pending Courier Scan', completed: false },
        { title: 'Delivered', description: 'Pending delivery execution', date: 'Pending Delivery', completed: false },
      ],
    },
  ];

  const handleTrack = (e) => {
    e.preventDefault();
    setError('');
    setSearched(true);

    const lookupId = orderId.trim().toUpperCase();
    const lookupEmail = email.trim().toLowerCase();

    // Check custom user orders first if logged in
    let foundOrder = null;
    if (currentUser) {
      const userMatch = currentUser.orders?.find(o => o.id === lookupId);
      if (userMatch && currentUser.email.toLowerCase() === lookupEmail) {
        // Map simplified user order to details
        foundOrder = demoOrders.find(d => d.id === lookupId) || {
          id: userMatch.id,
          email: currentUser.email,
          date: 'Recently Placed',
          total: userMatch.total,
          status: userMatch.status,
          currentStep: 1,
          carrier: 'Lumière Standard Courier',
          trackingNumber: userMatch.trackingNumber,
          estimatedDelivery: 'Estimated within 3-4 working days',
          address: currentUser.address || 'Saved Address',
          items: userMatch.items.map(it => ({ ...it, image: '/assets/images/skincare/serum.png' })),
          timeline: [
            { title: 'Order Confirmed', description: 'Payment authorized & verified', date: 'Just now', completed: true },
            { title: 'Processing', description: 'Fresh formulations being prepared', date: 'In progress', completed: false },
            { title: 'Shipped', description: 'Handed to courier partner', date: 'Pending', completed: false },
            { title: 'Out for Delivery', description: 'Arrived at local hub', date: 'Pending', completed: false },
            { title: 'Delivered', description: 'Handed to recipient', date: 'Pending', completed: false },
          ],
        };
      }
    }

    // Check demo database next
    if (!foundOrder) {
      foundOrder = demoOrders.find(o => o.id === lookupId && o.email.toLowerCase() === lookupEmail);
    }

    if (foundOrder) {
      setSearchResult(foundOrder);
    } else {
      setSearchResult(null);
      setError('Order not found. Please verify the Order ID and Email Address.');
    }
  };

  const loadDemo = (id) => {
    setOrderId(id);
    setEmail('priya@example.com');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2.5rem auto 5rem', padding: '0 1.5rem' }}>
      
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(244,63,94,0.08)', padding: '4px 12px', borderRadius: '50px', marginBottom: '0.75rem' }}>
          <Truck size={14} color="#f43f5e" />
          <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#f43f5e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ORDER TRACKING CENTER</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '700' }}>
          Track Your <span className="gradient-text">Lumière Order</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '6px', maxWidth: '480px', margin: '6px auto 0' }}>
          Enter your Order ID and registration email to view live processing status and courier tracking info.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Track Form Card */}
        <div style={{
          background: 'var(--bg-card)', borderRadius: '24px', padding: '2rem',
          border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          height: 'fit-content',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem' }}>
            Lookup Order Status
          </h3>

          <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                Order ID
              </label>
              <div style={{ position: 'relative' }}>
                <Hash size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  value={orderId}
                  onChange={e => setOrderId(e.target.value)}
                  placeholder="e.g. ORD-98421"
                  className="input-styled"
                  style={{ paddingLeft: '40px' }}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="priya@example.com"
                  className="input-styled"
                  style={{ paddingLeft: '40px' }}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', marginTop: '0.5rem' }}>
              <Compass size={16} /> Track Order Status
            </button>
          </form>

          {/* Quick Demo Shortcuts */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              💡 Test Tracking Shortcuts:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={() => loadDemo('ORD-98421')} className="btn-ghost" style={{ fontSize: '0.75rem', padding: '6px 12px', justifyContent: 'flex-start', borderStyle: 'dashed' }}>
                📦 ORD-98421 (Priya Sharma - Delivered)
              </button>
              <button onClick={() => loadDemo('ORD-12345')} className="btn-ghost" style={{ fontSize: '0.75rem', padding: '6px 12px', justifyContent: 'flex-start', borderStyle: 'dashed' }}>
                🚚 ORD-12345 (Guest User - In Transit)
              </button>
            </div>
          </div>
        </div>

        {/* Tracking Results Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Default view prior to searching */}
          {!searched && (
            <div style={{
              background: 'var(--bg-card)', borderRadius: '24px', padding: '3rem 2rem',
              border: '1px stroke var(--border-color)', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%',
            }}>
              <span style={{ fontSize: '3rem' }}>🔍</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginTop: '1rem', marginBottom: '0.5rem' }}>
                Waiting for Search
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', maxWidth: '300px' }}>
                Enter your order credentials to look up shipment details and live carrier updates.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '16px',
              padding: '1.25rem', display: 'flex', gap: '10px', color: '#991b1b', fontSize: '0.88rem',
            }}>
              <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '2px' }}>Lookup Failed</strong>
                {error}
              </div>
            </div>
          )}

          {/* Search Result Dashboard */}
          {searched && searchResult && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Status Header Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #1a0a0f 0%, #16162a 100%)',
                color: 'white', padding: '1.5rem', borderRadius: '20px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>ORDER STATUS</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px', color: '#ffe599' }}>{searchResult.status}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>ESTIMATED ARRIVAL</span>
                    <p style={{ fontSize: '0.88rem', fontWeight: '700', marginTop: '2px' }}>{searchResult.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Progress Timeline Tracker */}
              <div style={{
                background: 'var(--bg-card)', borderRadius: '24px', padding: '2rem',
                border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
              }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Compass size={18} color="#f43f5e" /> Shipment Journey
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                  {/* Vertical bar line */}
                  <div style={{
                    position: 'absolute', top: '10px', left: '11px', bottom: '10px',
                    width: '3px', background: 'var(--border-color)', zIndex: 1,
                  }} />

                  {searchResult.timeline.map((step, index) => {
                    const isActive = index <= searchResult.currentStep;
                    return (
                      <div key={index} style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 2 }}>
                        <div style={{
                          width: '25px', height: '25px', borderRadius: '50%',
                          background: isActive ? '#f43f5e' : 'var(--bg-card)',
                          border: `3.5px solid ${isActive ? '#fecdd3' : 'var(--border-color)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: isActive ? '0 0 10px rgba(244,63,94,0.3)' : 'none',
                          flexShrink: 0,
                        }}>
                          {isActive && <CheckCircle2 size={10} color="white" />}
                        </div>
                        <div>
                          <h5 style={{ fontWeight: '700', fontSize: '0.88rem', color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                            {step.title}
                          </h5>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{step.description}</p>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>{step.date}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Specs & Package Details */}
              <div style={{
                background: 'var(--bg-primary)', borderRadius: '24px', padding: '1.5rem',
                border: '1px solid var(--border-color)',
              }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Package size={16} color="#f43f5e" /> Package Contents
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.25rem' }}>
                  {searchResult.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: '700', display: 'block' }}>{item.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Qty: {item.quantity} • ₹{item.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div>
                    <strong>Shipping Address:</strong>
                    <p style={{ marginTop: '2px', lineHeight: '1.4', fontSize: '0.78rem' }}>{searchResult.address}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '8px', marginTop: '4px', fontWeight: '700' }}>
                    <span>Amount Paid:</span>
                    <span style={{ color: '#f43f5e' }}>₹{searchResult.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
