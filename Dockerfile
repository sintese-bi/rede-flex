# Use uma imagem base oficial do Node.js
# FROM node:18-alpine

# # Defina o diretório de trabalho dentro do container
# WORKDIR /app

# # Copie o package.json e o package-lock.json
# COPY package*.json ./

# # Instale as dependências
# RUN npm install

# # Copie todos os arquivos do projeto para o diretório de trabalho do container
# COPY . .

# # Construa o projeto
# RUN npm run build

# # Exponha a porta que a aplicação usará
# EXPOSE 3050

# # Defina o comando para rodar a aplicação
# CMD ["npm", "start"]


FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos necessários para o diretório de trabalho
COPY package.json ./
COPY package-lock.json ./
COPY . .

# Instala as dependências do projeto
RUN npm install

# Executa o comando next build para construir o aplicativo para produção
RUN npm run build

# Expõe a porta em que o aplicativo Next.js será executado
EXPOSE 3050

# Comando para iniciar o servidor Next.js em produção
CMD ["npm", "start"]
