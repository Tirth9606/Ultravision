import React, { useState } from 'react';
import { GraduationCap, Send, Check } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from './SocialIcons';

interface FooterProps {
  onPageChange: (page: 'home' | 'courses' | 'results' | 'faculty' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    setError('');
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  const quickLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Programs', target: 'courses' },
    { label: 'Faculty', target: 'faculty' },
    { label: 'Results', target: 'results' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    const homeSections = ['about', 'contact'];
    
    if (target === 'home') {
      onPageChange('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (homeSections.includes(target)) {
      onPageChange('home');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    } else {
      onPageChange(target as any);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-text-primary)',
      color: '#E5E7EB',
      paddingTop: 'var(--spacing-xxl)',
      paddingBottom: '2.5rem',
      borderTop: '1px solid var(--color-border)',
      textAlign: 'left',
    }}>
      <div className="container">
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xxl)',
        }} className="footer-grid">
          
          {/* Col 1: About & Socials */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col footer-col-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                borderRadius: '0.5rem',
                padding: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <GraduationCap size={22} />
              </div>
              ULTRAVISION
            </a>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.6',
              color: '#9CA3AF',
              marginBottom: '1.5rem',
            }}>
              A premium tech-enabled academic coaching academy empowering JEE, NEET, and board aspirants with personalized, concept-first education.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Facebook size={18} />, label: 'Facebook' },
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { icon: <Youtube size={18} />, label: 'YouTube' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={`Follow Ultravision on ${soc.label}`}
                  style={{
                    color: '#9CA3AF',
                    backgroundColor: '#1F2937',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#9CA3AF';
                    e.currentTarget.style.backgroundColor = '#1F2937';
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div style={{ gridColumn: 'span 2' }} className="footer-col">
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>Sitemap</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.target); }}
                    style={{ fontSize: '0.9rem', color: '#9CA3AF', transition: 'var(--transition-fast)' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div style={{ gridColumn: 'span 2.5' }} className="footer-col">
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#9CA3AF' }}>
              <li>
                <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Address:</strong><br />
                401-405, Ultravision Plaza,<br />
                Opp. Science City Entrance,<br />
                Sola, Ahmedabad - 380060
              </li>
              <li>
                <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Phone:</strong><br />
                +91 98765 43210
              </li>
              <li>
                <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Email:</strong><br />
                info@ultravision.edu
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div style={{ gridColumn: 'span 3.5' }} className="footer-col footer-col-4">
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>Academic Newsletter</h4>
            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              Subscribe to get monthly study tips, board blueprints, exam alerts, and scholarship deadlines.
            </p>
            <form onSubmit={handleSubscribe} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', position: 'relative' }}>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Parent or student email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  style={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    color: '#FFFFFF',
                    paddingRight: '3rem',
                    borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
                  }}
                  disabled={isSubscribed}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  aria-label="Subscribe to newsletter"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? <Check size={18} /> : <Send size={18} />}
                </button>
              </div>
              {error && <span style={{ fontSize: '0.75rem', color: 'var(--color-danger)' }}>{error}</span>}
              {isSubscribed && (
                <span style={{ fontSize: '0.8rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  Thank you! You have successfully subscribed.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid #1F2937',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
          color: '#6B7280',
        }} className="footer-bottom">
          <p>© 2026 Ultravision Academy Private Limited. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}>Privacy Policy</a>
            <a href="#" style={{ transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}>Terms & Conditions</a>
            <a href="#" style={{ transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}>Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--spacing-xl) !important;
          }
          .footer-col-1, .footer-col-4 {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-col-1, .footer-col-4 {
            grid-column: span 1 !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};
