# BaseImage
FROM node:18

# optional command
# docker working directory is /app by default
WORKDIR /app

# COPY source destination
COPY package.json .

# RUN - it builds the image = compile time
RUN npm install

# COPY all files from source to destination
COPY . .

# Expose on PORT 3000
EXPOSE 3000

# Executable command 
# CMD ["node", "app.js"]

CMD [ "npm", "run", "dev" ]