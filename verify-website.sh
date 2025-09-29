#!/bin/bash

echo "🔍 Verificando estado de Hyperquantum Website..."
echo "=================================================="

# Verificar sitio principal
echo "✅ Verificando sitio principal..."
if curl -s -o /dev/null -w "%{http_code}" https://hyperquantum.com.co | grep -q "200"; then
    echo "   ✅ https://hyperquantum.com.co - OK (200)"
else
    echo "   ❌ https://hyperquantum.com.co - ERROR"
fi

# Verificar GitHub Pages
echo "✅ Verificando redirección GitHub Pages..."
if curl -s -o /dev/null -w "%{http_code}" https://jarcia111.github.io/hyperquantum-website/ | grep -q "301\|302"; then
    echo "   ✅ GitHub Pages redirige correctamente"
else
    echo "   ❌ GitHub Pages no redirige"
fi

# Verificar recursos estáticos
echo "✅ Verificando recursos estáticos..."
if curl -s -o /dev/null -w "%{http_code}" https://hyperquantum.com.co/favicon.svg | grep -q "200"; then
    echo "   ✅ Favicon disponible"
else
    echo "   ❌ Favicon no disponible"
fi

# Verificar que el contenido HTML se carga
echo "✅ Verificando contenido HTML..."
if curl -s https://hyperquantum.com.co | grep -q "Hyperquantum"; then
    echo "   ✅ Contenido HTML se carga correctamente"
else
    echo "   ❌ Contenido HTML no se carga"
fi

# Verificar JavaScript
echo "✅ Verificando archivos JavaScript..."
if curl -s https://hyperquantum.com.co | grep -q "assets.*\.js"; then
    echo "   ✅ Archivos JavaScript presentes"
else
    echo "   ❌ Archivos JavaScript no encontrados"
fi

# Verificar CSS
echo "✅ Verificando archivos CSS..."
if curl -s https://hyperquantum.com.co | grep -q "assets.*\.css"; then
    echo "   ✅ Archivos CSS presentes"
else
    echo "   ❌ Archivos CSS no encontrados"
fi

echo ""
echo "🎉 Verificación completada!"
echo "📅 $(date)"
echo ""
echo "🌐 URLs principales:"
echo "   - Principal: https://hyperquantum.com.co"
echo "   - Privacidad: https://hyperquantum.com.co/privacidad"
echo "   - Términos: https://hyperquantum.com.co/terminos"
echo ""
echo "🔄 Si hay problemas, ejecutar:"
echo "   npm run build:client && git add . && git commit -m 'fix: rebuild' && git push origin main"