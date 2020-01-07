const path = require('path')

const config = {
  entry: './lib/game.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
}