import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoBlack from "@/assets/logos/logo-black.svg";
import LogoWhite from "@/assets/logos/logo-white.svg";
import LogoCyan from "@/assets/logos/logo-cyan.svg";

interface LogoAnimationProps {
  small?: boolean;
  large?: boolean;
  className?: string;
  color?: "white" | "black" | "cyan";
}

export default function LogoAnimation({ small, large, className, color = "cyan" }: LogoAnimationProps) {
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
        duration: 0.5
      }
    }
  };
  
  // Select the logo based on color prop
  const getLogo = () => {
    switch (color) {
      case "white":
        return LogoWhite;
      case "black":
        return LogoBlack;
      case "cyan":
      default:
        return LogoCyan;
    }
  };
  
  const Logo = getLogo();
  const size = large ? "w-64 h-64" : small ? "w-10 h-10" : "w-32 h-32";
  
  return (
    <motion.div 
      className={`relative ${size} ${className || ""}`}
      onMouseEnter={handleHover}
      initial="hidden"
      animate="visible"
      variants={logoVariants}
    >
      <motion.img 
        src={Logo}
        alt="Hyperquantum Logo"
        className={`${large && isAnimating ? "animate-spin-slow" : ""} w-full h-full`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: isAnimating ? 360 : 0 
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          rotate: { duration: isAnimating ? 8 : 0, ease: "linear", repeat: isAnimating ? Infinity : 0 }
        }}
      />
      
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
