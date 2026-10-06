import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFinished(true), 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            backgroundColor: '#0b0f19',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            overflow: 'hidden'
          }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Spinning Outer Ring */}
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid transparent',
                borderTopColor: '#2563eb',
                borderBottomColor: '#dc2626'
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />

            {/* Glowing Logo Initials */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '2.2rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '1px',
                background: 'linear-gradient(135deg, #2563eb 0%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.4))'
              }}
            >
              SK
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <motion.div
            style={{
              marginTop: '2rem',
              fontSize: '1.2rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: '2px',
              color: '#9ca3af'
            }}
          >
            {Math.round(progress)}%
          </motion.div>

          {/* Progress Bar Container */}
          <div style={{
            width: '200px',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: '1rem',
            borderRadius: '1px',
            overflow: 'hidden'
          }}>
            <motion.div
              style={{
                height: '100%',
                backgroundColor: '#2563eb',
                width: `${progress}%`,
                backgroundImage: 'linear-gradient(90deg, #2563eb, #dc2626)'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
