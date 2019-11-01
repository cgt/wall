const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
      rules: [
          {
              test: /\.(ts|js)$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};