import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "./LogoAnimation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled ? "backdrop-blur-md bg-secondary/80 border-b border-accent-gray/10" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo small color="white" />
            <span className="text-xl font-semibold font-poppins tracking-tight hidden sm:inline-block">HYPERQUANTUM</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-primary hover:text-[#00D1FF] transition-colors duration-300">Servicios</a>
            <a href="#nosotros" className="text-primary hover:text-[#00D1FF] transition-colors duration-300">Nosotros</a>
            <a href="#casos" className="text-primary hover:text-[#00D1FF] transition-colors duration-300">Casos de éxito</a>
            <a href="#contacto" className="text-primary hover:text-[#00D1FF] transition-colors duration-300">Contacto</a>
          </nav>
          
          {/* Contact Button */}
          <a href="#contacto" className="hidden md:inline-block bg-[#1B1F3B] hover:bg-[#2A2F57] text-white font-medium py-2 px-5 rounded-lg transition-colors duration-300">
            Empezar ahora
          </a>
          
          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden text-primary p-2 rounded-md hover:bg-accent-gray/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-accent-gray/10">
          <a href="#servicios" className="block py-2 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" className="block py-2 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
          <a href="#casos" className="block py-2 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Casos de éxito</a>
          <a href="#contacto" className="block py-2 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          <a href="#contacto" className="block mt-4 text-center bg-[#1B1F3B] text-white font-medium py-2 px-4 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Empezar ahora</a>
        </div>
      </div>
    </header>
  );
}
