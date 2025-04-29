import { motion } from "framer-motion";
import foresturaLogo from '/assets/clients/forestura_logo_white.png';
import foresturaIcon from '/assets/clients/forestura_icon.png';

const caseStudies = [
  {
    title: "Forestura",
    description: "Implementamos un sistema de gestión integral para los trámites ambientales en el sector de la construcción. Automatizamos el seguimiento de expedientes, digitalizamos documentación y creamos flujos de trabajo inteligentes que redujeron los tiempos de aprobación en un 40%, disminuyeron errores en documentación en un 85% y mejoraron la satisfacción de sus clientes en un 95%.",
    location: "Medellín, Colombia",
    size: "Gestión Ambiental • 12 empleados",
    image: "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=800&auto=format&fit=crop",
    logo: foresturaLogo,
    icon: foresturaIcon
  }
];

export default function SuccessStories() {

  return (
    <section id="casos" className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-white">CASO DE ÉXITO</h2>
          <h3 className="text-2xl md:text-3xl font-semibold font-poppins mb-4">Transformación digital en acción</h3>
          <p className="text-white/80 text-lg">
            Descubre cómo Forestura mejoró su eficiencia en la gestión de trámites ambientales con nuestra solución personalizada.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2 h-60 sm:h-72 md:h-auto overflow-hidden relative">
                <img 
                  src={study.image} 
                  alt={`Caso de éxito: ${study.title}`} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-center justify-center">
                  <img 
                    src={study.logo} 
                    alt={`Logo de ${study.title}`} 
                    className="w-3/4 max-w-xs"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <img 
                    src={study.icon} 
                    alt={`Icono de ${study.title}`} 
                    className="w-10 h-10 mr-3"
                  />
                  <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">{study.title}</h3>
                </div>
                <p className="text-white/90 mb-6 text-base sm:text-lg leading-relaxed">{study.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2 pt-4 border-t border-white/20">
                  <span className="text-[#00D1FF] flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#00D1FF] mr-2"></span>
                    {study.location}
                  </span>
                  <span className="text-white/70">{study.size}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-white/10 rounded-full">Eficiencia</span>
                  <span className="px-3 py-1 text-sm bg-white/10 rounded-full">Gestión</span>
                  <span className="px-3 py-1 text-sm bg-white/10 rounded-full">Experiencia</span>
                  <span className="px-3 py-1 text-sm bg-white/10 rounded-full">Optimización</span>
                  <span className="px-3 py-1 text-sm bg-white/10 rounded-full">Sostenibilidad</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Comentamos la sección de testimonios
        <div className="mt-12 sm:mt-16 md:mt-20 relative">
          <!-- Sección de testimonios eliminada a petición del cliente -->
        </div>
        */}
      </div>
    </section>
  );
}
