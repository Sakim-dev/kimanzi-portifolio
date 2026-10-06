import { motion } from 'framer-motion';
import { Code, Database, Cpu, Lightbulb, Compass } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  const focusAreas = [
    {
      icon: <Code size={24} style={{ color: 'var(--color-primary)' }} />,
      title: 'Web Development',
      description: 'Engineering responsive, interactive, and fast user interfaces using modern web methodologies and frameworks.'
    },
    {
      icon: <Database size={24} style={{ color: 'var(--color-accent)' }} />,
      title: 'Database Design',
      description: 'Architecting highly structured, optimized relational schemas using MySQL for secure and reliable data integrity.'
    },
    {
      icon: <Cpu size={24} style={{ color: 'var(--color-primary)' }} />,
      title: 'Software Engineering',
      description: 'Applying algorithmic thinking, clean code principles, and structural patterns to solve computational challenges.'
    },
    {
      icon: <Lightbulb size={24} style={{ color: 'var(--color-accent)' }} />,
      title: 'Continuous Learning',
      description: 'Enthusiastically studying advanced concepts (React, Node.js, Cloud architectures) to expand technological scope.'
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s ease' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Driven by Curiosity & Code</h2>
          <p className="section-subtitle">
            A glance into my passion for computing, my core focus areas, and my vision for the future of software development.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'stretch' }} className="about-grid">
          
          {/* Left Column: Bio & Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600 }}>Who I Am</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                I am a Bachelor of Computer Science student who is deeply enthusiastic about building software systems that make a difference. I believe that writing code is not just about solving syntax errors; it is about engineering experiences that empower users and solve complex real-world problems.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                My technical journey began with structural HTML/CSS and progressed through logic-driven JavaScript, backend database structures with PHP and MySQL, and is currently focused on modern fullstack React architectures.
              </p>
            </div>

            {/* Vision Premium Card */}
            <div className="premium-card glass" style={{
              borderLeft: '4px solid var(--color-primary)',
              marginTop: 'auto'
            }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '0.8rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex'
                }}>
                  <Compass size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>My Long-Term Vision</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    To become a leading software developer globally, designing high-scale digital infrastructures and building impactful software solutions through constant dedication, collaboration, and learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Focus Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }} className="focus-header">Core Areas of Focus</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }} className="focus-list">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card"
                  style={{ 
                    padding: '1.5rem',
                    display: 'flex',
                    gap: '1.2rem',
                    backgroundColor: 'var(--bg-primary)'
                  }}
                >
                  <div style={{
                    minWidth: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {area.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem', fontWeight: 600 }}>{area.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .focus-header {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
