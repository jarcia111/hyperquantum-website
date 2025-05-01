
import { motion } from "framer-motion";
import { Clipboard, MessageSquare, BarChart3, Layout, BookOpen, CalendarClock } from "lucide-react";
import { useDeviceSize } from "../hooks/use-device-size";

const services = [
  {
    title: "Automatización de procesos internos",
    description: "Optimizamos tus operaciones en ventas, contabilidad y logística con IA para reducir costos operativos y aumentar eficiencia empresarial.",
    icon: <Clipboard className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Asistentes virtuales y chatbots empresariales",
    description: "Implementamos chatbots inteligentes que atienden consultas 24/7, aprenden de cada interacción y escalan con tu negocio para aumentar ventas.",
    icon: <MessageSquare className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Dashboards e informes automatizados",
    description: "Creamos visualizaciones en tiempo real con inteligencia artificial que transforman datos complejos en insights accionables para optimización de procesos.",
    icon: <BarChart3 className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Integraciones con WhatsApp, CRM y ERPs",
    description: "Conectamos tus sistemas existentes para crear flujos de trabajo unificados y automatización de tareas que eliminan procesos manuales redundantes.",
    icon: <Layout className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Consultoría IA y soporte técnico",
    description: "Combinamos expertise humano con agentes de IA para brindarte soporte continuo y transformación digital personalizada para pymes en Medellín y toda Colombia.",
    icon: <BookOpen className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  }
];

export default function Services() {
  const { isMobile, isTablet } = useDeviceSize();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-bold font-poppins mb-3 sm:mb-4 text-[#00D1FF] ${isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl"}`}>
            NUESTROS SERVICIOS
          </h2>
          <p className={`font-semibold font-poppins mb-3 sm:mb-4 text-primary ${isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl"}`}>
            Soluciones inteligentes y agentes de IA para optimizar tu operación
          </p>
          <p className={`text-primary/70 ${isMobile ? "text-base" : "text-lg"}`}>
            Automatizamos los procesos que consumen tu tiempo y recursos, para que puedas enfocarte en lo que realmente importa: hacer crecer tu negocio.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-secondary rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-accent-gray/10 hover:border-[#00D1FF]/30"
              variants={item}
            >
              <div className={`bg-primary/5 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-[#00D1FF]/10 transition-colors duration-300 ${isMobile ? "w-10 h-10" : isTablet ? "w-12 h-12" : "w-14 h-14"}`}>
                <div className={`text-primary group-hover:text-[#00D1FF] transition-colors duration-300 ${isMobile ? "h-5 w-5" : isTablet ? "h-6 w-6" : "h-7 w-7"}`}>
                  {service.icon}
                </div>
              </div>
              <h3 className={`font-semibold font-poppins mb-2 ${isMobile ? "text-base" : isTablet ? "text-lg" : "text-xl"}`}>
                {service.title}
              </h3>
              <p className={`text-primary/70 mb-2 sm:mb-3 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
                {service.description}
              </p>
              <a href="#contacto" className={`inline-flex items-center text-primary font-medium group-hover:text-[#00D1FF] transition-colors duration-300 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
                Conocer más
                <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 ${isMobile ? "h-3 w-3" : isTablet ? "h-4 w-4" : "h-5 w-5"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div 
            className="group rounded-xl overflow-hidden relative" 
            variants={item}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F3B] to-[#2A2F57]"></div>
            <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#00D1FF]/30 rounded-full translate-x-8 sm:translate-x-12 md:translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#00D1FF]/20 rounded-full -translate-x-8 sm:-translate-x-12 md:-translate-x-16 translate-y-8 sm:translate-y-12 md:translate-y-16 blur-3xl"></div>
            
            <div className="relative p-4 sm:p-5 md:p-6 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className={`font-semibold font-poppins mb-2 ${isMobile ? "text-base" : isTablet ? "text-lg" : "text-xl"}`}>
                  ¿No encuentras lo que buscas?
                </h3>
                <p className={`text-white/80 mb-2 sm:mb-3 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
                  Desarrollamos soluciones personalizadas para los retos específicos de tu negocio.
                </p>
              </div>
              <a 
                href="#contacto" 
                className={`inline-block bg-white text-[#1B1F3B] font-medium rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-center mt-2 sm:mt-3 
                ${isMobile ? "px-3 py-1.5 text-xs" : isTablet ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base"}`}
              >
                <CalendarClock className={`inline-block ${isMobile ? "mr-1 h-3 w-3" : isTablet ? "mr-1.5 h-4 w-4" : "mr-2 h-5 w-5"}`} />
                Agenda una llamada
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
