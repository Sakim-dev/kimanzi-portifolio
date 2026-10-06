import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Apply a spring animation to make the scroll bar transition smoothly
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
        transformOrigin: '0%',
        zIndex: 10000,
        scaleX
      }}
    />
  );
}
