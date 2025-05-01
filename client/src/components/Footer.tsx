import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Youtube, Linkedin, Instagram, Heart } from "lucide-react";
import { useState } from "react";
import LogoAnimation from "./LogoAnimation";
import TermsPopup from "./TermsPopup";
import PrivacyPopup from "./PrivacyPopup";
import CookiesPopup from "./CookiesPopup";

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Casos de éxito", href: "#casos" },
  { name: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { name: "Términos y condiciones", href: "#" },
  { name: "Política de privacidad", href: "#" },
  { name: "Política de cookies", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  
  return (
    <footer className="bg-[#1B1F3B] text-white pt-8 sm:pt-10 md:pt-14 pb-4 sm:pb-6 md:pb-8">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <LogoAnimation small className="h-8 sm:h-9 md:h-10 w-auto" color="white" />
              <span className="ml-1.5 sm:ml-2 md:ml-3 text-lg sm:text-xl md:text-2xl font-semibold font-poppins">HYPERQUANTUM</span>
            </div>
            <p className="text-white/70 mb-3 sm:mb-4 md:mb-5 max-w-md text-xs sm:text-sm md:text-base text-center mx-auto">
              Impulsamos la transformación operativa de las pymes colombianas mediante soluciones de inteligencia artificial simples, eficientes y a su medida.
            </p>
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-0">
              <motion.a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </div>
          
          <div className="col-span-1 text-center">
            <h4 className="text-sm sm:text-base md:text-lg font-semibold font-poppins mb-2 sm:mb-3 md:mb-4">Enlaces rápidos</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-[#00D1FF] transition-colors text-xs sm:text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1 text-center">
            <h4 className="text-sm sm:text-base md:text-lg font-semibold font-poppins mb-2 sm:mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              <li>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-white/70 hover:text-[#00D1FF] transition-colors text-xs sm:text-sm md:text-base inline-block"
                >
                  Términos y condiciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-white/70 hover:text-[#00D1FF] transition-colors text-xs sm:text-sm md:text-base inline-block"
                >
                  Política de privacidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowCookies(true)}
                  className="text-white/70 hover:text-[#00D1FF] transition-colors text-xs sm:text-sm md:text-base inline-block"
                >
                  Política de cookies
                </button>
              </li>
            </ul>
          </div>
          
          {/* Términos y Condiciones Popup */}
          <TermsPopup open={showTerms} onOpenChange={setShowTerms} />
          
          {/* Política de Privacidad Popup */}
          <PrivacyPopup open={showPrivacy} onOpenChange={setShowPrivacy} />
          
          {/* Política de Cookies Popup */}
          <CookiesPopup open={showCookies} onOpenChange={setShowCookies} />
        </div>
        
        <div className="border-t border-white/10 pt-4 sm:pt-5 md:pt-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-white/60 text-[10px] sm:text-xs md:text-sm mb-1 md:mb-0">&copy; {currentYear} Hyperquantum. Todos los derechos reservados.</p>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <span className="text-white/60 text-[10px] sm:text-xs">Hecho con</span>
              <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-red-500 fill-current" />
              <span className="text-white/60 text-[10px] sm:text-xs">en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
