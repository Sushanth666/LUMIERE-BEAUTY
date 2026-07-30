import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Package, MapPin, LogOut, Award, Shield, Check, Edit2, ChevronRight, Sparkles, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { getAvatarGradient } from '../utils/avatar';

export default function Profile() {
  const { currentUser, logout, updateProfile, openAuthModal } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'orders' | 'address'
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    address: currentUser?.address || '',
    skinType: currentUser?.skinType || 'Combination & Sensitive',
    preferredCategory: currentUser?.preferredCategory || 'Skincare & Fragrances',
    birthday: currentUser?.birthday || 'October 14',
  });

  const handleConfirmLogout = () => {
    const firstName = currentUser?.name?.split(' ')[0] || 'Beauty Lover';
    logout();
    setShowLogoutModal(false);
    navigate('/goodbye', { state: { name: firstName } });
  };

  if (!currentUser) {
    return (
      <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <div style={{ background: 'var(--bg-card)', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
          <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>👤</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Account Sign In Required
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Please sign in or register to view your Lumière order history, saved addresses, and VIP membership perks.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={() => openAuthModal('login')} className="btn-primary">
              Sign In to Account
            </button>
            <button onClick={() => openAuthModal('signup')} className="btn-secondary">
              Register New Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0.5rem auto 4rem', padding: '0 1rem' }} className="profile-page">
      {/* Header Profile Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0a0f 0%, #2b1220 50%, #16162a 100%)',
        borderRadius: '28px', padding: '2.5rem', color: 'white',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)', marginBottom: '2rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,63,94,0.2), transparent)', pointerEvents: 'none' }} />
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: getAvatarGradient(currentUser.name),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', fontWeight: '800', color: 'white',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              border: '2px solid rgba(255,255,255,0.3)',
            }}>
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-bestseller" style={{ fontSize: '0.7rem' }}>
                  👑 {currentUser.vipTier || 'Lumière Gold VIP Member'}
                </span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '700', marginTop: '4px' }}>
                {currentUser.name}
              </h1>
              <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>{currentUser.email} • Member since {currentUser.joinedDate}</p>
            </div>
          </div>

          <button
            onClick={() => setShowLogoutModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.65rem 1.4rem',
              borderRadius: '50px',
              background: 'rgba(244, 63, 94, 0.15)',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              color: '#fda4af',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #f43f5e, #e11d48)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(244, 63, 94, 0.45)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(244, 63, 94, 0.15)';
              e.currentTarget.style.color = '#fda4af';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="profile-layout">
        {/* Sidebar Nav */}
        <div className="profile-sidebar">
          {[
            { id: 'profile', label: 'Personal Information', icon: User },
            { id: 'orders', label: 'Order History', icon: Package, count: currentUser.orders?.length || 0 },
            { id: 'address', label: 'Saved Shipping Address', icon: MapPin },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.85rem 1.25rem', borderRadius: '14px', border: 'none',
                  background: isActive ? 'linear-gradient(135deg, #f43f5e, #e11d48)' : 'var(--bg-card)',
                  color: isActive ? 'white' : 'var(--text-primary)',
                  fontWeight: isActive ? '700' : '500', fontSize: '0.9rem',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 6px 20px rgba(244,63,94,0.3)' : '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span style={{
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--bg-primary)',
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    borderRadius: '50px', padding: '2px 8px', fontSize: '0.75rem', fontWeight: '700',
                  }}>{tab.count}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div style={{ background: 'var(--bg-card)', borderRadius: '24px', padding: '2rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Package size={20} color="#f43f5e" /> My Orders ({currentUser.orders?.length || 0})
              </h2>

              {!currentUser.orders || currentUser.orders.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🛍️</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700' }}>No Orders Placed Yet</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Your recent Lumière purchases will appear here.</p>
                  <Link to="/products" className="btn-primary" style={{ textDecoration: 'none' }}>Shop Lumière Now</Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {currentUser.orders.map(order => (
                    <div key={order.id} style={{
                      border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.25rem',
                      background: 'var(--bg-primary)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Order {order.id}</span>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Placed on {order.date} • Tracking: {order.trackingNumber}</p>
                        </div>
                        <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: '50px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: '700' }}>
                          ✓ {order.status}
                        </span>
                      </div>

                      <div style={{ borderTop: '1px stroke var(--border-color)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
                        {order.items.map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', padding: '4px 0' }}>
                            <span>{item.quantity}x {item.name}</span>
                            <span style={{ fontWeight: '600' }}>₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontWeight: '700', fontSize: '0.95rem' }}>
                        <span>Total Paid:</span>
                        <span style={{ color: '#f43f5e' }}>₹{order.total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PROFILE INFO TAB */}
          {activeTab === 'profile' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={20} color="#f43f5e" /> Personal Information
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '50px',
                      background: 'rgba(244, 63, 94, 0.08)',
                      border: '1px solid rgba(244, 63, 94, 0.3)',
                      color: '#f43f5e',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 10px rgba(244, 63, 94, 0.1)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f43f5e, #e11d48)';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 63, 94, 0.35)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(244, 63, 94, 0.08)';
                      e.currentTarget.style.color = '#f43f5e';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(244, 63, 94, 0.1)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <Edit2 size={14} />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              {isEditing ? (
                <div style={{
                  background: 'var(--bg-primary)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                    <Sparkles size={16} color="#f43f5e" />
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f43f5e' }}>
                      Update Beauty Profile &amp; Preferences
                    </span>
                  </div>

                  <form onSubmit={handleSaveProfile} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-primary)' }}>
                        <User size={14} color="#f43f5e" /> Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="input-styled"
                        style={{ width: '100%', borderRadius: '12px', padding: '0.75rem 1rem' }}
                        required
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-primary)' }}>
                        <Phone size={14} color="#f43f5e" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="input-styled"
                        style={{ width: '100%', borderRadius: '12px', padding: '0.75rem 1rem' }}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-primary)' }}>
                        <Sparkles size={14} color="#ec4899" /> Skin Profile &amp; Type
                      </label>
                      <select
                        value={formData.skinType}
                        onChange={e => setFormData({ ...formData, skinType: e.target.value })}
                        className="input-styled"
                        style={{ width: '100%', borderRadius: '12px', padding: '0.75rem 1rem' }}
                      >
                        <option value="Combination & Sensitive">Combination & Sensitive</option>
                        <option value="Dry & Dehydrated">Dry & Dehydrated</option>
                        <option value="Oily & Acne-Prone">Oily & Acne-Prone</option>
                        <option value="Normal & Balanced">Normal & Balanced</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-primary)' }}>
                        <Award size={14} color="#8b5cf6" /> Favorite Category
                      </label>
                      <select
                        value={formData.preferredCategory}
                        onChange={e => setFormData({ ...formData, preferredCategory: e.target.value })}
                        className="input-styled"
                        style={{ width: '100%', borderRadius: '12px', padding: '0.75rem 1rem' }}
                      >
                        <option value="Skincare & Fragrances">Skincare & Fragrances</option>
                        <option value="Makeup & Cosmetics">Makeup & Cosmetics</option>
                        <option value="Haircare & Styling">Haircare & Styling</option>
                        <option value="Body Care & Spa">Body Care & Spa</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-primary)' }}>
                        🎂 Birthday Date
                      </label>
                      <input
                        type="text"
                        value={formData.birthday}
                        onChange={e => setFormData({ ...formData, birthday: e.target.value })}
                        className="input-styled"
                        style={{ width: '100%', borderRadius: '12px', padding: '0.75rem 1rem' }}
                        placeholder="e.g. October 14"
                      />
                    </div>

                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-primary)' }}>
                        <MapPin size={14} color="#f43f5e" /> Delivery Address
                      </label>
                      <textarea
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                        className="input-styled"
                        rows={2}
                        style={{ width: '100%', borderRadius: '12px', padding: '0.75rem 1rem' }}
                        placeholder="Enter street, city, state & postal code"
                      />
                    </div>

                    <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '1rem', marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                      <button
                        type="submit"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '8px',
                          padding: '0.7rem 1.6rem', borderRadius: '50px',
                          background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
                          color: '#ffffff', border: 'none', fontWeight: '700',
                          fontSize: '0.88rem', cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(244, 63, 94, 0.35)',
                          transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 63, 94, 0.45)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(244, 63, 94, 0.35)'; }}
                      >
                        <Check size={16} /> Save Changes
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '8px',
                          padding: '0.7rem 1.4rem', borderRadius: '50px',
                          background: 'transparent', color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)', fontWeight: '600',
                          fontSize: '0.88rem', cursor: 'pointer',
                          transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#f43f5e'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', fontSize: '0.9rem' }}>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Full Name</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', marginTop: '4px', color: 'var(--text-primary)' }}>{currentUser.name}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Email Address</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', marginTop: '4px', color: 'var(--text-primary)', wordBreak: 'break-all' }}>{currentUser.email}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Phone Number</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', marginTop: '4px', color: 'var(--text-primary)' }}>{currentUser.phone || 'Not provided'}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>VIP Tier</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', color: '#f59e0b', marginTop: '4px' }}>👑 {currentUser.vipTier || 'Lumière Beauty Member'}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Skin Profile &amp; Type</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', color: '#ec4899', marginTop: '4px' }}>🧴 {currentUser.skinType || 'Combination & Sensitive'}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Beauty Reward Balance</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', color: '#10b981', marginTop: '4px' }}>💎 1,450 Points (₹145 Cash)</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Favorite Category</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', color: '#8b5cf6', marginTop: '4px' }}>✨ {currentUser.preferredCategory || 'Skincare & Fragrances'}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Birthday Perks</span>
                    <p style={{ fontWeight: '700', fontSize: '1.05rem', color: '#f43f5e', marginTop: '4px' }}>🎂 {currentUser.birthday || 'October 14'} (15% Off Active)</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ADDRESS TAB */}
          {activeTab === 'address' && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} color="#f43f5e" /> Saved Shipping Address
              </h2>

              <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
                {currentUser.address ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                      <span className="badge badge-new" style={{ fontSize: '0.7rem' }}>PRIMARY ADDRESS</span>
                    </div>
                    <p style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>{currentUser.name}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{currentUser.address}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>Phone: {currentUser.phone}</p>
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-secondary)' }}>No shipping address saved yet. Click "Edit Profile" to add your delivery address.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      {showLogoutModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem',
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '2rem',
            maxWidth: '440px',
            width: '100%',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'rgba(244, 63, 94, 0.12)',
              color: '#f43f5e',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}>
              <LogOut size={28} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Sign Out of Lumière?
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              Are you sure you want to log out of your account? You will be redirected to the sign in page.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                style={{
                  flex: 1, padding: '0.75rem 1.25rem', borderRadius: '50px',
                  border: '1px solid var(--border-color)', background: 'transparent',
                  color: 'var(--text-primary)', fontWeight: '600', cursor: 'pointer',
                  fontSize: '0.9rem', transition: 'all 0.2s ease',
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmLogout}
                style={{
                  flex: 1, padding: '0.75rem 1.25rem', borderRadius: '50px',
                  border: 'none', background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
                  color: '#ffffff', fontWeight: '700', cursor: 'pointer',
                  fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(244, 63, 94, 0.35)',
                  transition: 'all 0.2s ease',
                }}
              >
                Yes, Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
