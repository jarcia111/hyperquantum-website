# 🚀 Guía Rápida - Dashboard de Analytics

## ⚡ Acceso Inmediato (30 segundos)

### 1. Acceder al Dashboard

**URL Local**: http://localhost:3000/dashboard  
**Contraseña**: `hyperquantum2024`

**URL Producción**: https://hyperquantum.com.co/dashboard

### 2. Ver Métricas

Una vez dentro verás:
- ✅ **Total de visitas** y visitantes únicos
- ✅ **Gráfico de visitas diarias** (línea de tendencia)
- ✅ **Páginas más visitadas** (gráfico de barras)
- ✅ **Dispositivos**: Mobile vs Desktop (gráfico circular)
- ✅ **Navegadores**: Chrome, Safari, Firefox, etc.
- ✅ **Fuentes de tráfico**: De dónde vienen tus visitantes
- ✅ **Eventos personalizados**: Clics, envíos de formularios, etc.
- ✅ **Visitas recientes**: Lista en tiempo real

---

## 📊 ¿Qué puedes ver en el Dashboard?

### Métricas Principales (4 Cards)
- **Total de Visitas**: Número total de páginas vistas
- **Visitantes Únicos**: Número de usuarios diferentes
- **Eventos Totales**: Interacciones registradas
- **Promedio Diario**: Visitas promedio por día

### Tab 1: Resumen
- **Gráfico de línea**: Tendencia de visitas diarias
- **Gráfico de barras**: Páginas más visitadas

### Tab 2: Tráfico
- **Fuentes de tráfico**: De dónde vienen tus visitantes
  - Directo
  - Google
  - Facebook
  - Otras redes sociales

### Tab 3: Dispositivos
- **Mobile vs Desktop**: Porcentaje de cada tipo
- **Navegadores**: Chrome, Safari, Firefox, etc.
- **Sistemas operativos**: Windows, macOS, Android, iOS

### Tab 4: Eventos
- **Lista de eventos**: Clics, formularios, scroll, etc.
- **Contador por evento**: Cuántas veces ocurrió cada uno

### Sección: Visitas Recientes
- **Últimas 10 visitas** con detalles:
  - Página visitada
  - Fecha y hora
  - Dispositivo
  - Navegador
  - Sistema operativo

---

## 🎨 Características del Dashboard

### Filtros de Tiempo
Puedes ver datos de:
- **Hoy** (últimas 24 horas)
- **7 días** (última semana)
- **30 días** (último mes)
- **90 días** (últimos 3 meses)

### Auto-Refresh
- Botón para activar actualización automática
- Se actualiza cada 30 segundos
- Perfecto para monitoreo en vivo

### Diseño
- **Responsive**: Se adapta a móvil y desktop
- **Dark theme**: Colores modernos con gradientes
- **Gráficos interactivos**: Hover para ver detalles
- **Profesional**: Diseño limpio y fácil de leer

---

## 📈 ¿Qué se está trackeando automáticamente?

### Cada Visita Registra:
- ✅ Página visitada
- ✅ Fecha y hora exacta
- ✅ Dispositivo (Mobile/Desktop)
- ✅ Navegador (Chrome, Safari, Firefox, etc.)
- ✅ Sistema operativo
- ✅ Resolución de pantalla
- ✅ Idioma del navegador
- ✅ De dónde viene el visitante (referrer)

### Sin Configuración Adicional
El tracking automático ya está funcionando en:
- Página principal (/)
- Página de privacidad (/privacidad)
- Página de términos (/terminos)
- Todas las páginas futuras

---

## 🛠️ Primeros Pasos

### Si el servidor NO está corriendo:

```bash
# 1. Inicia el servidor
npm run dev

# 2. Abre tu navegador
open http://localhost:3000/dashboard

# 3. Ingresa la contraseña: hyperquantum2024
```

### Generar Datos de Prueba

```bash
# Genera 20 visitas y 15 eventos de ejemplo
./generate-test-data.sh
```

---

## 🔒 Seguridad

### Dashboard Protegido
- Requiere contraseña para acceder
- Token de autenticación en backend
- Los datos solo son visibles con login

### Cambiar Contraseña
Edita el archivo `.env`:
```bash
DASHBOARD_PASSWORD=tu_nueva_contraseña_segura
```

---

## 📱 Tracking Personalizado (Opcional)

Si quieres trackear eventos específicos (clics en botones, envíos de formularios, etc.):

### Ejemplo Básico
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function MiComponente() {
  const { track } = useAnalytics();
  
  const manejarClic = () => {
    track('Botón Especial Clickeado', 'click');
  };
  
  return <button onClick={manejarClic}>Click aquí</button>;
}
```

Ver más ejemplos en: `docs/analytics/03-EXAMPLES.md`

---

## 🚀 Despliegue en Producción

### 1. Configurar Contraseña Segura
```bash
# En tu servidor o .env
DASHBOARD_PASSWORD=contraseña_super_segura
```

### 2. Construir el Proyecto
```bash
npm run build:client
```

### 3. Desplegar
```bash
git add .
git commit -m "Update analytics dashboard"
git push
```

Tu sistema de GitHub Actions ya está configurado.

### 4. Acceder en Producción
```
https://hyperquantum.com.co/dashboard
```

---

## 🎯 Casos de Uso

### Análisis de Comportamiento
- ¿Qué páginas son más populares?
- ¿Cuánto tiempo pasan en el sitio?
- ¿Qué secciones generan más engagement?

### Optimización de Conversiones
- ¿Cuántas personas hacen clic en el CTA?
- ¿Cuántos completan el formulario de contacto?
- ¿Qué dispositivos convierten mejor?

### Análisis de Tráfico
- ¿De dónde vienen los visitantes?
- ¿Qué campañas traen más tráfico?
- ¿Cuál es el mejor momento para publicar?

---

## ❓ Preguntas Frecuentes

**¿Los datos se guardan en la nube?**  
No, se guardan localmente en tu servidor en `data/analytics.json`

**¿Se puede perder la información?**  
Haz backups periódicos del archivo `data/analytics.json`

**¿Es compatible con Google Analytics?**  
Sí, puedes usar ambos simultáneamente

**¿Afecta la velocidad del sitio?**  
No, el tracking es asíncrono y muy ligero

**¿Es gratuito?**  
Sí, es una solución propia sin costos externos

**¿Cumple con GDPR?**  
Sí, no guardamos datos personales identificables

---

## 📚 Más Información

- **Índice principal**: `docs/analytics/00-INDEX.md`
- **Guía completa**: `docs/analytics/02-USER-GUIDE.md`
- **Ejemplos de código**: `docs/analytics/03-EXAMPLES.md`
- **Documentación técnica**: `docs/analytics/04-TECHNICAL.md`

---

## 🎉 ¡Listo para Usar!

El sistema está **100% operativo** y listo para monitorear todos los visitantes de HyperQuantum.

**URL del dashboard**: http://localhost:3000/dashboard  
**Contraseña**: `hyperquantum2024`

¡Disfruta de tus métricas en tiempo real! 📊✨

---

*Sistema de Analytics para HyperQuantum - Desarrollado con ❤️*
