#!/bin/bash

# Script de deployment para producción - HyperQuantum
# Este script simula el proceso de deployment de GitHub Pages localmente

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 HyperQuantum Production Deployment${NC}"
echo -e "${BLUE}====================================${NC}"
echo ""

# Función para mostrar progreso
show_progress() {
    echo -e "${YELLOW}⏳ $1...${NC}"
}

# Función para mostrar éxito
show_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar error
show_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Limpiar builds anteriores
show_progress "Limpiando builds anteriores"
rm -rf client/dist/
show_success "Build anterior limpiado"

# Instalar dependencias
show_progress "Verificando dependencias"
if npm ci --prefer-offline --no-audit > /dev/null 2>&1; then
    show_success "Dependencias instaladas"
else
    show_error "Error instalando dependencias"
    exit 1
fi

# Build para producción
show_progress "Construyendo aplicación para producción"
if npm run build:client; then
    show_success "Build completado exitosamente"
else
    show_error "Error en el build"
    exit 1
fi

# Verificar archivos generados
show_progress "Verificando archivos generados"
if [ -d "client/dist" ] && [ -f "client/dist/index.html" ]; then
    show_success "Archivos de producción generados correctamente"
    echo ""
    echo -e "${PURPLE}📁 Archivos generados:${NC}"
    ls -la client/dist/
    echo ""
    echo -e "${PURPLE}📊 Tamaño total:${NC}"
    du -sh client/dist/
else
    show_error "Archivos de producción no encontrados"
    exit 1
fi

# Verificar recursos críticos
show_progress "Verificando recursos críticos"
critical_files=("client/dist/index.html" "client/dist/favicon.ico" "client/dist/favicon.svg")
missing_files=()

for file in "${critical_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
    show_success "Todos los recursos críticos están presentes"
else
    show_error "Recursos críticos faltantes:"
    for file in "${missing_files[@]}"; do
        echo -e "${RED}  - $file${NC}"
    done
    exit 1
fi

# Simular servidor local para testing
show_progress "Iniciando servidor de prueba"
echo -e "${BLUE}🌐 Servidor disponible en: http://localhost:8080${NC}"
echo -e "${YELLOW}💡 Presiona Ctrl+C para detener el servidor${NC}"
echo ""

# Usar Python para servir archivos estáticos
cd client/dist && python3 -m http.server 8080 2>/dev/null || python -m SimpleHTTPServer 8080