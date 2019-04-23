## Changelog

#### todo

- 非常棒的preload prefetch and prepack 相关插件不支持webpack3.X

#### 0.3.9

- 路由动画

#### 0.3.3

- 增加测试环境：开发环境接口 -> **mock**,测试环境走 ->**proxy**,生产环境直接打包线上全路径
- 增加eventBus事件总线，挂载vue 全局调用
- 修改loading插件样式
- 请求增加超时提示，超时时间为10s
- vw布局插件升级postcss-px-to-viewport，支持排除node_momdules插件包,rem布局暂不支持可换插件postcss-px2rem-exclude  or px2rem-exclude

#### 0.3.0

- 按需加载打包 chunkname
- axios 优化挂载方式
- less 变量 mixins全局引入，优化app.css体积 style-resources-loader
- 增加常用css方案 渐变兼容IE9 一像素边框 二倍图三倍图 iphoneX适配 等
- 增加常用组件库 插件库 toast comfirm alert loading等
- 增加常用工具库
- vw布局优化  去掉postcss-viewport-units 和viewport-units-buggyfill 给vw、vh、vmin和vmax做适配的操作。
- 填补cssnano 自动计算z-index的坑
- 优化css打包过大问题 优化css结构 全局引入less变量 mixins等  **style-resources-loader**
    ```
    vars.less      //style-resources-loader 可在build/utils.js修改路径
    mixins.less    //style-resources-loader
    common.css     //index中import引入
    animation.css  //index中import引入
    reset.css      //index中import引入
    ```
#### 0.2.4

- 开启动态链接库dll并自动插入到模板中新增插件
- DllPlugin,DllReferencePlugin,html-webpack-include-assets-plugin,cross-env
- 动态链接库修改在config/dll.lib.dependencies.js 默认只用了vue，vue-router
#### 0.2.2

- 0.2.2 开启可配置dns预解析

#### 0.2.1

- 增加代码检测工作流
- prettier统一代码格式
- precommit自动美化格式以及修复代码
- lint-staged 多人写作避免代码冲突，渐进式lint代码
- 如果想要启用官方推荐的standard 可在.eslintrc.js中开启


#### 0.2.0

- 增加jsdoc配置 自动生成说明文档
- 增加对.vue文件的文档解析 jsdoc jsdoc-vue

#### 0.1.8

- 增加一键生成多页面应用

#### 0.1.4

- 增加多页面配置


