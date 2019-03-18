const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let config = {
  mode: 'none',
  devServer: {
    port: 8099,
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errorOverlay: true
    }
  },
  devtool: 'inline-source-map',
  entry: {
    main: path.join(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: 'url-loader'
      },
      {
        test: /.less$/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComment: true
      }
    }),
    // new CleanWebpackPlugin({
    //   root: path.join(__dirname, '../')
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `manifest.${entrypoint.name}`
    }
  }
}

module.exports = config
