#!/bin/bash

# Script de Verificación de Seguridad de Variables de Entorno
# Ejecutar antes de hacer commit

echo "🔍 Verificando seguridad de variables de entorno..."
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# 1. Verificar que .env NO está en Git
echo "1️⃣  Verificando que .env no está trackeado en Git..."
if git ls-files | grep -q "^\.env$"; then
    echo -e "${RED}❌ ERROR: .env está en Git! Debes removerlo:${NC}"
    echo "   git rm --cached .env"
    echo "   git commit -m 'Remove .env from git'"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ .env no está en Git${NC}"
fi
echo ""

# 2. Verificar que .env está en .gitignore
echo "2️⃣  Verificando .gitignore..."
if grep -q "^\.env$" .gitignore; then
    echo -e "${GREEN}✅ .env está en .gitignore${NC}"
else
    echo -e "${RED}❌ ERROR: .env NO está en .gitignore! Agregarlo:${NC}"
    echo "   echo '.env' >> .gitignore"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. Verificar que .env.local NO está en Git
echo "3️⃣  Verificando que .env.local no está trackeado..."
if git ls-files | grep -q "^\.env\.local$"; then
    echo -e "${RED}❌ ERROR: .env.local está en Git! Removerlo:${NC}"
    echo "   git rm --cached .env.local"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ .env.local no está en Git${NC}"
fi
echo ""

# 4. Hacer build y verificar que no hay secretos expuestos
echo "4️⃣  Verificando código compilado..."
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}⚠️  Carpeta dist/ no existe. Ejecuta: npm run build:client${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    # Buscar strings sensibles
    SECRETS=$(grep -r -i -E "(api_key|apikey|secret|password|token)" dist/ 2>/dev/null | grep -v "\.map" || true)
    
    if [ -z "$SECRETS" ]; then
        echo -e "${GREEN}✅ No se encontraron secretos en dist/${NC}"
    else
        echo -e "${YELLOW}⚠️  Se encontraron referencias a secretos en dist/:${NC}"
        echo "$SECRETS" | head -5
        echo ""
        echo "   Revisa que estos NO son secretos reales"
        WARNINGS=$((WARNINGS + 1))
    fi
fi
echo ""

# 5. Verificar que no hay API keys hardcoded en el código fuente
echo "5️⃣  Buscando API keys hardcoded en código fuente..."
HARDCODED=$(grep -r -i -E "(api_key|apikey|secret|password|token)\s*=\s*['\"][a-zA-Z0-9]{20,}" \
    --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    --exclude-dir="node_modules" --exclude-dir="dist" \
    client/ server/ 2>/dev/null || true)

if [ -z "$HARDCODED" ]; then
    echo -e "${GREEN}✅ No se encontraron API keys hardcoded${NC}"
else
    echo -e "${RED}❌ ERROR: Se encontraron posibles API keys hardcoded:${NC}"
    echo "$HARDCODED"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 6. Verificar que .env.example existe y no tiene valores reales
echo "6️⃣  Verificando .env.example..."
if [ ! -f ".env.example" ]; then
    echo -e "${YELLOW}⚠️  .env.example no existe${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    echo -e "${GREEN}✅ .env.example existe${NC}"
    
    # Verificar que no tiene valores reales (ejemplo: re_*, sk_*, pk_*)
    REAL_VALUES=$(grep -E "(re_|sk_|pk_|key_)[a-zA-Z0-9]{20,}" .env.example || true)
    if [ -n "$REAL_VALUES" ]; then
        echo -e "${RED}❌ ERROR: .env.example parece tener valores reales:${NC}"
        echo "$REAL_VALUES"
        ERRORS=$((ERRORS + 1))
    else
        echo -e "${GREEN}✅ .env.example no tiene valores reales${NC}"
    fi
fi
echo ""

# 7. Verificar archivos que se van a commitear
echo "7️⃣  Verificando archivos staged para commit..."
STAGED=$(git diff --cached --name-only 2>/dev/null || true)

if [ -z "$STAGED" ]; then
    echo -e "${YELLOW}⚠️  No hay archivos staged para commit${NC}"
else
    # Verificar que .env no está staged
    if echo "$STAGED" | grep -q "^\.env$"; then
        echo -e "${RED}❌ ERROR: .env está staged! Removerlo:${NC}"
        echo "   git restore --staged .env"
        ERRORS=$((ERRORS + 1))
    else
        echo -e "${GREEN}✅ .env no está en el commit${NC}"
    fi
    
    # Verificar que .env.local no está staged
    if echo "$STAGED" | grep -q "^\.env\.local$"; then
        echo -e "${RED}❌ ERROR: .env.local está staged! Removerlo:${NC}"
        echo "   git restore --staged .env.local"
        ERRORS=$((ERRORS + 1))
    else
        echo -e "${GREEN}✅ .env.local no está en el commit${NC}"
    fi
fi
echo ""

# 8. Verificar que existe documentación de seguridad
echo "8️⃣  Verificando documentación de seguridad..."
if [ -f "docs/deployment/GITHUB-PAGES-SECURITY.md" ]; then
    echo -e "${GREEN}✅ Documentación de seguridad existe${NC}"
else
    echo -e "${YELLOW}⚠️  Falta documentación de seguridad${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Resumen
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ TODAS LAS VERIFICACIONES PASARON${NC}"
    echo ""
    echo "🟢 Seguro para hacer commit y push"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  $WARNINGS ADVERTENCIA(S)${NC}"
    echo ""
    echo "🟡 Revisa las advertencias antes de hacer commit"
    exit 0
else
    echo -e "${RED}❌ $ERRORS ERROR(S) ENCONTRADO(S)${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠️  $WARNINGS ADVERTENCIA(S)${NC}"
    fi
    echo ""
    echo "🔴 NO hacer commit hasta resolver los errores"
    exit 1
fi
