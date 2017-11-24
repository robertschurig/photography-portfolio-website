const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
  devtool: 'source-map',

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    'styles': './src/global.scss'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {loader:'awesome-typescript-loader'},
          {loader:'angular2-template-loader'}
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        exclude: [ /node_modules/, __dirname + '/src/global.scss' ],
        use: [ 'to-string-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /global\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', query: { modules: false, sourceMaps: true } },
              { loader: 'sass-loader', query: { sourceMaps: true } }
            ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'app', 'vendor', 'polyfills' ]
    }),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      hash: true,
      
    }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      __dirname + '/src',
      {}
    ),

    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        htmlLoader: {
          minimize: false // workaround for ng2
        }
      }
    }),
    new CopyWebpackPlugin([
      {from: 'data'}
    ])
  ]


};
