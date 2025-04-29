import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { useToast } from "@/hooks/use-toast";
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
    <section id="contacto" className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-primary">CONTACTO</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold font-poppins mb-3 sm:mb-4">¿Listo para automatizar tu negocio?</h3>
          <p className="text-primary/70 text-base sm:text-lg">
            Cuéntanos sobre tu empresa y tus desafíos. Nuestro equipo te contactará para ofrecerte una solución personalizada.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-4 md:gap-x-6 lg:gap-x-8 max-w-5xl mx-auto">
          <motion.div 
            className="md:col-span-3 bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary">Nombre completo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 md:px-4 py-2 border border-accent-gray/30 rounded-lg focus:ring-2 focus:ring-[#00D1FF] focus:border-[#00D1FF] outline-none transition-all"
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
                        <FormLabel className="text-sm font-medium text-primary">Empresa</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 md:px-4 py-2 border border-accent-gray/30 rounded-lg focus:ring-2 focus:ring-[#00D1FF] focus:border-[#00D1FF] outline-none transition-all"
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
                        <FormLabel className="text-sm font-medium text-primary">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="w-full px-3 md:px-4 py-2 border border-accent-gray/30 rounded-lg focus:ring-2 focus:ring-[#00D1FF] focus:border-[#00D1FF] outline-none transition-all"
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
                        <FormLabel className="text-sm font-medium text-primary">Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            inputMode="tel"
                            className="w-full px-3 md:px-4 py-2 border border-accent-gray/30 rounded-lg focus:ring-2 focus:ring-[#00D1FF] focus:border-[#00D1FF] outline-none transition-all"
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
                      <FormLabel className="text-sm font-medium text-primary">¿Qué servicio te interesa?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-3 md:px-4 py-2 border border-accent-gray/30 rounded-lg focus:ring-2 focus:ring-[#00D1FF] focus:border-[#00D1FF] outline-none transition-all">
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
                      <FormLabel className="text-sm font-medium text-primary">¿Cuál es tu principal desafío?</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="w-full px-3 md:px-4 py-2 border border-accent-gray/30 rounded-lg focus:ring-2 focus:ring-[#00D1FF] focus:border-[#00D1FF] outline-none transition-all"
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
                      <FormLabel className="text-xs md:text-sm text-primary/70">
                        Acepto la política de privacidad y el tratamiento de mis datos
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1B1F3B] hover:bg-[#2A2F57] text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300 shadow-sm"
                >
                  {submitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-3 md:mb-4">Contacto directo</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 md:mr-4">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm text-primary/60">Teléfono</span>
                    <a href="tel:+573216855981" className="text-sm md:text-base text-primary hover:text-[#00D1FF] transition-colors">(+57) 321 685 5981</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 md:mr-4">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm text-primary/60">Email</span>
                    <a href="mailto:admin@hyperquantum.com.co" className="text-sm md:text-base text-primary hover:text-[#00D1FF] transition-colors">admin@hyperquantum.com.co</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 md:mr-4">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#00D1FF]" />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm text-primary/60">Ubicación</span>
                    <span className="text-sm md:text-base text-primary">Medellín, Colombia</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1B1F3B] rounded-xl p-4 sm:p-5 md:p-6 text-white">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-2 sm:mb-3 md:mb-4">Contacto instantáneo</h3>
              <p className="text-sm md:text-base mb-3 sm:mb-4 md:mb-6 text-white/80">¿Prefieres una respuesta inmediata? Contáctanos por WhatsApp y te responderemos en minutos.</p>
              
              <a href="https://wa.me/573216855981" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Contactar por WhatsApp
              </a>
              
              <div className="mt-4 md:mt-6">
                <p className="text-xs md:text-sm text-white/60 mb-2">También puedes agendar una videollamada:</p>
                <a href="#" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar videollamada <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
