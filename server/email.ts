import { Resend } from 'resend';
import { ContactFormData } from '../shared/schema';

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Dirección de correo a la que se enviarán los mensajes
const RECIPIENT_EMAIL = 'admin@hyperquantum.com.co';

/**
 * Servicio para enviar correos electrónicos
 */
export const emailService = {
  /**
   * Envía un correo con los datos del formulario de contacto
   */
  async sendContactFormEmail(data: ContactFormData): Promise<{ success: boolean; error?: any }> {
    try {
      // Formatear el mensaje HTML con los datos del formulario
      const htmlContent = `
        <h2>Nuevo mensaje de contacto - Hyperquantum</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
        <p><strong>Servicio de interés:</strong> ${data.service}</p>
        <p><strong>Mensaje:</strong></p>
        <div style="padding: 15px; border-left: 4px solid #00D1FF; background-color: #f5f5f5; margin-bottom: 20px;">
          ${data.message.replace(/\\n/g, '<br>')}
        </div>
        <p><strong>Fecha de envío:</strong> ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Este correo fue enviado automáticamente desde el formulario de contacto de Hyperquantum.</p>
      `;

      // Enviar el correo usando Resend
      const { data: responseData, error } = await resend.emails.send({
        from: 'Formulario Hyperquantum <onboarding@resend.dev>',
        to: RECIPIENT_EMAIL,
        subject: `Nuevo contacto: ${data.name} - ${data.service}`,
        html: htmlContent,
        // Configurar para que las respuestas lleguen al email del contacto
        replyTo: data.email,
      });

      if (error) {
        console.error('Error al enviar correo:', error);
        return { success: false, error };
      }

      console.log('Correo enviado correctamente:', responseData);
      return { success: true };
    } catch (error) {
      console.error('Excepción al enviar correo:', error);
      return { success: false, error };
    }
  }
};