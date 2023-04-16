# 指定基礎映像檔為Node.js的LTS版本
FROM node:lts

# 在容器中建立應用程式目錄
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 將package.json和package-lock.json複製到容器中，以便安裝相依套件
COPY package*.json ./

# 安裝相依套件
RUN yarn install

# 複製Vue.js應用程式的檔案到容器中
COPY . .

# 執行Vue.js應用程式的建置命令
RUN yarn run build

# 將容器的80埠口開放
EXPOSE 80

# 定義啟動容器後要執行的命令
CMD [ "yarn", "run", "start" ]
