import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const GhostCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [trail, setTrail] = useState([]);
  const trailRef = useRef([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add to trail with timestamp
      trailRef.current = [
        { ...newPosition, id: Date.now() },
        ...trailRef.current.slice(0, 8) // Keep last 8 positions for ghost trail
      ];
      setTrail([...trailRef.current]);
      
      // Check for hover targets
      const target = e.target.closest('[data-cursor]') || 
                    e.target.closest('button') || 
                    e.target.closest('a') ||
                    e.target.closest('input') ||
                    e.target.closest('textarea');
      
      if (target) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor') || 
                    target.getAttribute('aria-label') || 
                    target.textContent?.slice(0, 20) || 
                    'Click';
        setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main Cursor - Arrow Pointer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 40,
          mass: 0.1,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
        >
          {/* Arrow pointer */}
          <path
            d="M5.5 3.21V20.79C5.5 21.17 5.96 21.34 6.24 21.04L11.92 15.36C12.11 15.17 12.39 15.17 12.58 15.36L18.26 21.04C18.54 21.34 19 21.17 19 20.79V3.21C19 2.54 18.46 2 17.79 2H6.21C5.54 2 5 2.54 5 3.21H5.5Z"
            fill={isHovering ? "#00d9ff" : "#ffffff"}
            stroke={isHovering ? "#0099ff" : "#000000"}
            strokeWidth="1"
            style={{
              filter: isHovering 
                ? 'drop-shadow(0 0 8px #00d9ff)' 
                : 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
            }}
          />
          {/* Inner highlight */}
          <path
            d="M7 4V18.5L11.5 14L16 18.5V4H7Z"
            fill={isHovering ? "rgba(0,217,255,0.3)" : "rgba(255,255,255,0.8)"}
          />
        </svg>
      </motion.div>

      {/* Ghost Trail */}
      {trail.map((position, index) => (
        <motion.div
          key={position.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: position.x - 15,
            y: position.y - 10,
            opacity: (1 - index / trail.length) * 0.7,
            scale: (1 - index / trail.length) * 0.9 + 0.3,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          {/* Ghost Body */}
          <svg
            width="30"
            height="35"
            viewBox="0 0 30 35"
            fill="none"
          >
            {/* Ghost shape */}
            <path
              d="M15 5C10.03 5 6 9.03 6 14V25C6 26.1 6.4 27.1 7.1 27.9L9 30L11 27.5L13 30L15 27.5L17 30L19 27.5L21 30L22.9 27.9C23.6 27.1 24 26.1 24 25V14C24 9.03 19.97 5 15 5Z"
              fill={isHovering 
                ? `rgba(0, 217, 255, ${0.6 - index * 0.07})` 
                : `rgba(200, 220, 255, ${0.8 - index * 0.08})`
              }
              stroke={isHovering 
                ? `rgba(0, 153, 255, ${0.8 - index * 0.1})` 
                : `rgba(150, 180, 255, ${0.6 - index * 0.07})`
              }
              strokeWidth="1"
            />
            
            {/* Ghost Eyes */}
            <circle
              cx="11"
              cy="15"
              r="2"
              fill={isHovering ? "#0099ff" : "#6b7280"}
            />
            <circle
              cx="19"
              cy="15"
              r="2"
              fill={isHovering ? "#0099ff" : "#6b7280"}
            />
            
            {/* Ghost Mouth (only on first few trail items) */}
            {index < 3 && (
              <ellipse
                cx="15"
                cy="20"
                rx="3"
                ry="2"
                fill={isHovering ? "#0099ff" : "#6b7280"}
              />
            )}
          </svg>
        </motion.div>
      ))}

      {/* Hover Text */}
      {isHovering && cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: mousePosition.x + 30,
            y: mousePosition.y - 40,
          }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <div className="bg-black/90 backdrop-blur-md border border-primary/30 rounded-lg px-3 py-2 text-sm font-medium shadow-2xl">
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #00d9ff 50%, #ffffff 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {cursorText}
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Floating particles around cursor when hovering */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: '#00d9ff',
                boxShadow: '0 0 6px #00d9ff',
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 20,
                y: Math.sin((i * Math.PI * 2) / 6) * 20,
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default GhostCursor;