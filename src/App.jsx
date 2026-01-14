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
import CustomCursor from './components/CustomCursor';

import Chatbot from './components/Chatbot';
import TechMarquee from './components/TechMarquee';
import FAQ from './components/FAQ';
import ClickSpark from './components/ClickSpark';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      
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
      <ClickSpark
        sparkColor="#00d9ff"
        sparkSize={12}
        sparkRadius={25}
        sparkCount={8}
        duration={500}
        easing="ease-out"
        extraScale={1.2}
      >
        <CustomCursor />
        <div className="min-h-screen bg-dark text-white cursor-none relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: '#0a0a0a' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Particle Background */}
              <div className="absolute inset-0">
                {[...Array(150)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 3 + 1 + 'px',
                      height: Math.random() * 3 + 1 + 'px',
                      background: i % 3 === 0 ? '#00d9ff' : i % 3 === 1 ? '#0099ff' : '#00ffff',
                      boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 2 === 0 ? '#00d9ff' : '#0099ff'}`,
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                    animate={{
                      y: [0, Math.random() * 100 - 50],
                      x: [0, Math.random() * 100 - 50],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Central Sphere Animation */}
              <motion.div
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, times: [0, 0.6, 1] }}
              >
                <div className="relative w-64 h-64">
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: '#00d9ff',
                      boxShadow: '0 0 40px #00d9ff, inset 0 0 40px #00d9ff',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Particle Sphere */}
                  {[...Array(80)].map((_, i) => {
                    const angle = (i / 80) * Math.PI * 2;
                    const radius = 120;
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: '3px',
                          height: '3px',
                          background: i % 2 === 0 ? '#00d9ff' : '#0099ff',
                          boxShadow: `0 0 8px ${i % 2 === 0 ? '#00d9ff' : '#0099ff'}`,
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: Math.cos(angle) * radius,
                          y: Math.sin(angle) * radius,
                          scale: [0.5, 1.5, 0.5],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: (i / 80) * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>

              {/* FEAR Text Animation */}
              <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div
                  className="text-8xl font-bold tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {['F', 'E', 'A', 'R'].map((letter, i) => (
                    <motion.span
                      key={i}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 50%, #00ffff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0,
                      }}
                      transition={{ 
                        delay: 0.8 + (i * 0.1),
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Loading Dots */}
                <motion.div 
                  className="flex gap-3 justify-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#00d9ff',
                        borderRadius: '50%',
                        boxShadow: '0 0 15px #00d9ff',
                      }}
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
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
                      <TechMarquee />
                      <Services />
                      <Projects />
                      <Agreement />
                      <FAQ />
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
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;
