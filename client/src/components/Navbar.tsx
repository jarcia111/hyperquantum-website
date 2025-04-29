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
      <div className="bg-white py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2 w-fit">
            <Logo small color="black" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="hidden sm:block">
            <span className="text-lg sm:text-xl font-bold font-poppins tracking-wider text-white">HYPERQUANTUM</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#servicios" className="text-sm lg:text-base text-primary hover:text-[#00D1FF] transition-colors duration-300">Servicios</a>
            <a href="#nosotros" className="text-sm lg:text-base text-primary hover:text-[#00D1FF] transition-colors duration-300">Nosotros</a>
            <a href="#casos" className="text-sm lg:text-base text-primary hover:text-[#00D1FF] transition-colors duration-300">Casos de éxito</a>
            <a href="#contacto" className="text-sm lg:text-base text-primary hover:text-[#00D1FF] transition-colors duration-300">Contacto</a>
          </nav>
          
          {/* Contact Button */}
          <a href="#contacto" className="hidden md:inline-block bg-[#1B1F3B] hover:bg-[#2A2F57] text-white font-medium text-sm lg:text-base py-2 px-4 lg:px-5 rounded-lg transition-colors duration-300">
            Empezar ahora
          </a>
          
          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden text-primary p-1.5 sm:p-2 rounded-md hover:bg-accent-gray/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden transition-all duration-300 max-h-[80vh] overflow-y-auto", 
        mobileMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
      )}>
        <div className="px-4 pt-2 pb-4 space-y-2 border-t border-accent-gray/10">
          <a href="#servicios" className="block py-2.5 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" className="block py-2.5 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
          <a href="#casos" className="block py-2.5 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Casos de éxito</a>
          <a href="#contacto" className="block py-2.5 px-3 text-primary hover:bg-accent-gray/10 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          <div className="pt-2">
            <a href="#contacto" className="block mt-2 text-center bg-[#1B1F3B] hover:bg-[#2A2F57] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Empezar ahora</a>
          </div>
        </div>
      </div>
    </header>
  );
}
