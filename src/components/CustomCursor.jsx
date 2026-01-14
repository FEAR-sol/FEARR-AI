import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    let moveTimeout;

    const updateMousePosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      // Calculate velocity for Cyra's reactions
      if (deltaTime > 0) {
        const vx = (x - lastX) / deltaTime;
        const vy = (y - lastY) / deltaTime;
        setVelocity({ x: vx * 10, y: vy * 10 });
      }

      lastX = x;
      lastY = y;
      lastTime = currentTime;
      setMousePosition({ x, y });
      setIsMoving(true);

      // Reset moving state after a delay
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 150);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover');
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot - Primary Pointer */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          width: '16px',
          height: '16px',
          backgroundColor: '#00d9ff',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cyra Character - Following Behind with Amazing Effects */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y + 20,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          rotate: isMoving ? Math.atan2(velocity.y, velocity.x) * (180 / Math.PI) * 0.1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          delay: 0.05,
        }}
      >
        {/* Cyra's Glow Aura */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%)',
            width: '80px',
            height: '80px',
            left: '-8px',
            top: '-8px',
          }}
          animate={{
            scale: isHovering ? 1.3 : 1,
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* Floating Animation Container */}
        <motion.div
          className="relative w-16 h-16"
          animate={{
            y: [0, -4, 0],
            scaleX: 1 + Math.min(Math.abs(velocity.x) * 0.02, 0.2),
            scaleY: 1 - Math.min(Math.abs(velocity.y) * 0.01, 0.1),
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scaleX: {
              type: 'spring',
              stiffness: 300,
              damping: 20,
            },
            scaleY: {
              type: 'spring',
              stiffness: 300,
              damping: 20,
            },
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Enhanced Glow Filter */}
            <defs>
              <filter id="cyraGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B9DC3"/>
                <stop offset="50%" stopColor="#6B7280"/>
                <stop offset="100%" stopColor="#4B5563"/>
              </linearGradient>
            </defs>

            {/* Cyra's Body with Gradient */}
            <path
              d={isClicking ? 
                "M32 10C20 10 12 18 12 28C12 36 12 42 12 46C12 50 14 54 18 54C22 54 24 52 28 52C30 52 32 53 32 53C32 53 34 52 36 52C40 52 42 54 46 54C50 54 52 50 52 46C52 42 52 36 52 28C52 18 44 10 32 10Z" : 
                "M32 8C20 8 12 16 12 28C12 36 12 44 12 48C12 52 14 56 18 56C22 56 24 54 28 54C30 54 32 55 32 55C32 55 34 54 36 54C40 54 42 56 46 56C50 56 52 52 52 48C52 44 52 36 52 28C52 16 44 8 32 8Z"
              }
              fill="url(#bodyGradient)"
              filter="url(#cyraGlow)"
            />

            {/* Animated Eyes */}
            <motion.circle
              cx="24"
              cy={isClicking ? 27 : 26}
              r="2.5"
              fill="#1F2937"
              animate={{
                scaleY: isClicking ? 0.3 : isHovering ? 1.2 : 1,
              }}
              transition={{ duration: 0.15 }}
            />
            <motion.circle
              cx="40"
              cy={isClicking ? 27 : 26}
              r="2.5"
              fill="#1F2937"
              animate={{
                scaleY: isClicking ? 0.3 : isHovering ? 1.2 : 1,
              }}
              transition={{ duration: 0.15 }}
            />

            {/* Dynamic Smile */}
            <path
              d={isClicking ? 
                "M24 36C24 36 28 40 32 40C36 40 40 36 40 36" :
                isHovering ? 
                "M22 32C22 32 27 39 32 39C37 39 42 32 42 32" : 
                "M24 34C24 34 28 38 32 38C36 38 40 34 40 34"
              }
              stroke="#1F2937"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Animated Blush */}
            <motion.ellipse
              cx="18"
              cy="30"
              rx={isHovering ? 4 : 3}
              ry="2"
              fill="#00d9ff"
              animate={{
                opacity: isHovering ? 0.8 : isClicking ? 0.6 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.ellipse
              cx="46"
              cy="30"
              rx={isHovering ? 4 : 3}
              ry="2"
              fill="#00d9ff"
              animate={{
                opacity: isHovering ? 0.8 : isClicking ? 0.6 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Sparkle in Eyes when Hovering */}
            <AnimatePresence>
              {isHovering && (
                <>
                  <motion.circle
                    cx="25"
                    cy="25"
                    r="0.8"
                    fill="#00d9ff"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.circle
                    cx="39"
                    cy="25"
                    r="0.8"
                    fill="#00d9ff"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </>
              )}
            </AnimatePresence>
          </svg>
        </motion.div>

        {/* Magical Sparkles around Cyra */}
        <AnimatePresence>
          {isHovering && (
            <>
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                  style={{
                    left: `${15 + (i * 12)}%`,
                    top: `${5 + (i % 2) * 15}%`,
                    boxShadow: '0 0 6px rgba(0, 217, 255, 0.8)',
                  }}
                  initial={{ scale: 0, opacity: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -15, -30],
                    x: [0, Math.sin(i) * 10, Math.sin(i) * 20],
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Cyra's Trail Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 217, 255, 0.1), transparent)',
            width: '70px',
            height: '70px',
            left: '-3px',
            top: '-3px',
          }}
          animate={{
            rotate: 360,
            scale: isMoving ? 1.1 : 1,
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 0.3,
            },
          }}
        />
      </motion.div>

      {/* Hover Ring around Main Cursor */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            width: '40px',
            height: '40px',
            border: '2px solid rgba(0, 217, 255, 0.4)',
            borderRadius: '50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;