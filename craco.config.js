const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loaders: ['babel-loader', 'ts-loader']
        }
      ]
    }
  }
}