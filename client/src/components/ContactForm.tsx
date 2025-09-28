import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useDeviceSize } from "../hooks/use-device-size";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { isMobile, isTablet } = useDeviceSize();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false
    }
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: (response) => {
      // Mostrar toast según si el correo se envió o no
      if (response.emailSent) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos a la brevedad.",
        });
      } else {
        toast({
          title: "Mensaje recibido",
          description: "Tu mensaje ha sido registrado, pero hubo un problema al enviar la notificación por correo. Nos pondremos en contacto pronto.",
          variant: "default"
        });
      }
      
      // Restablecer el formulario
      form.reset();
      setSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error al enviar el mensaje",
        description: error.message || "Por favor intenta nuevamente.",
        variant: "destructive"
      });
      setSubmitting(false);
    }
  });
  
  const onSubmit = (data: ContactFormData) => {
    setSubmitting(true);
    contactMutation.mutate(data);
  };
  
  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-28 bg-secondary dark:bg-transparent relative overflow-hidden">
      {/* Enhanced ambient atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60">
        <div className="absolute -top-40 -left-48 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,225,255,0.15),rgba(0,180,255,0.08)_50%,transparent_75%)] blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 -right-48 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(0,225,255,0.12),rgba(77,208,225,0.06)_50%,transparent_75%)] blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,225,255,0.08),transparent_60%)] blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <motion.h2 
            className={`font-bold font-poppins mb-6 sm:mb-8 text-primary dark:heading-accent-gradient tracking-wide relative ${isMobile ? "text-4xl" : isTablet ? "text-5xl" : "text-6xl"}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CONTACTO
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className={`font-semibold font-poppins mb-4 sm:mb-5 text-primary dark:text-white/90 ${isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl"}`}>
              ¿Listo para automatizar tu negocio?
            </p>
            <p className={`text-primary/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto ${isMobile ? "text-base" : isTablet ? "text-lg" : "text-xl"}`}>
              Cuéntanos sobre tu empresa y tus desafíos. Nuestro equipo te contactará para ofrecerte una solución personalizada.
            </p>
          </motion.div>
          
          {/* Decorative separator */}
          <div className="contact-section-divider mt-8 sm:mt-10" />
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-y-8 sm:gap-y-10 gap-x-6 md:gap-x-8 lg:gap-x-10 max-w-6xl mx-auto">
          <motion.div 
            className="md:col-span-3 bg-white dark:glass-panel rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary dark:text-white/90">Nombre completo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="input-enhanced"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary dark:text-white/90">Empresa</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="input-enhanced"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary dark:text-white/90">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="input-enhanced"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary dark:text-white/90">Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            inputMode="tel"
                            className="input-enhanced"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-primary dark:text-white/90">¿Qué servicio te interesa?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-enhanced">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="automation">Automatización de procesos</SelectItem>
                          <SelectItem value="chatbot">Asistente virtual</SelectItem>
                          <SelectItem value="dashboard">Dashboards e informes</SelectItem>
                          <SelectItem value="integration">Integraciones</SelectItem>
                          <SelectItem value="training">Capacitación y soporte</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-primary dark:text-white/90">¿Cuál es tu principal desafío?</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="input-enhanced resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 md:space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1 h-4 w-4 text-[#00D1FF] border-accent-gray"
                        />
                      </FormControl>
                      <FormLabel className="text-xs md:text-sm text-primary/70 dark:text-white/60">
                        Acepto la política de privacidad y el tratamiento de mis datos
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full button-shimmer bg-gradient-to-r from-[#1B1F3B] to-[#2A2F57] hover:from-[#2A2F57] hover:to-[#363D75] dark:from-[#00D1FF] dark:to-[#0099CC] dark:hover:from-[#0099CC] dark:hover:to-[#007799] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                        <path fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <div className="bg-white dark:glass-panel-elevated rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm transition-all duration-500">
              <h3 className={`font-bold font-poppins mb-4 sm:mb-5 md:mb-6 text-primary dark:text-white tracking-wide ${isMobile ? "text-lg" : isTablet ? "text-xl" : "text-2xl"}`}>
                Contacto directo
              </h3>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-center">
                  <div className={`rounded-full bg-primary/5 flex items-center justify-center mr-2 sm:mr-3 md:mr-4 ${
                    isMobile ? "w-7 h-7" : isTablet ? "w-8 h-8" : "w-10 h-10"
                  }`}>
                    <Phone className={`text-[#00D1FF] ${isMobile ? "h-3.5 w-3.5" : isTablet ? "h-4 w-4" : "h-5 w-5"}`} />
                  </div>
                  <div>
                    <span className={`block text-primary/60 dark:text-white/60 font-medium ${isMobile ? "text-xs" : "text-sm"}`}>Teléfono</span>
                    <a href="tel:+573226253237" className={`text-primary dark:text-[#00D1FF] hover:text-[#00D1FF] dark:hover:text-white transition-all duration-300 font-semibold ${isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg"}`}>
                      (+57) 322 625 32 37
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`rounded-full bg-primary/5 flex items-center justify-center mr-2 sm:mr-3 md:mr-4 ${
                    isMobile ? "w-7 h-7" : isTablet ? "w-8 h-8" : "w-10 h-10"
                  }`}>
                    <Mail className={`text-[#00D1FF] ${isMobile ? "h-3.5 w-3.5" : isTablet ? "h-4 w-4" : "h-5 w-5"}`} />
                  </div>
                  <div>
                    <span className={`block text-primary/60 dark:text-white/60 font-medium ${isMobile ? "text-xs" : "text-sm"}`}>Email</span>
                    <a href="mailto:jarcia@hyperquantum.com.co" className={`text-primary dark:text-[#00D1FF] hover:text-[#00D1FF] dark:hover:text-white transition-all duration-300 font-semibold ${isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg"}`}>
                      jarcia@hyperquantum.com.co
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`rounded-full bg-primary/5 flex items-center justify-center mr-2 sm:mr-3 md:mr-4 ${
                    isMobile ? "w-7 h-7" : isTablet ? "w-8 h-8" : "w-10 h-10"
                  }`}>
                    <MapPin className={`text-[#00D1FF] ${isMobile ? "h-3.5 w-3.5" : isTablet ? "h-4 w-4" : "h-5 w-5"}`} />
                  </div>
                  <div>
                    <span className={`block text-primary/60 ${isMobile ? "text-xs" : "text-sm"}`}>Ubicación</span>
                    <span className={`text-primary ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
                      Medellín, Colombia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1B1F3B] dark:glass-panel rounded-2xl p-6 sm:p-7 md:p-8 text-white relative overflow-hidden transition-all duration-500">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,225,255,0.25),transparent_60%)] opacity-70" />
              <h3 className={`font-semibold font-poppins mb-2 sm:mb-3 ${isMobile ? "text-base" : isTablet ? "text-lg" : "text-xl"}`}>
                Contacto instantáneo
              </h3>
              <p className={`mb-3 sm:mb-4 text-white/80 ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"}`}>
                ¿Prefieres una respuesta inmediata? Contáctanos por WhatsApp y te responderemos en minutos.
              </p>
              
              <a 
                href="https://wa.me/573226253237" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-medium rounded-lg transition-colors duration-300 w-full ${
                  isMobile ? "py-1.5 px-3 text-sm" : isTablet ? "py-2 px-4 text-base" : "py-3 px-5"
                }`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`${isMobile ? "h-3.5 w-3.5" : isTablet ? "h-4 w-4" : "h-5 w-5"}`} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Contactar por WhatsApp
              </a>
              
              <div className={`${isMobile ? "mt-3" : isTablet ? "mt-4" : "mt-6"}`}>
                <p className={`text-white/60 mb-2 ${isMobile ? "text-xs" : "text-sm"}`}>
                  También puedes agendar una videollamada:
                </p>
                <a 
                  href="#" 
                  className={`flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-300 ${
                    isMobile ? "py-1.5 px-3 text-sm" : isTablet ? "py-2 px-4 text-base" : "py-3 px-5"
                  }`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`${isMobile ? "h-3.5 w-3.5" : isTablet ? "h-4 w-4" : "h-5 w-5"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar videollamada 
                  <ArrowRight className={`ml-1 ${isMobile ? "h-2.5 w-2.5" : isTablet ? "h-3 w-3" : "h-4 w-4"}`} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
