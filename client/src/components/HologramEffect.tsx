import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, Database, Code, Network, Lock, Workflow, Braces, FileCode, ChevronRight } from 'lucide-react';

interface HologramEffectProps {
  className?: string;
  interval?: number; // Intervalo entre hologramas en ms
}

// Elementos técnicos que aparecerán en el holograma
const techElements = [
  {
    title: "Inteligencia Artificial",
    icon: Cpu,
    code: "class AIModel:\n  def predict(self, data):\n    return self.model.forward(data)",
  },
  {
    title: "Automatización",
    icon: Workflow,
    code: "async function automateProcess() {\n  await tasks.run();\n  notify('Proceso completado');\n}",
  },
  {
    title: "Cloud Computing",
    icon: Server,
    code: "deploy:\n  environment: production\n  strategy: rolling\n  instances: auto",
  },
  {
    title: "Bases de Datos",
    icon: Database,
    code: "SELECT cliente.nombre, SUM(ventas.total)\nFROM ventas JOIN cliente\nGROUP BY cliente.id",
  },
  {
    title: "Desarrollo API",
    icon: Code,
    code: "@app.route('/api/data')\ndef get_data():\n  return jsonify(db.query())",
  },
  {
    title: "Ciberseguridad",
    icon: Lock,
    code: "encryption.hash(data, {\n  algorithm: 'AES-256',\n  salt: crypto.random(16)\n})",
  },
  {
    title: "Machine Learning",
    icon: Network,
    code: "model.fit(X_train, y_train,\n  epochs=100,\n  validation_split=0.2)",
  },
  {
    title: "Desarrollo Web",
    icon: Braces,
    code: "function Component() {\n  const [state, setState] = useState();\n  return <div>{state}</div>;\n}",
  }
];

export default function HologramEffect({ className = "", interval = 10000 }: HologramEffectProps) {
  const [activeHologram, setActiveHologram] = useState<boolean>(false);
  const [currentElement, setCurrentElement] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  // Función para mostrar un nuevo holograma
  const showHologram = () => {
    // Si ya hay uno activo, no hagas nada
    if (activeHologram) return;
    
    // Actualiza el elemento actual
    setCurrentElement((prev) => (prev + 1) % techElements.length);
    
    // Muestra el holograma
    setActiveHologram(true);
    
    // Oculta el holograma después de 5 segundos
    setTimeout(() => {
      setActiveHologram(false);
    }, 5000);
  };
  
  useEffect(() => {
    // Inicia el ciclo de hologramas
    timerRef.current = window.setInterval(showHologram, interval);
    
    // Limpieza al desmontar
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [interval]);
  
  const Element = techElements[currentElement].icon;
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {activeHologram && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.8 }}
          >
            {/* Anillos holográficos */}
            <motion.div 
              className="absolute w-[300px] h-[300px] rounded-full border-2 border-[#00D1FF]/40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#00D1FF]/30"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1.8 }}
              exit={{ opacity: 0, scale: 2.5 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            />
            <motion.div 
              className="absolute w-[500px] h-[500px] rounded-full border border-[#00D1FF]/20"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.8, scale: 2 }}
              exit={{ opacity: 0, scale: 3 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
            />
            
            {/* Paneles de información - Responsivos */}
            <div className="relative flex flex-col md:flex-row gap-4 items-start max-w-md md:max-w-none">
              {/* Panel principal */}
              <motion.div 
                className="bg-black/80 backdrop-blur-md border border-[#00D1FF]/50 p-3 sm:p-4 rounded-lg shadow-lg shadow-[#00D1FF]/20 w-full md:w-[320px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Element className="text-[#00D1FF] h-4 sm:h-5 w-4 sm:w-5" />
                  <h4 className="text-[#00D1FF] font-mono text-xs sm:text-sm font-semibold tracking-wide">
                    {techElements[currentElement].title}
                  </h4>
                </div>
                
                <div className="bg-[#1B1F3B]/90 rounded p-1.5 sm:p-2 font-mono text-[10px] sm:text-xs text-[#00D1FF] overflow-hidden">
                  {techElements[currentElement].code.split('\n').map((line, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                      className="flex"
                    >
                      <span className="text-gray-500 w-5 sm:w-6 text-right pr-1 sm:pr-2">{idx+1}</span>
                      <span className="flex-1 truncate">{line}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Indicadores secundarios */}
              <motion.div 
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-black/70 backdrop-blur-sm border border-[#00D1FF]/30 px-3 py-2 rounded-md shadow-lg shadow-[#00D1FF]/10">
                  <div className="flex items-center gap-2">
                    <FileCode className="text-[#00D1FF] h-4 w-4" />
                    <span className="text-[#00D1FF] font-mono text-xs">Hyperquantum Tech</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <ChevronRight className="text-[#00D1FF] h-3 w-3" />
                    <span className="text-[#00D1FF]/80 font-mono text-[10px]">Sistema autónomo</span>
                  </div>
                </div>
                
                <div className="bg-black/70 backdrop-blur-sm border border-[#00D1FF]/30 px-3 py-2 rounded-md shadow-lg shadow-[#00D1FF]/10">
                  <div className="flex justify-between items-center">
                    <span className="text-[#00D1FF] font-mono text-xs">Rendimiento</span>
                    <span className="text-[#00D1FF] font-mono text-xs">98.7%</span>
                  </div>
                  <div className="w-full h-1 bg-[#1B1F3B] rounded-full mt-1 overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#00D1FF]"
                      initial={{ width: 0 }}
                      animate={{ width: "98.7%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}