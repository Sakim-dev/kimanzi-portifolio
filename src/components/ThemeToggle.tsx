import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="btn-icon"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        outline: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        key={theme}
        initial={{ y: 20, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -20, opacity: 0, rotate: 45 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {theme === 'light' ? (
          <Moon size={20} style={{ strokeWidth: 2 }} />
        ) : (
          <Sun size={20} style={{ strokeWidth: 2 }} />
        )}
      </motion.div>
    </motion.button>
  );
}
