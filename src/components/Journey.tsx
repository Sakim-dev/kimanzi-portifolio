import { motion } from 'framer-motion';
import { educationData, learningJourneyData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Milestone } from 'lucide-react';

export default function Journey() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="journey" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Growth Path</span>
          <h2 className="section-title">Education & Learning Journey</h2>
          <p className="section-subtitle">
            A comprehensive look at my academic background and self-directed path as an aspiring software engineer.
          </p>
        </div>

        {/* Dual Timeline Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '4rem', alignItems: 'start' }} className="journey-grid">
          
          {/* Education Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>Academic Foundation</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
              {/* Timeline Connector Line */}
              <div style={{
                position: 'absolute',
                left: '4px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                backgroundColor: 'var(--border-color)'
              }} />

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Bullet Node */}
                  <div style={{
                    position: 'absolute',
                    left: '-23px',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.2)'
                  }} />

                  {/* Content Card */}
                  <div className="premium-card" style={{ padding: '1.8rem', backgroundColor: 'var(--bg-secondary)' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px',
                      display: 'inline-block',
                      marginBottom: '0.8rem'
                    }}>
                      {edu.year}
                    </span>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.3rem', fontWeight: 600 }}>{edu.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.8rem' }}>
                      {edu.institutionOrDetail}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Passion Statement Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="premium-card glass"
              style={{
                marginTop: '1.5rem',
                borderLeft: '4px solid var(--color-accent)',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <BookOpen size={22} style={{ color: 'var(--color-accent)', marginTop: '0.2rem', flexShrink: 0 }} />
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "My academic journey is backed by an intense curiosity to understand the inner workings of computer systems. I constanty supplement my coursework with hands-on practice, tackling projects that challenge me to design reliable database architectures and write performance-driven, clean software code."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Learning Journey Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)'
              }}>
                <Milestone size={22} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>Technical Learning Journey</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', paddingLeft: '1.5rem' }}
            >
              {/* Timeline Connector Line */}
              <div style={{
                position: 'absolute',
                left: '4px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                backgroundColor: 'var(--border-color)'
              }} />

              {learningJourneyData.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Bullet Node */}
                  <div style={{
                    position: 'absolute',
                    left: '-23px',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: index === learningJourneyData.length - 1 ? 'var(--color-accent)' : 'var(--text-tertiary)',
                    boxShadow: index === learningJourneyData.length - 1 ? '0 0 0 4px rgba(220, 38, 38, 0.2)' : 'none',
                    transition: 'all 0.3s ease'
                  }} />

                  {/* Content Card */}
                  <div className="premium-card" style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'var(--bg-primary)',
                    borderLeft: index === learningJourneyData.length - 1 ? '2px solid var(--color-accent)' : '1px solid var(--border-color)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 600 }}>{milestone.title}</h4>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: index === learningJourneyData.length - 1 ? 'var(--color-accent)' : 'var(--text-secondary)',
                        backgroundColor: index === learningJourneyData.length - 1 ? 'rgba(220, 38, 38, 0.08)' : 'var(--bg-secondary)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '10px'
                      }}>
                        {milestone.year}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
