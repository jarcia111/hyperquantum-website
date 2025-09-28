# Dockerfile para HyperQuantum Landing Page
FROM node:18-alpine AS base

# Instalar dependencias necesarias
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.js ./
COPY components.json ./

# Instalar dependencias
RUN npm ci --only=production

# Etapa de desarrollo
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Etapa de construcción del cliente
FROM base AS build-client
RUN npm ci
COPY . .
RUN npm run build:client

# Etapa de construcción del servidor
FROM base AS build-server
RUN npm ci
COPY . .
RUN npm run build

# Etapa de producción
FROM node:18-alpine AS production
WORKDIR /app

# Crear usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos construidos
COPY --from=build-server /app/dist ./dist
COPY --from=build-client /app/client/dist ./dist/public
COPY --from=base /app/node_modules ./node_modules
COPY package*.json ./

# Cambiar propietario de archivos
RUN chown -R nextjs:nodejs /app
USER nextjs

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Comando de inicio
CMD ["node", "dist/index.js"]