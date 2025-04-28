import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 bg-white border-t border-accent-gray/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto bg-[#1B1F3B] rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Comienza tu transformación digital hoy</h2>
              <p className="text-white/80 mb-6">
                Da el primer paso hacia la eficiencia operativa. Agenda una llamada gratuita de 30 minutos con nuestros expertos.
              </p>
              <div className="space-y-3">
                {[
                  "Diagnóstico gratuito de tu operación",
                  "Propuesta personalizada en 48 horas",
                  "Implementación rápida en semanas, no meses"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-[#00D1FF]" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a 
                href="#contacto" 
                className="inline-block bg-[#00D1FF] hover:bg-[#00D1FF]/90 text-[#1B1F3B] font-medium px-6 py-3 rounded-lg mt-8 text-center transition-all duration-300 shadow-lg shadow-[#00D1FF]/20 max-w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar diagnóstico gratis
              </motion.a>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8e?q=80&w=700&auto=format&fit=crop" 
                alt="Transformación digital" 
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F3B] to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
