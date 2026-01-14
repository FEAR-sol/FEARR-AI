// Professional animation variants for Framer Motion

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const glowEffect = {
  rest: { boxShadow: "0 0 0 rgba(0, 217, 255, 0)" },
  hover: { 
    boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
    transition: { duration: 0.3 }
  }
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};
