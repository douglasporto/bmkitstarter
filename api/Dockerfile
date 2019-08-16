FROM node:10.16.2-jessie-slim

# Define qual diretório será usado para aplicação dentro do container
ENV HOME=/usr/src/app/api
WORKDIR $HOME
# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . $HOME
#COPY api/package*.json ${HOME}
#COPY api/index.js ${HOME}

# Instala dependências do package.json
RUN npm i
# Expõe a porta 3000 do container
EXPOSE 3001
# Roda o comando 'npm start'
CMD [ "npm", "start" ]