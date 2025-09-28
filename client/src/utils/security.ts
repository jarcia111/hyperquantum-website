// Utilidades de seguridad para el frontend
export class SecurityUtils {
  // Detectar herramientas de desarrollo
  static detectDevTools(): boolean {
    const devtools = {
      open: false,
      orientation: null as 'horizontal' | 'vertical' | null
    };

    const threshold = 160;
    
    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          console.warn('🚨 Herramientas de desarrollo detectadas');
          // Opcional: redirigir o mostrar mensaje
          // window.location.href = '/';
        }
        devtools.open = true;
      } else {
        devtools.open = false;
      }
    }, 500);

    return devtools.open;
  }

  // Deshabilitar clic derecho
  static disableRightClick(): void {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      console.warn('🚫 Clic derecho deshabilitado');
    });
  }

  // Deshabilitar atajos de teclado comunes
  static disableKeyboardShortcuts(): void {
    document.addEventListener('keydown', (e) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
          (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        console.warn('🚫 Atajo de teclado bloqueado');
      }
    });
  }

  // Ofuscar texto seleccionable
  static disableTextSelection(): void {
    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
    });
    
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
  }

  // Limpiar console logs en producción
  static clearConsole(): void {
    if (import.meta.env.PROD) {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};
      console.debug = () => {};
    }
  }

  // Inicializar todas las medidas de seguridad
  static initSecurity(): void {
    this.detectDevTools();
    this.disableRightClick();
    this.disableKeyboardShortcuts();
    this.clearConsole();
    
    // Mensaje de advertencia
    console.log(`
    🔒 AVISO DE SEGURIDAD 🔒
    Este sitio web está protegido por medidas de seguridad.
    El uso no autorizado está prohibido.
    © ${new Date().getFullYear()} Hyperquantum
    `);
  }
}