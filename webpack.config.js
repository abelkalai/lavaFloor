const path = require('path')

module.exports = {
  mode: "development",
  entry: './src/lib/game.js',
  resolve: {
    alias: {
      GameObjects: path.resolve(__dirname, 'src/lib/gameObjects/'),
      Utilities: path.resolve(__dirname, 'src/lib/utilities/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
}