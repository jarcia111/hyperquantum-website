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
      scrolled ? "backdrop-blur-md bg-secondary/80 dark:bg-black/20 border-b border-accent-gray/10 dark:border-gray-700/30" : "bg-transparent"
    )}>
      <div className="flex">
        {/* Logo - fondo adapta al tema */}
        <div className="bg-white dark:bg-gray-900 py-2 sm:py-3 md:py-4 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] transition-colors duration-300">
          <div className="container mx-auto px-2 sm:px-4 flex justify-center">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Logo small color="black" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 dark:invert" />
            </Link>
          </div>
        </div>
        
        {/* Menú principal - mejorado para responsive */}
        <div className="flex-1 bg-[#F5F7FA] dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center h-full py-2 sm:py-3 md:py-4">
              <div className="hidden sm:block">
                <span className="text-base sm:text-lg md:text-xl font-bold font-poppins tracking-wider text-primary dark:text-[#00D1FF] truncate transition-colors duration-300">
                  HYPERQUANTUM
                </span>
              </div>
              
              {/* Desktop Navigation - espaciado optimizado */}
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                <a href="#servicios" className="text-sm lg:text-base text-primary dark:text-gray-300 hover:text-[#00D1FF] dark:hover:text-[#00D1FF] transition-colors duration-300 whitespace-nowrap">
                  Servicios
                </a>
                <a href="#nosotros" className="text-sm lg:text-base text-primary dark:text-gray-300 hover:text-[#00D1FF] dark:hover:text-[#00D1FF] transition-colors duration-300 whitespace-nowrap">
                  Nosotros
                </a>
                <a href="#casos" className="text-sm lg:text-base text-primary hover:text-[#00D1FF] transition-colors duration-300 whitespace-nowrap">
                  Casos de éxito
                </a>
                <a href="#contacto" className="text-sm lg:text-base text-primary hover:text-[#00D1FF] transition-colors duration-300 whitespace-nowrap">
                  Contacto
                </a>
              </nav>
              
              {/* Contact Button - responsive */}
              <a 
                href="#contacto" 
                className="hidden md:inline-block bg-[#1B1F3B] hover:bg-[#2A2F57] text-white font-medium text-xs sm:text-sm lg:text-base py-1.5 sm:py-2 px-3 sm:px-4 lg:px-5 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Empezar ahora
              </a>
            </div>
          </div>
        </div>
        
        {/* Botón de hamburguesa en móvil - mejor responsividad */}
        <div className="md:hidden flex items-center h-full bg-[#F5F7FA] px-2 sm:px-3">
          <button 
            type="button" 
            className="text-primary p-1 sm:p-1.5 rounded-md hover:bg-accent-gray/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Menú móvil desplegable - optimizado */}
      <div 
        className={cn(
          "md:hidden transition-all duration-300 max-h-[80vh] overflow-y-auto bg-[#F5F7FA]", 
          mobileMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        )}
      >
        <div className="px-3 sm:px-4 pt-1 pb-3 sm:pt-2 sm:pb-4 space-y-1 sm:space-y-2 border-t border-accent-gray/10">
          <a 
            href="#servicios" 
            className="block py-2 sm:py-2.5 px-2 sm:px-3 text-sm sm:text-base text-primary hover:bg-accent-gray/10 rounded-md" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Servicios
          </a>
          <a 
            href="#nosotros" 
            className="block py-2 sm:py-2.5 px-2 sm:px-3 text-sm sm:text-base text-primary hover:bg-accent-gray/10 rounded-md" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          <a 
            href="#casos" 
            className="block py-2 sm:py-2.5 px-2 sm:px-3 text-sm sm:text-base text-primary hover:bg-accent-gray/10 rounded-md" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Casos de éxito
          </a>
          <a 
            href="#contacto" 
            className="block py-2 sm:py-2.5 px-2 sm:px-3 text-sm sm:text-base text-primary hover:bg-accent-gray/10 rounded-md" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </a>
          <div className="pt-1 sm:pt-2">
            <a 
              href="#contacto" 
              className="block mt-1 sm:mt-2 text-center bg-[#1B1F3B] hover:bg-[#2A2F57] text-white font-medium text-sm sm:text-base py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-colors duration-300" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Empezar ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}