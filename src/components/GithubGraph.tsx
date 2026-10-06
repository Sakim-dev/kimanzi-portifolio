import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCommit, Flame, Trophy } from 'lucide-react';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  milestone?: string;
}

export default function GithubGraph() {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Generate 53 weeks of mock contribution data ending at the current date
  const contributionData = useMemo(() => {
    const data: ContributionDay[] = [];
    const endDate = new Date('2026-06-24'); // Current local time base
    const totalDays = 53 * 7;
    
    // Define some custom milestone dates for the journey
    const milestones: Record<string, string> = {
      '2025-08-12': '🚀 Started learning HTML & CSS!',
      '2025-11-05': '💛 Mastered JavaScript (ES6+)',
      '2026-01-20': '📱 Built first fully responsive website',
      '2026-03-15': '🗄️ Learned MySQL & Database design',
      '2026-05-10': '⚛️ Started learning React & modern frontend',
      '2026-06-20': '🏆 Finished building Portfolio website!'
    };

    for (let i = totalDays - 1; i >= 0; i--) {
      const currentDate = new Date(endDate);
      currentDate.setDate(endDate.getDate() - i);
      const dateString = currentDate.toISOString().split('T')[0];
      
      // Generate realistic coding contribution counts (higher on weekdays, lower on weekends)
      const dayOfWeek = currentDate.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      let count = 0;
      const rand = Math.random();
      
      if (isWeekend) {
        count = rand > 0.7 ? Math.floor(rand * 4) : 0; // 30% chance of weekend coding
      } else {
        count = rand > 0.15 ? Math.floor(rand * 8) + 1 : 0; // 85% chance of weekday coding
      }

      // Ensure milestones have high contribution counts
      if (milestones[dateString]) {
        count = 12;
      }

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 5) level = 2;
      else if (count > 5 && count <= 8) level = 3;
      else if (count > 8) level = 4;

      data.push({
        date: dateString,
        count,
        level,
        milestone: milestones[dateString]
      });
    }
    return data;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Offset relative to the container
    setTooltipPosition({
      x: e.clientX - rect.left + 10,
      y: e.clientY - rect.top - 40
    });
  };

  // Stats
  const totalContributions = contributionData.reduce((acc, day) => acc + day.count, 0);

  // Group into weeks for rendering (53 columns of 7 days)
  const weeks = useMemo(() => {
    const result: ContributionDay[][] = [];
    for (let i = 0; i < contributionData.length; i += 7) {
      result.push(contributionData.slice(i, i + 7));
    }
    return result;
  }, [contributionData]);

  // Color classes map based on theme tokens
  const getSquareBg = (level: 0 | 1 | 2 | 3 | 4, isMilestone: boolean) => {
    if (isMilestone) return 'var(--color-accent)'; // Red for milestone days!
    switch (level) {
      case 0: return 'var(--bg-tertiary)';
      case 1: return 'rgba(37, 99, 235, 0.2)';
      case 2: return 'rgba(37, 99, 235, 0.45)';
      case 3: return 'rgba(37, 99, 235, 0.7)';
      case 4: return 'var(--color-primary)';
      default: return 'var(--bg-tertiary)';
    }
  };

  return (
    <div className="premium-card glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.8rem', position: 'relative' }}>
      
      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }} className="graph-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)'
          }}>
            <GitCommit size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600 }}>Active Contributions</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>GitHub activity visualizer (Brand themed)</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div style={{ display: 'flex', gap: '2rem' }} className="graph-stats">
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)' }}>
              {totalContributions}
            </span>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Yearly Commits
            </span>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem', textAlign: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent)' }}>
              <Flame size={18} fill="var(--color-accent)" /> 42
            </span>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Daily Streak
            </span>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem', textAlign: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <Trophy size={18} style={{ color: '#d97706' }} /> 92
            </span>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Max Streak
            </span>
          </div>
        </div>
      </div>

      {/* Grid Calendar Scroll Container */}
      <div 
        style={{ width: '100%', overflowX: 'auto', paddingBottom: '0.5rem', position: 'relative' }}
        onMouseMove={handleMouseMove}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '720px' }}>
          
          {/* Calendar Grid */}
          <div style={{ display: 'flex', gap: '3px' }}>
            {weeks.map((week, wIndex) => (
              <div key={wIndex} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {week.map((day, dIndex) => {
                  const isMilestone = !!day.milestone;
                  return (
                    <motion.div
                      key={dIndex}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '2px',
                        backgroundColor: getSquareBg(day.level, isMilestone),
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                        border: isMilestone ? '1px solid #ffffff' : 'none'
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Month Labels row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', padding: '0.3rem 0.5rem 0 0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            <span>Jun 2025</span>
            <span>Sep</span>
            <span>Dec</span>
            <span>Mar 2026</span>
            <span>Jun 2026</span>
          </div>
        </div>

        {/* Custom Tooltip */}
        <AnimatePresence>
          {hoveredDay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                backgroundColor: '#111827',
                border: hoveredDay.milestone ? '1px solid var(--color-accent)' : '1px solid #374151',
                borderRadius: '8px',
                padding: hoveredDay.milestone ? '0.6rem 0.9rem' : '0.4rem 0.7rem',
                color: '#ffffff',
                fontSize: '0.8rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                pointerEvents: 'none',
                zIndex: 100,
                whiteSpace: 'nowrap',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem'
              }}
            >
              <span style={{ fontWeight: 600 }}>
                {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}
              </span>
              <span style={{ color: '#9ca3af', fontSize: '0.72rem' }}>
                {new Date(hoveredDay.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              {hoveredDay.milestone && (
                <span style={{ 
                  color: 'var(--color-accent)', 
                  fontWeight: 600, 
                  marginTop: '0.3rem', 
                  borderTop: '1px solid rgba(220, 38, 38, 0.2)', 
                  paddingTop: '0.3rem',
                  fontSize: '0.82rem'
                }}>
                  {hoveredDay.milestone}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend & Guide */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }} className="graph-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
          <span>Hover red squares to view journey milestones</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Less</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '1px' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: 'rgba(37, 99, 235, 0.2)', borderRadius: '1px' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: 'rgba(37, 99, 235, 0.45)', borderRadius: '1px' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: 'rgba(37, 99, 235, 0.7)', borderRadius: '1px' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '1px' }} />
          <span>More</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .graph-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .graph-stats {
            width: 100%;
            justify-content: space-between;
          }
          .graph-stats div:first-child {
            text-align: left;
          }
          .graph-stats div {
            border: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
