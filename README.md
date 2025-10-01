# Hyperquantum Website

Una página web dinámica para Hyperquantum, una agencia de automatización con IA que empodera a las PYMES colombianas a través de la transformación digital innovadora.

## 🚀 Tecnologías Utilizadas

- **Frontend**: React.js con TypeScript
- **Estilos**: Tailwind CSS con componentes shadcn/ui
- **Animaciones**: Framer Motion y Three.js para elementos interactivos avanzados
- **Backend**: Express.js con Node.js
- **Email**: Integración con Resend.com (opcional)
- **Routing**: Wouter para navegación del cliente
- **Validación**: Zod para validación de formularios
- **Build Tool**: Vite para desarrollo rápido y builds optimizados
- **Analytics**: Sistema personalizado con dashboard integrado

## 📋 Características

- ✨ Diseño responsivo optimizado para el mercado colombiano
- 🎨 Animaciones 3D interactivas con Three.js
- 📧 Sistema de contacto con notificaciones por email (opcional)
- 🔒 Validación robusta de formularios
- 🌐 Optimización SEO y soporte multiidioma
- 📱 Diseño mobile-first
- ♿ Accesibilidad mejorada
- 📊 Dashboard de analytics con métricas en tiempo real

## 🛠️ Instalación y Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/jarciahdz/hyperquantum-website.git
cd hyperquantum-website
```

2. Instala las dependencias:
```bash
npm install
```

3. (Opcional) Configura las variables de entorno para email:
```bash
# Crea un archivo .env con:
RESEND_API_KEY=tu_api_key_de_resend  # Opcional para desarrollo
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:client` - Construye solo el frontend
- `npm run start` - Inicia el servidor de producción
- `npm run check` - Verifica tipos de TypeScript
- `./generate-test-data.sh` - Genera datos de prueba para analytics

## 🏗️ Arquitectura del Proyecto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── hooks/         # Custom hooks (analytics, device size)
│   │   └── lib/           # Utilidades y configuración
├── server/                # Backend Express
│   ├── index.ts          # Punto de entrada del servidor
│   ├── routes.ts         # Rutas de la API
│   ├── analytics.ts      # Sistema de tracking y métricas
│   └── email.ts          # Servicio de email
├── shared/               # Código compartido
│   └── schema.ts         # Esquemas de validación
├── docs/                 # Documentación organizada
│   ├── analytics/        # Docs del dashboard de analytics
│   ├── deployment/       # Docs de despliegue
│   └── development/      # Docs de desarrollo
├── data/                 # Datos de analytics (local)
└── dist/                 # Archivos de producción
```

## 🌟 Funcionalidades Principales

### Dashboard de Analytics 📊
- Métricas en tiempo real de visitantes
- Visualizaciones interactivas con gráficos
- Tracking automático de páginas, dispositivos y navegadores
- Eventos personalizados (clics, formularios, etc.)
- Dashboard protegido con autenticación
- **Acceso**: http://localhost:3000/dashboard
- **Documentación**: Ver `docs/analytics/`

### Sistema de Contacto
- Formulario multi-paso con validación
- Integración con email automático (opcional)

### Elementos Interactivos
- Logo 3D animado con Three.js
- Efectos holográficos y partículas
- Animaciones fluidas con Framer Motion

### Optimización
- Carga lazy de componentes
- Splitting de código
- Assets optimizados
- SEO mejorado

## 📚 Documentación

### Analytics
- [Guía Rápida](docs/analytics/01-QUICK-START.md) - Comienza en 30 segundos
- [Guía de Usuario](docs/analytics/02-USER-GUIDE.md) - Documentación completa
- [Ejemplos de Código](docs/analytics/03-EXAMPLES.md) - Tracking personalizado
- [Documentación Técnica](docs/analytics/04-TECHNICAL.md) - API y arquitectura

### Deployment
- [Producción](docs/deployment/PRODUCTION.md) - Despliegue general
- [Docker](docs/deployment/DOCKER.md) - Contenedores
- [Dominio](docs/deployment/DOMAIN-SETUP.md) - Configuración DNS

### Development
- [Seguridad](docs/development/SECURITY.md) - Guía de seguridad
- [Páginas Legales](docs/development/LEGAL-PAGES.md) - Privacidad y términos

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📞 Contacto

Para más información sobre Hyperquantum y nuestros servicios de automatización con IA, visita nuestro sitio web.