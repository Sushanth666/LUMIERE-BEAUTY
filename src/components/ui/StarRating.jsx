import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, showCount = false, count = 0 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star} size={size}
          fill={star <= Math.round(rating) ? '#fbbf24' : 'none'}
          color={star <= Math.round(rating) ? '#fbbf24' : '#d1d5db'}
        />
      ))}
      {showCount && <span style={{ fontSize: `${size * 0.9}px`, color: 'var(--text-secondary)', marginLeft: '4px' }}>({count.toLocaleString('en-IN')})</span>}
    </div>
  );
}
