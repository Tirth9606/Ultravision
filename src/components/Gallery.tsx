import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'campus' | 'classroom' | 'seminar' | 'event'>('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Vibrant Campus Entrance',
      desc: 'The modern front facade of Ultravision Academy campus.',
      category: 'campus',
      height: '240px',
      color: '#EFF6FF',
      textColor: 'var(--color-primary)'
    },
    {
      id: 2,
      title: 'Smart Tech Classroom Lab',
      desc: 'Interactive digital boards and ergonomic seating systems.',
      category: 'classroom',
      height: '320px',
      color: '#FFFBEB',
      textColor: '#D97706'
    },
    {
      id: 3,
      title: 'National JEE Prep Seminar',
      desc: 'Top academic mentors addressing career roadmap strategies.',
      category: 'seminar',
      height: '220px',
      color: '#ECFDF5',
      textColor: 'var(--color-success)'
    },
    {
      id: 4,
      title: 'Annual Achievers Ceremony',
      desc: 'Awarding trophies and scholarships to board and entrance toppers.',
      category: 'event',
      height: '280px',
      color: '#FDF2F8',
      textColor: '#DB2777'
    },
    {
      id: 5,
      title: 'Modern Chemistry Laboratory',
      desc: 'Equipped with chemical safety systems for boards practical examinations.',
      category: 'classroom',
      height: '250px',
      color: '#F5F3FF',
      textColor: '#7C3AED'
    },
    {
      id: 6,
      title: 'Interactive Group Study Hall',
      desc: 'Peer discussions room configured with reference textbooks libraries.',
      category: 'campus',
      height: '300px',
      color: '#EFF6FF',
      textColor: 'var(--color-primary)'
    },
    {
      id: 7,
      title: 'Mental Health Workshop',
      desc: 'Session focused on stress management and exam time management.',
      category: 'seminar',
      height: '230px',
      color: '#ECFDF5',
      textColor: 'var(--color-success)'
    },
    {
      id: 8,
      title: 'Annual Science Fair',
      desc: 'Students presenting logic modules and mechanical science projects.',
      category: 'event',
      height: '310px',
      color: '#FFFBEB',
      textColor: '#D97706'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'campus', label: 'Campus' },
    { id: 'classroom', label: 'Classrooms' },
    { id: 'seminar', label: 'Seminars' },
    { id: 'event', label: 'Events' }
  ];

  return (
    <section id="gallery" className="section section-alt" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Life at Campus</span>
          <h2>Our Photo Gallery</h2>
          <p>Peek inside our academic ecosystem. Glimpse our modern smart classrooms, reference libraries, science workshops, and annual achievers forums.</p>
        </div>

        {/* Filter categories */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className="btn"
              style={{
                backgroundColor: activeCategory === cat.id ? 'var(--color-primary)' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                padding: '0.4rem 1.125rem',
                fontSize: '0.875rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{
          columnCount: 3,
          columnGap: '1.5rem',
          width: '100%',
          minHeight: '400px',
        }} className="gallery-masonry">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
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
                {/* Image Placeholder Frame */}
                <div style={{
                  backgroundColor: item.color,
                  height: item.height,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }} className="image-placeholder-frame">
                  {/* Decorative Icon */}
                  <Image size={36} color={item.textColor} style={{ opacity: 0.25 }} />
                  
                  {/* Category floating tag */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--color-text-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '0.2rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-border)',
                  }}>
                    {item.category}
                  </span>
                </div>

                {/* Card description details */}
                <div style={{
                  padding: '1.25rem',
                  borderTop: '1px solid var(--color-border)',
                  textAlign: 'left',
                }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.25rem',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.825rem',
                    lineHeight: '1.4',
                    color: 'var(--color-text-secondary)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .gallery-masonry {
            column-count: 2 !important;
          }
        }
        @media (max-width: 576px) {
          .gallery-masonry {
            column-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
