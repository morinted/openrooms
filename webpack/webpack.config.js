var webpack = require('webpack')
var config = require('./webpack.prod.js')

config.devtool = 'cheap-module-eval-source-map'
config.entry =
    [ 'webpack-hot-middleware/client?reload=true'
    , 'bootstrap-sass!./app/css/bootstrap.config.js'
    , './app/index'
    ],
config.plugins =
  [ config.plugins[0]
  , new webpack.optimize.OccurenceOrderPlugin()
  , new webpack.HotModuleReplacementPlugin()
  , new webpack.NoErrorsPlugin()
  , new webpack.DefinePlugin(
    { 'WEBPACK': { 'PATH': JSON.stringify(config.cwcRootPath) }
    }
  )
  ]
module.exports = config
