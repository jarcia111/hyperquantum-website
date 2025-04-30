import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Ahorro de tiempo",
    description: "Automatiza tareas repetitivas liberando tiempo para lo importante.",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Reducción de costos",
    description: "Optimiza recursos y reduce errores operativos costosos.",
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    title: "Escalabilidad garantizada",
    description: "Soluciones que crecen contigo sin grandes inversiones.",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "Seguridad integrada",
    description: "Protegemos tus datos con estándares de nivel empresarial.",
    icon: <ShieldCheck className="h-6 w-6" />
  }
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop')] bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6 md:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-primary">¿POR QUÉ ELEGIRNOS?</h2>
            
            <p className="text-2xl md:text-3xl font-semibold font-poppins mb-4">Transformación digital <span className="text-[#00D1FF]">sin complicaciones</span></p>
            
            <p className="text-primary/70 text-lg">En Hyperquantum convertimos la complejidad en simplicidad. Nuestras soluciones están diseñadas pensando en las necesidades reales de las pymes colombianas.</p>
            
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center text-[#00D1FF]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-poppins mb-1">{benefit.title}</h3>
                    <p className="text-primary/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-[#00D1FF]/5 rounded-3xl transform -rotate-3"></div>
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                alt="Transformación digital en acción" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold font-poppins mb-2">Automatización que impulsa resultados</h4>
                <p className="text-primary/70 mb-4">Nuestros clientes reportan un promedio de 40% de reducción en tiempo operativo y 30% en costos administrativos.</p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="text-center p-4 bg-secondary rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="block text-3xl font-bold text-[#00D1FF]">78%</span>
                    <span className="text-sm text-primary/70">Menor error humano</span>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 bg-secondary rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span className="block text-3xl font-bold text-[#00D1FF]">24/7</span>
                    <span className="text-sm text-primary/70">Operación continua</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
