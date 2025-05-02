import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
// Importamos la imagen del CTO
import jesusImage from '/assets/team/jesus_arcia.png';
import carlosImage from '/assets/team/carlos_uribe.png';
import { useDeviceSize } from "../hooks/use-device-size";

const teamMembers = [
  {
    name: "Carlos Fernando Uribe Guerrero",
    role: "CEO & Fundador",
    image: carlosImage,
    linkedIn: "https://www.linkedin.com/in/carlos-fernando-uribe-guerrero-276a4a152/"
  },
  {
    name: "Jesús Alberto Arcia Hernández",
    role: "CTO & Fundador",
    image: jesusImage,
    linkedIn: "https://www.linkedin.com/in/jarciahdz/"
  }
];

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
        
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h3 className={`font-semibold font-poppins text-center mb-6 sm:mb-8 md:mb-10 ${isMobile ? "text-lg" : isTablet ? "text-xl" : "text-2xl"}`}>
            Nuestro equipo
          </h3>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 lg:gap-32">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-secondary mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden shadow-lg ${
                  isMobile ? "w-28 h-28" : isTablet ? "w-36 h-36" : "w-44 h-44"
                }`}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className={`font-semibold font-poppins ${isMobile ? "text-base" : isTablet ? "text-lg" : "text-xl"}`}>
                  {member.name}
                </h4>
                <p className={`text-primary/70 mb-2 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
                  {member.role}
                </p>
                <a 
                  href={member.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center justify-center bg-[#0077B5]/10 hover:bg-[#0077B5]/20 rounded-full transition-colors duration-300 ${
                    isMobile ? "w-8 h-8" : isTablet ? "w-9 h-9" : "w-10 h-10"
                  }`}
                >
                  <Linkedin className={`text-[#0077B5] ${isMobile ? "h-4 w-4" : isTablet ? "h-4.5 w-4.5" : "h-5 w-5"}`} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
