module.exports = {
  publicPath: './',
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
  },
  css: {
    loaderOptions: {
      less: {
        additionalData: '@import "~@/style/base";' // 让每个组件在编译之前都进行引用，进而能让每个组件都能访问到全局变量
      }
    }
  }
}
