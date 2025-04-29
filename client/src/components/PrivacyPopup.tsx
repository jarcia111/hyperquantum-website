import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PrivacyPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyPopup({ open, onOpenChange }: PrivacyPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-0 bg-gradient-to-b from-secondary to-white text-primary border-none rounded-xl shadow-xl">
        <div className="bg-gradient-to-r from-[#1B1F3B] to-[#2A2F57] px-6 py-4 rounded-t-xl">
          <DialogHeader className="sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl sm:text-2xl font-bold font-poppins text-white">Política de Privacidad</DialogTitle>
              <DialogClose className="h-8 w-8 rounded-full bg-white/10 opacity-90 ring-offset-primary transition-all hover:opacity-100 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 flex items-center justify-center">
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Cerrar</span>
              </DialogClose>
            </div>
            <DialogDescription className="text-white/80 text-sm mt-1">
              Lea detenidamente nuestra política de privacidad para conocer cómo tratamos sus datos
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-5 md:p-6 lg:p-8">
          <div id="privacy-content" className="space-y-5 sm:space-y-7 md:space-y-8 text-sm sm:text-base max-w-[100%] mx-auto">
            <div className="text-primary/60 text-xs sm:text-sm text-right italic">
              <p>Fecha de entrada en vigor: 30 de abril de 2025</p>
              <p>Última actualización: 30 de abril de 2025</p>
            </div>
            
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Política de Privacidad de Hyperquantum S.A.S.</h1>
            
            <div className="bg-primary/5 p-4 sm:p-5 rounded-lg font-medium text-center shadow-sm border border-primary/10">
              <strong className="text-base sm:text-lg block mb-2">Resumen ejecutivo</strong>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Responsable</td>
                      <td className="px-3 py-2">Hyperquantum S.A.S. – NIT &lt;pendiente&gt; – Medellín, Colombia</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Correo de contacto</td>
                      <td className="px-3 py-2">admin@hyperquantum.com.co</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Finalidades principales</td>
                      <td className="px-3 py-2">
                        1) Envío de boletines comerciales<br />
                        2) Gestión de facturación y cobros<br />
                        3) Soporte técnico<br />
                        4) Analítica de uso del sitio
                      </td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Categorías de datos</td>
                      <td className="px-3 py-2">Identificación, Contacto, Financieros, Navegación</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Bases legales</td>
                      <td className="px-3 py-2">Consentimiento, Ejecución contractual, Obligación legal, Interés legítimo</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Derechos de los titulares</td>
                      <td className="px-3 py-2">Acceso • Rectificación • Supresión • Revocatoria • Oposición • Portabilidad</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Transferencias internacionales</td>
                      <td className="px-3 py-2">Se realizarán solo a encargados que garanticen nivel adecuado de protección (art. 26 Ley 1581/2012)</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Cookies</td>
                      <td className="px-3 py-2">Técnicas, analíticas y publicitarias; configurables por el usuario</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Plazo de respuesta</td>
                      <td className="px-3 py-2">Máx. 15 días hábiles a partir de la recepción de la petición</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">1. Identidad y datos de contacto del responsable</h2>
              <div className="text-primary/80">
                <p className="mb-3">Hyperquantum S.A.S. (en adelante, <strong>"Hyperquantum", "nosotros" o "la Compañía"</strong>) es una sociedad colombiana con domicilio en <strong>Medellín, Colombia</strong> y NIT <strong>&lt;pendiente&gt;</strong>.</p>
                <p className="mb-3">Para cualquier solicitud relacionada con esta Política, pueden escribirnos a:</p>
                <ul className="list-none space-y-2 md:space-y-3">
                  <li className="flex items-center"><span className="font-bold min-w-32 inline-block">Correo:</span> admin@hyperquantum.com.co</li>
                  <li className="flex items-center"><span className="font-bold min-w-32 inline-block">Dirección física:</span> &lt;pendiente de confirmación&gt;</li>
                </ul>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">2. Definiciones clave</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <tbody className="divide-y divide-gray-200 text-primary/80">
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Dato personal</td>
                      <td className="px-3 py-2">Cualquier información vinculada o que pueda asociarse a una persona natural identificada o identificable.</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Titular</td>
                      <td className="px-3 py-2">Ustedes, propietarios de los datos personales que tratamos.</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Tratamiento</td>
                      <td className="px-3 py-2">Cualquier operación sobre datos personales: recolección, registro, almacenamiento, uso, circulación o supresión.</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Encargado</td>
                      <td className="px-3 py-2">Tercero que trata datos por cuenta de Hyperquantum.</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">Transferencia</td>
                      <td className="px-3 py-2">Envío de datos a un receptor que actúa como responsable, dentro o fuera de Colombia.</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">Transmisión</td>
                      <td className="px-3 py-2">Comunicación de datos a un encargado para su tratamiento por cuenta nuestra.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">3. Principios aplicables al tratamiento</h2>
              <ol className="list-decimal space-y-2 pl-5 text-primary/80">
                <li><strong>Legalidad y finalidad:</strong> Tratamos los datos dentro de los fines descritos y amparados por la Ley 1581/2012, el Decreto 1377/2013 y el GDPR.</li>
                <li><strong>Libertad:</strong> Solo recolectamos datos con su consentimiento previo, expreso e informado, salvo excepciones legales.</li>
                <li><strong>Transparencia:</strong> Les brindamos acceso claro y gratuito a la información sobre el tratamiento.</li>
                <li><strong>Seguridad:</strong> Aplicamos medidas técnicas, administrativas y organizativas para proteger la confidencialidad, integridad y disponibilidad de la información.</li>
                <li><strong>Necesidad y proporcionalidad:</strong> Tratamos los datos estrictamente necesarios para las finalidades declaradas.</li>
                <li><strong>Temporalidad:</strong> Conservamos los datos únicamente durante el tiempo requerido por la finalidad o disposiciones legales aplicables.</li>
              </ol>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">4. Finalidades y bases legales</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left">#</th>
                      <th className="px-3 py-2 text-left">Finalidad</th>
                      <th className="px-3 py-2 text-left">Base legal (Ley 1581)</th>
                      <th className="px-3 py-2 text-left">Base legal equivalente (GDPR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-primary/80">
                    <tr className="bg-white/50">
                      <td className="px-3 py-2">1</td>
                      <td className="px-3 py-2"><strong>Envío de boletines comerciales</strong>: novedades, ofertas y contenidos sobre automatización para PYMES.</td>
                      <td className="px-3 py-2">Consentimiento previo del titular (art. 9).</td>
                      <td className="px-3 py-2">Art. 6 (1)(a) – Consentimiento.</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2">2</td>
                      <td className="px-3 py-2"><strong>Gestión de facturación y cobros</strong> de nuestros productos y servicios.</td>
                      <td className="px-3 py-2">Ejecución de la relación contractual (art. 10 b).</td>
                      <td className="px-3 py-2">Art. 6 (1)(b) – Ejecución del contrato.</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2">3</td>
                      <td className="px-3 py-2"><strong>Soporte técnico</strong> y resolución de tickets o consultas.</td>
                      <td className="px-3 py-2">Ejecución contractual / Interés legítimo*</td>
                      <td className="px-3 py-2">Art. 6 (1)(b)/(f).</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2">4</td>
                      <td className="px-3 py-2"><strong>Analítica de uso del sitio</strong> para mejorar funcionalidades y experiencia de usuario.</td>
                      <td className="px-3 py-2">Consentimiento / Interés legítimo*</td>
                      <td className="px-3 py-2">Art. 6 (1)(a)/(f).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs italic text-primary/60 mt-2">*Invocamos interés legítimo cuando el análisis es estrictamente necesario para la seguridad operativa y no afecta derechos fundamentales; de lo contrario requerimos consentimiento explícito.</p>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">5. Categorías de datos tratados</h2>
              <ul className="list-disc space-y-2 pl-5 text-primary/80">
                <li><strong>Identificación:</strong> nombre, apellidos, número y tipo de identificación (cédula, cédula de extranjería).</li>
                <li><strong>Contacto:</strong> dirección de correo electrónico, número de teléfono.</li>
                <li><strong>Financieros:</strong> NIT, datos de pago (p. ej., referencia de transacción, último dígito de tarjeta).</li>
                <li><strong>Navegación y dispositivos:</strong> dirección IP, tipo de navegador, páginas visitadas, duración de la sesión, eventos de clic.</li>
              </ul>
              <p className="mt-3 text-primary/80">No recolectamos datos sensibles ni datos de menores de edad. Si posteriormente identificamos dicha información, la eliminaremos de inmediato o solicitaremos autorización de los representantes legales.</p>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">6. Derechos de los titulares y cómo ejercerlos</h2>
              <p className="mb-3 text-primary/80">Tienen derecho a:</p>
              <ol className="list-decimal space-y-2 pl-5 text-primary/80">
                <li><strong>Acceder</strong> a los datos que poseemos sobre ustedes.</li>
                <li><strong>Rectificar</strong> aquellos incompletos, inexactos o desactualizados.</li>
                <li><strong>Suprimir</strong> los datos (derecho al olvido) cuando sea procedente.</li>
                <li><strong>Revocar</strong> la autorización o <strong>oponerse</strong> al tratamiento para fines específicos.</li>
                <li><strong>Solicitar prueba</strong> de la autorización otorgada.</li>
                <li><strong>Portar</strong> los datos a otro responsable (cuando aplique).</li>
              </ol>
              
              <div className="mt-4 bg-primary/5 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Procedimiento:</h3>
                <p className="mb-2 text-primary/80">Envíennos una solicitud al correo <strong>admin@hyperquantum.com.co</strong> con:</p>
                <ul className="list-disc pl-5 space-y-1 text-primary/80">
                  <li>Nombre completo y número de identificación.</li>
                  <li>Descripción clara del derecho que desean ejercer.</li>
                  <li>Documentos de soporte (si aplica).</li>
                </ul>
                
                <h3 className="font-semibold mt-3 mb-2">Plazo de respuesta:</h3>
                <ul className="list-disc pl-5 space-y-1 text-primary/80">
                  <li><strong>Consultas:</strong> máx. 15 días hábiles.</li>
                  <li><strong>Reclamos:</strong> máx. 15 días hábiles, prorrogables una sola vez por igual término, previa notificación.</li>
                </ul>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">7. Transferencias y transmisiones internacionales</h2>
              <p className="mb-3 text-primary/80">Hyperquantum podría recurrir a proveedores ubicados fuera de Colombia (p. ej., servicios de hospedaje o analítica). Nos aseguramos de que:</p>
              <ol className="list-decimal space-y-2 pl-5 text-primary/80">
                <li>El país receptor ofrezca un <strong>nivel adecuado de protección</strong> (art. 26 Ley 1581).</li>
                <li>Existan <strong>contratos de transmisión de datos</strong> con cláusulas tipo o reglas corporativas vinculantes.</li>
                <li>El proveedor cumpla con el <strong>GDPR</strong> u otras normas equivalentes.</li>
              </ol>
              
              <div className="mt-3 bg-primary/5 p-3 sm:p-4 rounded-lg italic text-primary/80">
                <strong>Listado de proveedores:</strong> será publicado y actualizado en nuestro sitio web. En caso de cambios sustanciales, les informaremos oportunamente.
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">8. Uso de cookies y tecnologías similares</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left">Tipo de cookie</th>
                      <th className="px-3 py-2 text-left">Propósito</th>
                      <th className="px-3 py-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-primary/80">
                    <tr className="bg-white/50">
                      <td className="px-3 py-2"><strong>Técnicas / de sesión</strong></td>
                      <td className="px-3 py-2">Mantener la autenticación y la seguridad del sitio.</td>
                      <td className="px-3 py-2">Se eliminan al cerrar el navegador.</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2"><strong>Analíticas<br/>(Google Analytics 4)</strong></td>
                      <td className="px-3 py-2">Medir interacciones y rendimiento para optimizar servicios.</td>
                      <td className="px-3 py-2">1 año (máx.)</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2"><strong>Publicitarias / remarketing<br/>(Meta Pixel, Google Ads)</strong></td>
                      <td className="px-3 py-2">Mostrar anuncios relevantes sobre nuestros productos.</td>
                      <td className="px-3 py-2">90 días</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-primary/80">Al ingresar al sitio se despliega un <strong>banner de consentimiento</strong> que les permite:</p>
              <ul className="list-disc space-y-1 pl-5 text-primary/80">
                <li>Aceptar todas las cookies.</li>
                <li>Configurar o rechazar las analíticas y publicitarias.</li>
                <li>Acceder a esta sección para más detalles.</li>
              </ul>
              
              <p className="mt-3 text-primary/80">Pueden eliminar o bloquear las cookies desde su navegador; sin embargo, algunas funcionalidades podrían verse afectadas.</p>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">9. Medidas de seguridad</h2>
              <p className="mb-3 text-primary/80">Hyperquantum aplica un <strong>Modelo de Seguridad de la Información</strong> basado en ISO 27001 y las directrices del GDPR:</p>
              <ul className="list-disc space-y-2 pl-5 text-primary/80">
                <li><strong>Cifrado TLS 1.3</strong> en tránsito y AES-256 en reposo.</li>
                <li><strong>Gestión de accesos</strong> con autenticación multifactor.</li>
                <li><strong>Backups</strong> automatizados y pruebas de restauración periódicas.</li>
                <li><strong>Revisión de proveedores</strong> mediante auditorías y acuerdos de confidencialidad.</li>
                <li><strong>Política de gestión de incidentes</strong> con notificación a autoridades y titulares dentro de 72 horas (cuando sea obligatorio).</li>
              </ul>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">10. Vigencia, actualización y cambios</h2>
              <p className="mb-3 text-primary/80">La presente Política entra en vigor el <strong>30 de abril de 2025</strong> y permanecerá vigente mientras Hyperquantum trate datos personales. Cualquier cambio material será comunicado mediante:</p>
              <ol className="list-decimal space-y-2 pl-5 text-primary/80">
                <li>Aviso en la página principal de <a href="https://hyperquantum.com.co" className="text-[#00D1FF] hover:underline" target="_blank" rel="noopener noreferrer">https://hyperquantum.com.co</a>.</li>
                <li>Correo electrónico a los titulares registrados (cuando el cambio sea sustancial).</li>
              </ol>
              
              <p className="mt-3 text-primary/80">Si continúan usando nuestros servicios tras la notificación, entenderemos que aceptan la nueva versión.</p>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">11. Glosario (8 términos)</h2>
              <ul className="list-disc space-y-2 pl-5 text-primary/80 grid md:grid-cols-2 gap-4">
                <li><strong>Autoridad de Control:</strong> Superintendencia de Industria y Comercio (SIC) en Colombia.</li>
                <li><strong>CCPA:</strong> Ley de Privacidad del Consumidor de California.</li>
                <li><strong>GDPR:</strong> Reglamento General de Protección de Datos de la Unión Europea.</li>
                <li><strong>ISO 27001:</strong> Estándar internacional para sistemas de gestión de seguridad de la información.</li>
                <li><strong>Log de acceso:</strong> Registro técnico que documenta las acciones de un usuario en el sistema.</li>
                <li><strong>Metadatos:</strong> Datos que describen otros datos (p. ej., fecha de creación de un archivo).</li>
                <li><strong>Opt-out:</strong> Mecanismo para que el titular rechace un tratamiento específico.</li>
                <li><strong>Tokenización:</strong> Técnica de seguridad que sustituye datos sensibles por equivalentes no sensibles (tokens).</li>
              </ul>
            </section>
            
            <div className="italic text-primary/60 text-sm text-center mt-5">
              <p>Última revisión: 30 de abril de 2025. Para dudas o comentarios, escriban a <strong>admin@hyperquantum.com.co</strong></p>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                className="bg-[#1B1F3B] hover:bg-[#2A2F57] text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-md"
                onClick={() => {
                  const element = document.createElement("a");
                  const file = new Blob([document.getElementById("privacy-content")?.innerText || "Política de Privacidad de Hyperquantum"], { type: 'text/plain' });
                  element.href = URL.createObjectURL(file);
                  element.download = "politica-privacidad-hyperquantum.txt";
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}