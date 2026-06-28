import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Shield, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onOpenAdmission: (courseKey: string) => void;
  isPreview?: boolean;
  onViewAll?: () => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenAdmission, isPreview = false, onViewAll }) => {
  const courseList = [
    {
      key: 'foundation',
      name: 'Foundation Course (Class 8)',
      desc: 'Build strong analytical roots in Mathematics & Sciences. Ideal for early NTSE, Olympiad, and early JEE/NEET building blocks.',
      subjects: 'Science, Mathematics, Mental Ability & English',
      duration: '1 Year Program',
      eligibility: 'Studying in Class 7 / Moving to Class 8',
      tag: 'Foundation',
    },
    {
      key: 'foundation',
      name: 'Foundation Course (Class 9)',
      desc: 'Deepen logical frameworks and mathematical structures. Transitions students smoothly from memorization to logical derivation.',
      subjects: 'Physics, Chemistry, Biology, Mathematics & MAT',
      duration: '1 Year Program',
      eligibility: 'Studying in Class 8 / Moving to Class 9',
      tag: 'Foundation',
    },
    {
      key: 'foundation',
      name: 'High School Elite (Class 10)',
      desc: 'Double target program focusing on securing 95%+ in Board Examinations while maintaining competitive foundations for Olympiads.',
      subjects: 'Physics, Chemistry, Biology, Mathematics & SST',
      duration: '1 Year Program',
      eligibility: 'Studying in Class 9 / Moving to Class 10',
      tag: 'Boards Prep',
    },
    {
      key: 'class-11-science',
      name: 'Class 11 Science (Pre-Competitive)',
      desc: 'Introduces advanced physics, analytical chemistry, and structural math. Laying foundations for ultimate JEE/NEET pathways.',
      subjects: 'Physics, Chemistry, Mathematics / Biology',
      duration: '1 Year Integrated',
      eligibility: 'Cleared Class 10 Board Examinations',
      tag: 'Senior Secondary',
    },
    {
      key: 'class-12-science',
      name: 'Class 12 Science (Board + GUJCET)',
      desc: 'Intense course covering full boards syllabus alongside board sample papers and exhaustive state board GUJCET coaching.',
      subjects: 'Physics, Chemistry, Mathematics / Biology',
      duration: '1 Year Program',
      eligibility: 'Completed Class 11 Science syllabus',
      tag: 'Board + State Comp',
    },
    {
      key: 'jee',
      name: 'JEE Main & Advanced Preparation',
      desc: 'Comprehensive classroom program with daily worksheets, regular mock test series, and mentorship by experienced educators.',
      subjects: 'Physics, Chemistry, and Mathematics',
      duration: '2 Years Integrated / 1 Year Repeater',
      eligibility: 'Class 10 Passed / Studying in Class 11 or 12',
      tag: 'Engineering Target',
    },
    {
      key: 'neet',
      name: 'NEET Medical Entrance Preparation',
      desc: 'Focused curriculum covering syllabus topics, practical chemistry derivations, and extensive biological study modules.',
      subjects: 'Physics, Chemistry, and Biology (Botany + Zoology)',
      duration: '2 Years Integrated / 1 Year Repeater',
      eligibility: 'Class 10 Passed / Studying in Class 11 or 12',
      tag: 'Medical Target',
    },
    {
      key: 'gujcet',
      name: 'GUJCET Entrance Preparation',
      desc: 'Targeted preparation for the state common entrance test with formula revisions and solving past years papers.',
      subjects: 'Physics, Chemistry, Mathematics / Biology',
      duration: '4 Months Crash Course',
      eligibility: 'Studying in Class 12 Science / Passed Class 12',
      tag: 'Entrance Focus',
    },
    {
      key: 'foundation',
      name: 'Foundation Edge (Class 8 to 10)',
      desc: 'Integrated 3-year academic pathway for parents looking to prepare kids systematically for IIT/AIIMS career routes from high school.',
      subjects: 'Science, Math, Logic, Advanced Aptitude modules',
      duration: '3 Years Integrated',
      eligibility: 'Cleared Class 7 and moving to Class 8',
      tag: 'Comprehensive Foundation',
    },
  ];

  const coursesToRender = isPreview 
    ? courseList.filter(c => ['jee', 'neet', 'class-12-science'].includes(c.key))
    : courseList;

  return (
    <section id="courses" className="section section-alt" style={{ backgroundColor: 'var(--color-bg-alt)', paddingTop: isPreview ? 'var(--spacing-section)' : '5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="badge">{isPreview ? "Academic Programs" : "Explore Batches"}</span>
          <h2>{isPreview ? "Our Curated Courses" : "Academic Programs & Courses"}</h2>
          <p>{isPreview 
            ? "Explore structured training batches matching standard national curriculum levels, customized for both board achievements and competitive ranks."
            : "Ultravision Academy offers strictly capped batches of 25 students, equipped with concept-first lectures, personalized mentors, and weekly test series."}</p>
        </div>

        {/* Courses Grid */}
        <div className="grid-3">
          {coursesToRender.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
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
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast)',
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
              {/* Card Header & Tag */}
              <div style={{
                padding: '1.5rem 1.75rem 1rem 1.75rem',
                borderBottom: '1px solid var(--color-border)',
                position: 'relative',
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  backgroundColor: 'var(--color-accent-light)',
                  padding: '0.25rem 0.625rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-block',
                  marginBottom: '0.75rem',
                }}>
                  {course.tag}
                </span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: '1.3',
                }}>
                  {course.name}
                </h3>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '1.5rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                flexGrow: 1,
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: 'var(--color-text-secondary)',
                }}>
                  {course.desc}
                </p>

                {/* Details Section */}
                <div style={{
                  borderTop: '1px dashed var(--color-border)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  fontSize: '0.85rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <BookOpen size={16} color="var(--color-text-secondary)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Subjects: </strong>
                      {course.subjects}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <Calendar size={16} color="var(--color-text-secondary)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Duration: </strong>
                      {course.duration}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <Shield size={16} color="var(--color-text-secondary)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Eligibility: </strong>
                      {course.eligibility}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div style={{
                padding: '1.25rem 1.75rem 1.75rem 1.75rem',
                backgroundColor: 'rgba(249, 250, 251, 0.5)',
                borderTop: '1px solid var(--color-border)',
              }}>
                <button
                  onClick={() => onOpenAdmission(course.key)}
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.625rem 1.25rem',
                    fontSize: '0.9rem',
                  }}
                >
                  Register Course
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {isPreview && onViewAll && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              onClick={onViewAll} 
              className="btn btn-primary"
              style={{ padding: '0.875rem 2.25rem', fontSize: '1rem' }}
            >
              View All Courses
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
