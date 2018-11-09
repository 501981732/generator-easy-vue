// https://github.com/michael-ciniawsky/postcss-load-config

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



