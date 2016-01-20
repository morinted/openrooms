var config = require('./bootstrap.config.js')
config.styleLoader = require('extract-text-webpack-plugin')
  .extract('style-loader', 'css-loader!sass-loader')
module.exports = config
