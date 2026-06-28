import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Calendar, Award } from 'lucide-react';
import { Linkedin } from './SocialIcons';

export const Faculty: React.FC = () => {
  const teachers = [
    {
      name: 'Dr. Rajesh Patel',
      role: 'Head of Physics Department',
      qualification: 'Ph.D. in Physics (IIT Delhi)',
      experience: '15+ Years Academic Experience',
      specialization: 'Classical Mechanics & Electrodynamics',
      socials: { linkedin: '#', email: 'rajesh.patel@ultravision.edu' },
      initials: 'RP',
    },
    {
      name: 'Prof. Smita Shah',
      role: 'Head of Chemistry Department',
      qualification: 'M.Sc. Organic Chemistry (Gold Medalist)',
      experience: '12+ Years Academic Experience',
      specialization: 'Reaction Mechanisms & Stereochemistry',
      socials: { linkedin: '#', email: 'smita.shah@ultravision.edu' },
      initials: 'SS',
    },
    {
      name: 'Er. Amit Verma',
      role: 'Head of Mathematics Department',
      qualification: 'B.Tech. in Computer Science (IIT Bombay)',
      experience: '10+ Years Competitive Mentorship',
      specialization: 'Calculus, Vectors, and Algebra',
      socials: { linkedin: '#', email: 'amit.verma@ultravision.edu' },
      initials: 'AV',
    },
    {
      name: 'Dr. Pooja Joshi',
      role: 'Head of Biology Department',
      qualification: 'MD / MBBS (Top Medical College)',
      experience: '8+ Years Medical Prep Mentorship',
      specialization: 'Human Physiology & Molecular Genetics',
      socials: { linkedin: '#', email: 'pooja.joshi@ultravision.edu' },
      initials: 'PJ',
    }
  ];

  return (
    <section id="faculty" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Faculty Board</span>
          <h2>Our Veteran Faculty Mentors</h2>
          <p>Learn from standard-setting educators, authors, and industry experts dedicated to unlocking your highest potential.</p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid-4">
          {teachers.map((teacher, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
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
              {/* Profile Avatar / Photo Frame */}
              <div style={{
                backgroundColor: 'var(--color-bg-alt)',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--color-border)',
                position: 'relative',
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '3px solid var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: 'var(--shadow-md)',
                }}>
                  {teacher.initials}
                </div>
                
                {/* Float role */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  backgroundColor: '#FFFFFF',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}>
                  {teacher.role}
                </div>
              </div>

              {/* Profile details */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                flexGrow: 1,
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  textAlign: 'center',
                }}>
                  {teacher.name}
                </h3>

                {/* Details list */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  borderTop: '1px dashed var(--color-border)',
                  paddingTop: '0.75rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={16} color="var(--color-text-secondary)" />
                    <span>{teacher.qualification}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} color="var(--color-text-secondary)" />
                    <span>{teacher.experience}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Award size={16} color="var(--color-text-secondary)" />
                    <span>{teacher.specialization}</span>
                  </div>
                </div>
              </div>

              {/* Social Links Footer */}
              <div style={{
                padding: '0.75rem 1.5rem 1.25rem 1.5rem',
                backgroundColor: 'rgba(249, 250, 251, 0.5)',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
              }}>
                <a
                  href={teacher.socials.linkedin}
                  aria-label={`${teacher.name} LinkedIn Profile`}
                  style={{
                    color: 'var(--color-text-secondary)',
                    padding: '0.375rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-light)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${teacher.socials.email}`}
                  aria-label={`Email ${teacher.name}`}
                  style={{
                    color: 'var(--color-text-secondary)',
                    padding: '0.375rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-light)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
