import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Carlos Ramírez",
    role: "CEO & Fundador",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Laura Mendoza",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Daniel Ochoa",
    role: "Lead AI Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ana Valencia",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

export default function About() {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-primary">NOSOTROS</h2>
          <h3 className="text-2xl md:text-3xl font-semibold font-poppins mb-4">Expertos en tecnología con visión humana</h3>
          <p className="text-primary/70 text-lg">
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
            <h3 className="text-xl md:text-2xl font-semibold font-poppins">Nuestra historia</h3>
            <p className="text-primary/70 text-sm md:text-base">
              Hyperquantum nació de una visión clara: hacer que la tecnología de vanguardia sea accesible para las pequeñas y medianas empresas colombianas. Fundada por expertos en IA y automatización, nuestra agencia combina lo mejor de dos mundos: la potencia de la inteligencia artificial y la calidez del acompañamiento humano.
            </p>
            <p className="text-primary/70 text-sm md:text-base">
              Entendemos los desafíos únicos que enfrentan las pymes en su transformación digital, por eso creamos soluciones que realmente funcionan en el contexto local, con implementaciones rápidas y escalabilidad garantizada.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-8">
              <motion.div 
                className="text-center p-3 sm:p-4 md:p-5 rounded-lg bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="block text-2xl sm:text-2xl md:text-3xl font-bold text-[#00D1FF] mb-1">100+</span>
                <span className="text-primary/70 text-xs sm:text-sm md:text-base">Empresas transformadas</span>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 md:p-5 rounded-lg bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="block text-2xl sm:text-2xl md:text-3xl font-bold text-[#00D1FF] mb-1">5+</span>
                <span className="text-primary/70 text-xs sm:text-sm md:text-base">Años de experiencia</span>
              </motion.div>
            </div>
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
        
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h3 className="text-xl md:text-2xl font-semibold font-poppins text-center mb-8 md:mb-12">Nuestro equipo</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-secondary mx-auto mb-3 md:mb-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold font-poppins text-sm md:text-base">{member.name}</h4>
                <p className="text-xs md:text-sm text-primary/70">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
