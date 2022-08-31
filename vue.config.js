const path = require("path");
module.exports = {
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vue$",
      path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
    );
  },
};
