import { motion } from "framer-motion";
import LogoAnimation from "./LogoAnimation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg text-white py-16 md:py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=1920&auto=format&fit=crop')] bg-cover opacity-10"></div>
        
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-[#00D1FF]/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm font-medium text-[#00D1FF]">Inteligencia Artificial para pymes</p>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Automatización <span className="text-[#00D1FF] text-glow">inteligente</span> para tu negocio
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary/90 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Impulsamos la transformación operativa de las pymes colombianas mediante soluciones de inteligencia artificial simples, eficientes y a su medida.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="#contacto" 
                className="bg-[#00D1FF] hover:bg-[#00D1FF]/90 text-[#1B1F3B] font-medium px-6 py-3 rounded-lg text-center transition-all duration-300 shadow-lg shadow-[#00D1FF]/20"
              >
                Transformar mi negocio
              </a>
              <a 
                href="#servicios" 
                className="border border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg text-center transition-all duration-300"
              >
                Ver servicios
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12 flex justify-center animate-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00D1FF]/20 rounded-full blur-3xl"></div>
              <LogoAnimation large />
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator h-10 w-6 border-2 border-white/30 rounded-full flex items-start justify-center">
          {/* Animated scroll indicator */}
        </div>
      </div>
    </section>
  );
}
