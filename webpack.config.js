const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
          }
        }
      }
    ]
  }
}
