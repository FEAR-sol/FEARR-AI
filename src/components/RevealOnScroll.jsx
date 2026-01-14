import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const RevealOnScroll = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.95,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1,
      } : {}}
      transition={{ 
        delay, 
        duration,
        type: 'spring',
        stiffness: 100,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
