const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/pages/page1/index.js',
    page2: './src/pages/page2/libros-populares.js',
    page3: './src/pages/page3/nuevos-lanzamientos.js',
    page4: './src/pages/page4/contexto.js',
    page5: './src/pages/page5/segundo-paso.js',
    page6: './src/pages/page6/tercer-paso.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/page1/index.html',
      filename: 'index.html',
      chunks: ['page1'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page2/libros-populares.html',
      filename: 'libros-populares.html',
      chunks: ['page2'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page3/nuevos-lanzamientos.html',
      filename: 'nuevos-lanzamientos.html',
      chunks: ['page3'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page4/contexto.html',
      filename: 'contexto.html',
      chunks: ['page4'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page5/segundo-paso.html',
      filename: 'segundo-paso.html',
      chunks: ['page5'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page6/tercer-paso.html',
      filename: 'tercer-paso.html',
      chunks: ['page6'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(mp3|wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/audios/[name][ext]'
        }
      },
    ],
  },
};
