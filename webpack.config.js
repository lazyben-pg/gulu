const path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'Gu',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.\tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}