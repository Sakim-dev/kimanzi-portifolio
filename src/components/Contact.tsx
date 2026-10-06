import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="gradient-bg" />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have an opportunity, a project idea, or just want to say hello? Drop a message, and I will get back to you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '4rem', alignItems: 'stretch' }} className="contact-grid">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600 }}>Let's Chat!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I am always open to discussing new projects, internship roles, creative ideas, or opportunities in software engineering.
              </p>
            </div>

            {/* Information Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Email */}
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  border: '1px solid rgba(37, 99, 235, 0.15)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Me
                  </span>
                  <a href="mailto:samuel@example.com" style={{ fontSize: '1.05rem', fontWeight: 600 }} className="contact-link">
                    samuel@example.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(220, 38, 38, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(220, 38, 38, 0.15)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Location
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Nairobi, Kenya
                  </span>
                </div>
              </div>

            </div>

            {/* Social Media Row */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--text-tertiary)' }}>
                Find me on social media
              </span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <Github size={16} />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card glass"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                  noValidate
                >
                  {/* Name Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="name" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: errors.name ? '1px solid var(--color-accent)' : '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s ease'
                      }}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.1rem' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="email" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: errors.email ? '1px solid var(--color-accent)' : '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s ease'
                      }}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.1rem' }}>
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="subject" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: errors.subject ? '1px solid var(--color-accent)' : '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s ease'
                      }}
                      placeholder="Opportunity or Collaboration"
                    />
                    {errors.subject && (
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.1rem' }}>
                        <AlertCircle size={12} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="message" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: errors.message ? '1px solid var(--color-accent)' : '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        resize: 'vertical',
                        lineHeight: 1.5,
                        transition: 'border-color 0.2s ease'
                      }}
                      placeholder="Hi Samuel, I would love to talk about..."
                    />
                    {errors.message && (
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.1rem' }}>
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      marginTop: '0.5rem',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem 0',
                    gap: '1.2rem'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    style={{ color: 'var(--color-accent)' }}
                  >
                    <CheckCircle size={64} fill="rgba(220, 38, 38, 0.1)" />
                  </motion.div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent Successfully!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.5, maxWidth: '400px', margin: '0 auto' }}>
                      Thank you for reaching out, Samuel. Your message has been sent, and he will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn btn-secondary"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem', marginTop: '1rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <style>{`
        input:focus, textarea:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        .contact-link:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
