# 使用 Node.js 18 的基本映像
FROM node:18

# 設定工作目錄
WORKDIR /app

# 添加用户
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs

# 更改文件夹权限
RUN chown -R nodejs:nodejs /app

# 複製 package.json 與 package-lock.json（如果有）到工作目錄
COPY package*.json ./

# 複製應用程式的所有檔案到工作目錄
COPY . .

# 安裝相依套件，包括開發環境的相依套件
RUN npm ci

# 執行應用程式的建構命令
RUN npm run build

# 開放容器埠號
EXPOSE 3000

# 定義容器啟動命令
CMD ["npm", "start"]

# Build Stage
# FROM node:16-alpine AS BUILD_IMAGE
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build


# # Production Stage
# FROM node:16-alpine AS PRODUCTION_STAGE
# WORKDIR /app
# COPY --from=BUILD_IMAGE /app/package*.json ./
# COPY --from=BUILD_IMAGE /app/.next ./.next
# COPY --from=BUILD_IMAGE /app/public ./public
# COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
# ENV NODE_ENV=production
# EXPOSE 3000
# CMD ["npm", "start"]