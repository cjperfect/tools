const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api", {
      target: "xxxxxx", // 代理地址
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
