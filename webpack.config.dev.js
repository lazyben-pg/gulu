const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({   //使index.html 自动引入 index.js
    title: 'gulu',
    template: 'index.html'
  })
  ]
})