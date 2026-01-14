import { motion } from 'framer-motion';

const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
