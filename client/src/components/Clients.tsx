import { motion } from "framer-motion";

const clients = [
  {
    name: "Empresa 1",
    logo: "https://via.placeholder.com/150x50?text=LOGO"
  },
  {
    name: "Empresa 2",
    logo: "https://via.placeholder.com/150x50?text=LOGO"
  },
  {
    name: "Empresa 3",
    logo: "https://via.placeholder.com/150x50?text=LOGO"
  },
  {
    name: "Empresa 4",
    logo: "https://via.placeholder.com/150x50?text=LOGO"
  }
];

export default function Clients() {
  return (
    <section className="py-12 bg-secondary border-y border-accent-gray/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary/70 text-lg">Empresas colombianas que ya confían en nosotros</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 h-12 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={client.logo} alt={client.name} className="max-h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
