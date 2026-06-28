import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { UserCheck, Users, Lightbulb, ClipboardList, BookOpen, BarChart3, Compass, CreditCard } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <UserCheck size={28} />,
      title: 'Experienced Faculty',
      desc: 'Learn directly from top tier mentors, board moderators, and seasoned subject-matter authorities.',
    },
    {
      icon: <Users size={28} />,
      title: 'Small Batch Sizes',
      desc: 'Every student receives high personalized attention in batches limited to 25 seats maximum.',
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Conceptual Clarity',
      desc: 'We bypass rote-memorization methods to focus on building strong foundational mechanics.',
    },
    {
      icon: <ClipboardList size={28} />,
      title: 'Weekly Practice Tests',
      desc: 'Regular tests simulating board examinations and competitive exam patterns.',
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Digital Study Resources',
      desc: 'Access curated notes, formula sheets, and solved papers anytime via our portal.',
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Progress Reports',
      desc: 'Receive regular updates on student attendance, test performance, and academic progress.',
    },
    {
      icon: <Compass size={28} />,
      title: 'Academic Counseling',
      desc: 'One-on-one sessions to help students select branches, streams, and prep pathways.',
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Transparent Fee Structure',
      desc: 'High-quality education offered at competitive prices with installment options.',
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section id="why-us" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Why Choose Us</span>
          <h2>The Ultravision Advantage</h2>
          <p>We blend robust academic excellence with premium features to create the ideal learning environment for serious achievers.</p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.75rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast)',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Icon container */}
              <div style={{
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-accent-light)',
                borderRadius: 'var(--radius-md)',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background var(--transition-fast), color var(--transition-fast)',
              }} className="icon-container">
                {b.icon}
              </div>

              {/* Title & Description */}
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
              }}>
                {b.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.5',
                color: 'var(--color-text-secondary)',
              }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        /* Dynamic transition effects for icon card highlights */
        div[style*="cursor: pointer"]:hover .icon-container {
          background-color: var(--color-primary) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
};
