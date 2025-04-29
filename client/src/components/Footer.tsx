import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Youtube, Linkedin, Instagram, Heart } from "lucide-react";
import { useState } from "react";
import LogoAnimation from "./LogoAnimation";
import TermsPopup from "./TermsPopup";
import PrivacyPopup from "./PrivacyPopup";

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
  
  return (
    <footer className="bg-[#1B1F3B] text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="flex items-center mb-4 md:mb-6">
              <LogoAnimation small className="h-10 md:h-12 w-auto opacity-80" color="black" />
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-semibold font-poppins">HYPERQUANTUM</span>
            </div>
            <p className="text-white/70 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Impulsamos la transformación operativa de las pymes colombianas mediante soluciones de inteligencia artificial simples, eficientes y a su medida.
            </p>
            <div className="flex gap-3 md:gap-4">
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </motion.a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base md:text-lg font-semibold font-poppins mb-3 md:mb-6">Enlaces rápidos</h4>
            <ul className="space-y-2 md:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-[#00D1FF] transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base md:text-lg font-semibold font-poppins mb-3 md:mb-6">Legal</h4>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-white/70 hover:text-[#00D1FF] transition-colors text-sm md:text-base text-left"
                >
                  Términos y condiciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-white/70 hover:text-[#00D1FF] transition-colors text-sm md:text-base text-left"
                >
                  Política de privacidad
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-[#00D1FF] transition-colors text-sm md:text-base"
                >
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Términos y Condiciones Popup */}
          <TermsPopup open={showTerms} onOpenChange={setShowTerms} />
          
          {/* Política de Privacidad Popup */}
          <PrivacyPopup open={showPrivacy} onOpenChange={setShowPrivacy} />
        </div>
        
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/60 text-xs md:text-sm mb-2 md:mb-0 text-center md:text-left">&copy; {currentYear} Hyperquantum. Todos los derechos reservados.</p>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-white/60 text-xs md:text-sm">Hecho con</span>
              <Heart className="h-3 w-3 md:h-4 md:w-4 text-red-500 fill-current" />
              <span className="text-white/60 text-xs md:text-sm">en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
