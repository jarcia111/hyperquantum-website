import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { emailService } from "./email";
import { ZodError } from "zod";
import { trackVisit, trackEvent, getAnalyticsSummary, getRealTimeData } from "./analytics";

// Simple authentication middleware
const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD || "hyperquantum2024";

function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const token = authHeader.substring(7);
  if (token !== DASHBOARD_PASSWORD) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Analytics endpoints
  app.post("/api/analytics/track", (req, res) => {
    try {
      trackVisit(req);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error tracking visit:", error);
      res.status(500).json({ message: "Error tracking visit" });
    }
  });

  app.post("/api/analytics/event", (req, res) => {
    try {
      trackEvent(req);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error tracking event:", error);
      res.status(500).json({ message: "Error tracking event" });
    }
  });

  app.post("/api/analytics/login", (req, res) => {
    const { password } = req.body;
    
    if (password === DASHBOARD_PASSWORD) {
      return res.status(200).json({ 
        success: true, 
        token: DASHBOARD_PASSWORD 
      });
    }
    
    return res.status(401).json({ 
      success: false, 
      message: "Invalid password" 
    });
  });

  app.get("/api/analytics/summary", authMiddleware, (req, res) => {
    try {
      const days = parseInt(req.query.days as string) || 7;
      const summary = getAnalyticsSummary(days);
      res.status(200).json(summary);
    } catch (error) {
      console.error("Error getting analytics summary:", error);
      res.status(500).json({ message: "Error getting analytics" });
    }
  });

  app.get("/api/analytics/realtime", authMiddleware, (req, res) => {
    try {
      const data = getRealTimeData();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error getting real-time data:", error);
      res.status(500).json({ message: "Error getting real-time data" });
    }
  });

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
