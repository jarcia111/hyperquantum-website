import React, { useEffect, useRef } from 'react';

interface SimpleParticlesProps {
  particleCount?: number;
  particleColors?: string[];
  className?: string;
}

const SimpleParticles: React.FC<SimpleParticlesProps> = ({
  particleCount = 50,
  particleColors = ['#00D1FF', '#ffffff', '#4FC3F7'],
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const animationDuration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        opacity: ${Math.random() * 0.8 + 0.2};
        animation: float ${animationDuration}s linear infinite ${delay}s;
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      container.appendChild(particle);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-20px) translateX(10px);
        }
        50% {
          transform: translateY(-10px) translateX(-5px);
        }
        75% {
          transform: translateY(-30px) translateX(15px);
        }
        100% {
          transform: translateY(0px) translateX(0px);
        }
      }
    `;
    
    if (!document.head.querySelector('#simple-particles-styles')) {
      style.id = 'simple-particles-styles';
      document.head.appendChild(style);
    }

    return () => {
      container.innerHTML = '';
    };
  }, [particleCount, particleColors]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
};

export default SimpleParticles;