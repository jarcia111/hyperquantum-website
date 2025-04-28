import { motion } from "framer-motion";
import { useState } from "react";

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

const testimonials = [
  {
    quote: "La automatización de nuestro proceso de facturación y seguimiento de pagos nos permitió reducir los tiempos administrativos en un 70%. El equipo de Hyperquantum entendió nuestras necesidades desde el primer día y nos entregó una solución que realmente funciona para nosotros.",
    author: "Marcela Jiménez",
    role: "CEO, Comercial San Andrés",
    image: "https://images.unsplash.com/photo-1560208251-7fa90a224feb?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Gracias a la implementación del asistente virtual, nuestro equipo de ventas puede concentrarse en cerrar negocios mientras la IA se encarga de la calificación y seguimiento inicial de leads. El ROI fue positivo desde el segundo mes.",
    author: "Fernando Gutiérrez",
    role: "Director Comercial, TechSolutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "El dashboard automatizado nos da visibilidad en tiempo real del estado de nuestra operación. Ahora tomamos decisiones mucho más informadas y rápidas. La integración con nuestros sistemas existentes fue sorprendentemente sencilla.",
    author: "Carolina Rojas",
    role: "Gerente de Operaciones, LogiExpress",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=100&auto=format&fit=crop"
  }
];

export default function SuccessStories() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={`Caso de éxito: ${study.title}`} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold font-poppins mb-2">{study.title}</h3>
                <p className="text-white/80 mb-4 flex-grow">{study.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#00D1FF]">{study.location}</span>
                  <span className="text-white/60">{study.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials Slider */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#00D1FF]/20 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-white/20 font-serif absolute top-4 left-6">"</div>
            
            {/* Single testimonial */}
            <div className="text-center max-w-3xl mx-auto py-4">
              <motion.blockquote 
                key={activeTestimonial}
                className="text-lg md:text-xl italic text-white/90 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {testimonials[activeTestimonial].quote}
              </motion.blockquote>
              
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src={testimonials[activeTestimonial].image} alt="Foto del cliente" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="font-semibold font-poppins">{testimonials[activeTestimonial].author}</div>
                  <div className="text-white/70 text-sm">{testimonials[activeTestimonial].role}</div>
                </div>
              </motion.div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Testimonio ${index + 1}`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
