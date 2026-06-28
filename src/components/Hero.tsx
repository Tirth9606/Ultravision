import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MessageCircle, Award, Users, Calendar, ShieldCheck } from 'lucide-react';
import classroomHero from '../assets/images/classroom_hero.png';

interface HeroProps {
  onOpenAdmission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="section" style={{
      backgroundColor: '#FFFFFF',
      paddingTop: 'clamp(2rem, 6vw, 4rem)',
      paddingBottom: 'clamp(2rem, 6vw, 4.5rem)',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'var(--spacing-xl)',
          alignItems: 'center',
        }} className="hero-grid">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ gridColumn: 'span 7' }}
            className="hero-text-col"
          >
            {/* Admission Open Badge */}
            <motion.div variants={itemVariants} className="badge">
              <span style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: 'var(--color-success)', 
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '0.25rem'
              }} />
              Admissions Open 2026-27
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Premier Institute for <br />
              <span style={{ color: 'var(--color-primary)' }}>JEE, NEET & Boards</span> <br />
              Preparation
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
                marginBottom: '2.25rem',
                maxWidth: '560px',
              }}
            >
              Empowering students through conceptual clarity, structured test series, and seasoned mentorship to secure top ranks in school boards and competitive exams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}
            >
              <button 
                onClick={onOpenAdmission}
                className="btn btn-primary"
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                }}
              >
                Enroll Now
                <ArrowRight size={18} />
              </button>
              <a 
                href="#contact"
                onClick={handleContactClick}
                className="btn btn-outline"
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                }}
              >
                Contact Us
                <MessageCircle size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ 
              gridColumn: 'span 5',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-img-col"
          >
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              aspectRatio: '4/3',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-border)',
            }}>
              <img 
                src={classroomHero} 
                alt="Modern collaborative learning classroom environment" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--transition-slow)',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Floating Trust Card */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '-1rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1.25rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }} className="hero-floating-card">
              <div style={{
                backgroundColor: 'var(--color-accent-light)',
                borderRadius: '50%',
                padding: '0.375rem',
                color: 'var(--color-primary)',
              }}>
                <Award size={20} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Affiliated & Certified</p>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Top Rank Academy</h4>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Below Hero Statistics Banner */}
        <div style={{
          marginTop: 'var(--spacing-xxl)',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--spacing-xl)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--spacing-lg)',
            textAlign: 'center',
          }} className="hero-stats">
            {[
              { label: 'Enrolled Students', value: '1000+', icon: <Users size={22} /> },
              { label: 'Board & Competitive Success', value: '98%', icon: <Award size={22} /> },
              { label: 'Legacy of Excellence', value: '10+ Yrs', icon: <Calendar size={22} /> },
              { label: 'Experienced Faculty Mentors', value: '15+', icon: <ShieldCheck size={22} /> }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem',
                }}
              >
                <div style={{
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-accent-light)',
                  padding: '0.5rem',
                  borderRadius: '50%',
                }}>
                  {stat.icon}
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  margin: '0.25rem 0',
                }}>
                  {stat.value}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid column styling overrides */}
      <style>{`
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-xl) !important;
          }
          .hero-text-col {
            grid-column: span 12 !important;
            text-align: center;
          }
          .hero-text-col p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-text-col div {
            justify-content: center;
          }
          .hero-img-col {
            grid-column: span 12 !important;
            margin-top: 1rem;
          }
          .hero-floating-card {
            left: 10% !important;
          }
        }
        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--spacing-md) !important;
          }
        }
      `}</style>
    </section>
  );
};
