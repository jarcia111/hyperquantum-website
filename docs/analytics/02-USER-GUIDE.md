# 📊 Analytics Dashboard - HyperQuantum

Sistema completo de analytics personalizado para monitorear visitantes y métricas de tu sitio web.

## 🚀 Características

- **Tracking automático de visitas**: Registra cada página visitada
- **Eventos personalizados**: Rastrea clics, envíos de formularios, scroll, etc.
- **Dashboard protegido**: Acceso seguro con contraseña
- **Métricas en tiempo real**: 
  - Total de visitas
  - Visitantes únicos
  - Páginas más visitadas
  - Dispositivos (Mobile/Desktop)
  - Navegadores
  - Sistemas operativos
  - Fuentes de tráfico (referrers)
  - Eventos personalizados
- **Visualizaciones**: Gráficos interactivos con Recharts
- **Auto-refresh**: Actualización automática de datos cada 30 segundos
- **Rangos de tiempo**: Hoy, 7 días, 30 días, 90 días

## 📦 Instalación

El sistema ya está integrado en tu proyecto. Solo necesitas:

1. **Configurar la contraseña del dashboard**:
   ```bash
   # Crear archivo .env en la raíz del proyecto
   echo "DASHBOARD_PASSWORD=tu_contraseña_segura" > .env
   ```

2. **Instalar dependencias** (si no lo has hecho):
   ```bash
   npm install
   ```

3. **Iniciar el servidor**:
   ```bash
   npm run dev
   ```

## 🔐 Acceso al Dashboard

1. Navega a: `http://localhost:3000/dashboard` (o `https://hyperquantum.com.co/dashboard` en producción)
2. Ingresa la contraseña configurada en el archivo `.env`
3. ¡Listo! Verás todas tus métricas

**Contraseña por defecto**: `hyperquantum2024` (cámbiala en producción)

## 📈 Uso del Sistema de Tracking

### Tracking Automático

El sistema ya está configurado para trackear automáticamente:
- Cada visita a cualquier página
- Dispositivo, navegador, OS del visitante
- Referrer (de dónde viene el visitante)
- Resolución de pantalla
- Idioma del navegador

### Tracking Manual de Eventos

Puedes trackear eventos personalizados en cualquier componente:

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { track } = useAnalytics();
  
  const handleClick = () => {
    track('Button Clicked', 'click', { buttonName: 'Contact' });
  };
  
  return <button onClick={handleClick}>Contactar</button>;
}
```

### Hooks Especializados

```tsx
import { useTrackClicks, useTrackFormSubmit } from '@/hooks/useAnalytics';

function ContactForm() {
  const trackClick = useTrackClicks('Contact Button');
  const trackSubmit = useTrackFormSubmit('Contact Form');
  
  return (
    <form onSubmit={trackSubmit}>
      <button onClick={trackClick}>Enviar</button>
    </form>
  );
}
```

## 🗄️ Almacenamiento de Datos

Los datos se almacenan en:
- **Archivo**: `data/analytics.json`
- **Formato**: JSON
- **Límite**: 10,000 visitas y 10,000 eventos (los más recientes)

### Migrar a Base de Datos (Opcional)

Si quieres más escalabilidad, puedes migrar a PostgreSQL o MongoDB editando `server/analytics.ts`.

## 🔧 Configuración Avanzada

### Cambiar la Contraseña

Edita el archivo `.env`:
```bash
DASHBOARD_PASSWORD=nueva_contraseña_super_segura
```

### Personalizar Métricas

Edita `server/analytics.ts` para agregar más métricas personalizadas.

### Agregar Geolocalización

Instala un servicio de IP geolocation:
```bash
npm install geoip-lite
```

Y edita la función `trackVisit` en `server/analytics.ts`.

## 📊 Métricas Disponibles

### Resumen General
- Total de visitas
- Visitantes únicos (por sesión)
- Total de eventos
- Promedio de visitas diarias

### Análisis de Tráfico
- Gráfico de visitas diarias
- Páginas más visitadas
- Fuentes de tráfico (referrers)

### Análisis de Dispositivos
- Mobile vs Desktop
- Distribución por navegador
- Distribución por sistema operativo

### Eventos Personalizados
- Contador de eventos por tipo
- Historial de eventos recientes

### Visitas Recientes
- Últimas 50 visitas con detalles completos
- Timestamp, página, dispositivo, navegador, OS

## 🚀 Despliegue en Producción

1. **Configura la variable de entorno** en tu servidor:
   ```bash
   export DASHBOARD_PASSWORD=tu_contraseña_segura
   ```

2. **Construye el proyecto**:
   ```bash
   npm run build
   ```

3. **Inicia el servidor**:
   ```bash
   npm start
   ```

4. **Accede al dashboard**: `https://tudominio.com/dashboard`

## 🔒 Seguridad

- ✅ Dashboard protegido con contraseña
- ✅ Token de autenticación en localStorage
- ✅ Middleware de autenticación en backend
- ✅ No se guardan datos personales sensibles
- ✅ IPs ofuscadas en logs

**Recomendación**: Usa HTTPS en producción para proteger la contraseña.

## 📝 Notas

- Los datos se almacenan localmente en el servidor
- El archivo `data/analytics.json` debe tener permisos de escritura
- Para mejor rendimiento, considera usar una base de datos real en producción
- El auto-refresh consume recursos, úsalo solo cuando necesites datos en tiempo real

## 🤝 Soporte

Si necesitas ayuda o quieres agregar más funcionalidades, contacta al equipo de desarrollo.

## 📄 Licencia

Parte del proyecto HyperQuantum - Todos los derechos reservados.
