var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var cwcRootPath = '/openrooms'
module.exports =
  { context: path.resolve(__dirname, '..')
  , entry:
    [ 'bootstrap-sass!./app/css/bootstrap.prod.js'
    , './app/index'
    ]
  , cwcRootPath: cwcRootPath
  , output:
    { path: path.join(__dirname, '../build')
    , filename: 'cwc-[hash:4].js'
    /*eslint-disable*/
    , publicPath: cwcRootPath + '/'
    /*eslint-enable*/
    }
  , plugins:
    [ new HtmlWebpackPlugin(
        { template: './index.html'
        , inject: true
        , favicon: './app/assets/favicon.png'
        }
      )
    , new webpack.optimize.DedupePlugin()
    , new webpack.optimize.OccurenceOrderPlugin()
    , new webpack.optimize.UglifyJsPlugin()
    , new webpack.DefinePlugin(
        { 'process.env':
          { 'NODE_ENV': '"production"' }
        , 'WEBPACK': { 'PATH': JSON.stringify(cwcRootPath) }
        }
      )
    , new ExtractTextPlugin('assets/style-[contenthash:4].css')
    ]
  , module:
    { loaders:
      [ { test: /\.js$/
        , loaders: ['babel']
        , exclude: /node_modules/
        }
      , { test: /bootstrap.*\.js/, loader: 'imports?jQuery=jquery' }
      , { test: /\.png.*$/
        , loaders: ['file?name=assets/img-[hash:6].png']
        , exclude: /node_modules/
        }
      , { test: /\.woff.*|\.ttf|\.eot|\.svg$/
        , loader: 'file?name=assets/fnt-[hash:6].[ext]'
        }
      ]
    }
}
