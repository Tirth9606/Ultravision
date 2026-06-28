import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, GraduationCap } from 'lucide-react';

interface ResultsProps {
  isPreview?: boolean;
  onViewAll?: () => void;
}

export const Results: React.FC<ResultsProps> = ({ isPreview = false, onViewAll }) => {
  const [filter, setFilter] = useState<'all' | 'competitive' | 'board'>('all');

  const toppers = [
    {
      name: 'Dev Patel',
      achievement: '99.85 Percentile',
      detail: 'JEE Main Topper - Admitted to NIT Trichy (CSE)',
      course: 'JEE Elite 2-Yr Program',
      category: 'competitive',
      type: 'JEE Main',
      initials: 'DP',
    },
    {
      name: 'Aarav Mehta',
      achievement: 'AIR 420 (99.72%)',
      detail: 'NEET Medical - Admitted to BJ Medical College',
      course: 'NEET Ultimate Prep',
      category: 'competitive',
      type: 'NEET UG',
      initials: 'AM',
    },
    {
      name: 'Ananya Shah',
      achievement: '98.40% Aggregate',
      detail: 'Class 12 Science Boards - GSEB District Rank 2',
      course: 'Class 12 Science Integrated',
      category: 'board',
      type: 'HSC Boards',
      initials: 'AS',
    },
    {
      name: 'Diya Joshi',
      achievement: '99.20% Aggregate',
      detail: 'Class 10 State Board - School First Rank',
      course: 'Class 10 Foundation Batch',
      category: 'board',
      type: 'SSC Boards',
      initials: 'DJ',
    },
    {
      name: 'Kabir Verma',
      achievement: '99.42 Percentile',
      detail: 'GUJCET Engineering - GSEB Merit List Topper',
      course: 'GUJCET Crash Course',
      category: 'competitive',
      type: 'GUJCET',
      initials: 'KV',
    },
    {
      name: 'Sneha Rao',
      achievement: '97.80% Aggregate',
      detail: 'Class 12 Boards Science - 100/100 in Mathematics',
      course: 'Class 12 Science Masterclass',
      category: 'board',
      type: 'HSC Boards',
      initials: 'SR',
    }
  ];

  const filteredToppers = isPreview
    ? toppers.slice(0, 3)
    : (filter === 'all' 
        ? toppers 
        : toppers.filter(t => t.category === filter));

  return (
    <section id="results" className="section section-alt" style={{ backgroundColor: 'var(--color-bg-alt)', paddingTop: isPreview ? 'var(--spacing-section)' : '5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="badge">{isPreview ? "Success Stories" : "Achievements Hall of Fame"}</span>
          <h2>{isPreview ? "Our Hall of Fame" : "Toppers & Success Stories"}</h2>
          <p>{isPreview 
            ? "Real results from real hard-working students. Browse board aggregates, competitive entrance percentiles, and university placements."
            : "We celebrate the academic achievements of our students who secured top positions in JEE, NEET, GUJCET, and Board Exams."}</p>
        </div>

        {/* Tab Filters */}
        {!isPreview && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}>
            {[
              { id: 'all', label: 'All Results' },
              { id: 'competitive', label: 'JEE / NEET / GUJCET' },
              { id: 'board', label: 'Class 10 & 12 Boards' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className="btn"
                style={{
                  backgroundColor: filter === tab.id ? 'var(--color-primary)' : '#FFFFFF',
                  color: filter === tab.id ? '#FFFFFF' : 'var(--color-text-primary)',
                  border: '1px solid var(--color-border)',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.9rem',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Toppers Cards Grid */}
        <motion.div 
          layout
          className="grid-3"
          style={{ minHeight: '300px' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredToppers.map((topper) => (
              <motion.div
                key={topper.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Topper Header / Score Badge */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                }}>
                  {/* Photo Initials */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent-light)',
                    color: 'var(--color-primary)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--color-primary)',
                    fontFamily: 'var(--font-heading)',
                    flexShrink: 0,
                  }}>
                    {topper.initials}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {topper.name}
                    </h3>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-text-secondary)',
                      backgroundColor: 'var(--color-bg-alt)',
                      padding: '0.125rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      display: 'inline-block',
                      marginTop: '0.25rem',
                      border: '1px solid var(--color-border)',
                    }}>
                      {topper.type}
                    </span>
                  </div>
                </div>

                {/* Score & Success Detail */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  flexGrow: 1,
                  textAlign: 'left',
                }}>
                  {/* Achievement Highlight */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Trophy size={18} color="var(--color-warning)" />
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                      {topper.achievement}
                    </span>
                  </div>
                  
                  {/* Details text */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                    {topper.detail}
                  </p>
                  
                  {/* Course Name */}
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: 'auto',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                  }}>
                    <GraduationCap size={14} />
                    {topper.course}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {isPreview && onViewAll && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              onClick={onViewAll} 
              className="btn btn-primary"
              style={{ 
                padding: '0.875rem 2.25rem', 
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              View All Results
              <Trophy size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
