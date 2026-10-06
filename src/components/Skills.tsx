import { motion } from 'framer-motion';
import { skillsData, learningSkillsData } from '../data/portfolioData';
import { Terminal, Database as DbIcon, Monitor, Settings, Zap } from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend':
        return <Monitor size={22} className="text-gradient" style={{ color: 'var(--color-primary)' }} />;
      case 'backend':
        return <Terminal size={22} style={{ color: 'var(--color-accent)' }} />;
      case 'database':
        return <DbIcon size={22} style={{ color: 'var(--color-primary)' }} />;
      case 'tools':
        return <Settings size={22} style={{ color: 'var(--color-accent)' }} />;
      default:
        return <Zap size={22} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="gradient-bg" />
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Skill Set</span>
          <h2 className="section-title">My Technical Toolkit</h2>
          <p className="section-subtitle">
            A breakdown of languages, databases, tools, and libraries that I leverage to build functional software.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}
          className="skills-grid"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="premium-card"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)'
                }}>
                  {getCategoryIcon(category.title)}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{category.title}</h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 99, 235, 0.08)', borderColor: 'var(--color-primary)' }}
                    style={{
                      padding: '0.4rem 0.9rem',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '20px',
                      cursor: 'default',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="premium-card glass"
          style={{
            marginTop: '3.5rem',
            padding: '2.5rem',
            textAlign: 'center',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-premium)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Glowing Background Accents */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
            top: '-50px',
            left: '-50px',
            zIndex: -1
          }} />
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.06) 0%, transparent 70%)',
            bottom: '-50px',
            right: '-50px',
            zIndex: -1
          }} />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 0 10px var(--color-accent)'
            }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Currently Expanding My Stack</h3>
          </div>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 1.8rem auto', fontSize: '1rem' }}>
            To expand my software engineering capabilities, I am actively building projects and studying modern full-stack JavaScript frameworks and database models.
          </p>

          {/* Glowing Capsule Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
            {learningSkillsData.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  scale: 1.08, 
                  boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.15)',
                  borderColor: 'var(--color-primary)'
                }}
                style={{
                  padding: '0.6rem 1.6rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--color-primary)',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>●</span>
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
