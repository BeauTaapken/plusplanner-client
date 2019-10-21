const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/abstracts/*.scss'),
        path.resolve(__dirname, 'src/styles/base/*.scss'),
        path.resolve(__dirname, 'src/styles/components/*.scss'),
        path.resolve(__dirname, 'src/styles/pages/*.scss'),
        path.resolve(__dirname, 'src/styles/vendors/*.scss'),
      ]
    }
  }
}
