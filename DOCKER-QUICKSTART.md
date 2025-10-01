# 🐳 Docker Quick Start - Hyperquantum Website

## ⚡ Inicio Rápido

```bash
# Desarrollo con hot-reload
./docker-helper.sh dev-bg

# Producción
./docker-helper.sh prod

# Ver ayuda completa
./docker-helper.sh help
```

## 📋 Comandos Disponibles

### Desarrollo
```bash
./docker-helper.sh dev        # Foreground (ver logs en tiempo real)
./docker-helper.sh dev-bg     # Background (corre en segundo plano)
```

### Producción
```bash
./docker-helper.sh prod       # Build + start
./docker-helper.sh build      # Solo build (sin caché)
```

### Operaciones
```bash
./docker-helper.sh logs       # Ver logs
./docker-helper.sh status     # Estado de containers
./docker-helper.sh stop       # Detener containers
./docker-helper.sh clean      # Limpiar todo
./docker-helper.sh shell      # Abrir shell en container
```

## 🌐 URLs

**Desarrollo:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

**Producción:**
- App: http://localhost:3000
- Health: http://localhost:3000/health

## 📁 Archivos Docker

- `Dockerfile` → Multi-stage build optimizado
- `docker-compose.yml` → Orquestación de servicios
- `.dockerignore` → Optimización de contexto
- `docker-helper.sh` → Script de utilidades
- `docs/deployment/DOCKER.md` → Documentación completa

## 📊 Métricas

- **Tamaño**: ~200-300 MB
- **Build**: 2-3 min (primera vez), 30-60s (caché)
- **Memoria**: 150-250 MB
- **CPU idle**: <5%

## 🚀 Deploy Rápido

### Railway
```bash
npm i -g railway
railway init
railway up
```

### VPS
```bash
ssh user@server
git clone https://github.com/jarcia111/hyperquantum-website.git
cd hyperquantum-website
./docker-helper.sh prod
```

## 🔧 Troubleshooting

```bash
# Logs detallados
docker-compose logs -f

# Rebuild sin caché
docker-compose build --no-cache

# Recursos
docker stats

# Limpiar todo
./docker-helper.sh clean
```

## 📖 Documentación Completa

Ver `docs/deployment/DOCKER.md` para:
- Guía detallada
- Arquitectura completa
- Opciones de deploy
- Best practices
- Monitoreo y optimizaciones

---

**Última actualización**: 1 de Octubre, 2025
