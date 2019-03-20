const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  target: 'web',
  // devTool: '#cheap-module-eval-source-map',
  mode: 'none',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: '/.styl/',
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|jpg|png|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-todo.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`
    }),
    new HtmlWebpackPlugin()
  ]
}

if (isDev) {
  ;(config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }),
    (webpack.devTool = '#cheap-module-eval-source-map'),
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config
