import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Award, Landmark } from 'lucide-react';

interface CounterProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
}

const CountUp: React.FC<CounterProps> = ({ targetValue, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = targetValue;
    if (start === end) return;

    // Total frames based on 60fps
    const totalFrames = Math.round(duration / 16.7);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // Ease out quad
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.round(end * easeProgress);
      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 16.7);

    return () => clearInterval(counter);
  }, [isInView, targetValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Achievements: React.FC = () => {
  const stats = [
    {
      icon: <Calendar size={28} />,
      label: 'Years of Legacy',
      value: 10,
      suffix: '+ Years',
      desc: 'Formulating rigorous conceptual foundation courses since 2016.'
    },
    {
      icon: <Users size={28} />,
      label: 'Students Coached',
      value: 1000,
      suffix: '+ Enrolled',
      desc: 'Trust of over a thousand families navigating secondary and senior school.'
    },
    {
      icon: <Award size={28} />,
      label: 'Elite Selections',
      value: 450,
      suffix: '+ Ranks',
      desc: 'Selections into IITs, NITs, AIIMS, BJ Medical, and top board percentiles.'
    },
    {
      icon: <Landmark size={28} />,
      label: 'National Awards',
      value: 15,
      suffix: '+ Awards',
      desc: 'Quality teaching awards and recognition from state educational bodies.'
    }
  ];

  return (
    <section id="achievements" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Track Record</span>
          <h2>Our Milestone Accomplishments</h2>
          <p>Decades of collective faculty experience translated into verified, measurable classroom success metrics year after year.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem 1.75rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.875rem',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Icon */}
              <div style={{
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-accent-light)',
                padding: '0.75rem',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.25rem',
              }}>
                {stat.icon}
              </div>

              {/* Number */}
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)',
              }}>
                <CountUp targetValue={stat.value} suffix={stat.suffix} />
              </h3>

              {/* Label */}
              <h4 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
              }}>
                {stat.label}
              </h4>

              {/* Description */}
              <p style={{
                fontSize: '0.85rem',
                lineHeight: '1.5',
                color: 'var(--color-text-secondary)',
              }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
