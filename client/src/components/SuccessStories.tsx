import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Restaurante Nativo",
    description: "Automatizamos la gestión de pedidos e inventario, reduciendo desperdicios en un 35% y mejorando la experiencia del cliente.",
    location: "Bogotá, Colombia",
    size: "Restaurante • 15 empleados",
    image: "https://images.unsplash.com/photo-1566669437687-7040a6926753?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Distribuidora López",
    description: "Implementamos IA para optimizar rutas de entrega, ahorrando 22% en combustible y aumentando entregas diarias en un 40%.",
    location: "Medellín, Colombia",
    size: "Logística • 30 empleados",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Academia Virtual",
    description: "Desarrollamos asistentes virtuales que atienden consultas 24/7, aumentando satisfacción del cliente en 95% y reduciendo costos de soporte.",
    location: "Cali, Colombia",
    size: "Educación • 8 empleados",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop"
  }
];

export default function SuccessStories() {

  return (
    <section id="casos" className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <p className="text-sm font-medium text-white">Casos de éxito</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Empresas que ya transformaron su operación</h2>
          <p className="text-white/80 text-lg">
            Descubre cómo otras pymes colombianas han mejorado sus resultados con nuestras soluciones de automatización.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={`Caso de éxito: ${study.title}`} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold font-poppins mb-2">{study.title}</h3>
                <p className="text-white/80 mb-3 md:mb-4 flex-grow text-sm sm:text-base">{study.description}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-1">
                  <span className="text-[#00D1FF]">{study.location}</span>
                  <span className="text-white/60">{study.size}</span>
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
