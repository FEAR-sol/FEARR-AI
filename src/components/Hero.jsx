import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Sparkles, Code, Palette, Zap } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import FloatingElement from './FloatingElement';

const Hero = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Split text animation
  const title = "FEAR Nothing Build Everything with AI";
  const words = title.split(" ");

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-dark via-darkGray to-dark"
        style={{ y }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Enhanced Floating Particles with Trails */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {/* Main Particle */}
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 10, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
              
              {/* Particle Trail */}
              <motion.div
                className="absolute w-0.5 h-4 bg-gradient-to-t from-primary/50 to-transparent rounded-full"
                style={{ left: '50%', top: '100%', transformOrigin: 'top' }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2 + 0.1,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Constellation Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`constellation-${i}`}
              className="absolute w-px h-px bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Enhanced Gradient Orbs with Morphing */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Simplified Floating Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl"
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Icons */}
        <FloatingElement delay={0} duration={4}>
          <div className="absolute top-20 left-10 opacity-20">
            <Code size={40} className="text-primary" />
          </div>
        </FloatingElement>
        <FloatingElement delay={1} duration={5}>
          <div className="absolute top-40 right-20 opacity-20">
            <Palette size={35} className="text-secondary" />
          </div>
        </FloatingElement>
        <FloatingElement delay={2} duration={4.5}>
          <div className="absolute bottom-40 left-20 opacity-20">
            <Zap size={30} className="text-primary" />
          </div>
        </FloatingElement>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated Title */}
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.1 + i * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {word === "FEAR" || word === "Everything" || word === "AI" ? (
                  <span className="text-gradient relative">
                    {word}
                    <motion.span
                      className="absolute -top-2 -right-2"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles size={20} className="text-primary" />
                    </motion.span>
                  </span>
                ) : word}
              </motion.span>
            ))}
          </div>

          {/* FEAR Tagline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
              data-cursor="Face Everything And Rise"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">FEAR</span>
              <span className="text-gray-400 text-sm md:text-base">—</span>
              <span className="text-gray-300 text-sm md:text-base font-medium">
                Face Everything And Rise
              </span>
            </motion.div>
          </motion.div>
          
          {/* Subtitle with Typewriter Effect */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A professional <span className="text-primary font-semibold">AI Development Agency</span> specializing in custom AI models, automation, chatbots, and intelligent business solutions.
          </motion.p>

          {/* Fast Delivery Badge - AI Themed */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Basic Sites Badge */}
            <motion.div 
              className="relative glass px-5 py-3 rounded-full flex items-center gap-2 overflow-hidden group"
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              data-cursor="AI Automation"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.15) 0%, transparent 70%)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pulsing Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className="w-5 h-5 text-yellow-400" style={{ filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.6))' }} />
              </motion.div>
              
              <span className="text-sm font-bold relative z-10 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                AI Automation
              </span>
            </motion.div>

            {/* Professional Badge */}
            <motion.div 
              className="relative glass px-5 py-3 rounded-full flex items-center gap-2 overflow-hidden group"
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              data-cursor="AI Chatbot"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Rotating Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <Sparkles className="w-5 h-5 text-purple-400" style={{ filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.6))' }} />
              </motion.div>
              
              <span className="text-sm font-bold relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Chatbot
              </span>
              
              {/* Particle Effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-purple-400"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: '50%',
                  }}
                  animate={{
                    y: [-10, -25, -10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>

            {/* E-commerce & Apps Badge */}
            <motion.div 
              className="relative glass px-5 py-3 rounded-full flex items-center gap-2 overflow-hidden group"
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              data-cursor="AI Customization"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pulsing Icon with Code Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Code className="w-5 h-5 text-green-400" style={{ filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))' }} />
              </motion.div>
              
              <span className="text-sm font-bold relative z-10 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                AI Customization
              </span>
              
              {/* Binary Code Animation */}
              <motion.div
                className="absolute right-2 top-1/2 -translate-y-1/2 text-green-400 text-xs font-mono opacity-30"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {['1', '0', '1'].map((bit, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  >
                    {bit}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Circuit Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          {/* CTA Button with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative inline-block"
          >
            <Link to="contact" smooth={true} offset={-80} duration={500}>
              <MagneticButton className="group glass px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto relative overflow-hidden"
                data-cursor="Let's Build Together!"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.3) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                />
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Build Together
                </motion.span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight className="relative z-10" size={20} />
                </motion.div>
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
