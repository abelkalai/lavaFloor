const path = require('path')

module.exports = {
  mode: "development",
  entry: './static/lib/game.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
}