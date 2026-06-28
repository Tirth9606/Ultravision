import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'courses' | 'results' | 'faculty' | 'contact';
  onPageChange: (page: 'home' | 'courses' | 'results' | 'faculty' | 'contact') => void;
  onOpenAdmission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, onOpenAdmission }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll detection for navbar shrink and shadow trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'why-us', 'courses', 'methodology', 'faculty', 'results', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Courses', target: 'courses' },
    { label: 'Faculty', target: 'faculty' },
    { label: 'Results', target: 'results' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setIsMobileMenuOpen(false);
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
    <header style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 500,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'var(--transition-normal)',
      padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            color: 'var(--color-primary)',
            fontWeight: 800,
            fontSize: '1.4rem',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-heading)',
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

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
            listStyle: 'none',
          }}>
            {navLinks.map((link) => {
              const isActive = currentPage === link.target || (currentPage === 'home' && activeSection === link.target);
              return (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.target); }}
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      position: 'relative',
                      padding: '0.25rem 0',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                      }
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '1px',
                      }} />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.875rem' }} className="desktop-actions">
          <button 
            onClick={onOpenAdmission}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.125rem',
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}
          >
            Admission Open
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.375rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
            transition: 'var(--transition-fast)',
          }}
          className="mobile-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          zIndex: 499,
          maxHeight: 'calc(100vh - 70px)',
          overflowY: 'auto',
        }} className="mobile-menu-drawer">
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            listStyle: 'none',
          }}>
            {navLinks.map((link) => {
              const isActive = currentPage === link.target || (currentPage === 'home' && activeSection === link.target);
              return (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.target); }}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                      display: 'block',
                      padding: '0.25rem 0',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenAdmission(); }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Apply Online Admission
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* CSS overrides for show/hide classes (since tailwind isn't used) */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
