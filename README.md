# generator-easy-koa [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> a generator for a koa

## 
> 此项目为开箱即用的vue项目生成器

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
yo easy-vue:page pageName  一键生成page
yo easy-vue:imagePublicPath path...  上线前配置imagePublicPath
yo easy-vue:publicPath path...  上线前配置assentPublicPath
npm run prestart                预渲染骨架屏(only once)
```

## skeleton
```
npm run prestart       to build a template if you need a skeleton ()
npm run dev
npm run build
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
postcss-viewport-units 
cssnano 
cssnano-preset-advanced
....
```




## vue项目生成器

> 地址[项目生成器](https://github.com/501981732/generator-easy-vue)



## License

MIT © [wangmeng](https://github.com/501981732)


[npm-image]: https://badge.fury.io/js/generator-easy-koa.svg
[npm-url]: https://npmjs.org/package/generator-easy-koa
[travis-image]: https://travis-ci.org/501981732/generator-easy-koa.svg?branch=master
[travis-url]: https://travis-ci.org/501981732/generator-easy-koa
[daviddm-image]: https://david-dm.org/501981732/generator-easy-koa.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/501981732/generator-easy-koa
[coveralls-image]: https://coveralls.io/repos/501981732/generator-easy-koa/badge.svg
[coveralls-url]: https://coveralls.io/r/501981732/generator-easy-koa
