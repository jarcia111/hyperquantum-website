import { motion } from "framer-motion";
import { Home, BarChart3, Briefcase, Users, FileText, MessageSquare, ChevronRight } from "lucide-react";

const siteLinks = [
  {
    title: "Inicio",
    href: "#",
    icon: <Home className="h-4 w-4 mr-2" />,
    description: "Inicio de Hyperquantum, agentes inteligentes y automatización"
  },
  {
    title: "Servicios",
    href: "#servicios",
    icon: <BarChart3 className="h-4 w-4 mr-2" />,
    description: "Descubre nuestras soluciones de automatización y reducción de costos"
  },
  {
    title: "Casos de Éxito",
    href: "#casos",
    icon: <Briefcase className="h-4 w-4 mr-2" />,
    description: "Empresas que ya aumentaron ventas con nuestros procesos automatizados"
  },
  {
    title: "Sobre Nosotros",
    href: "#nosotros",
    icon: <Users className="h-4 w-4 mr-2" />,
    description: "Conoce nuestro equipo de expertos en inteligencia artificial"
  },
  {
    title: "Políticas",
    href: "#",
    icon: <FileText className="h-4 w-4 mr-2" />,
    description: "Términos, privacidad y políticas de cookies"
  },
  {
    title: "Contacto",
    href: "#contacto",
    icon: <MessageSquare className="h-4 w-4 mr-2" />,
    description: "Solicita una demo de nuestros agentes inteligentes"
  }
];

export default function SiteMap() {
  return (
    <section className="py-12 bg-white border-t border-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-6 text-primary">Enlaces rápidos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {siteLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="group flex flex-col p-4 rounded-lg border border-primary/10 hover:border-[#00D1FF]/40 hover:bg-secondary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-center mb-2 text-primary group-hover:text-[#00D1FF]">
                  {link.icon}
                  <span className="font-medium">{link.title}</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-xs text-primary/60 group-hover:text-primary/80">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}