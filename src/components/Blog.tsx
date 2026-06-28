import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  readTime: string;
  date: string;
  color: string;
  textColor: string;
}

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      tag: 'Study Tips',
      title: 'Scientific Study Techniques: How to Retain Concepts 2x Faster',
      excerpt: 'Struggling to remember complex formulae? Learn the science behind spaced repetition, active recall, and Feynman explanations.',
      content: 'Effective retention is not about raw study hours; it is about active cognitive load. According to neuropsychology, the brain deletes unused connections. By implementing Spaced Repetition (using flashcards at expanding intervals) and Active Recall (shutting books to explain answers from memory), you force neural pathway strengthening. Another golden trick is the Feynman Technique: pick a complex physics or biology concept (like electrodynamics or cellular respiration) and try explaining it to a middle-school child. Where your explanation fails, you identify gaps in your fundamentals.',
      readTime: '5 min read',
      date: 'June 20, 2026',
      color: '#EFF6FF',
      textColor: 'var(--color-primary)'
    },
    {
      id: 2,
      tag: 'Exam Strategy',
      title: 'Board Exam Revision Blueprints: Scoring 95%+ Safely',
      excerpt: 'Discover a structured revision roadmap, sample papers strategy, and answers alignment methods designed by moderators.',
      content: 'Scoring 95% in Board exams is a game of writing format accuracy and NCERT mapping. First, establish a subject checklist. Your first revision layer must map every sub-chapter directly out of NCERT exercises. Secondly, solve exactly ten years of board papers. Write them in standard three-hour mock blocks starting at 10 AM, matching actual board timing to calibrate circadian rhythms. Finally, write structured answers. Use bold headings, list numerical solutions in neat boxes, and draw schematic pencil diagrams wherever possible to make checking pleasant for board moderators.',
      readTime: '6 min read',
      date: 'June 15, 2026',
      color: '#FFFBEB',
      textColor: '#D97706'
    },
    {
      id: 3,
      tag: 'Career Guidance',
      title: 'Engineering vs Medical Paths: An Analytical Guideline',
      excerpt: 'A comprehensive comparative analysis of syllabus difficulty, research streams, branch selection, and preparation timelines.',
      content: 'Deciding between JEE and NEET is more than just selecting Math or Biology. Engineering pathways (JEE Main & Advanced) focus heavily on visual problem-solving, structural mathematics, and physical application. Career paths in CSE, Aerospace, and Data Sciences offer fast industry transition. On the other hand, Medical pathways (NEET UG) demand extraordinary memorization capacity, molecular biology detail mapping, and a patient timeline. While engineering gets you career-ready in 4 years, medicine requires 8 to 10 years of consistent investment down to postgraduate residency. Align your preparation with your fundamental interest—whether you love math proofs or organic mechanics.',
      readTime: '8 min read',
      date: 'June 10, 2026',
      color: '#ECFDF5',
      textColor: 'var(--color-success)'
    },
    {
      id: 4,
      tag: 'Time Management',
      title: 'Cracking JEE & NEET While Balancing School Batches',
      excerpt: 'How to structure a cohesive study calendar, handle coaching schedules, and bypass procrastination during peak pressure weeks.',
      content: 'The secret to cracking JEE/NEET while attending school lies in syllabus overlapping. Never treat board syllabus and competitive syllabus as separate blocks. For example, when you cover Thermodynamics in school, solve high-level JEE questions on it at home. Furthermore, establish a strict 3-tiered daily checklist: 1. Core coaching homework (3 hours), 2. Active mock paper checks (1 hour), 3. School homework matching board templates (1 hour). Sleep at least 7 hours; sleep deprivation reduces cognitive processing speed by 30%, which is catastrophic in tests.',
      readTime: '7 min read',
      date: 'June 05, 2026',
      color: '#FDF2F8',
      textColor: '#DB2777'
    },
    {
      id: 5,
      tag: 'Board Prep',
      title: 'Writing Perfect Physics Board Answers: Board Moderator Insights',
      excerpt: 'Detailed analysis of stepwise markings guidelines, formula placements, and drawing clean diagrams to secure full marks.',
      content: 'Board examiners evaluate papers based on step-marking keys. Even if your final answer has a numerical typing error, you can score 90% of the question marks if your steps are structured: 1. Always list the "Given Data" with appropriate SI units first. 2. Write the formula used in a central box. 3. Show step-by-step substitution of figures. 4. State the final numerical answer with standard units. For long derivations, write brief text explanations of what laws are applied at each step, and use clean, labeled diagrams.',
      readTime: '5 min read',
      date: 'May 28, 2026',
      color: '#F5F3FF',
      textColor: '#7C3AED'
    }
  ];

  return (
    <section id="blog" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Knowledge Hub</span>
          <h2>Insights & Academic Blogs</h2>
          <p>Read expert exam tips, learning techniques, and preparation blueprints written by our senior faculty board.</p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}>
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
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
              {/* Card Banner Placeholder */}
              <div style={{
                backgroundColor: article.color,
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--color-border)',
                position: 'relative',
              }}>
                <Sparkles size={36} color={article.textColor} style={{ opacity: 0.25 }} />
                
                {/* Floating Tag */}
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: '#FFFFFF',
                  color: article.textColor,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-border)',
                }}>
                  {article.tag}
                </span>
              </div>

              {/* Card Contents */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                flexGrow: 1,
                textAlign: 'left',
              }}>
                {/* Meta details */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-secondary)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: '1.3',
                }}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: 'var(--color-text-secondary)',
                }}>
                  {article.excerpt}
                </p>

                {/* Read More button */}
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="btn btn-ghost"
                  style={{
                    padding: 0,
                    justifyContent: 'flex-start',
                    fontSize: '0.9rem',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    marginTop: 'auto',
                    backgroundColor: 'transparent',
                    alignSelf: 'flex-start',
                  }}
                >
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Reader Modal Overlay */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(17, 24, 39, 0.6)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '1.5rem',
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-reader-title"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '1rem',
                  width: '100%',
                  maxWidth: '650px',
                  boxShadow: 'var(--shadow-xl)',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  position: 'relative',
                  border: '1px solid var(--color-border)',
                }}
              >
                {/* Header */}
                <div style={{
                  padding: '1.5rem 2rem',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  position: 'sticky',
                  top: 0,
                  backgroundColor: '#FFFFFF',
                  zIndex: 10,
                }}>
                  <div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: selectedArticle.textColor,
                      backgroundColor: selectedArticle.color,
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      display: 'inline-block',
                      marginBottom: '0.5rem',
                    }}>
                      {selectedArticle.tag}
                    </span>
                    <h3 id="article-reader-title" style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.35rem',
                      color: 'var(--color-text-primary)',
                      lineHeight: '1.3',
                    }}>
                      {selectedArticle.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.75rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '0.5rem',
                    }}>
                      <span>{selectedArticle.date}</span>
                      <span>•</span>
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    aria-label="Close article reader"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--color-text-secondary)',
                      padding: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '9999px',
                      transition: 'var(--transition-fast)',
                      flexShrink: 0,
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Article Body */}
                <div style={{ padding: '2rem', textAlign: 'left' }}>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: 'var(--color-text-primary)',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {selectedArticle.content}
                  </p>
                </div>

                {/* Footer close */}
                <div style={{
                  padding: '1.25rem 2rem',
                  borderTop: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg-alt)',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}>
                  <button onClick={() => setSelectedArticle(null)} className="btn btn-outline" style={{ padding: '0.5rem 1.25rem' }}>
                    Close Article
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
