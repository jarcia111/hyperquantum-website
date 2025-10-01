#!/bin/bash

# Script para generar datos de prueba en el dashboard de analytics
# Uso: ./generate-test-data.sh

echo "🚀 Generando datos de prueba para el dashboard de analytics..."
echo ""

BASE_URL="http://localhost:3000"

# Array de páginas para visitar
pages=("/" "/privacidad" "/terminos" "/" "/")

# Array de eventos para trackear
events=(
  '{"eventName":"Button Click","eventType":"click","metadata":{"button":"Contact"}}'
  '{"eventName":"Form Submit","eventType":"form_submit","metadata":{"form":"Contact Form"}}'
  '{"eventName":"Scroll","eventType":"scroll","metadata":{"section":"Hero"}}'
  '{"eventName":"Video Play","eventType":"media","metadata":{"video":"Intro"}}'
)

# Generar ID de sesión único
SESSION_ID="test_session_$(date +%s)"

echo "📊 Generando 20 visitas de prueba..."
for i in {1..20}; do
  # Seleccionar página aleatoria
  page=${pages[$RANDOM % ${#pages[@]}]}
  
  # Trackear visita
  curl -s -X POST "$BASE_URL/api/analytics/track" \
    -H "Content-Type: application/json" \
    -d '{
      "path": "'"$page"'",
      "referrer": "https://google.com",
      "sessionId": "'"${SESSION_ID}_${i}"'",
      "screenResolution": "1920x1080",
      "language": "es-ES"
    }' > /dev/null
  
  echo "  ✓ Visita $i: $page"
  sleep 0.1
done

echo ""
echo "🎯 Generando 15 eventos de prueba..."
for i in {1..15}; do
  # Seleccionar evento aleatorio
  event=${events[$RANDOM % ${#events[@]}]}
  
  # Trackear evento
  curl -s -X POST "$BASE_URL/api/analytics/event" \
    -H "Content-Type: application/json" \
    -d '{
      "sessionId": "'"${SESSION_ID}_event_${i}"'",
      "path": "/",
      '"${event:1}"'
    }' > /dev/null
  
  echo "  ✓ Evento $i registrado"
  sleep 0.1
done

echo ""
echo "✅ ¡Datos de prueba generados exitosamente!"
echo ""
echo "🌐 Ahora puedes ver las métricas en:"
echo "   http://localhost:3000/dashboard"
echo ""
echo "🔑 Contraseña: hyperquantum2024"
echo ""
