import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  const handleMouse = useCallback((e) => {
    if (animationFrame.current) return;
    
    animationFrame.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const middleX = left + width / 2;
      const middleY = top + height / 2;
      const offsetX = ((clientX - middleX) / width) * 45;
      const offsetY = ((clientY - middleY) / height) * 45;
      setPosition({ x: offsetX, y: offsetY });
      animationFrame.current = null;
    });
  }, []);

  const reset = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
