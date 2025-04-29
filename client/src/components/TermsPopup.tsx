import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TermsPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsPopup({ open, onOpenChange }: TermsPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto p-6 bg-white text-primary border-none">
        <DialogHeader className="sticky top-0 bg-white pt-2 pb-4 z-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl sm:text-2xl font-semibold font-poppins text-primary">Términos y Condiciones</DialogTitle>
            <DialogClose className="h-6 w-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
          <div className="text-primary/60 text-xs sm:text-sm text-right italic">
            Última actualización: 29 de abril de 2025
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold">Términos y Condiciones de Uso</h1>
          <p>Sitio web: <a href="https://hyperquantum.com.co/" className="text-[#00D1FF] hover:underline" target="_blank" rel="noopener noreferrer">https://hyperquantum.com.co/</a></p>
          
          <div className="bg-primary/5 p-3 sm:p-4 rounded-lg font-medium">
            <strong>Advertencia — Transacciones solo para personas mayores de 18 años.</strong><br />
            Al acceder, navegar o utilizar este sitio web, el Usuario declara que es mayor de edad y que tiene plena capacidad jurídica para contratar.
          </div>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">1. Definiciones</h2>
            <p>En el presente documento, los siguientes términos se emplean así:</p>
            <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
              <li><strong>"Sitio" o "Plataforma"</strong>: el portal web <a href="https://hyperquantum.com.co/" className="text-[#00D1FF] hover:underline" target="_blank" rel="noopener noreferrer">https://hyperquantum.com.co/</a> y cualquier subdominio asociado.</li>
              <li><strong>"Hyperquantum" o "Titular"</strong>: Hyperquantum SAS y, cuando corresponda, sus sociedades vinculadas.</li>
              <li><strong>"Usuario"</strong>: toda persona natural o jurídica que accede al Sitio, crea una cuenta o adquiere Productos o Servicios.</li>
              <li><strong>"Productos Digitales"</strong>: archivos descargables, plantillas, cursos, software, prompts u otros bienes inmateriales entregados en formato electrónico.</li>
              <li><strong>"Servicios"</strong>: suscripciones de software-as-a-service (SaaS) y consultoría/automatización basada en inteligencia artificial.</li>
              <li><strong>"Contenido Generado por IA"</strong>: todo texto, imagen, audio, video, código u otro output creado total o parcialmente mediante herramientas de IA de Hyperquantum.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">2. Identificación del Titular</h2>
            <ul className="list-none space-y-1">
              <li><strong>Razón social:</strong> Hyperquantum SAS</li>
              <li><strong>NIT:</strong> Pendiente por confirmar</li>
              <li><strong>Domicilio:</strong> Medellin, Colombia</li>
              <li><strong>Correo electrónico de contacto:</strong> +57 321 6855981</li>
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
            <h2 className="text-lg sm:text-xl font-semibold">6. Propiedad Intelectual y Licencias de Contenido Generado por IA</h2>
            <p>Todo el contenido disponible en el Sitio (marcas, logotipos, software, textos, gráficos, bases de datos) es titularidad de Hyperquantum SAS o de sus licenciantes y está protegido por la Decisión 486 CAN, Ley 23 de 1982 y demás normas de propiedad intelectual.</p>
            
            <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4">6.1 Licencia al Usuario sobre Contenido Generado por IA</h3>
            <p>Salvo pacto escrito diferente, Hyperquantum concede al Usuario <strong>una licencia no exclusiva, no transferible y revocable</strong> para utilizar el Contenido Generado por IA únicamente para los fines especificados en cada Producto o Servicio.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Se prohíbe revender el contenido, sublicenciarlo o presentarlo como creación original sin atribución.</li>
              <li>Hyperquantum se reserva los derechos morales y patrimoniales no otorgados expresamente.</li>
            </ul>
            
            <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4">6.2 Cesión de Material del Usuario</h3>
            <p>Al cargar o suministrar información propia (datos, prompts, archivos), el Usuario concede a Hyperquantum una licencia mundial, libre de regalías y por el plazo permitido por la ley para alojar, procesar y utilizar dichos elementos exclusivamente para la ejecución del servicio contratado.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">7. Cuentas de Usuario y Seguridad de Credenciales</h2>
            <p>El Usuario es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades realizadas bajo su cuenta. Debe notificar de inmediato a Hyperquantum ante cualquier uso no autorizado. Hyperquantum puede requerir autenticación multifactor y suspender cuentas comprometidas.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">8. Condiciones Comerciales</h2>
            <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
              <li><strong>Precios e impuestos:</strong> Los precios se expresan en pesos colombianos (COP) o dólares estadounidenses (USD) e incluyen los impuestos que correspondan.</li>
              <li><strong>Métodos de pago:</strong> Pasarelas electrónicas, tarjetas débito/crédito, PSE u otros medios habilitados.</li>
              <li><strong>Facturación electrónica:</strong> Se emite conforme al Decreto 358 de 2020 y normas concordantes.</li>
              <li><strong>Política de no reembolsos:</strong> Todas las ventas son <strong>finales</strong>. Solo habrá reversión o retracto cuando la legislación colombiana aplicable así lo exija (Ley 1480 de 2011 y Ley 2439 de 2024).</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">9. Descargos de Responsabilidad</h2>
            
            <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4">9.1 Sobre resultados de IA</h3>
            <p>Los modelos de IA se basan en datos estadísticos y pueden contener errores, sesgos o inexactitudes. Hyperquantum <strong>no garantiza</strong> que los resultados satisfagan necesidades específicas ni que estén libres de fallos.</p>
            
            <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4">9.2 Sobre decisiones del Usuario</h3>
            <p>Hyperquantum <strong>no</strong> presta asesoría financiera, legal ni estratégica vinculante. Las decisiones tomadas a partir de la información o recomendaciones generadas por la Plataforma son responsabilidad exclusiva del Usuario.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">10. Restricción de Edad</h2>
            <p>El Sitio, los Productos y los Servicios están dirigidos únicamente a personas <strong>mayores de 18 años</strong>. Al registrarse o comprar, el Usuario declara y garantiza cumplir este requisito.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">11. Protección de Datos Personales</h2>
            <p>El tratamiento de datos personales se regirá por la Ley 1581 de 2012, el Decreto 1377 de 2013, la Ley 1266 de 2008 (cuando aplique) y normas concordantes. La Política de Privacidad se encuentra <strong>en construcción</strong> y será publicada en esta misma URL, momento a partir del cual hará parte integral de estos TyC.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">12. Cookies y Tecnologías de Rastreo</h2>
            <p>El Sitio utiliza cookies propias y de terceros para mejorar la experiencia del Usuario, analizar tráfico y personalizar contenidos. Al navegar, el Usuario consiente su uso. Puede modificar la configuración de su navegador para rechazar cookies; sin embargo, ciertas funcionalidades podrían verse afectadas.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">13. Enlaces a Terceros</h2>
            <p>La Plataforma puede contener vínculos a otros sitios operados por terceros. Hyperquantum no controla, respalda ni asume responsabilidad por su contenido, políticas o prácticas.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">14. Modificación y Vigencia de los TyC</h2>
            <p>Hyperquantum podrá actualizar estos TyC en cualquier momento. Los cambios serán publicados con la fecha de "Última actualización". El uso continuado del Sitio después de dicha publicación constituye aceptación de las modificaciones.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">15. Ley Aplicable y Resolución de Conflictos</h2>
            <p>Estos TyC se interpretarán conforme a las leyes de la República de Colombia. Antes de acudir a la jurisdicción ordinaria de Bogotá D. C., las partes procurarán resolver sus controversias mediante <strong>conciliación extrajudicial en derecho</strong>. Si la conciliación no prospera, la controversia será dirimida por los jueces competentes de Colombia.</p>
          </section>
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold">16. Contacto y Atención al Usuario</h2>
            <p>Para consultas, peticiones, quejas o reclamos, el Usuario puede comunicarse a:</p>
            <ul className="list-none space-y-1">
              <li><strong>Correo electrónico:</strong> admin@hyperquantum.com.co</li>
              <li><strong>Dirección física:</strong> Medellin, Colombia</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}