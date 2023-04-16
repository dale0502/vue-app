const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 修改為實際後端 API 的網址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 如果後端 API 的路徑已經包含 /api 前綴，則不需要進行路徑重寫
        }
      }
    }
  },
};

