import { motion } from "framer-motion";
import { Clipboard, MessageSquare, BarChart3, Layout, BookOpen, CalendarClock } from "lucide-react";

const services = [
  {
    title: "Automatización de procesos internos",
    description: "Optimizamos tus operaciones en ventas, contabilidad y logística con IA para reducir errores y aumentar eficiencia.",
    icon: <Clipboard className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Asistentes virtuales para atención al cliente",
    description: "Chatbots inteligentes que atienden consultas 24/7, aprenden de cada interacción y escalan con tu negocio.",
    icon: <MessageSquare className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Dashboards e informes automatizados",
    description: "Visualizaciones en tiempo real que transforman datos complejos en insights accionables para mejorar la toma de decisiones.",
    icon: <BarChart3 className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Integraciones con WhatsApp, CRM y ERPs",
    description: "Conectamos tus sistemas existentes para crear flujos de trabajo unificados y eliminar procesos manuales redundantes.",
    icon: <Layout className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  },
  {
    title: "Capacitación y soporte humano+IA",
    description: "Combinamos expertise humano con asistentes de IA para brindarte soporte continuo y formación personalizada.",
    icon: <BookOpen className="h-8 w-8 text-primary group-hover:text-[#00D1FF] transition-colors duration-300" />
  }
];

export default function Services() {
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
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/5 px-4 py-1 rounded-full mb-4">
            <p className="text-sm font-medium text-primary">Nuestros servicios</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Soluciones inteligentes para optimizar tu operación</h2>
          <p className="text-primary/70 text-lg">Automatizamos los procesos que consumen tu tiempo y recursos, para que puedas enfocarte en lo que realmente importa: hacer crecer tu negocio.</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-accent-gray/10 hover:border-[#00D1FF]/30"
              variants={item}
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00D1FF]/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">{service.title}</h3>
              <p className="text-primary/70 mb-4">{service.description}</p>
              <a href="#contacto" className="inline-flex items-center text-primary font-medium group-hover:text-[#00D1FF] transition-colors duration-300">
                Conocer más
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D1FF]/30 rounded-full translate-x-16 -translate-y-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00D1FF]/20 rounded-full -translate-x-16 translate-y-16 blur-3xl"></div>
            
            <div className="relative p-6 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-3">¿No encuentras lo que buscas?</h3>
                <p className="text-white/80 mb-4">Desarrollamos soluciones personalizadas para los retos específicos de tu negocio.</p>
              </div>
              <a href="#contacto" className="inline-block bg-white text-[#1B1F3B] font-medium px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-center mt-4">
                <CalendarClock className="inline-block mr-2 h-5 w-5" />
                Agenda una llamada
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
