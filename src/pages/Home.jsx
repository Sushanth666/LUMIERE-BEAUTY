import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Sparkles, Shield, Truck, RotateCcw, Award } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import CountdownTimer from '../components/ui/CountdownTimer';
import { categories, getFeaturedProducts, getTrendingProducts, getNewArrivals, getBestSellers, reviews } from '../data/products';

const heroSlides = [
  {
    title: 'Radiance\nRedefined',
    subtitle: 'Discover skincare that works with your skin, not against it.',
    cta: 'Shop Skincare',
    ctaPath: '/products/skincare',
    badge: '✨ New Season Collection',
    accent: 'Your skin deserves the best',
    gradient: 'linear-gradient(135deg, #fdf2f4 0%, #fff1f2 50%, #fdf9f5 100%)',
    darkGradient: 'linear-gradient(135deg, #1a0a0f 0%, #1e0d18 50%, #0d0d1a 100%)',
    image: '/assets/images/skincare/serum.png',
    tag: 'Skincare',
  },
  {
    title: 'Bold &\nBeautiful',
    subtitle: 'Express yourself with our vibrant makeup collection.',
    cta: 'Shop Makeup',
    ctaPath: '/products/makeup',
    badge: '💄 Limited Edition Drops',
    accent: 'Beauty has no rules',
    gradient: 'linear-gradient(135deg, #fef9ee 0%, #fef3f2 50%, #fff1f2 100%)',
    darkGradient: 'linear-gradient(135deg, #1a0f0a 0%, #1e0d0d 50%, #1a0a0f 100%)',
    image: '/assets/images/makeup/lipstick.png',
    tag: 'Makeup',
  },
  {
    title: 'Scent of\nLuxury',
    subtitle: 'Premium fragrances that leave a lasting impression.',
    cta: 'Explore Fragrances',
    ctaPath: '/products/fragrance',
    badge: '🌸 Bestselling Fragrances',
    accent: 'Make every moment unforgettable',
    gradient: 'linear-gradient(135deg, #f5f0ff 0%, #fef3f2 50%, #fdf9f5 100%)',
    darkGradient: 'linear-gradient(135deg, #0f0a1a 0%, #1a0d18 50%, #0d0d1a 100%)',
    image: '/assets/images/fragrance/rose_oud.png',
    tag: 'Fragrance',
  },
];

const features = [
  { icon: <Truck size={22} />, title: 'Free Shipping', desc: 'On orders above ₹999' },
  { icon: <Shield size={22} />, title: '100% Authentic', desc: 'All products guaranteed genuine' },
  { icon: <RotateCcw size={22} />, title: 'Easy Returns', desc: '30-day hassle-free returns' },
  { icon: <Award size={22} />, title: 'Expert Picks', desc: 'Curated by beauty professionals' },
];

