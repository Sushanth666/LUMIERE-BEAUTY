import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export default function CountdownTimer({ targetDate, compact = false }) {
  const calculateTime = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, days: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (compact) {
    return (
      <span style={{ fontWeight: '700', color: '#f43f5e', fontVariantNumeric: 'tabular-nums' }}>
        {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </span>
    );
  }

  const segments = [
    { label: 'Days', value: time.days },
    { label: 'Hrs', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {segments.map(({ label, value }, i) => (
        <>
          <div key={label} className="countdown-segment">
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
              {String(value).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {label}
            </span>
          </div>
          {i < segments.length - 1 && (
            <span style={{ color: 'white', fontWeight: '700', fontSize: '1.2rem', lineHeight: 1 }}>:</span>
          )}
        </>
      ))}
    </div>
  );
}
