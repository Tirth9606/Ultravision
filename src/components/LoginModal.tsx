import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close modal on Esc key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'Email address or Student ID is required';
    } else if (email.includes('@') && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        // Clear fields
        setEmail('');
        setPassword('');
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
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
          aria-labelledby="login-title"
        >
          <motion.div
            className="modal-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '1rem',
              width: '100%',
              maxWidth: '440px',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid var(--color-border)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem 2rem 1rem 2rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 id="login-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>
                  Student Portal
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                  Access your course details, tests & reports
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close login portal"
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
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div style={{ padding: '2rem' }}>
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '2rem 0',
                    }}
                  >
                    <CheckCircle size={56} color="var(--color-success)" style={{ marginBottom: '1rem' }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                      Login Successful
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      Redirecting to your student dashboard...
                    </p>
                  </motion.div>
                ) : (
                  <motion.form onSubmit={handleSubmit} noValidate>
                    {/* Username/Email */}
                    <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="login-email" className="form-label">
                        Email Address or Roll Number
                      </label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={18} color="var(--color-text-secondary)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          id="login-email"
                          type="text"
                          className="form-input"
                          placeholder="student@ultravision.edu"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          style={{ paddingLeft: '2.75rem' }}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "login-email-error" : undefined}
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.email && (
                        <span id="login-email-error" className="form-error-msg">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Password */}
                    <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="login-password" className="form-label">
                        Password
                      </label>
                      <div style={{ position: 'relative' }}>
                        <Lock size={18} color="var(--color-text-secondary)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          className="form-input"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors({ ...errors, password: undefined });
                          }}
                          style={{ paddingLeft: '2.75rem', paddingRight: '2.75rem' }}
                          aria-invalid={!!errors.password}
                          aria-describedby={errors.password ? "login-password-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--color-text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {errors.password && (
                        <span id="login-password-error" className="form-error-msg">
                          {errors.password}
                        </span>
                      )}
                    </div>

                    {/* Remember me & Forgot Password */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.75rem',
                      fontSize: '0.875rem',
                    }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--color-text-secondary)' }}>
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          style={{ accentColor: 'var(--color-primary)', width: '16px', height: '16px' }}
                          disabled={isSubmitting}
                        />
                        Remember me
                      </label>
                      <a
                        href="#forgot-password"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Password reset link sent to your registered email if it exists.');
                        }}
                        style={{
                          color: 'var(--color-primary)',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                        }}
                      >
                        Forgot Password?
                      </a>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1.5rem',
                        fontSize: '1rem',
                        position: 'relative',
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Verifying Credentials...' : 'Login to Dashboard'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            
            {/* Footer Banner */}
            <div style={{
              backgroundColor: 'var(--color-bg-alt)',
              padding: '1.25rem 2rem',
              borderTop: '1px solid var(--color-border)',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
            }}>
              Don't have your login credentials? <br />
              <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Contact administration office</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
