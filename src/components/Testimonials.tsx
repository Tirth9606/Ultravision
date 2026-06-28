import React, { useState, useEffect, useCallback } from 'react';

import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const reviews = [
    {
      name: 'Dev Patel',
      role: 'Student (JEE Main 99.85 Percentile)',
      type: 'Student Review',
      review: 'Ultravision completely changed how I approach physics. The HOD, Dr. Rajesh, breaks down complex equations from absolute scratch. The weekly mock testing platform made the actual JEE feel like a regular classroom test.',
      rating: 5,
    },
    {
      name: 'Rajesh Shah',
      role: 'Parent of Ananya (Class 12 Boards Topper)',
      type: 'Parent Review',
      review: 'As parents, the weekly attendance logs and performance analytics reports sent to our portals kept us fully informed. We always knew exactly what chapters needed revision. Outstanding academic discipline.',
      rating: 5,
    },
    {
      name: 'Diya Joshi',
      role: 'Student (Class 10 State Board First Rank)',
      type: 'Student Review',
      review: 'The classroom batch size is strictly limited (under 25). That meant I could easily raise my hand and clarify doubts without any hesitation. The premium digital portal notes are perfect for rapid revisions.',
      rating: 5,
    },
    {
      name: 'Meeta Mehta',
      role: 'Parent of Aarav (NEET Medical Topper)',
      type: 'Parent Review',
      review: 'The personal mentorship and career guiding sessions at Ultravision helped my son evaluate medical colleges based on true metrics. It is not just a coaching center; it is a full career launchpad.',
      rating: 5,
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoplay, handleNext]);

  const current = reviews[currentIndex];


  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Reviews & Feedback</span>
          <h2>What Parents & Students Say</h2>
          <p>Read verified student accomplishments and parent testimonials reflecting our focus on personalized education.</p>
        </div>

        {/* Carousel Container */}
        <div style={{
          position: 'relative',
          maxWidth: '780px',
          margin: '0 auto',
          padding: '0 2rem',
        }}>
          {/* Main Card with AnimatePresence */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
            padding: '2.5rem 3rem',
            position: 'relative',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              left: '2rem',
              color: 'rgba(37, 99, 235, 0.06)',
              zIndex: 1,
            }}>
              <Quote size={80} style={{ transform: 'rotate(180deg)' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Rating stars & verified badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem',
              }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--color-warning)" color="var(--color-warning)" />
                  ))}
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-success)',
                  backgroundColor: '#DCFCE7',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}>
                  <ShieldCheck size={12} />
                  Verified Reviewer
                </span>
              </div>

              {/* Review Text */}
              <blockquote style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--color-text-primary)',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
              }}>
                "{current.review}"
              </blockquote>

              {/* Reviewer Details */}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {current.name}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.125rem' }}>
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => { setIsAutoplay(false); handlePrev(); }}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: '-1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              transition: 'var(--transition-fast)',
              zIndex: 10,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => { setIsAutoplay(false); handleNext(); }}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: '-1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              transition: 'var(--transition-fast)',
              zIndex: 10,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
          }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoplay(false); setCurrentIndex(i); }}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === i ? 'var(--color-primary)' : 'var(--color-border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'var(--transition-fast)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
