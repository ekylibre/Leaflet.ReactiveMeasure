module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  },
  entry: ['./src/reactive_measure.coffee', './src/geographic_util.coffee', './src/leaflet.draw-0.3.patches.coffee'],
  output: {
    path: __dirname + '/dist',
    filename: 'reactive_measure.js'
  },
  externals: {
    'leaflet': 'L'
  },
  resolve: {
    extensions: ['.coffee', '.js']
  }
}
