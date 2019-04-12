# generator-easy-vue
> a generator for a super vue

> 此项目为开箱即用的vue项目生成器，几乎项目中用到的所有东西都一配置好，让你写代码如丝滑般顺滑~

## 功能

```
1. 支持可选reset.css normalize.css
2. 支持可选 rem布局 or vw布局
3. 等比例宽高容器 一像素边框等移动端解决方案
4. 支持可选less sass css预处理器
5. 动态加载路由，以及自动注入组件
6. 预渲染骨架屏
7. 按需(按照指定的浏览器环境所需)引入polyfill
8. 提供vue 插件alert demo写法
9. axios init配置
10. vuex init配置
11. vue-router两种模式 history 上线配置base url 填坑
12. 上线build 自动压缩图片
13. 重写image publicPath
14. 跨域反向代理案例
15. 单元测试和e2e todo
16. npm/yarn/bower...
```

**0.1.4**

    增加多页面应用

**0.1.8**

    增加一键生成多页面应用

**0.2.0**

    增加jsdoc配置 自动生成说明文档 增加对.vue文件的文档解析 jsdoc jsdoc-vue

**0.2.1**

	1. 增加代码检测工作流 prettier统一代码格式 precommit自动美化格式以及修复代码 lint-staged
	2. 多人写作避免代码冲突，渐进式lint代码
	3. 如果想要启用官方推荐的standard 可在.eslintrc.js中开启

**0.2.2**

    开启可配置dns预解析

**0.2.3**

    开启动态链接库dll并自动插入到模板中新增插件 DllPlugin,DllReferencePlugin,html-webpack-include-assets-plugin,cross-env
动态链接库修改在config/dll.lib.dependencies.js 默认只用了vue，vue-router

**0.3.0**

    实战之后的优化以及埋坑

    1. css打包大小优化
    2. 常用css方案(渐变兼容IE9 一像素边框 二倍图三倍图 iphoneX适配 等)
    3. axios配置优化
    4. 增加常见组件库 插件库 工具库
ps: 非常棒的preload prefetch and prepack 相关插件不支持webpack3.X   sad💔...

**0.3.3**

    1. 增加测试环境：开发环境接口 -> **mock**,测试环境走 ->**proxy**,生产环境直接打包线上全路径
    2. 增加eventBus事件总线，挂载vue 全局调用
    3. 修改loading插件样式
    4. 请求增加超时提示，超时时间为10s
    5. vw布局插件升级，支持排除node_momdules插件包,rem布局暂不支持可换插件postcss-px2rem-exclude  or px2rem-exclude

> 初始化项目

<img src="https://github.com/501981732/generator-easy-vue/blob/master/screenshots/a.gif?raw=true" />

> 初始化骨架屏

<img src="https://github.com/501981732/generator-easy-vue/blob/master/screenshots/a3.gif?raw=true" />

> 自动生成页面

<img src="https://github.com/501981732/generator-easy-vue/blob/master/screenshots/a4.gif?raw=true" />

> 骨架屏效果

<img src="https://github.com/501981732/generator-easy-vue/blob/master/screenshots/a5.gif?raw=true" />

## Installation

```bash
npm install -g yo
npm install -g generator-easy-vue
```

Then generate your new project:

```base
yo easy-vue   一键生成可配置项目
# install dependencies
npm install or yarn install

# 生成骨架屏（仅需要运行一次！）
npm run skeleton

# 生成开发环境下dll
npm run dll:dev

# 生成生产环境下dll
npm run dll:build

# eslint 代码检测
npm run eslint

# eslint 代码修复
npm run eslint:fix

# 代码格式化 (多人协作不建议使用，git commit 自动美化 eslint:fix自己修改部分的代码)
npm run prettier

#生成代码文档（jsdoc格式注释代码）
npm run jsdoc

# serve with hot reload at localhost:8080(自动 dll开发环境代码，并insert到html模板)
npm run dev or npm run start

#  rebuild钩子生成盛传环境dll 并eslint 代码
npm run prebuild

# build for production with minification(自动 dll生成环境代码，并insert到html模板已配置好publicPath)
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#配置 publicPath imagePublicPath 或修改 config/index.js
yo easy-vue:imagePublicPath path...
yo easy-vue:publicPath path...

# 一键生成页面
yo easy-vue:page pageName  一键生成page
yo easy-vue:mpage pageName  一键生成mutil-page(if you choose MPA)
```


