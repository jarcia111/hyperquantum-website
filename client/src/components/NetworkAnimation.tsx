import { useEffect, useRef } from "react";

export default function NetworkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let dots: HTMLDivElement[] = [];
    
    // Create initial dots
    const createInitialDots = () => {
      for (let i = 0; i < 20; i++) {
        createDot();
      }
    };
    
    // Create a single dot
    const createDot = () => {
      const dot = document.createElement('div');
      dot.classList.add('network-dot');
      
      // Random size
      const size = Math.floor(Math.random() * 6) + 3;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      
      // Random position
      const posX = Math.floor(Math.random() * 100);
      const posY = Math.floor(Math.random() * 100);
      dot.style.left = `${posX}%`;
      dot.style.top = `${posY}%`;
      
      // Random animation delay
      dot.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(dot);
      dots.push(dot);
      
      // Remove dot after animation to prevent memory issues
      setTimeout(() => {
        if (dot.parentNode === container) {
          container.removeChild(dot);
          dots = dots.filter(d => d !== dot);
        }
      }, 10000);
    };
    
    createInitialDots();
    
    // Continue creating dots
    const interval = setInterval(createDot, 1000);
    
    return () => {
      clearInterval(interval);
      dots.forEach(dot => {
        if (dot.parentNode === container) {
          container.removeChild(dot);
        }
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="network-animation fixed inset-0 overflow-hidden pointer-events-none z-0" 
      aria-hidden="true"
    />
  );
}
