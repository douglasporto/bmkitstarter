FROM node:10.16.2-jessie-slim
# Define qual diretório será usado para aplicação dentro do container
ENV HOME=/usr/src/app/web
WORKDIR $HOME
# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . $HOME
#COPY api/package*.json ${HOME}
#COPY api/index.js ${HOME}
RUN npm i
# Expõe a porta 3000 do container
EXPOSE 3000
# Roda o comando 'npm start'
CMD [ "npm", "start" ]