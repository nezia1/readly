const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        Pages: path.resolve(__dirname, 'src/pages'),
        Components: path.resolve(__dirname, 'src/pages')
      }
    }
  }
}
