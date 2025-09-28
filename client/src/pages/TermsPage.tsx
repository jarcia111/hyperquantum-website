import { Link } from "wouter";
import { ArrowLeft, FileText } from "lucide-react";
import SEO from "@/components/SEO";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <SEO 
        title="Términos y Condiciones - Hyperquantum"
        description="Términos y condiciones de uso de Hyperquantum S.A.S. - Conoce las condiciones de uso de nuestros servicios de automatización empresarial."
        keywords="términos y condiciones, condiciones de uso, servicios, automatización, Hyperquantum"
        ogUrl="https://hyperquantum.com.co/terminos"
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1B1F3B] to-[#2A2F57] py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-[#00D1FF] transition-colors duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-[#00D1FF]" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white font-poppins">
                  Términos y Condiciones
                </h1>
                <p className="text-white/80 text-sm">
                  Hyperquantum S.A.S.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10 p-6 md:p-8">
          
          {/* Metadata */}
          <div className="text-primary/60 text-sm text-right italic mb-6 border-b border-primary/10 pb-4">
            <p>Fecha de entrada en vigor: 30 de abril de 2025</p>
            <p>Última actualización: 30 de abril de 2025</p>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">1. Aceptación de los Términos</h2>
              <p className="mb-3">
                Al acceder y utilizar los servicios de <strong>Hyperquantum S.A.S.</strong> (en adelante, "la Empresa", "nosotros" o "Hyperquantum"), 
                usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, 
                no debe utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">2. Descripción de los Servicios</h2>
              <p className="mb-3">
                Hyperquantum ofrece servicios de automatización empresarial mediante inteligencia artificial, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Implementación de agentes inteligentes</li>
                <li>Automatización de procesos empresariales</li>
                <li>Consultoría en transformación digital</li>
                <li>Desarrollo de soluciones personalizadas</li>
                <li>Soporte técnico y mantenimiento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">3. Condiciones de Uso</h2>
              
              <h3 className="text-lg font-semibold mb-2">3.1 Uso Apropiado</h3>
              <p className="mb-3">Usted se compromete a utilizar nuestros servicios únicamente para:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fines comerciales legítimos y éticos</li>
                <li>Actividades que cumplan con la legislación colombiana</li>
                <li>Propósitos que no infrinjan derechos de terceros</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">3.2 Usos Prohibidos</h3>
              <p className="mb-3">Está estrictamente prohibido utilizar nuestros servicios para:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Actividades ilegales o fraudulentas</li>
                <li>Violación de derechos de propiedad intelectual</li>
                <li>Distribución de contenido malicioso</li>
                <li>Interferir con el funcionamiento de nuestros sistemas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">4. Propiedad Intelectual</h2>
              <p className="mb-3">
                Todos los derechos de propiedad intelectual sobre nuestros servicios, software, documentación y contenido 
                pertenecen a Hyperquantum S.A.S. o sus licenciantes. El uso de nuestros servicios no otorga ningún 
                derecho de propiedad sobre los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">5. Responsabilidades del Cliente</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">📋 Información</h3>
                  <p className="text-sm">Proporcionar información veraz y actualizada para la prestación del servicio.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🔒 Confidencialidad</h3>
                  <p className="text-sm">Mantener la confidencialidad de credenciales y accesos proporcionados.</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">⚡ Colaboración</h3>
                  <p className="text-sm">Colaborar activamente en la implementación y configuración de soluciones.</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">💸 Pagos</h3>
                  <p className="text-sm">Realizar los pagos acordados en los términos y plazos establecidos.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">6. Limitación de Responsabilidad</h2>
              <p className="mb-3">
                Hyperquantum no será responsable por daños indirectos, incidentales, especiales o consecuentes 
                que puedan surgir del uso de nuestros servicios, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pérdida de beneficios o ingresos</li>
                <li>Interrupción de negocio</li>
                <li>Pérdida de datos o información</li>
                <li>Daños a la reputación empresarial</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">7. Confidencialidad</h2>
              <p className="mb-3">
                Hyperquantum se compromete a mantener la más estricta confidencialidad sobre toda la información 
                comercial, técnica y estratégica a la que tenga acceso durante la prestación de sus servicios.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Información Confidencial incluye:</h3>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Procesos de negocio y metodologías</li>
                  <li>Datos financieros y comerciales</li>
                  <li>Información de clientes y proveedores</li>
                  <li>Estrategias empresariales</li>
                  <li>Tecnologías y desarrollos propietarios</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">8. Términos de Pago</h2>
              <p className="mb-3">
                Los términos de pago se establecerán en cada contrato específico. En general, se aplicarán las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los pagos deben realizarse en los plazos acordados</li>
                <li>Los retrasos en el pago pueden generar intereses de mora</li>
                <li>Hyperquantum se reserva el derecho de suspender servicios por mora</li>
                <li>Todos los precios están sujetos a IVA según la legislación colombiana</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">9. Modificaciones</h2>
              <p>
                Hyperquantum se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. 
                Es responsabilidad del cliente revisar periódicamente estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">10. Ley Aplicable y Jurisdicción</h2>
              <p className="mb-3">
                Estos términos y condiciones se regirán por las leyes de la República de Colombia. 
                Cualquier disputa se resolverá en los tribunales competentes de Medellín, Colombia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">11. Contacto</h2>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="mb-2">
                  Para cualquier consulta sobre estos términos y condiciones:
                </p>
                <ul className="space-y-1">
                  <li><strong>Email:</strong> jarcia@hyperquantum.com.co</li>
                  <li><strong>Teléfono:</strong> +57 322 625 3237</li>
                  <li><strong>Dirección:</strong> Medellín, Antioquia, Colombia</li>
                </ul>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-primary/10 text-center">
            <p className="text-sm text-primary/60">
              © 2025 Hyperquantum S.A.S. Todos los derechos reservados.
            </p>
            <Link 
              href="/"
              className="inline-block mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}