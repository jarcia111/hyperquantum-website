# 🌐 Configuración de Dominio Personalizado - hyperquantum.com.co

## 📋 Configuración DNS Requerida

Para que el dominio `hyperquantum.com.co` apunte a GitHub Pages, necesitas configurar los siguientes registros DNS en tu proveedor de dominio:

### **Registros DNS Principales**

#### **Opción 1: CNAME (Recomendado para subdominios)**
```
Tipo: CNAME
Nombre: www
Valor: jarcia111.github.io
TTL: 3600 (1 hora)
```

#### **Opción 2: A Records (Para dominio raíz)**
```
Tipo: A
Nombre: @
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.111.153
TTL: 3600
```

#### **CNAME para www**
```
Tipo: CNAME
Nombre: www
Valor: hyperquantum.com.co
TTL: 3600
```

### **📍 Pasos de Configuración**

#### **1. En tu Proveedor de DNS/Dominio:**
1. Accede al panel de control de tu proveedor de dominio
2. Ve a la sección de DNS/Gestión de DNS
3. Agrega los registros DNS mencionados arriba
4. Guarda los cambios

#### **2. En GitHub Pages:**
1. Ve a: https://github.com/jarcia111/hyperquantum-website/settings/pages
2. En la sección "Custom domain", ingresa: `hyperquantum.com.co`
3. Marca la casilla "Enforce HTTPS" (después de que se verifique el dominio)
4. Guarda los cambios

### **⏱️ Tiempos de Propagación**
- **DNS**: 1-48 horas (usualmente 1-6 horas)
- **HTTPS Certificate**: 15-30 minutos después de la verificación DNS
- **Verificación de GitHub**: 5-10 minutos después de la configuración DNS

### **🔍 Verificación**

#### **Comandos para verificar DNS:**
```bash
# Verificar registros A
dig hyperquantum.com.co A

# Verificar registro CNAME para www
dig www.hyperquantum.com.co CNAME

# Verificar desde diferentes servidores DNS
nslookup hyperquantum.com.co 8.8.8.8
nslookup hyperquantum.com.co 1.1.1.1
```

#### **Herramientas online:**
- https://dnschecker.org/
- https://www.whatsmydns.net/
- https://toolbox.googleapps.com/apps/dig/

### **🚨 Troubleshooting**

#### **Problema: DNS no resuelve**
```bash
# Verificar que los registros DNS estén configurados
dig hyperquantum.com.co

# Verificar desde múltiples servidores DNS
dig @8.8.8.8 hyperquantum.com.co
dig @1.1.1.1 hyperquantum.com.co
```

#### **Problema: GitHub no verifica el dominio**
1. Esperar 1-6 horas para propagación DNS
2. Verificar que el archivo CNAME esté en el repositorio
3. Reintroducir el dominio en GitHub Pages settings

#### **Problema: Certificado SSL no funciona**
1. Esperar a que GitHub verifique el dominio
2. Habilitar "Enforce HTTPS" en settings de GitHub Pages
3. Esperar 15-30 minutos para generación del certificado

### **📊 Estado Actual**
- ✅ **Archivo CNAME**: Configurado en repositorio
- ✅ **Base path**: Actualizado para dominio personalizado
- ✅ **Meta tags**: Actualizados con dominio oficial
- ✅ **Router**: Configurado para dominio raíz
- ⏳ **Configuración DNS**: Pendiente en proveedor de dominio
- ⏳ **Verificación GitHub**: Pendiente después de DNS

### **🎯 URLs Finales**
- **Principal**: https://hyperquantum.com.co/
- **Con www**: https://www.hyperquantum.com.co/
- **Redirect**: https://jarcia111.github.io/hyperquantum-website/ → https://hyperquantum.com.co/

### **📞 Proveedores Comunes en Colombia**

#### **Si usas .CO Internet:**
1. Login en: https://www.cointernet.com.co/
2. Ir a "Mis Dominios" → "Gestionar DNS"
3. Agregar los registros DNS

#### **Si usas Hostinger:**
1. Login en panel de Hostinger
2. Ir a "Dominios" → "Gestionar"
3. Configurar DNS Zone

#### **Si usas GoDaddy:**
1. Login en GoDaddy
2. Ir a "Mis productos" → "DNS"
3. Agregar registros

### **✅ Checklist de Configuración**
- [ ] Registros DNS configurados en proveedor
- [ ] Dominio agregado en GitHub Pages settings
- [ ] DNS propagado (verificar con dig/nslookup)
- [ ] Dominio verificado por GitHub
- [ ] HTTPS habilitado
- [ ] Redirección funcionando

### **🔄 Después de la Configuración**
Una vez que completes la configuración DNS, el sitio estará disponible en:
- **https://hyperquantum.com.co/**
- **https://www.hyperquantum.com.co/**

¡Y GitHub Pages manejará automáticamente las redirecciones desde la URL antigua!