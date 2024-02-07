# Gebruik een officiële Node.js-runtime als base image
FROM node:18

# Configureer de werkmap binnen de container
WORKDIR /usr/src/app

# Kopieer package.json en package-lock.json naar de werkmap
COPY package*.json ./

# Installeer Node.js dependencies
RUN npm install

# Kopieer de rest van de applicatiecode naar de werkmap
COPY . .

# Open de poort waarop je Express-applicatie luistert
EXPOSE 3000

# Opdracht om de applicatie uit te voeren wanneer de container wordt gestart
CMD ["node", "src/server.js"]