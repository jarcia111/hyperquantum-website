#!/bin/bash

# ============================================================================
# Script de utilidades Docker para Hyperquantum Website
# ============================================================================

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_header() {
    echo -e "${BLUE}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║${NC}  $1"
    echo -e "${BLUE}╚═══════════════════════════════════════════════════════════════╝${NC}"
}

print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }

check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker no está instalado"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose no está instalado"
        exit 1
    fi
    
    print_success "Docker y Docker Compose detectados"
}

dev() {
    print_header "Iniciando en modo DESARROLLO"
    check_docker
    docker-compose up --build dev
}

dev_bg() {
    print_header "Iniciando DESARROLLO (background)"
    check_docker
    docker-compose up -d --build dev
    print_success "Containers iniciados"
    echo ""
    print_info "Ver logs: ./docker-helper.sh logs"
}

prod() {
    print_header "Iniciando en PRODUCCIÓN"
    check_docker
    docker-compose build production
    docker-compose up -d production
    print_success "Aplicación en producción"
    print_info "URL: http://localhost:3000"
}

build() {
    print_header "Building imagen Docker"
    check_docker
    docker-compose build --no-cache
    print_success "Build completado"
}

logs() {
    docker-compose logs -f ${1:-}
}

stop() {
    print_header "Deteniendo containers"
    docker-compose down
    print_success "Containers detenidos"
}

clean() {
    print_header "Limpiando Docker"
    print_warning "Esto eliminará containers y volúmenes"
    read -p "¿Continuar? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose down -v
        docker system prune -f
        print_success "Limpieza completada"
    fi
}

status() {
    print_header "Estado de containers"
    docker-compose ps
}

shell() {
    print_header "Abriendo shell"
    docker-compose exec ${1:-production} sh
}

help() {
    cat << EOF

╔═══════════════════════════════════════════════════════════════╗
║          🐳 Hyperquantum Docker Helper 🐳                    ║
╚═══════════════════════════════════════════════════════════════╝

COMANDOS:

  Desarrollo:
    ./docker-helper.sh dev        Modo desarrollo (foreground)
    ./docker-helper.sh dev-bg     Modo desarrollo (background)
  
  Producción:
    ./docker-helper.sh prod       Build + start producción
    ./docker-helper.sh build      Build sin cache
  
  Operaciones:
    ./docker-helper.sh logs       Ver logs
    ./docker-helper.sh stop       Detener containers
    ./docker-helper.sh clean      Limpiar todo
    ./docker-helper.sh status     Ver estado
    ./docker-helper.sh shell      Abrir shell
  
EJEMPLOS:

  # Desarrollo rápido
  ./docker-helper.sh dev-bg

  # Ver logs
  ./docker-helper.sh logs

  # Producción
  ./docker-helper.sh prod

EOF
}

case "${1:-help}" in
    dev) dev ;;
    dev-bg) dev_bg ;;
    prod) prod ;;
    build) build ;;
    logs) logs "$2" ;;
    stop) stop ;;
    clean) clean ;;
    status) status ;;
    shell) shell "$2" ;;
    help|--help|-h) help ;;
    *) print_error "Comando desconocido: $1"; help; exit 1 ;;
esac
