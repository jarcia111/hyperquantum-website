import { motion } from "framer-motion";
import LogoAnimation from "./LogoAnimation";
import HyperquantumLogo3D from "./HyperquantumLogo3D";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg text-white py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated network lines */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.path
              d="M0,50 Q25,0 50,50 T100,50"
              stroke="#00D1FF"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,70 Q30,20 60,70 T100,70"
              stroke="#00D1FF"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M0,30 Q35,80 70,30 T100,30"
              stroke="#00D1FF"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-16">
          <motion.div 
            className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-[#00D1FF]/20 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full mb-4 sm:mb-5 md:mb-8 border border-[#00D1FF]/30 w-auto max-w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00D1FF] tracking-wide text-center sm:text-left">Inteligencia Artificial para pymes</p>
            </motion.div>
            
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="sr-only">Hyperquantum - </span>Automatización <span className="text-[#00D1FF] text-glow">inteligente</span> para tu negocio con agentes de IA
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-secondary/90 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Impulsamos la transformación operativa de las pymes colombianas con agentes inteligentes y procesos automatizados que aumentan ventas y reducen costos. Soluciones de IA simples, eficientes y a tu medida.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 md:gap-4 pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="#contacto" 
                className="bg-[#00D1FF] hover:bg-[#00D1FF]/90 text-[#1B1F3B] font-medium px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-center transition-all duration-300 shadow-lg shadow-[#00D1FF]/20 text-sm md:text-base"
              >
                Solicita una demo
              </a>
              <a 
                href="#servicios" 
                className="bg-white hover:bg-white/90 text-[#1B1F3B] border border-white font-medium px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-center transition-all duration-300 text-sm md:text-base"
              >
                Ver servicios
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-9/12 sm:w-8/12 md:w-5/12 flex justify-center pt-10 md:pt-0 pb-6 md:pb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative flex flex-col items-center justify-center">
              {/* Fondo con efecto de brillo */}
              <div className="absolute inset-0 bg-[#00D1FF]/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Contenedor del logo - mantiene el tamaño original */}
              <div className="w-72 h-72 mb-2 flex items-center justify-center">
                <HyperquantumLogo3D size={280} logoColor="#00D1FF" />
              </div>
              
              {/* Texto de HYPERQUANTUM - posición aún más arriba */}
              <motion.div 
                className="text-white text-2xl font-bold font-poppins tracking-[0.25em] text-center -mt-8 relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                HYPERQUANTUM
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator h-10 w-6 border-2 border-white/30 rounded-full items-start justify-center">
          {/* Animated scroll indicator - only visible on larger screens */}
        </div>
      </div>
    </section>
  );
}