const offerEndDate = new Date(Date.now() + 2 * 60 * 60 * 1000 + 34 * 60 * 1000);

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const slide = heroSlides[heroIndex];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={{
        minHeight: 'calc(100vh - 70px)',
        background: 'var(--hero-gradient, var(--bg-primary))',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.5s ease',
      }}
        className="hero-gradient"
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-50px', left: '-50px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,123,158,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem', width: '100%' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '3rem', alignItems: 'center', minHeight: '500px',
          }} className="hero-grid">
            {/* Left content */}
            <div style={{ animation: 'fadeInUp 0.7s ease' }} key={heroIndex}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(244,63,94,0.1), rgba(156,123,158,0.1))',
                border: '1px solid rgba(244,63,94,0.2)',
                borderRadius: '50px', padding: '6px 18px',
                fontSize: '0.8rem', fontWeight: '600', color: '#f43f5e',
                marginBottom: '1.5rem', letterSpacing: '0.02em',
              }}>
                {slide.badge}
              </span>

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: '700', lineHeight: '1.1',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                whiteSpace: 'pre-line',
              }}>
                {slide.title.split('\n')[0]}<br />
                <span className="gradient-text">{slide.title.split('\n')[1]}</span>
              </h1>

              <p style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.1rem', color: 'var(--text-secondary)',
                lineHeight: '1.7', marginBottom: '0.75rem',
              }}>
                {slide.subtitle}
              </p>

              <p style={{
                fontSize: '0.85rem', color: 'var(--text-muted)',
                fontStyle: 'italic', marginBottom: '2rem',
              }}>
                — {slide.accent}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to={slide.ctaPath} className="btn-primary animate-pulse-glow" style={{ textDecoration: 'none', fontSize: '0.95rem' }}>
                  {slide.cta} <ArrowRight size={16} />
                </Link>
                <Link to="/quiz" className="btn-secondary" style={{ textDecoration: 'none' }}>
                  Take Beauty Quiz
                </Link>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { value: '400+', label: 'Products' },
                  { value: '50K+', label: 'Happy Customers' },
                  { value: '4.9★', label: 'Average Rating' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: '#f43f5e' }}>{stat.value}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', animation: 'fadeIn 0.7s ease' }} key={`img-${heroIndex}`}>
              <div style={{
                width: '420px', height: '520px', borderRadius: '30px',
                overflow: 'hidden', boxShadow: '0 30px 80px rgba(244,63,94,0.2)',
                position: 'relative',
              }} className="hero-image-wrap animate-float">
                <img src={slide.image} alt={slide.tag}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: '24px', left: '24px',
                  background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
                  borderRadius: '16px', padding: '12px 16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>Bestseller</p>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{slide.tag} Collection</p>
                  <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="#fbbf24" color="#fbbf24" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '2rem' }}>
            <button onClick={() => setHeroIndex(i => (i - 1 + heroSlides.length) % heroSlides.length)}
              style={{ background: 'none', border: '1px solid var(--border-color)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={16} />
            </button>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setHeroIndex(i)}
                className={`slider-dot ${i === heroIndex ? 'active' : ''}`}
                style={{ border: 'none', cursor: 'pointer', padding: 0 }} />
            ))}
            <button onClick={() => setHeroIndex(i => (i + 1) % heroSlides.length)}
              style={{ background: 'none', border: '1px solid var(--border-color)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURES BAR ===== */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {features.map(f => (
            <div key={f.title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0.5rem' }}>
              <div style={{ color: '#f43f5e', flexShrink: 0 }}>{f.icon}</div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{f.title}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section id="categories" ref={setRef('categories')} style={{
        maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem',
        opacity: isVisible.categories ? 1 : 0,
        transform: isVisible.categories ? 'none' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#f43f5e', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            Browse By Category
          </span>
          <h2 className="section-title">Shop Our <span className="gradient-text">Collections</span></h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Find exactly what you're looking for across our curated beauty categories
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.25rem' }}>
          {categories.map((cat, i) => (
            <Link key={cat.id} to={`/products/${cat.id}`} style={{ textDecoration: 'none' }}>
              <div className="category-card hover-lift" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                padding: '1.75rem 1rem',
                textAlign: 'center',
                animationDelay: `${i * 0.1}s`,
              }}>
                <div style={{
                  position: 'relative', width: '64px', height: '64px', borderRadius: '50%',
                  background: `${cat.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem', fontSize: '1.8rem',
                  border: `2px solid ${cat.color}40`,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    cat.icon
                  )}
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{cat.name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{cat.count} items</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section id="featured" ref={setRef('featured')} style={{
        background: 'var(--bg-secondary)', padding: '5rem 0',
        opacity: isVisible.featured ? 1 : 0,
        transform: isVisible.featured ? 'none' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#f43f5e', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                Handpicked For You
              </span>
              <h2 className="section-title">Featured <span className="gradient-text">Products</span></h2>
            </div>
            <Link to="/products" className="btn-secondary" style={{ textDecoration: 'none' }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="products-grid">
            {getFeaturedProducts().slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} showCompare />
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIMITED OFFER BANNER ===== */}
      <section style={{
        background: 'linear-gradient(135deg, #e11d48, #9c7b9e, #6b21a8)',
        padding: '3rem 1.5rem', position: 'relative', overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-30px', right: '10%', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <span style={{ background: '#fbbf24', color: '#1a1a2e', borderRadius: '50px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ⚡ Flash Sale
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '0.5rem' }}>
              Up to 40% OFF — Today Only!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
              Exclusive deals on bestsellers. Offer ends in:
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
            <CountdownTimer targetDate={offerEndDate} />
            <Link to="/products" className="btn-primary" style={{
              textDecoration: 'none',
              background: 'white', color: '#e11d48',
              boxShadow: '0 4px 20px rgba(255,255,255,0.3)',
            }}>
              Shop the Sale <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRENDING ===== */}
      <section id="trending" ref={setRef('trending')} style={{
        maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem',
        opacity: isVisible.trending ? 1 : 0,
        transform: isVisible.trending ? 'none' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#8b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              🔥 What's Hot
            </span>
            <h2 className="section-title">Trending <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Now</span></h2>
          </div>
          <Link to="/products?sort=trending" className="btn-ghost" style={{ textDecoration: 'none' }}>
            See All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="products-grid">
          {getTrendingProducts().slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ===== PROMO BANNERS ===== */}
      <section style={{ background: 'var(--bg-secondary)', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              title: 'Skincare Routine\nStarter Kit', label: 'New Launch', color: '#f43f5e',
              bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)', path: '/products/skincare',
              img: '/assets/images/skincare/toner.png',
            },
            {
              title: 'Summer Glow\nMakeup Edit', label: 'Limited Edition', color: '#e11d48',
              bg: 'linear-gradient(135deg, #fef9ee, #fef3c7)', path: '/products/makeup',
              img: '/assets/images/makeup/foundation.png',
            },
            {
              title: 'Luxury Fragrance\nCollection', label: 'Bestsellers', color: '#7c3aed',
              bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', path: '/products/fragrance',
              img: '/assets/images/fragrance/rose_oud.png',
            },
          ].map(banner => (
            <Link key={banner.title} to={banner.path} style={{ textDecoration: 'none' }}>
              <div style={{
                background: banner.bg, borderRadius: '20px', overflow: 'hidden',
                display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease', cursor: 'pointer', minHeight: '140px',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '700', color: banner.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {banner.label}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700',
                    color: '#1a1a2e', marginTop: '4px', whiteSpace: 'pre-line', lineHeight: '1.2',
                  }}>
                    {banner.title}
                  </h3>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '12px', fontSize: '0.8rem', fontWeight: '600', color: banner.color }}>
                    Shop Now <ArrowRight size={12} />
                  </span>
                </div>
                <img src={banner.img} alt={banner.title}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '14px', flexShrink: 0 }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section id="newarrivals" ref={setRef('newarrivals')} style={{
        maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem',
        opacity: isVisible.newarrivals ? 1 : 0,
        transform: isVisible.newarrivals ? 'none' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              ✨ Just In
            </span>
            <h2 className="section-title">New <span style={{ background: 'linear-gradient(135deg, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Arrivals</span></h2>
          </div>
          <Link to="/products?filter=new" className="btn-ghost" style={{ textDecoration: 'none' }}>
            View All New <ArrowRight size={14} />
          </Link>
        </div>
        <div className="products-grid">
          {getNewArrivals().slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" ref={setRef('reviews')} style={{
        background: 'var(--bg-secondary)', padding: '5rem 0',
        opacity: isVisible.reviews ? 1 : 0,
        transform: isVisible.reviews ? 'none' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#f43f5e', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Real Reviews
            </span>
            <h2 className="section-title">What Our <span className="gradient-text">Customers Say</span></h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#fbbf24" color="#fbbf24" />)}
              <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>4.9/5</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>from 50,000+ reviews</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={14} fill={s <= review.rating ? '#fbbf24' : 'none'} color={s <= review.rating ? '#fbbf24' : '#d1d5db'} />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1rem', fontStyle: 'italic' }}>
                  "{review.comment}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={review.avatar} alt={review.name}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)' }}>{review.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bought: {review.product}</p>
                      {review.verified && (
                        <span style={{ fontSize: '0.65rem', background: '#dcfce7', color: '#16a34a', borderRadius: '50px', padding: '1px 6px', fontWeight: '600' }}>✓ Verified</span>
                      )}
                    </div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEST SELLERS ===== */}
      <section id="bestsellers" ref={setRef('bestsellers')} style={{
        maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem',
        opacity: isVisible.bestsellers ? 1 : 0,
        transform: isVisible.bestsellers ? 'none' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(254, 215, 170, 0.2) 100%)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          boxShadow: '0 10px 40px rgba(245, 158, 11, 0.08)',
          marginBottom: '2.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-bestseller" style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', marginBottom: '0.75rem', display: 'inline-flex' }}>
                🏆 MOST LOVED BY BEAUTY LOVERS
              </span>
              <h2 className="section-title">Best <span className="gradient-text-gold" style={{ fontSize: '1.1em' }}>Sellers</span></h2>
              <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
                Top-rated beauty essentials tried, tested, and loved by over 50,000+ happy customers.
              </p>
            </div>
            <Link to="/products?filter=bestseller" className="btn-primary" style={{
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
            }}>
              Explore All Bestsellers <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="products-grid">
          {getBestSellers().slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} showCompare />
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section style={{
        background: 'linear-gradient(135deg, #1a0a0f, #16162a)',
        padding: '5rem 1.5rem', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>💌</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Join the Beauty Revolution
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Subscribe to get exclusive deals, beauty tips from experts, and early access to new launches.
          </p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email" placeholder="Enter your email address"
              style={{
                flex: 1, padding: '0.875rem 1.25rem', borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)',
                color: 'white', fontSize: '0.9rem', outline: 'none', minWidth: '220px',
                backdropFilter: 'blur(4px)',
              }}
            />
            <button type="submit" className="btn-primary" style={{ borderRadius: '50px', fontSize: '0.9rem' }}>
              Subscribe
            </button>
          </form>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>
            No spam ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { width: 280px !important; height: 340px !important; margin: 0 auto; }
        }
      `}</style>
    </div>
  );
}
