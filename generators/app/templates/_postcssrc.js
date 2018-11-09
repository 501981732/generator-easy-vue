// https://github.com/michael-ciniawsky/postcss-load-config
<%if(layout === 'rem') {%>
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // css后处理器
    "autoprefixer": {}
  },
  // rem自动转换插件
    "postcss-pxtorem": {
		rootValue: 75,
		unitPrecision: 5,
		propList: ['*'],
		selectorBlackList: [],
		replace: true,
		mediaQuery: false,
		minPixelValue: 12
	}
}
<% }%><%if(layout === 'vw') {%>
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},  // 处理元素容器宽高比
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {}, 
        "postcss-px-to-viewport": {   
            viewportWidth: 750, //视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false // 允许在媒体查询中转换`px`
        },
      "postcss-viewport-units":{},  //给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作。
      "cssnano": {  //压缩和清理CSS代码 cssnano和css-loader捆绑在一起，所以不需要自己加载它
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}
<% }%>
