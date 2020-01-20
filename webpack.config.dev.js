const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  plugins: [new HtmlWebpackPlugin({   //使index.html 自动引入 index.js
    title: 'gulu',
    template: 'example.html'
  })
  ]
})