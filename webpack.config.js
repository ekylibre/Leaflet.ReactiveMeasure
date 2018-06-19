const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [{
        test: /\.coffee$/,
        use: ['coffee-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  entry: ['./src/reactive_measure.coffee', './src/reactive_measure.scss'],
  output: {
    path: __dirname + '/dist',
    filename: 'reactive_measure.js'
  },
  externals: {
    'leaflet': 'L'
  },
  resolve: {
    extensions: ['.coffee', '.js']
  },
  plugins: [
    new ExtractTextPlugin('reactive_measure.css')
  ]
}
