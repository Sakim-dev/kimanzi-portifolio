import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Decorative Gradients & Grid */}
      <div className="gradient-bg" />
      
      {/* Abstract Animated Tech Circles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -2, pointerEvents: 'none' }}>
        <motion.div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
            top: '10%',
            right: '5%'
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          style={{
            position: 'absolute',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
            bottom: '15%',
            left: '5%'
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} style={{ display: 'inline-flex' }}>
              <span className="section-badge" style={{ marginBottom: 0 }}>
                Aspiring Software Engineer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={itemVariants} 
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.1 }}
            >
              Hi, I'm <span style={{ color: 'var(--color-primary)' }}>Samuel Kimanzi</span>
            </motion.h1>

            {/* Title / Subtitle */}
            <motion.h2 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                fontFamily: "'Inter', sans-serif",
                marginTop: '-0.5rem'
              }}
            >
              Bachelor of Computer Science Student
            </motion.h2>

            {/* Professional Introduction */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                lineHeight: 1.7
              }}
            >
              A passionate developer dedicated to designing and engineering elegant, high-quality, and robust software applications. Specialized in building interactive web experiences and architecting optimized, reliable relational database systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '1rem' }}
            >
              <button 
                onClick={() => handleScrollTo('projects')} 
                className="btn btn-primary"
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="btn btn-secondary"
              >
                Contact Me
              </button>
              <a 
                href="#resume" 
                className="btn btn-accent"
                onClick={(e) => e.preventDefault()}
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons & Email */}
            <motion.div 
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem' }}
            >
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--text-tertiary)' }}>
                Connect:
              </span>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-icon" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-icon" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:samuel@example.com" 
                  className="btn-icon" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

          </motion.div>

          {/* Avatar Portrait Area */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            className="hero-avatar"
          >
            {/* Soft Royal Blue / Red Background Glow Behind Avatar */}
            <div style={{
              position: 'absolute',
              width: '110%',
              height: '110%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(220, 38, 38, 0.05) 50%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(30px)',
              top: '-5%',
              left: '-5%',
              zIndex: -1
            }} />

            {/* Circular Frame Container */}
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              border: '4px solid var(--glass-border)',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              background: 'var(--bg-secondary)',
              transition: 'border-color 0.3s ease'
            }}>
              <img 
                src={profileImg} 
                alt="Samuel Kimanzi portrait" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>

            {/* Micro Floating Tech Badges around Portrait */}
            <motion.div
              style={{
                position: 'absolute',
                top: '15%',
                left: '-5%',
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '0.5rem 1rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ color: 'var(--color-primary)' }}>⚡</span> Web Dev
            </motion.div>

            <motion.div
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '-5%',
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '0.5rem 1rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span style={{ color: 'var(--color-accent)' }}>🗄️</span> Databases
            </motion.div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 4rem !important;
          }
          .hero-avatar {
            order: -1;
          }
          .hero-avatar div {
            width: 250px !important;
            height: 250px !important;
          }
          .hero-avatar .floating-badge {
            display: none !important;
          }
          p {
            margin: 0 auto;
          }
          div[style*="justifyContent: 'flex-start'"] {
            justify-content: center !important;
          }
          div[style*="alignItems: 'center'"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
