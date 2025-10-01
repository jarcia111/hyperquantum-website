# 🐳 Docker Setup - HyperQuantum Landing Page

Este documento explica cómo ejecutar la aplicación HyperQuantum usando Docker.

## 📋 Requisitos

- Docker Desktop instalado
- Docker Compose incluido con Docker Desktop
- Al menos 4GB de RAM disponible

## 🚀 Inicio Rápido

### Desarrollo
```bash
# Usar el script de utilidades (recomendado)
./docker-utils.sh dev

# O directamente con docker-compose
docker-compose up hyperquantum-dev
```

### Producción
```bash
# Usar el script de utilidades
./docker-utils.sh prod

# O directamente con docker-compose
docker-compose --profile production up hyperquantum-prod
```

## 🔧 Comandos Útiles

### Script de Utilidades
El script `docker-utils.sh` proporciona comandos fáciles de usar:

```bash
./docker-utils.sh help          # Ver todos los comandos disponibles
./docker-utils.sh dev           # Ejecutar en desarrollo (puerto 3000)
./docker-utils.sh prod          # Ejecutar en producción (puerto 3001)
./docker-utils.sh build         # Construir todas las imágenes
./docker-utils.sh stop          # Detener contenedores
./docker-utils.sh clean         # Limpiar contenedores e imágenes
./docker-utils.sh logs          # Ver logs de desarrollo
./docker-utils.sh status        # Ver estado de contenedores
./docker-utils.sh shell         # Acceder al shell del contenedor
```

### Comandos Docker Directos

```bash
# Construir imágenes
docker-compose build

# Ejecutar en desarrollo (con hot reload)
docker-compose up hyperquantum-dev

# Ejecutar en producción
docker-compose --profile production up hyperquantum-prod

# Ver logs
docker-compose logs -f hyperquantum-dev

# Detener servicios
docker-compose down

# Limpiar todo
docker-compose down --rmi all --volumes
```

## 🌐 Puertos

- **Desarrollo**: http://localhost:3000
- **Producción**: http://localhost:3001

## 📁 Estructura de Docker

```
├── Dockerfile              # Imagen multi-stage
├── docker-compose.yml      # Configuración de servicios
├── .dockerignore           # Archivos ignorados
└── docker-utils.sh         # Script de utilidades
```

## 🔄 Multi-Stage Build

El Dockerfile utiliza multi-stage build para optimización:

1. **base**: Configuración común y dependencias
2. **development**: Entorno de desarrollo con hot reload
3. **build-client**: Construcción del frontend
4. **build-server**: Construcción del backend
5. **production**: Imagen final optimizada

## 🛠️ Variables de Entorno

### Desarrollo
- `NODE_ENV=development`
- `PORT=3000`

### Producción
- `NODE_ENV=production`
- `PORT=3000` (interno del contenedor)

## 📊 Monitoreo

### Ver estado de contenedores
```bash
./docker-utils.sh status
```

### Ver logs en tiempo real
```bash
# Desarrollo
./docker-utils.sh logs

# Producción
./docker-utils.sh logs-prod
```

### Acceder al contenedor
```bash
./docker-utils.sh shell
```

## 🐛 Troubleshooting

### Problema: Puerto ocupado
```bash
# Detener contenedores
./docker-utils.sh stop

# Verificar puertos
lsof -i :3000
lsof -i :3001
```

### Problema: Imagen corrupta
```bash
# Limpiar y reconstruir
./docker-utils.sh clean
./docker-utils.sh build
```

### Problema: Cambios no se reflejan
```bash
# En desarrollo, los cambios deberían reflejarse automáticamente
# Si no, reconstruir la imagen
./docker-utils.sh build-dev
./docker-utils.sh dev
```

### Problema: Error de permisos
```bash
# Verificar que Docker Desktop esté ejecutándose
# Reiniciar Docker Desktop si es necesario
```

## 🚀 Deployment

### Build para Producción
```bash
./docker-utils.sh build-prod
./docker-utils.sh prod
```

### Exportar Imagen
```bash
# Crear imagen para deployment
docker save hyperquantum:latest | gzip > hyperquantum-image.tar.gz

# Cargar imagen en otro servidor
gunzip -c hyperquantum-image.tar.gz | docker load
```

## 📈 Performance

### Optimizaciones Aplicadas
- Multi-stage build para reducir tamaño final
- Usuario no-root para seguridad
- Cache de node_modules optimizado
- Assets estáticos servidos eficientemente

### Tamaños de Imagen
- **Desarrollo**: ~800MB (incluye herramientas de dev)
- **Producción**: ~200MB (solo runtime necesario)

## 🔐 Seguridad

- Usuario no-root en producción
- Archivos sensibles excluidos via .dockerignore
- Variables de entorno aisladas por contenedor
- Red interna para comunicación entre servicios