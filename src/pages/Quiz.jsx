import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { quizQuestions, products } from '../data/products';

const getRecommendations = (answers) => {
  let filtered = [...products];
  const skinType = answers[0];
  const concern = answers[1];
  const style = answers[2];
  const budget = answers[3];

  if (skinType) filtered = filtered.filter(p => !p.skinType || p.skinType === 'All' || p.skinType === skinType);

  let maxPrice = 10000;
  if (budget === 'Under ₹500') maxPrice = 500;
  else if (budget === '₹500 - ₹1000') maxPrice = 1000;
  else if (budget === '₹1000 - ₹2000') maxPrice = 2000;
  filtered = filtered.filter(p => p.price <= maxPrice);

  if (style === 'Minimal & Natural') {
    filtered = [...filtered].filter(p => p.category === 'skincare' || p.category === 'bodycare');
  } else if (style === 'Bold & Glam') {
    filtered = [...filtered].filter(p => p.category === 'makeup' || p.category === 'fragrance');
  }

  if (filtered.length < 4) filtered = products.filter(p => p.isFeatured || p.badge === 'bestseller');

  return filtered
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
};

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selected, setSelected] = useState(null);

  const currentQuestion = quizQuestions[currentQ];

  const handleAnswer = (option) => {
    setSelected(option);
    setTimeout(() => {
      const newAnswers = { ...answers, [currentQ]: option };
      setAnswers(newAnswers);
      setSelected(null);
      if (currentQ < quizQuestions.length - 1) {
        setCurrentQ(q => q + 1);
      } else {
        setCompleted(true);
      }
    }, 300);
  };

  const recommendations = completed ? getRecommendations(answers) : [];
  const progress = ((currentQ) / quizQuestions.length) * 100;

  if (!started) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #f43f5e, #9c7b9e)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 2rem', boxShadow: '0 20px 50px rgba(244,63,94,0.3)',
            animation: 'float 3s ease-in-out infinite',
          }}>
            <Sparkles size={40} color="white" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Beauty <span className="gradient-text">Quiz</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0.75rem' }}>
            Discover your perfect beauty routine in just 5 questions!
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
            We'll analyze your skin type, concerns, and style preferences to curate personalized product recommendations just for you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {['✨ 5 Questions', '⚡ 2 Minutes', '💄 Personalized Results'].map(item => (
              <span key={item} style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                borderRadius: '50px', padding: '6px 16px', fontSize: '0.82rem',
                color: 'var(--text-secondary)', fontWeight: '500',
              }}>{item}</span>
            ))}
          </div>
          <button onClick={() => setStarted(true)} className="btn-primary" style={{ fontSize: '1rem' }}>
            Start Your Beauty Journey <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Your Personalized <span className="gradient-text">Beauty Picks!</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem' }}>
            Based on your responses, here are products tailored just for you:
          </p>

          {/* Answer Summary */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '3rem' }}>
            {quizQuestions.map((q, i) => answers[i] && (
              <span key={i} style={{
                background: 'var(--accent-light)', color: '#f43f5e',
                border: '1px solid rgba(244,63,94,0.2)', borderRadius: '50px',
                padding: '6px 16px', fontSize: '0.82rem', fontWeight: '500',
              }}>
                {q.icon} {answers[i]}
              </span>
            ))}
          </div>
        </div>

        <div className="products-grid" style={{ marginBottom: '3rem' }}>
          {recommendations.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => { setCurrentQ(0); setAnswers({}); setCompleted(false); }} className="btn-secondary">
            Retake Quiz
          </button>
          <Link to="/products" className="btn-primary" style={{ textDecoration: 'none' }}>
            Shop All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        {/* Progress */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
              Question {currentQ + 1} of {quizQuestions.length}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#f43f5e', fontWeight: '600' }}>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%`, transition: 'width 0.5s ease' }} />
          </div>
        </div>

        {/* Question */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-color)',
          borderRadius: '24px', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
          animation: 'fadeInUp 0.3s ease',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{currentQuestion.icon}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.3' }}>
              {currentQuestion.question}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {currentQuestion.options.map(option => (
              <button key={option} onClick={() => handleAnswer(option)} style={{
                padding: '1rem 1.5rem', borderRadius: '14px', textAlign: 'left',
                border: `2px solid ${selected === option ? '#f43f5e' : 'var(--border-color)'}`,
                background: selected === option ? 'var(--accent-light)' : 'var(--bg-primary)',
                cursor: 'pointer', fontWeight: '500', fontSize: '0.95rem',
                color: selected === option ? '#f43f5e' : 'var(--text-primary)',
                transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}
                onMouseEnter={e => { if (selected !== option) { e.currentTarget.style.borderColor = 'rgba(244,63,94,0.5)'; e.currentTarget.style.background = 'var(--accent-light)'; } }}
                onMouseLeave={e => { if (selected !== option) { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'var(--bg-primary)'; } }}
              >
                {option}
                {selected === option && <span style={{ color: '#f43f5e', fontWeight: '700' }}>✓</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Back button */}
        {currentQ > 0 && (
          <button onClick={() => setCurrentQ(q => q - 1)} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)',
            display: 'flex', alignItems: 'center', gap: '6px', margin: '1.5rem auto 0', fontSize: '0.875rem',
          }}>
            <ArrowLeft size={14} /> Previous question
          </button>
        )}
      </div>
    </div>
  );
}
