import { useRef, useCallback } from 'react';

export const useThrottle = (callback, delay) => {
  const lastRun = useRef(Date.now());

  return useCallback((...args) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};

export const useAnimationFrame = (callback) => {
  const animationFrame = useRef(null);

  return useCallback((...args) => {
    if (animationFrame.current) return;
    
    animationFrame.current = requestAnimationFrame(() => {
      callback(...args);
      animationFrame.current = null;
    });
  }, [callback]);
};