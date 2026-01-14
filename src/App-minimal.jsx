import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Agreement from './components/Agreement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

import Chatbot from './components/Chatbot';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '2rem', color: '#ff4444' }}>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark text-white">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ backgroundColor: '#0a0a0a' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-6xl font-bold mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  FEAR
                </motion.div>
                <motion.div className="flex gap-2 justify-center">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#00d9ff',
                        borderRadius: '50%',
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen bg-dark text-white relative"
            >
              <ScrollProgress />
              <Chatbot />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Navbar />
                      <Hero />
                      <Services />
                      <Projects />
                      <Agreement />
                      <Contact />
                      <Footer />
                    </motion.div>
                  } />

                </Routes>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
