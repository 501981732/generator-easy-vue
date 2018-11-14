'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// 防止报错 filter module rules
baseWebpackConfig.module.rules.forEach((item,index) => {
  if(item.use && Array.isArray(item.use)) {
    baseWebpackConfig.module.rules[index].use = item.use.filter(Boolean)
  }
})
<% if(projectType =='MPA'){ %>
// 多页面配置
const glob = require('glob');
const htmls = glob.sync('./src/modules/**/*.html').map(function (item) {
  var names = item.split('/')
  return new HtmlWebpackPlugin({
    // filename: './'+ names[2]+'/'+names[4],    //相当于url
    filename: './' + names[4],    //相当于url  './main.html'
    template: item,               //模板路径    './src/modules/**/*.html'
    inject: true,
    chunks:[item.slice(6, -5),'vendor','manifest']
  });
});<% }%>

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    <% if(projectType =='SPA'){ %>
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),<% }%>
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    // new ExtractTextPlugin({
    //   filename: utils.assetsPath('css/[name].[contenthash].css'),
    //   allChunks: true,
    // }),
    // new SkeletonWebpackPlugin({
    //   webpackConfig: require('./webpack.skeleton.conf'),
    //   quiet: true
    // }),
  ]<% if(projectType =='MPA'){ %>.concat(htmls)<%}%>
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
