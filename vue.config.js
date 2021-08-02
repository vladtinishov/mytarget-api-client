module.exports = {
  "devServer":{
    "proxy": {
      "/api": {
      "target": 'https://target-sandbox.my.com/api/v2/',
      "pathRewrite": { '^/api': '' },
      "changeOrigin": true,
      "secure": false
      }
    }
  }
}