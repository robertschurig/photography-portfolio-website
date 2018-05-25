const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts',
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
  },

  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },

  module: {
    rules: [
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: {system: true},
      },
      {
        test: /\.ts$/,
        use: [
          {loader: 'awesome-typescript-loader'},
          {loader: 'angular2-template-loader'}
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, __dirname + '/src/global.scss'],
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /global\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {modules: false, sourceMaps: true}},
          {loader: 'sass-loader', options: {sourceMaps: true}}
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[name].css"
    }),
    new CopyWebpackPlugin([
      {from: 'data'}
    ]),
  ]

};
