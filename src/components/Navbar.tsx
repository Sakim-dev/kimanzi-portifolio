import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy and navbar background blur toggle
  useEffect(() => {
    const handleScroll = () => {
      // 1. Toggle scrolled state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Scroll Spy: find which section is currently active
      const scrollPosition = window.scrollY + 200; // Offset for navbar height
      
      for (const link of navLinks) {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`glass`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavLinkClick('#home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.2rem',
            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
          }}>
            SK
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '-0.5px'
          }}>
            Samuel<span style={{ color: 'var(--color-accent)' }}>.K</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.8rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.href); }}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      color: isActive ? 'var(--color-primary)' : 'var(--text-secondary)',
                      position: 'relative',
                      padding: '0.4rem 0'
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--color-accent)',
                          borderRadius: '2px'
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ height: '24px', width: '1px', backgroundColor: 'var(--border-color)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <a 
              href="#resume" 
              className="btn btn-secondary" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              onClick={(e) => { e.preventDefault(); }}
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="mobile-nav-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="btn-icon"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '80px',
              left: 0,
              right: 0,
              backgroundColor: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              zIndex: 999
            }}
          >
            <ul style={{ padding: '1.5rem 2rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.href); }}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: isActive ? 'var(--color-primary)' : 'var(--text-secondary)',
                        display: 'block',
                        padding: '0.4rem 0'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', display: 'flex' }}>
                <a 
                  href="#resume" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.7rem' }}
                  onClick={(e) => { e.preventDefault(); }}
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Injecting CSS specifically for the mobile toggle since we are using Vanilla CSS */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
