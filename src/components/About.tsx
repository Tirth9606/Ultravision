import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: 'Structured Study Material',
      desc: 'Systematically designed curriculum that bridges the gap between board exams and JEE/NEET requirements.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Regular Assessments',
      desc: 'Weekly performance tests with objective feedback to track subject mastery and progress.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Personal Mentorship',
      desc: 'One-on-one doubt clearing sessions and individual academic guidance for every student.',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Modern Classrooms',
      desc: 'Interactive smart boards and standard testing platforms to prepare students for competitive formats.',
    },
  ];

  const milestones = [
    { year: '2016', title: 'The Foundation', desc: 'Started with 20 board students in a single classroom with a vision of conceptual clarity.' },
    { year: '2019', title: 'Top Board Selections', desc: 'Achieved 95%+ board results in class 10 & 12, scaling capacity to 200+ students.' },
    { year: '2022', title: 'JEE & NEET Selections', desc: 'Successfully sent our first batches of students to IITs and government medical colleges.' },
    { year: '2026', title: 'Smart Classrooms Upgrade', desc: 'Upgraded all lecture halls with smart boards, interactive portals, and digital resources.' },
  ];

  return (
    <section id="about" className="section section-alt" style={{ overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">About Us</span>
          <h2>Excellence in Education</h2>
          <p>We are a premier coaching academy providing rigorous classroom teaching, personalized mentorship, and regular assessments to prepare students for academic success.</p>
        </div>

        {/* Intro Grid */}
        <div className="grid-2" style={{ marginBottom: 'var(--spacing-xxl)' }}>
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-md)',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <BookOpen size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Our Dedicated Mission</h3>
            <p style={{ lineHeight: '1.6' }}>
              To demystify complex subjects by focusing on first-principles conceptual learning. We ensure students build strong academic roots that allow them to confidently target state-level and national-level competitive examinations.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{
              backgroundColor: 'rgba(30, 64, 175, 0.1)',
              color: 'var(--color-secondary)',
              borderRadius: 'var(--radius-md)',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Our Future Vision</h3>
            <p style={{ lineHeight: '1.6' }}>
              To build a state-of-the-art educational habitat that fosters academic curiosity. By integrating tech-driven diagnostics with world-class faculty mentoring, we envision a future where top tier coaching is personalized, transparent, and highly result-oriented.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div style={{ marginBottom: 'var(--spacing-xxl)' }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}>
            Our Core Values
          </h3>
          <div className="grid-4">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-border)',
                  textAlign: 'left',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{
                  color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                  backgroundColor: 'var(--color-accent-light)',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {val.icon}
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>{val.title}</h4>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}>
            Our Journey of Growth
          </h3>
          
          <div style={{
            position: 'relative',
            maxWidth: '850px',
            margin: '0 auto',
            padding: '2rem 0',
          }} className="timeline-container">
            {/* Center Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--color-border)',
              transform: 'translateX(-50%)',
            }} className="timeline-line" />

            {/* Timeline Milestones */}
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '2rem',
                  position: 'relative',
                }}
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              >
                {/* Timeline Node Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '3px solid var(--color-primary)',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                }} />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '45%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--color-border)',
                    position: 'relative',
                  }}
                  className="timeline-card"
                >
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}>
                    {ms.year}
                  </span>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                    {ms.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                    {ms.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline responsive style overrides */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: '20px' !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 45px !important;
          }
          .timeline-item div[style*="left: 50%"] {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
