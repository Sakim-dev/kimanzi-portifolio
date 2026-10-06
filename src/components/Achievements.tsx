import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import type { Achievement } from '../data/portfolioData';
import { Award, Trophy, Users, Sparkles } from 'lucide-react';
import GithubGraph from './GithubGraph';

export default function Achievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  const getAchievementStyles = (category: Achievement['category']) => {
    switch (category) {
      case 'certification':
        return {
          icon: <Award size={22} style={{ color: 'var(--color-primary)' }} />,
          bg: 'rgba(37, 99, 235, 0.08)',
          border: 'rgba(37, 99, 235, 0.2)'
        };
      case 'challenge':
        return {
          icon: <Trophy size={22} style={{ color: '#d97706' }} />,
          bg: 'rgba(217, 119, 6, 0.08)',
          border: 'rgba(217, 119, 6, 0.2)'
        };
      case 'hackathon':
        return {
          icon: <Users size={22} style={{ color: 'var(--color-accent)' }} />,
          bg: 'rgba(220, 38, 38, 0.08)',
          border: 'rgba(220, 38, 38, 0.2)'
        };
      case 'personal':
        return {
          icon: <Sparkles size={22} style={{ color: '#10b981' }} />,
          bg: 'rgba(16, 185, 129, 0.08)',
          border: 'rgba(16, 185, 129, 0.2)'
        };
      default:
        return {
          icon: <Award size={22} />,
          bg: 'var(--bg-tertiary)',
          border: 'var(--border-color)'
        };
    }
  };

  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s ease' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Milestones</span>
          <h2 className="section-title">Key Achievements</h2>
          <p className="section-subtitle">
            A celebration of certifications, competitive coding achievements, hackathons, and personal initiatives.
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}
          className="achievements-grid"
        >
          {achievementsData.map((achievement, index) => {
            const styles = getAchievementStyles(achievement.category);
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="premium-card"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  borderTop: `3px solid ${achievement.category === 'hackathon' ? 'var(--color-accent)' : 'var(--color-primary)'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: styles.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${styles.border}`
                  }}>
                    {styles.icon}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                    {achievement.date}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.3 }}>{achievement.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {achievement.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Standalone GitHub Section Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%' }}
        >
          <GithubGraph />
        </motion.div>

      </div>
    </section>
  );
}
