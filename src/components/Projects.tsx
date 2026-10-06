import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Github } from './CustomIcons';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

// Import custom generated mockups
import projectStudent from '../assets/project-student.png';
import projectPortfolio from '../assets/project-portfolio.png';
import projectLibrary from '../assets/project-library.png';
import projectTodo from '../assets/project-todo.png';
import projectAuth from '../assets/project-auth.png';

const imageMap: Record<string, string> = {
  'project-student': projectStudent,
  'project-portfolio': projectPortfolio,
  'project-library': projectLibrary,
  'project-todo': projectTodo,
  'project-auth': projectAuth
};

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'react' | 'php'>('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'react') {
      return project.technologies.some((t) => t.toLowerCase().includes('react') || t.toLowerCase().includes('framer'));
    }
    if (filter === 'php') {
      return project.technologies.some((t) => t.toLowerCase() === 'php' || t.toLowerCase() === 'mysql');
    }
    return true;
  });

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s ease' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore a curation of software applications I have designed, built, and deployed, representing my learning progress.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }} className="project-filters">
          {(['all', 'react', 'php'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn ${filter === type ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                padding: '0.5rem 1.2rem',
                fontSize: '0.85rem',
                borderRadius: '20px',
                border: filter === type ? '1px solid transparent' : '1px solid var(--border-color)',
                boxShadow: filter === type ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none'
              }}
            >
              {type === 'all' && 'All Projects'}
              {type === 'react' && 'React / TypeScript'}
              {type === 'php' && 'PHP / MySQL'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="premium-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  backgroundColor: 'var(--bg-primary)',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                {/* Project Image Area */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--bg-secondary)',
                  borderBottom: '1px solid var(--border-color)'
                }} className="project-image-container">
                  <img
                    src={imageMap[project.imageName]}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    className="project-image"
                  />
                  
                  {/* Subtle Tech Overlay Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(11, 15, 25, 0.8)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.3rem 0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    <Code2 size={12} style={{ color: 'var(--color-primary)' }} />
                    Source Code
                  </div>
                </div>

                {/* Project Details Area */}
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1.2rem' }}>
                  {/* Title & Description */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 600, letterSpacing: '-0.5px' }}>{project.title}</h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem', gap: '0.4rem' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem', gap: '0.4rem' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Add zoom style on hover using inline CSS */}
      <style>{`
        .premium-card:hover .project-image {
          transform: scale(1.06);
        }
        @media (max-width: 500px) {
          .project-filters {
            flex-direction: column;
            align-items: stretch;
            gap: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
