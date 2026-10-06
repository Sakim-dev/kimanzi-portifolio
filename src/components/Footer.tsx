import { Mail } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 0',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.8rem' }}>
        
        {/* Logo Icon Link */}
        <a 
          href="#home" 
          onClick={handleScrollToTop}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem'
          }}>
            SK
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '-0.5px'
          }}>
            Samuel<span style={{ color: 'var(--color-accent)' }}>.K</span>
          </span>
        </a>

        {/* Social Media Links */}
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)' }}
            className="footer-social"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)' }}
            className="footer-social"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:samuel@example.com"
            style={{ color: 'var(--text-secondary)' }}
            className="footer-social"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Text Credits Row */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%', 
            borderTop: '1px solid var(--border-color)', 
            paddingTop: '1.8rem', 
            fontSize: '0.88rem', 
            color: 'var(--text-secondary)',
            flexWrap: 'wrap',
            gap: '1rem',
            textAlign: 'center'
          }} 
          className="footer-credits"
        >
          <span>
            &copy; {currentYear} Samuel Kimanzi. All rights reserved.
          </span>
          <span style={{ fontWeight: 500 }}>
            Designed and Developed by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Samuel Kimanzi</span>
          </span>
        </div>

      </div>

      <style>{`
        .footer-social {
          transition: all 0.2s ease;
        }
        .footer-social:hover {
          color: var(--color-accent) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 600px) {
          .footer-credits {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
