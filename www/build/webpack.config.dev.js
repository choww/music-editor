'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getPath(dir) {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  mode: 'development',
  entry: {
      app: './src/index.js',
  },
  output: {
    path: getPath('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': getPath('src'),
    },
  },
  module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: [getPath('src')],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: 'file-loader',
        },
        {
          test: /(\.(s*)css|\.sass)$/,
          include: [
            getPath('node_modules/vuetify/dist'),
          ],
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', },
            {
               loader: 'sass-loader',
            },
          ],
        },
      ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
  ],
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
