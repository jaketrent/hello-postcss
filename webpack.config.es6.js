import HtmlWebpackPlugin from 'html-webpack-plugin'

import pcssNested from 'postcss-nested'

export default {
  entry: './index',

  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css?module!postcss!cssnext' }
    ]
  },

  postcss: [ pcssNested ],

  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'React!',
      devServer: 'http://localhost:3000',
      appMountId: 'app'
    })
  ]
}