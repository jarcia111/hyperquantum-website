import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TermsPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsPopup({ open, onOpenChange }: TermsPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-0 bg-gradient-to-b from-secondary to-white text-primary border-none rounded-xl shadow-xl">
        <div className="bg-gradient-to-r from-[#1B1F3B] to-[#2A2F57] px-6 py-4 rounded-t-xl">
          <DialogHeader className="sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl sm:text-2xl font-bold font-poppins text-white">Términos y Condiciones</DialogTitle>
              <DialogClose className="h-8 w-8 rounded-full bg-white/10 opacity-90 ring-offset-primary transition-all hover:opacity-100 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 flex items-center justify-center">
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Cerrar</span>
              </DialogClose>
            </div>
            <DialogDescription className="text-white/80 text-sm mt-1">
              Lea detenidamente los términos y condiciones antes de usar nuestros servicios
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-5 md:p-6 lg:p-8">
          <div id="terms-content" className="space-y-5 sm:space-y-7 md:space-y-8 text-sm sm:text-base max-w-[100%] mx-auto">
            <div className="text-primary/60 text-xs sm:text-sm text-right italic">
              Última actualización: 29 de abril de 2025
            </div>
            
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Términos y Condiciones de Uso</h1>
            <p className="text-center"><a href="https://hyperquantum.com.co/" className="text-[#00D1FF] hover:underline font-medium" target="_blank" rel="noopener noreferrer">https://hyperquantum.com.co/</a></p>
            
            <div className="bg-primary/5 p-4 sm:p-5 rounded-lg font-medium text-center shadow-sm border border-primary/10">
              <strong className="text-base sm:text-lg block mb-1">Advertencia — Transacciones solo para personas mayores de 18 años</strong>
              <span className="text-primary/80">Al acceder, navegar o utilizar este sitio web, el Usuario declara que es mayor de edad y que tiene plena capacidad jurídica para contratar.</span>
            </div>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">1. Definiciones</h2>
              <p className="text-primary/80 mb-3">En el presente documento, los siguientes términos se emplean así:</p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                <li><strong>&quot;Sitio&quot; o &quot;Plataforma&quot;</strong>: el portal web <a href="https://hyperquantum.com.co/" className="text-[#00D1FF] hover:underline" target="_blank" rel="noopener noreferrer">https://hyperquantum.com.co/</a> y cualquier subdominio asociado.</li>
                <li><strong>&quot;Hyperquantum&quot; o &quot;Titular&quot;</strong>: Hyperquantum SAS y, cuando corresponda, sus sociedades vinculadas.</li>
                <li><strong>&quot;Usuario&quot;</strong>: toda persona natural o jurídica que accede al Sitio, crea una cuenta o adquiere Productos o Servicios.</li>
                <li><strong>&quot;Productos Digitales&quot;</strong>: archivos descargables, plantillas, cursos, software, prompts u otros bienes inmateriales entregados en formato electrónico.</li>
                <li><strong>&quot;Servicios&quot;</strong>: suscripciones de software-as-a-service (SaaS) y consultoría/automatización basada en inteligencia artificial.</li>
                <li><strong>&quot;Contenido Generado por IA&quot;</strong>: todo texto, imagen, audio, video, código u otro output creado total o parcialmente mediante herramientas de IA de Hyperquantum.</li>
              </ul>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">2. Identificación del Titular</h2>
              <ul className="list-none space-y-2 md:space-y-3 text-primary/80">
                <li className="flex items-center"><span className="font-bold min-w-32 inline-block">Razón social:</span> Hyperquantum SAS</li>
                <li className="flex items-center"><span className="font-bold min-w-32 inline-block">NIT:</span> Pendiente por confirmar</li>
                <li className="flex items-center"><span className="font-bold min-w-32 inline-block">Domicilio:</span> Medellín, Colombia</li>
                <li className="flex items-center"><span className="font-bold min-w-32 inline-block">Teléfono:</span> +57 321 6855981</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">3. Aceptación de los TyC</h2>
              <p>El uso del Sitio implica la lectura, comprensión y aceptación plena de estos Términos y Condiciones. Si el Usuario <strong>no</strong> está de acuerdo, debe abstenerse de utilizar la Plataforma. La aceptación se perfecciona al:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Navegar por el Sitio;</li>
                <li>Crear una cuenta de Usuario; o</li>
                <li>Realizar cualquier transacción electrónica.</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">4. Servicios y Productos Ofrecidos</h2>
              <p>Hyperquantum comercializa:</p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                <li><strong>Productos Digitales</strong>: plantillas, prompts, cursos en línea, software y demás bienes inmateriales descargables.</li>
                <li><strong>Suscripciones</strong>: acceso temporal a herramientas SaaS impulsadas por IA.</li>
                <li><strong>Consultoría y Automatización IA</strong>: asesoría especializada, integración de flujos de IA y desarrollo de soluciones a la medida.</li>
              </ul>
              <p className="mt-2">Todas las descripciones, precios y especificaciones pueden modificarse sin previo aviso, respetando los pedidos ya confirmados.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">5. Uso Permitido y Prohibido del Sitio</h2>
              <p>El Usuario se compromete a:</p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                <li>Utilizar la Plataforma de conformidad con la ley, la moral, el orden público y estos TyC.</li>
                <li>Abstenerse de descompilar, realizar ingeniería inversa o vulnerar la seguridad del Sitio.</li>
                <li>No emplear la Plataforma para actividades ilícitas, fraudulentas, difamatorias, contrarias a derechos de terceros o que violen la Ley 2300 de 2023 sobre comunicaciones comerciales.</li>
              </ul>
              <p className="mt-2">Hyperquantum podrá suspender o cancelar el acceso en caso de infracción.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">6. Propiedad Intelectual y Licencias</h2>
              <p>Todo el contenido disponible en el Sitio (marcas, logotipos, software, textos, gráficos, bases de datos) es titularidad de Hyperquantum SAS o de sus licenciantes y está protegido por leyes de propiedad intelectual.</p>
              
              <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4">6.1 Licencia al Usuario sobre Contenido Generado por IA</h3>
              <p>Salvo pacto escrito diferente, Hyperquantum concede al Usuario <strong>una licencia no exclusiva, no transferible y revocable</strong> para utilizar el Contenido Generado por IA únicamente para los fines especificados en cada Producto o Servicio.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Se prohíbe revender el contenido, sublicenciarlo o presentarlo como creación original sin atribución.</li>
                <li>Hyperquantum se reserva los derechos morales y patrimoniales no otorgados expresamente.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">7. Cuentas de Usuario y Seguridad</h2>
              <p>El Usuario es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades realizadas bajo su cuenta. Debe notificar de inmediato a Hyperquantum ante cualquier uso no autorizado.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">8. Condiciones Comerciales</h2>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                <li><strong>Precios e impuestos:</strong> Los precios se expresan en pesos colombianos (COP) o dólares estadounidenses (USD) e incluyen los impuestos que correspondan.</li>
                <li><strong>Métodos de pago:</strong> Pasarelas electrónicas, tarjetas débito/crédito, PSE u otros medios habilitados.</li>
                <li><strong>Política de no reembolsos:</strong> Todas las ventas son <strong>finales</strong>. Solo habrá reversión o retracto cuando la legislación colombiana aplicable así lo exija.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">9. Descargos de Responsabilidad</h2>
              <p>Los modelos de IA se basan en datos estadísticos y pueden contener errores, sesgos o inexactitudes. Hyperquantum <strong>no garantiza</strong> que los resultados satisfagan necesidades específicas ni que estén libres de fallos.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">10. Restricción de Edad</h2>
              <p>El Sitio, los Productos y los Servicios están dirigidos únicamente a personas <strong>mayores de 18 años</strong>. Al registrarse o comprar, el Usuario declara y garantiza cumplir este requisito.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">11. Protección de Datos Personales</h2>
              <p>El tratamiento de datos personales se regirá por la Ley 1581 de 2012 y normas concordantes. La Política de Privacidad se encuentra <strong>en construcción</strong> y será publicada en esta misma URL.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">12. Cookies y Tecnologías de Rastreo</h2>
              <p>El Sitio utiliza cookies propias y de terceros para mejorar la experiencia del Usuario, analizar tráfico y personalizar contenidos. Al navegar, el Usuario consiente su uso.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">13. Enlaces a Terceros</h2>
              <p>La Plataforma puede contener vínculos a otros sitios operados por terceros. Hyperquantum no controla, respalda ni asume responsabilidad por su contenido, políticas o prácticas.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">14. Modificación y Vigencia de los TyC</h2>
              <p>Hyperquantum podrá actualizar estos TyC en cualquier momento. Los cambios serán publicados con la fecha de &quot;Última actualización&quot;. El uso continuado del Sitio después de dicha publicación constituye aceptación de las modificaciones.</p>
            </section>
            
            <section>
              <h2 className="text-lg sm:text-xl font-semibold">15. Ley Aplicable y Resolución de Conflictos</h2>
              <p>Estos TyC se interpretarán conforme a las leyes de la República de Colombia. Las partes procurarán resolver sus controversias mediante <strong>conciliación extrajudicial</strong>.</p>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">16. Contacto y Atención al Usuario</h2>
              <p className="text-primary/80 mb-3">Para consultas, peticiones, quejas o reclamos, el Usuario puede comunicarse a:</p>
              <ul className="list-none space-y-2 md:space-y-3 text-primary/80 mb-4">
                <li className="flex items-center"><span className="font-bold min-w-44 inline-block">Correo electrónico:</span> jarcia@hyperquantum.com.co</li>
                <li className="flex items-center"><span className="font-bold min-w-44 inline-block">Dirección física:</span> Medellín, Colombia</li>
              </ul>
            </section>
            
            <div className="flex justify-center mt-8">
              <button 
                className="bg-[#1B1F3B] hover:bg-[#2A2F57] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 flex items-center gap-1 sm:gap-2 shadow-md text-xs sm:text-sm md:text-base"
                onClick={() => {
                  const element = document.createElement("a");
                  const file = new Blob([document.getElementById("terms-content")?.innerText || "Términos y Condiciones de Hyperquantum"], { type: 'text/plain' });
                  element.href = URL.createObjectURL(file);
                  element.download = "terminos-y-condiciones-hyperquantum.txt";
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}