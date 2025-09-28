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

## 📋 Características

- ✨ Diseño responsivo optimizado para el mercado colombiano
- 🎨 Animaciones 3D interactivas con Three.js
- 📧 Sistema de contacto con notificaciones por email (opcional)
- 🔒 Validación robusta de formularios
- 🌐 Optimización SEO y soporte multiidioma
- 📱 Diseño mobile-first
- ♿ Accesibilidad mejorada

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
- `npm run start` - Inicia el servidor de producción
- `npm run check` - Verifica tipos de TypeScript

## 🏗️ Arquitectura del Proyecto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   └── lib/           # Utilidades y configuración
├── server/                # Backend Express
│   ├── index.ts          # Punto de entrada del servidor
│   ├── routes.ts         # Rutas de la API
│   └── storage.ts        # Interfaz de almacenamiento
├── shared/               # Código compartido
│   └── schema.ts         # Esquemas de base de datos
└── dist/                 # Archivos de producción
```

## 🌟 Funcionalidades Principales

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

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📞 Contacto

Para más información sobre Hyperquantum y nuestros servicios de automatización con IA, visita nuestro sitio web.