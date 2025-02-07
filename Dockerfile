# Usar la imagen base de Node
FROM node:20
# Crear directorio de la aplicación
WORKDIR /usr/src/app
# Instalar dependencias de la aplicación
COPY package*.json ./
RUN npm install
# Copiar el código fuente de la aplicación
COPY . .
# Compilar la aplicación y servir usando 'serve'
RUN npm run build --prod && npm install -g serve
# Comando para servir la aplicación
CMD ["serve", "-s", "dist/my-login-app"]
# Exponer el puerto
EXPOSE 5000