'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
//将dll文件插入
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
<% if (eslint) {%>
const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: "eslint-loader",
    enforce: "pre",
    include: [resolve("src"), resolve("test")],
    options: {
        formatter: require("eslint-friendly-formatter"),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
});
<% }%>
const ISPROD = process.env.NODE_ENV === 'production'

const IMAGE_NAME = ISPROD ? '[name].[ext]' : utils.assetsPath('img/[name].[ext]')

const IMAGE_LOADER_QUERY = ISPROD ? `&name=${IMAGE_NAME}&outputPath=/img&publicPath=${config.build.imagePublicPath}` : `&name=${IMAGE_NAME}`

//上线前打包压缩图片 开发环境禁用
const IMAGELOADER = ISPROD ? `image-webpack-loader?{mozjpeg: {progressive: true,quality: 65},pngquant:{quality: "55-90", speed: 4}}` : null

module.exports = {
    context: path.resolve(__dirname, '../'),
    <% if (projectType == 'SPA') {%>
    entry: {
        app: './src/main.js'
    },
    <% } else { %>
    entry: utils.getEntry('./src/modules/**/*.js'), // 获得入口js文件,
    <% }%>
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            <% if (eslint) {%>...(config.dev.useEslint ? [createLintingRule()] : []), <% }%> {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                // loader: 'url-loader',
                // options: {
                //   limit: 10000,
                //   name:  utils.assetsPath('img/[name].[ext]')
                use: [
                    `url-loader?limit=10000${IMAGE_LOADER_QUERY}`,
                    // IMAGELOADER,
                ]
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    // externals: {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'axios': 'axios',
    // },
    plugins: [
        // 告诉 Webpack 使用了哪些动态链接库
        new DllReferencePlugin({
            // 描述 vue 动态链接库的文件内容
            manifest: require('../static/libs/dll_vendor.manifest.json'),
        }),
        //将打包的动态链接库插入到html模板中
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ["static/libs/dll.dll_vendor.js"],
            append: false,
            hash: false,
            publicPath: process.env.NODE_ENV === "production" ?
                config.build.assetsPublicPath : config.dev.assetsPublicPath
        })
    ]
}
