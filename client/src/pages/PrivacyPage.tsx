import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import SEO from "@/components/SEO";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <SEO 
        title="Política de Privacidad - Hyperquantum"
        description="Política de privacidad de Hyperquantum S.A.S. - Conoce cómo protegemos y tratamos tus datos personales de acuerdo con la normativa colombiana."
        keywords="política de privacidad, protección de datos, HABEAS DATA, RGPD, privacidad, Hyperquantum"
        ogUrl="https://hyperquantum.com.co/privacidad"
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
              <Shield className="h-8 w-8 text-[#00D1FF]" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white font-poppins">
                  Política de Privacidad
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

          {/* Executive Summary */}
          <div className="bg-primary/5 p-5 rounded-lg mb-8 border border-primary/10">
            <h2 className="text-lg font-bold mb-4 text-center">Resumen Ejecutivo</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white/50">
                    <td className="px-3 py-2 font-semibold">Responsable</td>
                    <td className="px-3 py-2">Hyperquantum S.A.S. – NIT &lt;pendiente&gt; – Medellín, Colombia</td>
                  </tr>
                  <tr className="bg-white/30">
                    <td className="px-3 py-2 font-semibold">Correo de contacto</td>
                    <td className="px-3 py-2">jarcia@hyperquantum.com.co</td>
                  </tr>
                  <tr className="bg-white/50">
                    <td className="px-3 py-2 font-semibold">Teléfono</td>
                    <td className="px-3 py-2">+57 322 625 3237</td>
                  </tr>
                  <tr className="bg-white/30">
                    <td className="px-3 py-2 font-semibold">Finalidad principal</td>
                    <td className="px-3 py-2">Prestación de servicios de automatización empresarial</td>
                  </tr>
                  <tr className="bg-white/50">
                    <td className="px-3 py-2 font-semibold">Derechos HABEAS DATA</td>
                    <td className="px-3 py-2">Acceso, rectificación, cancelación, oposición</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">1. Información del Responsable</h2>
              <p className="mb-3">
                <strong>Hyperquantum S.A.S.</strong> (en adelante, "la Empresa", "nosotros" o "Hyperquantum"), 
                sociedad constituida bajo las leyes de Colombia, con domicilio principal en Medellín, Colombia, 
                actúa como responsable del tratamiento de los datos personales recolectados a través de nuestros 
                servicios y plataforma web.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Datos de contacto:</h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>Correo electrónico:</strong> jarcia@hyperquantum.com.co</li>
                  <li><strong>Teléfono:</strong> +57 322 625 3237</li>
                  <li><strong>Dirección:</strong> Medellín, Antioquia, Colombia</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">2. Marco Legal</h2>
              <p className="mb-3">
                Esta política se encuentra fundamentada en la normativa colombiana sobre protección de datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ley 1581 de 2012 (Ley de Protección de Datos Personales)</li>
                <li>Decreto 1377 de 2013 (Decreto Reglamentario)</li>
                <li>Constitución Política de Colombia (Artículo 15 - Habeas Data)</li>
                <li>Ley 1266 de 2008 (Habeas Data Financiero)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">3. Datos Personales que Recolectamos</h2>
              
              <h3 className="text-lg font-semibold mb-2">3.1 Datos de Identificación</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Nombre completo</li>
                <li>Número de identificación</li>
                <li>Correo electrónico</li>
                <li>Teléfono de contacto</li>
                <li>Dirección física</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">3.2 Datos Empresariales</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Nombre de la empresa</li>
                <li>NIT o RUT</li>
                <li>Cargo o posición</li>
                <li>Información comercial relevante</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">3.3 Datos Técnicos</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Dirección IP</li>
                <li>Información del navegador</li>
                <li>Cookies y tecnologías similares</li>
                <li>Logs de acceso y uso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">4. Finalidades del Tratamiento</h2>
              
              <h3 className="text-lg font-semibold mb-2">4.1 Finalidades Principales</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Prestación de servicios de automatización empresarial</li>
                <li>Atención de consultas y soporte técnico</li>
                <li>Elaboración de propuestas comerciales</li>
                <li>Facturación y gestión administrativa</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">4.2 Finalidades Secundarias</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Envío de información comercial y promocional</li>
                <li>Mejora de nuestros servicios y productos</li>
                <li>Análisis estadístico y de mercado</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">5. Derechos del Titular</h2>
              <p className="mb-3">
                De conformidad con la Ley 1581 de 2012, usted tiene los siguientes derechos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🔍 Derecho de Acceso</h3>
                  <p className="text-sm">Conocer qué datos tenemos sobre usted y cómo los utilizamos.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✏️ Derecho de Rectificación</h3>
                  <p className="text-sm">Solicitar la corrección de datos inexactos o incompletos.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🗑️ Derecho de Cancelación</h3>
                  <p className="text-sm">Solicitar la eliminación de sus datos cuando no sean necesarios.</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🚫 Derecho de Oposición</h3>
                  <p className="text-sm">Oponerse al tratamiento de sus datos en casos específicos.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">6. Seguridad de los Datos</h2>
              <p className="mb-3">
                Implementamos medidas técnicas, humanas y administrativas para proteger la información:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cifrado de datos en tránsito y reposo</li>
                <li>Control de acceso basado en roles</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Auditorías regulares de sistemas</li>
                <li>Capacitación continua del personal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">7. Transferencias Internacionales</h2>
              <p>
                En casos excepcionales donde sea necesario transferir datos fuera de Colombia, 
                garantizamos que el país de destino ofrezca niveles adecuados de protección 
                o implementamos salvaguardas contractuales apropiadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">8. Tiempo de Conservación</h2>
              <p>
                Los datos personales se conservarán únicamente durante el tiempo necesario 
                para cumplir con las finalidades para las cuales fueron recolectados, 
                respetando los términos legales de prescripción y las obligaciones contractuales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">9. Procedimiento para Ejercer Derechos</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Para ejercer sus derechos, puede:</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Enviar un correo a: <strong>jarcia@hyperquantum.com.co</strong></li>
                  <li>Llamar al: <strong>+57 322 625 3237</strong></li>
                  <li>Incluir: identificación, descripción de la solicitud y firma</li>
                  <li>Respuesta en máximo 10 días hábiles</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">10. Modificaciones</h2>
              <p>
                Esta política puede ser modificada en cualquier momento. Las actualizaciones 
                serán publicadas en nuestro sitio web con la fecha de última modificación. 
                Le recomendamos revisar periódicamente esta política.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-primary">11. Contacto</h2>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="mb-2">
                  Para cualquier consulta sobre esta política de privacidad:
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