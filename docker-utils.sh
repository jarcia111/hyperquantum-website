#!/bin/bash

# Script de utilidades para Docker - HyperQuantum Landing Page
# Uso: ./docker-utils.sh [comando]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}🐳 HyperQuantum Docker Utils${NC}"
    echo ""
    echo "Comandos disponibles:"
    echo -e "  ${GREEN}dev${NC}        - Ejecutar en modo desarrollo"
    echo -e "  ${GREEN}prod${NC}       - Ejecutar en modo producción"
    echo -e "  ${GREEN}build${NC}      - Construir todas las imágenes"
    echo -e "  ${GREEN}build-dev${NC}  - Construir imagen de desarrollo"
    echo -e "  ${GREEN}build-prod${NC} - Construir imagen de producción"
    echo -e "  ${GREEN}stop${NC}       - Detener todos los contenedores"
    echo -e "  ${GREEN}clean${NC}      - Limpiar contenedores e imágenes"
    echo -e "  ${GREEN}logs${NC}       - Ver logs del contenedor de desarrollo"
    echo -e "  ${GREEN}logs-prod${NC}  - Ver logs del contenedor de producción"
    echo -e "  ${GREEN}shell${NC}      - Acceder al shell del contenedor de desarrollo"
    echo -e "  ${GREEN}test${NC}       - Ejecutar tests en el contenedor"
    echo -e "  ${GREEN}status${NC}     - Ver estado de los contenedores"
    echo ""
}

# Función para mostrar status
show_status() {
    echo -e "${BLUE}📊 Estado de contenedores HyperQuantum:${NC}"
    docker-compose ps
    echo ""
    echo -e "${BLUE}📊 Imágenes Docker:${NC}"
    docker images | grep hyperquantum || echo "No hay imágenes de HyperQuantum"
}

# Función principal
case "$1" in
    "dev")
        echo -e "${GREEN}🚀 Iniciando HyperQuantum en modo desarrollo...${NC}"
        docker-compose up hyperquantum-dev
        ;;
    "prod")
        echo -e "${GREEN}🚀 Iniciando HyperQuantum en modo producción...${NC}"
        docker-compose --profile production up hyperquantum-prod
        ;;
    "build")
        echo -e "${YELLOW}🔨 Construyendo todas las imágenes...${NC}"
        docker-compose build
        ;;
    "build-dev")
        echo -e "${YELLOW}🔨 Construyendo imagen de desarrollo...${NC}"
        docker-compose build hyperquantum-dev
        ;;
    "build-prod")
        echo -e "${YELLOW}🔨 Construyendo imagen de producción...${NC}"
        docker-compose build hyperquantum-prod
        ;;
    "stop")
        echo -e "${YELLOW}⏹️  Deteniendo contenedores...${NC}"
        docker-compose down
        ;;
    "clean")
        echo -e "${RED}🧹 Limpiando contenedores e imágenes...${NC}"
        docker-compose down --rmi all --volumes
        docker system prune -f
        ;;
    "logs")
        echo -e "${BLUE}📋 Logs del contenedor de desarrollo:${NC}"
        docker-compose logs -f hyperquantum-dev
        ;;
    "logs-prod")
        echo -e "${BLUE}📋 Logs del contenedor de producción:${NC}"
        docker-compose --profile production logs -f hyperquantum-prod
        ;;
    "shell")
        echo -e "${BLUE}🐚 Accediendo al contenedor de desarrollo...${NC}"
        docker-compose exec hyperquantum-dev sh
        ;;
    "test")
        echo -e "${YELLOW}🧪 Ejecutando tests...${NC}"
        docker-compose exec hyperquantum-dev npm test
        ;;
    "status")
        show_status
        ;;
    "help"|"--help"|"-h"|"")
        show_help
        ;;
    *)
        echo -e "${RED}❌ Comando no reconocido: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac