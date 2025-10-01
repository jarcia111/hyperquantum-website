# 🚀 Instrucciones para Commit

## Cambios Realizados

Se ha completado una limpieza y reorganización completa del proyecto:

### Eliminados (10 archivos)
- Componentes no utilizados (Particles, Popups redundantes)
- Hooks duplicados (use-mobile)
- Documentación temporal (SPA-FIX, IMPLEMENTACION-COMPLETADA, etc.)

### Organizados (10 archivos)
- Documentación movida a estructura `docs/`
- Subcarpetas: analytics, deployment, development
- Nombres con numeración para orden correcto

### Actualizados
- README.md con nueva estructura y analytics

---

## 📝 Comandos para Commit

### Opción 1: Commit Completo (Recomendado)

```bash
# Ver cambios
git status

# Agregar todos los cambios
git add .

# Commit con mensaje descriptivo
git commit -m "refactor: limpieza y reorganización del proyecto

- Eliminados 10 archivos no utilizados (componentes, hooks, docs temporales)
- Reorganizada documentación en estructura docs/ con subcarpetas
- Fusionadas guías redundantes de analytics
- Actualizado README.md con nueva estructura
- Build verificado y funcional

Archivos eliminados:
- Particles.tsx, PrivacyPopup.tsx, TermsPopup.tsx, use-mobile.tsx
- SPA-FIX.md, SPA-SOLUTION.md, IMPLEMENTACION-COMPLETADA.md
- GUIA-RAPIDA-ANALYTICS.md, INICIO-RAPIDO-DASHBOARD.md

Nueva estructura:
- docs/analytics/ (5 archivos)
- docs/deployment/ (3 archivos)
- docs/development/ (2 archivos)

Reducción: -13% archivos, -3% líneas de código"

# Push
git push origin main
```

### Opción 2: Commits Separados

```bash
# 1. Eliminar archivos no utilizados
git add -u
git commit -m "refactor: eliminar componentes y hooks no utilizados

- Eliminados Particles.tsx, PrivacyPopup.tsx, TermsPopup.tsx
- Eliminado use-mobile.tsx (redundante con use-device-size.ts)"

# 2. Reorganizar documentación
git add docs/
git commit -m "docs: reorganizar documentación en estructura de carpetas

- Creada estructura docs/ con subcarpetas
- Movidos 10 archivos de documentación
- Fusionadas guías redundantes de analytics"

# 3. Actualizar README
git add README.md
git commit -m "docs: actualizar README con nueva estructura

- Agregada sección de Analytics Dashboard
- Enlaces a documentación en docs/
- Actualizada arquitectura del proyecto"

# 4. Eliminar documentación temporal
git add -u
git commit -m "docs: eliminar documentación temporal

- Eliminados SPA-FIX.md, SPA-SOLUTION.md
- Eliminado IMPLEMENTACION-COMPLETADA.md"

# Push todos los commits
git push origin main
```

---

## ✅ Verificación Pre-Commit

Antes de hacer commit, verifica:

```bash
# 1. Build funciona
npm run build:client
# ✅ Debe completar sin errores

# 2. No hay archivos sin commitear importantes
git status
# ✅ Solo deben aparecer cambios intencionales

# 3. Ver todos los archivos que se van a commitear
git diff --cached --name-only
# ✅ Revisar lista

# 4. Ver el diff completo (opcional)
git diff --cached
# ✅ Revisar cambios detallados
```

---

## 📋 Checklist Pre-Push

- [ ] Build exitoso (`npm run build:client`)
- [ ] Servidor corre sin errores (`npm run dev`)
- [ ] Dashboard accesible (http://localhost:3000/dashboard)
- [ ] Todas las páginas cargan
- [ ] No hay errores en consola
- [ ] Documentación accesible en `docs/`
- [ ] README actualizado

---

## 🔄 Después del Push

1. **Verificar en GitHub**:
   - Ve a: https://github.com/jarcia111/hyperquantum-website
   - Verifica que los archivos se eliminaron correctamente
   - Verifica que la estructura `docs/` existe

2. **Verificar GitHub Actions**:
   - Ve a la pestaña "Actions"
   - Verifica que el build de GitHub Pages funcione
   - Espera a que se complete el deployment

3. **Verificar en Producción**:
   - Abre: https://hyperquantum.com.co
   - Verifica que el sitio carga correctamente
   - Verifica: https://hyperquantum.com.co/dashboard

4. **Actualizar al Equipo** (opcional):
   - Informar sobre la nueva estructura de docs
   - Compartir enlaces a documentación reorganizada

---

## 🚨 Si algo sale mal

### Revertir cambios locales (antes de push)
```bash
# Deshacer el último commit (mantiene cambios)
git reset HEAD~1

# O deshacer TODO (PELIGRO: pierdes cambios)
git reset --hard HEAD~1
```

### Revertir después de push
```bash
# Revertir el commit (crea nuevo commit de reversión)
git revert HEAD
git push origin main
```

---

## 💡 Consejos

1. **Revisa el diff antes de commitear**:
   ```bash
   git diff --cached
   ```

2. **Haz backup antes de push** (opcional):
   ```bash
   cp -r . ../hyperquantum-backup
   ```

3. **Verifica que todo funciona localmente primero**:
   ```bash
   npm run dev
   # Prueba el sitio manualmente
   ```

---

## 📊 Resumen de Cambios para el Commit

```
Archivos agregados:
+ docs/analytics/00-INDEX.md
+ docs/analytics/01-QUICK-START.md
+ docs/analytics/02-USER-GUIDE.md
+ docs/analytics/03-EXAMPLES.md
+ docs/analytics/04-TECHNICAL.md
+ docs/deployment/DOCKER.md
+ docs/deployment/DOMAIN-SETUP.md
+ docs/deployment/PRODUCTION.md
+ docs/development/LEGAL-PAGES.md
+ docs/development/SECURITY.md
+ ANALISIS-LIMPIEZA.md
+ LIMPIEZA-COMPLETADA.md
+ RESUMEN-LIMPIEZA.md

Archivos eliminados:
- client/src/components/Particles.tsx
- client/src/components/Particles.css
- client/src/components/PrivacyPopup.tsx
- client/src/components/TermsPopup.tsx
- client/src/hooks/use-mobile.tsx
- IMPLEMENTACION-COMPLETADA.md
- SPA-FIX.md
- SPA-SOLUTION.md
- GUIA-RAPIDA-ANALYTICS.md
- INICIO-RAPIDO-DASHBOARD.md
- ANALYTICS-INDEX.md (movido)
- ANALYTICS-README.md (movido)
- EJEMPLOS-PRACTICOS-ANALYTICS.md (movido)
- RESUMEN-TECNICO-ANALYTICS.md (movido)
- DOCKER.md (movido)
- DOMAIN-SETUP.md (movido)
- PRODUCTION.md (movido)
- SECURITY.md (movido)
- LEGAL-PAGES.md (movido)

Archivos modificados:
~ README.md

Total: +13 nuevos, -19 eliminados/movidos, ~1 modificado
```

---

## 🎯 Próximo Paso

**Elige una opción y ejecuta los comandos:**

✅ **Recomendado**: Opción 1 (Commit completo)  
🔄 **Alternativa**: Opción 2 (Commits separados)

Luego verifica en producción que todo funcione correctamente.

---

*Preparado para commit: 1 de Octubre, 2025*
