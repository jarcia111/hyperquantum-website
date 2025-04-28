import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Youtube, Linkedin, Instagram, Heart } from "lucide-react";
import LogoAnimation from "./LogoAnimation";

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
  
  return (
    <footer className="bg-[#1B1F3B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <LogoAnimation small className="h-12 w-auto opacity-80" />
              <span className="ml-3 text-2xl font-semibold font-poppins">HYPERQUANTUM</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Impulsamos la transformación operativa de las pymes colombianas mediante soluciones de inteligencia artificial simples, eficientes y a su medida.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D1FF]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Enlaces rápidos</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-[#00D1FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-[#00D1FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">&copy; {currentYear} Hyperquantum. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-white/60 text-sm">en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
