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
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/5 px-4 py-1 rounded-full mb-4">
            <p className="text-sm font-medium text-primary">Nosotros</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Expertos en tecnología con visión humana</h2>
          <p className="text-primary/70 text-lg">
            Somos la agencia líder en Latinoamérica en automatización inteligente para pymes, promoviendo la eficiencia operativa y la competitividad empresarial con tecnología accesible y humana.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold font-poppins">Nuestra historia</h3>
            <p className="text-primary/70">
              Hyperquantum nació de una visión clara: hacer que la tecnología de vanguardia sea accesible para las pequeñas y medianas empresas colombianas. Fundada por expertos en IA y automatización, nuestra agencia combina lo mejor de dos mundos: la potencia de la inteligencia artificial y la calidez del acompañamiento humano.
            </p>
            <p className="text-primary/70">
              Entendemos los desafíos únicos que enfrentan las pymes en su transformación digital, por eso creamos soluciones que realmente funcionan en el contexto local, con implementaciones rápidas y escalabilidad garantizada.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="text-center p-5 rounded-lg bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="block text-3xl font-bold text-[#00D1FF] mb-1">100+</span>
                <span className="text-primary/70">Empresas transformadas</span>
              </motion.div>
              <motion.div 
                className="text-center p-5 rounded-lg bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="block text-3xl font-bold text-[#00D1FF] mb-1">5+</span>
                <span className="text-primary/70">Años de experiencia</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00D1FF]/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop" 
                alt="Equipo Hyperquantum" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-semibold font-poppins text-center mb-12">Nuestro equipo</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold font-poppins">{member.name}</h4>
                <p className="text-sm text-primary/70">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
