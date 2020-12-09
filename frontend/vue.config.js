// const path = require('path')

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    port: 9000,
    open: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    "proxy": {
      "/django": {
        "target": "http://localhost:9010",
        "secure": false
      },
      "/node": {
        "target": "http://localhost:9020",
        "secure": false
      }
    }
  },
  configureWebpack: {
    module: {
      rules: []
    },
    plugins: []
  }
  // "transpileDependencies": [
  //   "vuetify"
  // ],
  // chainWebpack: config => {
  //   config.plugin('copy').tap(args => {
  //     const copyCordova = {
  //       from: path.resolve(__dirname, 'src-cordova/config.xml'),
  //       to: args[0][0].to
  //     }

  //     args[0].push(copyCordova)
  //     return args
  //   })
  // },
}
