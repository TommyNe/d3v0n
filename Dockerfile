# ---------- Build (Vite) ----------
FROM node:latest AS build
WORKDIR /vite
COPY package.json package-lock.json vite.config.ts tsconfig.json  tsconfig.app.json tsconfig.node.json ./
COPY . .
RUN npm ci --ignore-scripts --legacy-peer-deps \
    && npx vite build \
    && npm cache clean --force

# ---------- Run (NGINX Unit minimal) ----------
FROM nginx:stable-alpine
# deine gebauten Dateien
COPY --from=build /vite/dist /usr/share/nginx/html
# Unit-Konfiguration wird beim Start automatisch angewendet
COPY docker/nginx.conf /docker-entrypoint.d/config.json

EXPOSE 80
# Der Basis-Entrypoint des Images startet unitd & lädt /docker-entrypoint.d/*.json