/**
 *  @file loading 插件
 * @example
 * this.$x.loading.show('1')
 * this.$x.loading.show()
 * this.$x.loading.hide()
 */
import Vue from "vue";
import LoadingComponent from "@/components/Loading.vue";
// const plagin = {
//     install(Vue, options) {
//         Vue.component(loading.name, loading) //  组件的name属性
//         // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
//         // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
//         // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
//     }
// }
// export default plagin // 导出..

export default {
    install(Vue, props) {
        const LoadingPlugin = Vue.extend(LoadingComponent);

        let $vm = new LoadingPlugin({
            el: document.createElement("div")
        });

        document.body.appendChild($vm.$el);

        // $vm.show = false;
        let loading = {
            show(text) {
                $vm.value = true;

                text && ($vm.text = text);
            },
            hide() {
                $vm.value = false;
            }
        };
        // const loading = {
        //     show() {
        //         if ($vm.show) return;
        //         $vm.value = true;
        //     },
        //     hide() {
        //         $vm.value = false;
        //     }
        // };
        if (!Vue.$x) {
            Vue.$x = {
                loading
            };
        } else {
            Vue.$x.loading = loading;
        }
        // if (!Vue.$loading) {
        //     Vue.$loading = loading;
        // }
        // Vue.prototype.$loading = Vue.$loading;
        Vue.mixin({
            created() {
                this.$x = Vue.$x;
            }
        });
    }
};
