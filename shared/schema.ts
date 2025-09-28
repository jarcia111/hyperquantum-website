import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  company: z.string().min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  phone: z.string().min(10, { message: "El teléfono debe tener al menos 10 dígitos" }),
  service: z.string().min(1, { message: "Selecciona un servicio" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  privacy: z.boolean().refine(val => val === true, { message: "Debes aceptar la política de privacidad" })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
