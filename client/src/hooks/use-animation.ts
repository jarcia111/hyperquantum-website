import { useState, useEffect } from "react";

type AnimationType = 'float' | 'pulse' | 'spin' | 'none';

export function useAnimation(type: AnimationType = 'none', duration: number = 0) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Start animation
  const startAnimation = () => {
    setIsAnimating(true);
    
    if (duration > 0) {
      setTimeout(() => {
        setIsAnimating(false);
      }, duration);
    }
  };
  
  // Stop animation
  const stopAnimation = () => {
    setIsAnimating(false);
  };
  
  // Auto-start animation
  useEffect(() => {
    if (type !== 'none') {
      startAnimation();
    }
    
    return () => {
      stopAnimation();
    };
  }, [type]);
  
  // CSS class based on animation type
  const getAnimationClass = (): string => {
    if (!isAnimating) return '';
    
    switch (type) {
      case 'float':
        return 'animate-float';
      case 'pulse':
        return 'animate-pulse';
      case 'spin':
        return 'animate-spin-slow';
      default:
        return '';
    }
  };
  
  return { isAnimating, startAnimation, stopAnimation, animationClass: getAnimationClass() };
}
