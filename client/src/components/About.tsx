import { motion } from "framer-motion";
import { useDeviceSize } from "../hooks/use-device-size";

export default function About() {
  const { isMobile, isTablet } = useDeviceSize();
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-bold font-poppins mb-3 sm:mb-4 text-primary ${isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl"}`}>
            NOSOTROS
          </h2>
          <p className={`font-semibold font-poppins mb-3 sm:mb-4 ${isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl"}`}>
            Expertos en tecnología con visión humana
          </p>
          <p className={`text-primary/70 ${isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg"}`}>
            Somos la agencia líder en Latinoamérica en automatización inteligente para pymes, promoviendo la eficiencia operativa y la competitividad empresarial con tecnología accesible y humana.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`font-semibold font-poppins ${isMobile ? "text-lg" : isTablet ? "text-xl" : "text-2xl"}`}>
              Nuestra historia
            </h3>
            <p className={`text-primary/70 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
              Hyperquantum nació de una visión clara: hacer que la tecnología de vanguardia sea accesible para las pequeñas y medianas empresas colombianas. Fundada por expertos en IA y automatización, nuestra agencia combina lo mejor de dos mundos: la potencia de la inteligencia artificial y la calidez del acompañamiento humano.
            </p>
            <p className={`text-primary/70 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
              Entendemos los desafíos únicos que enfrentan las pymes en su transformación digital, por eso creamos soluciones que realmente funcionan en el contexto local, con implementaciones rápidas y escalabilidad garantizada.
            </p>
            
            {/* Estadísticas ocultas a petición del cliente */}
          </motion.div>
          
          <motion.div 
            className="relative mt-4 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-primary/5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#00D1FF]/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop" 
                alt="Equipo Hyperquantum" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
