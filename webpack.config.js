const path = require('path');

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-css-variables'),
  require('postcss-simple-vars'),
  require('postcss-advanced-variables'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer'),
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    before: function (app, server) {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/i,
      // style-loader: Creates 'style' nodes from JS strings, css-loader: Translate CSS into CommonJS, sass-loader: Compile Sass to CSS
      use: [{loader: 'style-loader'}, 
      {loader: 'css-loader?url=false'}, 
      {loader: 'postcss-loader',
        options: {
          plugins: postCSSPlugins,
        }
      }]
    }]
  }
}