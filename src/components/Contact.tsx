import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }

    if (!formData.subject) newErrors.subject = 'Please select a subject of query';
    if (!formData.message.trim()) newErrors.message = 'Please type your message details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API query submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Get in Touch</span>
          <h2>Contact Our Center</h2>
          <p>Have questions about courses, batch timings, or demo lectures? Write to us, schedule a call, or visit our administrative center directly.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'var(--spacing-xl)',
        }} className="contact-grid">
          
          {/* Left Column: Details & Map */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '2rem' }} className="contact-details-col">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-accent-light)', padding: '0.5rem', borderRadius: 'var(--radius-md)', display: 'flex' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Our Address</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      401-405, Ultravision Plaza, <br />
                      Opposite Science City Main Entrance, <br />
                      Sola, Ahmedabad, Gujarat - 380060
                    </p>
                  </div>
                </div>

                {/* Call/WhatsApp */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-accent-light)', padding: '0.5rem', borderRadius: 'var(--radius-md)', display: 'flex' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Call & WhatsApp</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      Admissions: +91 98765 43210 <br />
                      Front Office: +91 79 1234 5678
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-accent-light)', padding: '0.5rem', borderRadius: 'var(--radius-md)', display: 'flex' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Email Enquiries</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      admissions@ultravision.edu <br />
                      support@ultravision.edu
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-accent-light)', padding: '0.5rem', borderRadius: 'var(--radius-md)', display: 'flex' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Office Timings</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      Monday - Saturday: 9:00 AM - 8:00 PM <br />
                      Sunday: 10:00 AM - 2:00 PM (Counseling Only)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder (Styled professionally as requested) */}
            <div style={{
              height: '240px',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              {/* Map grid representation */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.7,
                zIndex: 1,
              }} />
              
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  boxShadow: 'var(--shadow-md)',
                  color: 'var(--color-primary)',
                }}>
                  <MapPin size={24} />
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Science City Road, Ahmedabad</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', maxWidth: '280px' }}>
                  Interactive Google Map embedded in production. Locate us across Science City main entrance.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    padding: '0.4rem 1rem',
                    fontSize: '0.8rem',
                    marginTop: '0.25rem',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col">
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-lg)',
              padding: '2.5rem 3rem',
              height: '100%',
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send Us a Message</h3>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '4rem 0',
                    }}
                  >
                    <CheckCircle size={56} color="var(--color-success)" style={{ marginBottom: '1.25rem' }} />
                    <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                      Message Sent Successfully!
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '350px' }}>
                      Thank you for contacting us. Our representative will email or call you within 2-3 working hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">Full Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Ex: Aarav Patel"
                        value={formData.name}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        disabled={isSubmitting}
                      />
                      {errors.name && <span id="contact-name-error" className="form-error-msg">{errors.name}</span>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="form-row-2">
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">Email Address</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          disabled={isSubmitting}
                        />
                        {errors.email && <span id="contact-email-error" className="form-error-msg">{errors.email}</span>}
                      </div>

                      {/* Phone */}
                      <div className="form-group">
                        <label htmlFor="contact-phone" className="form-label">Contact Number</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="10-digit Mobile"
                          value={formData.phone}
                          onChange={handleInputChange}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                          disabled={isSubmitting}
                        />
                        {errors.phone && <span id="contact-phone-error" className="form-error-msg">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="form-group">
                      <label htmlFor="contact-subject" className="form-label">Query Subject</label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                        disabled={isSubmitting}
                      >
                        <option value="">Choose query category...</option>
                        <option value="admissions">Admission Eligibility</option>
                        <option value="scholarships">USDT Scholarship Test</option>
                        <option value="fees">Fee structures & timing</option>
                        <option value="complaints">Student portal assistance</option>
                        <option value="general">Other General Enquiry</option>
                      </select>
                      {errors.subject && <span id="contact-subject-error" className="form-error-msg">{errors.subject}</span>}
                    </div>

                    {/* Message */}
                    <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                      <label htmlFor="contact-message" className="form-label">Message Details</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-input"
                        rows={4}
                        placeholder="Detail your question or academic background..."
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{ resize: 'vertical' }}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        disabled={isSubmitting}
                      />
                      {errors.message && <span id="contact-message-error" className="form-error-msg">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1.5rem',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      <Send size={18} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-details-col {
            grid-column: span 12 !important;
          }
          .contact-form-col {
            grid-column: span 12 !important;
            margin-top: 1.5rem;
          }
        }
        @media (max-width: 576px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .contact-form-col div {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
