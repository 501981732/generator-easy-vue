/**
 *  @file Confirm 插件
 * @example
 *   this.$x.confirm({
 *      title:'提示1',
 *       body: '1',
 *       cancleText: '取消',
 *       confirmText: '确定',
 *       btnReverse: false, //按钮是否反正
 *       useHTMLString: 'false' //是否使用动态HTML插入
 *   }).then(res => {
 *       console.log(res)     //根据res判断是取消还是确定
 *   })
 */
import Vue from 'vue'
import Confirm from '@/components/Confirm.vue'

const defaultProps = {

}

const plugin = {
    install(vue, props = {}) {
        const ConfirmPlugin = vue.extend(Confirm)
        let $vm = new ConfirmPlugin({
            el: document.createElement('div')
        })
        document.body.appendChild($vm.$el)

        function confirm(options) {
            if ($vm.show) return

            if (typeof options === 'string') {
                options = {
                    body: arguments[0]
                }
            }

            $vm = Object.assign($vm, defaultProps, props, options)

            $vm.show = true

            return new Promise((resolve, reject) => {
                $vm.$on('confirm',_ => {
                    resolve(true)
                })

                $vm.$on('cancle', _ => {
                    resolve(false)
                })

            })
        }

        if( !vue.$x) {
            vue.$x = {
                confirm
            }
        } else {
            vue.$x.confirm = confirm
        }
        vue.mixin({
            created: _ => {
                this.$x = vue.$x
            }
        })
    }
}
export default plugin
