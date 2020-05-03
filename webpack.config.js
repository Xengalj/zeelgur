const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

function resolve(dir) {
  return path.join(
    __dirname,
    '/src',
    dir
  );
}

module.exports = {
  mode: 'development',
  stats: { children: false }, //Prevents MiniCssExtractPlugin from putting out logs
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          'file-loader?name=/img/[name].[ext]', // retain original file name
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '/fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('icons')],
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Portal - Webpack Test',
      template: 'src/index.html',
      favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
    }),
    new VueLoaderPlugin()
  ],
};
