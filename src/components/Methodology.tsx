import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Edit3, Clipboard, FileText, CheckCircle, BarChart, Users } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <BookOpen size={20} />,
      title: 'Concept Learning',
      desc: 'Lectures focused on fundamental physics, chemical mechanics, and mathematical derivations using visual models.',
    },
    {
      icon: <Edit3 size={20} />,
      title: 'Structured Practice',
      desc: 'In-class exercises covering textbook theories, past problems, and standard reference materials.',
    },
    {
      icon: <Clipboard size={20} />,
      title: 'Daily Assignments (DPPs)',
      desc: 'Graded homework sheets designed to test recall, logical extension, and speed under strict guidelines.',
    },
    {
      icon: <FileText size={20} />,
      title: 'Weekly Standard Mock Tests',
      desc: 'Simulate competitive settings matching board templates or national exam platforms (JEE / NEET).',
    },
    {
      icon: <CheckCircle size={20} />,
      title: '1-on-1 Doubt Resolution',
      desc: 'Daily dedicated hours where students clarify conceptual bottlenecks with subject specialists.',
    },
    {
      icon: <BarChart size={20} />,
      title: 'Performance Analysis',
      desc: 'Automated digital reports highlighting strong, average, and critical zones in each subject.',
    },
    {
      icon: <Users size={20} />,
      title: 'Parent Feedback Loop',
      desc: 'Continuous coordination with parents regarding test scores, attendance, and preparation metrics.',
    },
  ];

  return (
    <section id="methodology" className="section" style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Our Pedagogy</span>
          <h2>The 7-Step Teaching Cycle</h2>
          <p>We believe learning is a systematic loop. Our structured pedagogy is built to guide students from raw theory down to high accuracy execution.</p>
        </div>

        {/* Timeline Layout */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem 0',
        }} className="pedagogy-timeline">
          {/* Vertical Connecting Line */}
          <div style={{
            position: 'absolute',
            left: '30px',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'var(--color-border)',
          }} className="methodology-line" />

          {/* Timeline Nodes */}
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                position: 'relative',
                alignItems: 'flex-start',
              }}
              className="methodology-item"
            >
              {/* Outer circle for number/icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--color-primary)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                zIndex: 2,
                flexShrink: 0,
              }} className="methodology-icon-wrapper">
                {step.icon}
              </div>

              {/* Text Card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem 1.75rem',
                boxShadow: 'var(--shadow-sm)',
                flexGrow: 1,
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-primary)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                  }}>
                    Step {idx + 1}
                  </span>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                  }}>
                    {step.title}
                  </h4>
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: 'var(--color-text-secondary)',
                }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 576px) {
          .methodology-icon-wrapper {
            width: 48px !important;
            height: 48px !important;
          }
          .methodology-line {
            left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
