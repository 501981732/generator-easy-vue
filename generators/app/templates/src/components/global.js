
/**
 * 自动注入组件
 * require.context()
 * useage: import './components/global.js'
 * 引入组件时不再需要 import xx from 'xx'  components:{xx}
 */

import Vue from 'vue'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
  '.', true, /.vue$/
   //找到components文件夹下以.vue命名的文件

)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = capitalizeFirstLetter(
        fileName.replace( /(.*)(\/)/, '').replace(/.\w+$/, '')
        //因为得到的filename格式是: './xxx.vue' './xxx/xxx.vue', 所以这里我们去掉头和尾，只保留真正的文件名
    )

  Vue.component(componentName, componentConfig.default || componentConfig)

})