import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LogoAnimationProps {
  small?: boolean;
  large?: boolean;
  className?: string;
}

export default function LogoAnimation({ small, large, className }: LogoAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Start animation when component mounts
  useEffect(() => {
    setIsAnimating(true);
    
    // For performance, stop the animation after 10 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Restart animation when hovered
  const handleHover = () => {
    setIsAnimating(true);
  };
  
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };
  
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  
  const size = large ? "w-64 h-64" : small ? "w-10 h-10" : "w-32 h-32";
  
  return (
    <motion.div 
      className={`relative ${size} ${className || ""}`}
      onMouseEnter={handleHover}
      initial="hidden"
      animate={isAnimating ? "visible" : "visible"}
      variants={logoVariants}
    >
      <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${large ? "animate-spin-slow" : ""} w-full h-full`}
      >
        {/* Central Node */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="6" 
          fill="#00D1FF"
          variants={nodeVariants}
        />
        
        {/* Main Nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const x = 50 + 30 * Math.cos(angle * Math.PI / 180);
          const y = 50 + 30 * Math.sin(angle * Math.PI / 180);
          
          return (
            <motion.g key={i}>
              {/* Connection Line */}
              <motion.line 
                x1="50" 
                y1="50" 
                x2={x} 
                y2={y} 
                stroke="#00D1FF" 
                strokeWidth="1.5"
                variants={lineVariants}
              />
              
              {/* Node */}
              <motion.circle 
                cx={x} 
                cy={y} 
                r="4" 
                fill="#FFFFFF"
                variants={nodeVariants}
              />
            </motion.g>
          );
        })}
        
        {/* Small Nodes */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
          const x = 50 + 15 * Math.cos(angle * Math.PI / 180);
          const y = 50 + 15 * Math.sin(angle * Math.PI / 180);
          
          return (
            <motion.circle 
              key={`small-${i}`}
              cx={x} 
              cy={y} 
              r="2" 
              fill="#FFFFFF"
              variants={nodeVariants}
            />
          );
        })}
      </svg>
      
      {/* Show text HYPERQUANTUM for large logo */}
      {large && (
        <motion.div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 text-white text-2xl font-bold font-poppins tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          HYPERQUANTUM
        </motion.div>
      )}
    </motion.div>
  );
}
