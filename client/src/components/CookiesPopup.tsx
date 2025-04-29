import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CookiesPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CookiesPopup({ open, onOpenChange }: CookiesPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-0 bg-gradient-to-b from-secondary to-white text-primary border-none rounded-xl shadow-xl">
        <div className="bg-gradient-to-r from-[#1B1F3B] to-[#2A2F57] px-6 py-4 rounded-t-xl">
          <DialogHeader className="sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl sm:text-2xl font-bold font-poppins text-white">Política de Cookies</DialogTitle>
              <DialogClose className="h-8 w-8 rounded-full bg-white/10 opacity-90 ring-offset-primary transition-all hover:opacity-100 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 flex items-center justify-center">
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Cerrar</span>
              </DialogClose>
            </div>
            <DialogDescription className="text-white/80 text-sm mt-1">
              Lea detenidamente nuestra política de cookies para conocer cómo usamos las cookies y otras tecnologías de seguimiento
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-5 md:p-6 lg:p-8">
          <div id="cookies-content" className="space-y-5 sm:space-y-7 md:space-y-8 text-sm sm:text-base max-w-[100%] mx-auto">
            <div className="text-primary/60 text-xs sm:text-sm text-right italic">
              <p>Última actualización: 29 de abril de 2025</p>
            </div>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">Introducción y definición de cookies</h2>
              <div className="text-primary/80 space-y-3">
                <p>Las <strong>cookies</strong> son pequeños archivos de texto que un sitio web instala en tu dispositivo (computador, teléfono móvil o tableta) cuando lo visitas. Sirven para almacenar y recuperar información sobre tu navegación —por ejemplo, recordar tus preferencias de idioma o medir el rendimiento del sitio— y permiten que la página funcione correctamente y sea más eficiente.</p>
                <p>En Colombia, el tratamiento de datos personales a través de cookies está regulado principalmente por la <strong>Ley 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> y, para publicidad dirigida, la <strong>Resolución 174 de 2021</strong> de la Superintendencia de Industria y Comercio (SIC). Cuando tratamos datos de visitantes residentes en la Unión Europea, también aplicamos el <strong>RGPD</strong> y la <strong>Directiva ePrivacy</strong>.</p>
                <p>Navegar por <a href="https://hyperquantum.com.co" className="text-[#00D1FF] hover:underline" target="_blank" rel="noopener noreferrer">https://hyperquantum.com.co</a> implica la instalación automática de las cookies <strong>estrictamente necesarias</strong>. Todas las demás categorías (preferencias, analíticas y marketing) solo se instalan con tu <strong>consentimiento previo y libremente revocable</strong> a través del banner de gestión de cookies o del Centro de Preferencias disponible en el pie de página.</p>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">¿Qué tipos de cookies utilizamos?</h2>
              
              <div className="space-y-4">
                <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Cookies necesarias o técnicas</h3>
                  <p className="text-primary/80">Imprescindibles para que el sitio funcione y para proporcionar los servicios que solicitas (p. ej., inicio de sesión, seguridad de formularios, preferencia de idioma). No requieren consentimiento.</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Cookies de preferencias o personalización</h3>
                  <p className="text-primary/80">Permiten recordar configuraciones (idioma, región, tipo de dispositivo) y mejorar tu experiencia. Su instalación es opcional.</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Cookies analíticas o de rendimiento</h3>
                  <p className="text-primary/80">Recogen información anónima y agregada sobre el uso del sitio (páginas más visitadas, tiempo de permanencia) con el fin de optimizar contenido y funcionalidades. Ejemplo: Google Analytics 4.</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Cookies de marketing o publicidad comportamental</h3>
                  <p className="text-primary/80">Usadas para mostrar anuncios relevantes basados en tu comportamiento de navegación en este y otros sitios. Ejemplo: Meta Pixel (_fbp). Requieren tu consentimiento expreso.</p>
                </div>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">Finalidades específicas y duración aproximada de cada categoría</h2>
              
              <div className="overflow-x-auto rounded-lg border border-primary/10 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-2 sm:px-3 py-2 text-left text-xs sm:text-sm">Nombre de la cookie</th>
                      <th className="px-2 sm:px-3 py-2 text-left text-xs sm:text-sm">Proveedor</th>
                      <th className="px-2 sm:px-3 py-2 text-left text-xs sm:text-sm">Finalidad</th>
                      <th className="px-2 sm:px-3 py-2 text-left text-xs sm:text-sm">Duración</th>
                      <th className="px-2 sm:px-3 py-2 text-left text-xs sm:text-sm">Tipo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-primary/80">
                    <tr className="bg-white/50">
                      <td className="px-2 sm:px-3 py-2 font-semibold text-xs sm:text-sm">hq_cookie_consent</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">Hyperquantum</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">Almacena tus preferencias de consentimiento.</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">12 meses</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">1.ª</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-2 sm:px-3 py-2 font-semibold text-xs sm:text-sm">csrftoken</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">Hyperquantum</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">Protección contra ataques CSRF en formularios.</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">12 meses</td>
                      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm">1.ª</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">sessionid</td>
                      <td className="px-3 py-2">Hyperquantum</td>
                      <td className="px-3 py-2">Mantiene la sesión de usuario iniciada.</td>
                      <td className="px-3 py-2">Sesión</td>
                      <td className="px-3 py-2">1.ª</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">_ga</td>
                      <td className="px-3 py-2">Google Analytics 4</td>
                      <td className="px-3 py-2">Distinguir usuarios y generar estadísticas agregadas.</td>
                      <td className="px-3 py-2">2 años</td>
                      <td className="px-3 py-2">3.ª</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">_ga_*</td>
                      <td className="px-3 py-2">Google Analytics 4</td>
                      <td className="px-3 py-2">Mantener el estado de la sesión.</td>
                      <td className="px-3 py-2">2 años</td>
                      <td className="px-3 py-2">3.ª</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">_gid</td>
                      <td className="px-3 py-2">Google Analytics 4</td>
                      <td className="px-3 py-2">Diferenciar usuarios en 24 h.</td>
                      <td className="px-3 py-2">24 h</td>
                      <td className="px-3 py-2">3.ª</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">_gat</td>
                      <td className="px-3 py-2">Google Analytics 4</td>
                      <td className="px-3 py-2">Limitar el porcentaje de solicitudes.</td>
                      <td className="px-3 py-2">1 minuto</td>
                      <td className="px-3 py-2">3.ª</td>
                    </tr>
                    <tr className="bg-white/30">
                      <td className="px-3 py-2 font-semibold">_fbp</td>
                      <td className="px-3 py-2">Meta Pixel</td>
                      <td className="px-3 py-2">Entregar publicidad personalizada.</td>
                      <td className="px-3 py-2">90 días</td>
                      <td className="px-3 py-2">3.ª</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-2 font-semibold">_hjAbsoluteSessionInProgress</td>
                      <td className="px-3 py-2">Hotjar</td>
                      <td className="px-3 py-2">Detectar la primera visita de sesión de usuario.</td>
                      <td className="px-3 py-2">30 minutos</td>
                      <td className="px-3 py-2">3.ª</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-3 bg-primary/5 p-3 sm:p-4 rounded-lg italic text-primary/70 text-sm">
                <strong>Nota:</strong> los plazos indicados son aproximados; los proveedores pueden modificarlos conforme a sus propias políticas. Los enlaces a las políticas de terceros constan en el Centro de Preferencias.
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">Gestión, revocación y eliminación de cookies</h2>
              <div className="text-primary/80 space-y-3">
                <p>Puedes administrar o revocar tu consentimiento en cualquier momento desde el <strong>Centro de Preferencias</strong> (enlace "Configurar cookies" al pie de página). Asimismo, puedes borrar o bloquear cookies directamente en tu navegador; la forma varía según el dispositivo:</p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Google Chrome:</strong> Menú ⋮ → <em>Configuración</em> → <em>Privacidad y seguridad</em> → <em>Cookies y otros datos de sitios</em> → elige la opción deseada.</li>
                  <li><strong>Mozilla Firefox:</strong> Menú ≡ → <em>Opciones</em> → <em>Privacidad y seguridad</em> → <em>Cookies y datos del sitio</em>.</li>
                  <li><strong>Microsoft Edge:</strong> Menú … → <em>Configuración</em> → <em>Cookies y permisos de sitio</em>.</li>
                  <li><strong>Safari (macOS/iOS):</strong> <em>Preferencias</em> → <em>Privacidad</em> → <em>Gestionar datos del sitio web</em>.</li>
                  <li><strong>Android (Chrome):</strong> ⋮ → <em>Configuración</em> → <em>Configuración de sitios</em> → <em>Cookies</em>.</li>
                  <li><strong>iOS (Safari):</strong> <em>Ajustes</em> → <em>Safari</em> → <em>Bloquear todas las cookies</em>.</li>
                </ul>
                
                <p className="mt-3 font-medium">Ten presente que deshabilitar cookies necesarias puede afectar el funcionamiento del portal.</p>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">Transferencias internacionales y terceros receptores</h2>
              <div className="text-primary/80 space-y-3">
                <p>Algunas cookies son gestionadas por <strong>proveedores situados fuera de Colombia</strong>:</p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Google LLC.</strong> (Estados Unidos) para Google Analytics 4.</li>
                  <li><strong>Meta Platforms, Inc.</strong> (Estados Unidos) para Meta Pixel.</li>
                  <li><strong>Hotjar Ltd.</strong> (Unión Europea) para mapas de calor y encuestas.</li>
                </ul>
                
                <p>Estos terceros pueden acceder a datos desde jurisdicciones que no ofrecen un nivel de protección equivalente al colombiano o al europeo. Hyperquantum asegura que dichas transferencias se amparan en:</p>
                
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Cláusulas Contractuales Tipo</strong> (SCC) aprobadas por la Comisión Europea.</li>
                  <li>Compromisos adicionales de seguridad, cifrado y minimización de datos.</li>
                </ol>
                
                <p>Puedes consultar los detalles en las políticas de privacidad de cada proveedor o solicitarlos a nuestro Delegado de Protección de Datos.</p>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">Actualizaciones de la política</h2>
              <div className="text-primary/80">
                <p>Podemos modificar esta Política de Cookies cuando cambien las cookies empleadas, la normativa aplicable o nuestras prácticas de tratamiento. Publicaremos la versión actualizada en esta misma página e indicaremos la fecha de revisión. Cuando los cambios sean sustanciales, te lo notificaremos a través de un banner o correo electrónico (si procede) para recabar nuevamente tu consentimiento.</p>
              </div>
            </section>
            
            <section className="bg-white/80 p-4 sm:p-5 rounded-lg shadow-sm border border-primary/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1F3B] mb-3">Datos de contacto y canal de consultas</h2>
              <div className="text-primary/80 space-y-3">
                <p>Si tienes preguntas, deseas ejercer tus derechos de acceso, rectificación, supresión, oposición o portabilidad, o quieres conocer más sobre nuestras prácticas de cookies y privacidad, escríbenos a:</p>
                
                <ul className="list-none space-y-2 md:space-y-3">
                  <li className="flex items-center">
                    <span className="font-bold min-w-32 inline-block">Correo electrónico:</span> 
                    <a href="mailto:admin@hyperquantum.com.co" className="text-[#00D1FF] hover:underline">admin@hyperquantum.com.co</a>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold min-w-32 inline-block">Domicilio:</span> Hyperquantum S.A.S., Medellín, Colombia.
                  </li>
                </ul>
              </div>
            </section>
            
            <div className="italic text-primary/60 text-sm text-center mt-5">
              <p>Última actualización: 29 de abril de 2025</p>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                className="bg-[#1B1F3B] hover:bg-[#2A2F57] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 flex items-center gap-1 sm:gap-2 shadow-md text-xs sm:text-sm md:text-base"
                onClick={() => {
                  const element = document.createElement("a");
                  const file = new Blob([document.getElementById("cookies-content")?.innerText || "Política de Cookies de Hyperquantum"], { type: 'text/plain' });
                  element.href = URL.createObjectURL(file);
                  element.download = "politica-cookies-hyperquantum.txt";
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}