var webpack = require('webpack')
var path = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var app = new express()
var port = 3000
var compiler = webpack(config)
var devMiddleware = webpackDevMiddleware(
    compiler
  , { noInfo: true
    , publicPath: config.output.publicPath
    }
)
app.use(this.middleware = devMiddleware)
app.use(webpackHotMiddleware(compiler))

/*eslint-disable */
app.get('*', function(req, res) {
  // Redirect user to your root URL in development
  if (req.originalUrl.indexOf(config.cwcRootPath) !== 0) {
    console.info('Redirecting from ' + req.originalUrl)
    res.redirect(config.cwcRootPath)
    return
  }
  // Wait until bundle is created to serve virtual index
  var that = this
  function asyncLoop(delay) {
    return setTimeout(function () {
      try {
        var index = that.middleware.fileSystem
          .readFileSync(path.join(config.output.path, '/index.html'))
        res.end(index)
        return
      } catch (e) {
        // Don't crash before bundle exists
        asyncLoop(1000)
      }
    }, delay)
  }
  asyncLoop(0)
}.bind(this))

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('→ 🌎 Server listening, bundle is being created. Open http://localhost:%s/ in your browser.', port)
  }
})
/*eslint-enable */
