import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  // Toggle HTML attributes whenever the theme state updates
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* 1. Sophisticated Preloader Screen */}
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        /* 2. Main Portfolio Layout */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navigation Header */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main Layout Sections */}
          <main style={{ flexGrow: 1, paddingTop: '80px' }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Achievements />
            <Contact />
          </main>

          {/* Footer Branding */}
          <Footer />

          {/* Floating Action Button */}
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}
