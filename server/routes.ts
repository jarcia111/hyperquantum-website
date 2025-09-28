import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { emailService } from "./email";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Enviar correo electrónico con los datos del formulario
      const emailResult = await emailService.sendContactFormEmail(validatedData);
      
      if (!emailResult.success) {
        console.error("Error al enviar el correo electrónico:", emailResult.error);
        return res.status(500).json({ 
          message: "Hubo un problema al enviar el correo", 
          emailSent: false
        });
      }
      
      // Send response
      return res.status(201).json({ 
        message: "Mensaje enviado correctamente", 
        emailSent: true
      });
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Error de validación", 
          errors: validationError.details 
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "Error al procesar el formulario de contacto" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