## 项目相关依赖

> dependencies

```
fastclick
amfe-flexible
axios
vuex
vue
vue-router
```
> devDependencies

```
less
less-loader
node-sass
sass-loader
postcss-pxtorem
image-webpack-plugin
vue-server-renderer
vue-skeleton-webpack-plugin
postcss-aspect-ratio-mini
postcss-px-to-viewport
postcss-write-svg
postcss-cssnext
style-resources-loader
postcss-viewport-units 已弃用
style
cssnano
cssnano-preset-advanced
babel-eslint eslint eslint-config-standard eslint-friendly-formatter eslint-loader eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue
lint-staged
husky
prettier
jsdoc
jsdoc-vue
DllPlugin
DllReferencePlugin
html-webpack-include-assets-plugin
cross-env
....
```


## 目录结构

```
.
├── build                                       // 启动文件
│   ├── build
│   ├── check-versions.js
│   ├── logo.png
│   ├── commit-css-webpack-plugin.js             //骨架屏相关插件
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   ├── webpack.test.conf.js
│   ├── webpack.dll.conf.js                      //dll动态连接库
│   ├── webpack.skeleton.conf.js                 //生成骨架屏
├── config                                       // 项目环境配置
│   ├── index.js                                 // 入口
│   ├── dll.libs.dependencies.js                 // dll所需库配置
│   ├── dev.env.js                               // 开发环境配置
│   ├── prod.env.js                              // 生成环境配置
│   ├── test.env.js                              // 测试环境配置
├── dist                                         // 上线打包
│   ├── modules                                  // 多页面
│   ├── static
│   │   ├── css
│   │   ├── js
│   │   └── libs                                 //动态链接库文件
├── jsdoc                                        // jsdoc 注释自动生成文档
├── src                                          // 源码目录
│   ├── assets
│   ├── components
│   ├── config
│   │   ├── apis.js                              //封装接口
│   │   ├── axiosConfig.js                       //配置axios
│   │   ├── env.js                               //根据环境配置 切换接口baseURL && history模式路由配置
│   ├── mixins
│   ├── modules                                  //多页面
│   ├── pages
│   ├── plugin                                   //手写vue插件
│   ├── filters                                  //过滤器
│   ├── direction                                //directions
│   ├── router
│   ├── store                                    // 初始化vuex
│   ├── eventBus                                 // 事件总线
│   ├── utils
│   ├── APP.vue
│   ├── mian.js
│   ├── skeleton.entry.js                          //骨架屏配置
├── static
├── .babelrc
├── .editorconfig
├── eslintrc.js
├── .eslintignore
├── .gitignore
├── postcssrc.js
├── index.html
├── jsdoc.cong.json                               //jsdoc配置文件
├── .index
├── package.json
├── package-lock.json
└── README.md
```


## vue项目生成器

> 地址[项目生成器](https://github.com/501981732/generator-easy-vue)



## License

MIT © [wangmeng](https://github.com/501981732)


[npm-image]: https://badge.fury.io/js/generator-easy-vue.svg
[npm-url]: https://npmjs.org/package/generator-easy-vue
[travis-image]: https://travis-ci.org/501981732/generator-easy-vue.svg?branch=master
[travis-url]: https://travis-ci.org/501981732/generator-easy-vue
[daviddm-image]: https://david-dm.org/501981732/generator-easy-vue.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/501981732/generator-easy-vue
[coveralls-image]: https://coveralls.io/repos/501981732/generator-easy-vue/badge.svg
[coveralls-url]: https://coveralls.io/r/501981732/generator-easy-vue
